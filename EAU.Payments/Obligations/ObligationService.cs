using CNSys;
using CNSys.Data;
using EAU.Payments.Obligations.Models;
using EAU.Payments.Obligations.Repositories;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EAU.Payments.Obligations
{
    /// <summary>
    /// Реализация на интерфейс за работа със задължения.
    /// </summary>
    public class ObligationService : IObligationService
    {
        private readonly IObligationChannelProvider _provider;
        private readonly IObligationRepository _obligationRepository;

        public ObligationService(IObligationChannelProvider provider, IObligationRepository obligationRepository, ILogger<ObligationService> logger)
        {
            _provider = provider;
            _obligationRepository = obligationRepository;
        }

        public async Task<OperationResult<Obligation>> CreateAsync(ObligationRequest obligationRequest, CancellationToken cancellationToken)
        {
            //проверка да не позволява повече от едно неизтекло задължение.
            var existingObligation = (await _obligationRepository.SearchAsync(PagedDataState.CreateMaxPagedDataState(),
                new ObligationRepositorySearchCriteria()
                {
                    ApplicantID = obligationRequest.ApplicantID,
                    IsApplicantAnonimous = obligationRequest.ApplicantID == null,
                    ObligationIdentifiersSearchCriteria = new List<ObligationIdentifiersSearchCriteria>(){ 
                        new ObligationIdentifiersSearchCriteria()
                        {
                            ObligationIdentifier = obligationRequest.ObligationIdentifier,
                            ObligationDate = obligationRequest.ObligationDate
                        }},
                    IsActive = true,
                    Type = obligationRequest.Type
                }, cancellationToken)).SingleOrDefault();

            //За един акт/услуга може да има само един неизтекъл запис.
            if (existingObligation != null)
            {
                return new OperationResult<Obligation>(OperationResultTypes.SuccessfullyCompleted)
                {
                    Result = existingObligation
                };
            }
            else
            {
                var obligationChannelService = _provider.GetObligationChannelService(obligationRequest.Type.Value);

                //Изчитане на услуги от външна система (АНД / Услуги)
                var outerObligationRes = (await obligationChannelService.SearchAsync(new ObligationChannelSearchCriteria()
                {
                    ObligationIdentifier = obligationRequest.ObligationIdentifier
                },
                cancellationToken));

                if (!outerObligationRes.IsSuccessfullyCompleted)
                {
                    return new OperationResult<Obligation>(outerObligationRes.Errors);
                }

                var outerObligation = outerObligationRes.Result.Where(t => string.Compare(t.ObligationIdentifier, obligationRequest.ObligationIdentifier) == 0).SingleOrDefault();

                if (outerObligation != null)
                {
                    outerObligation.Status = ObligationStatuses.InProcess;
                    outerObligation.ApplicantID = obligationRequest.ApplicantID;
                    outerObligation.ObligedPersonIdent = obligationRequest.ObligedPersonIdent;
                    outerObligation.ObligedPersonIdentType = obligationRequest.ObligedPersonIdentType;
                    outerObligation.ObligedPersonName = obligationRequest.ObligedPersonName;

                    await _obligationRepository.CreateAsync(outerObligation, cancellationToken);

                    return new OperationResult<Obligation>(OperationResultTypes.SuccessfullyCompleted) { Result = outerObligation };
                }
                else
                {
                    return new OperationResult<Obligation>("GL_NO_OBLIGATION_E", "GL_NO_OBLIGATION_E"); //Задължението не съществува
                }
            }
        }

        public async Task ProcessObligation(long obligationID, long paymentRequestID, CancellationToken cancellationToken)
        {
            var obligation = (await _obligationRepository.SearchAsync(new ObligationRepositorySearchCriteria()
            {
                ObligationIDs = new List<long>() { obligationID },
                LoadOption = new ObligationLoadOption()
                {
                    LoadPaymentRequests = true
                }
            })).Single();

            var oblChannelService = _provider.GetObligationChannelService(obligation.Type.Value);
            if (obligation.Status == ObligationStatuses.Paid)
            {
                var result = await oblChannelService.ProcessObligation(obligation, paymentRequestID, cancellationToken);
                if (result.IsSuccessfullyCompleted)
                {
                    obligation.Status = ObligationStatuses.Processed;
                    await _obligationRepository.UpdateAsync(obligation);
                }
                else
                {
                    throw new NotSupportedException($"Unable to ProcessObligation: obligationID: {obligationID}; paymentRequestID: {paymentRequestID}; Errors: {string.Join(";", result.Errors)};");
                }
            }
            else if (obligation.Status == ObligationStatuses.Processed)
            {

            }
            else
            {
                throw new NotSupportedException("Unable to ProcessObligation");
            }
        }

        public async Task<OperationResult<List<Obligation>>> SearchAsync(PagedDataState state, ObligationSearchCriteria criteria, CancellationToken cancellationToken)
        {
            List<Obligation> result = new List<Obligation>();

            if (criteria.Mode == ObligationSearchModes.MyPayments)
            {
                //Моите плащания.
                ObligationRepositorySearchCriteria inerCriteria = new ObligationRepositorySearchCriteria()
                {
                    Statuses = new List<ObligationStatuses>() { ObligationStatuses.Paid, ObligationStatuses.Processed },
                    ApplicantID = criteria.ApplicantID,
                    ServiceInsanceID = criteria.ServiceInstanceID,
                    LoadOption = new ObligationLoadOption()
                    {
                        LoadPaymentRequests = true
                    }
                };
                var createdObligations = await _obligationRepository.SearchAsync(state, inerCriteria, cancellationToken);
                result.AddRange(createdObligations);
            }
            else if (criteria.Mode == ObligationSearchModes.AND
                || criteria.Mode == ObligationSearchModes.ServiceInstances)
            {
                //АНД/Инстанции на услуги плащания
                ObligationChannelSearchCriteria channelCriteria = new ObligationChannelSearchCriteria()
                {
                    DocumentType = criteria.DocumentType,
                    DocumentSeries = criteria.DocumentSeries,
                    DocumentNumber = criteria.DocumentNumber,
                    Amount = criteria.Amount,
                    ObligedPersonIdent = criteria.ObligedPersonIdent,
                    DrivingLicenceNumber = criteria.DrivingLicenceNumber,
                    ServiceInstanceID = criteria.ServiceInstanceID,
                    PaymentInstructionURI = criteria.PaymentInstructionURI
                };
                var obligationChannelService = _provider.GetObligationChannelService(criteria.Type.Value);

                //Изчитане на услуги от външна система (АНД / Услуги)
                var outerObligationsRes = await obligationChannelService.SearchAsync(channelCriteria, cancellationToken);

                if (!outerObligationsRes.IsSuccessfullyCompleted)
                {
                    return new OperationResult<List<Obligation>>(outerObligationsRes.Errors);
                }

                var outerObligations = outerObligationsRes.Result;
                List<Obligation> createdObligations = null;
                if (outerObligations != null && outerObligations.Any())
                {
                    var repositoryCriteria = new ObligationRepositorySearchCriteria()
                    {
                        ApplicantID = criteria.ApplicantID,
                        IsApplicantAnonimous = criteria.ApplicantID == null,
                        ObligationIdentifiersSearchCriteria = outerObligations.Select(t =>
                                new ObligationIdentifiersSearchCriteria()
                                {
                                    ObligationIdentifier = t.ObligationIdentifier,
                                    ObligationDate = t.ObligationDate
                                }).ToList(),
                        Type = criteria.Type,
                        IsActive = true,
                        LoadOption = new ObligationLoadOption()
                        {
                            LoadPaymentRequests = true
                        }
                    };

                    //Изчитане на вече създадени задължения
                    createdObligations = (await _obligationRepository.SearchAsync(repositoryCriteria, cancellationToken))?.ToList();
                }
                //Ако има създадени задължения изчитаме създадени заявки за плащане.
                if (createdObligations != null && createdObligations.Any())
                {
                    var newObligations = outerObligations.Where(obl => !createdObligations.Any(cOlb => cOlb.ObligationIdentifier == obl.ObligationIdentifier));

                    result.AddRange(createdObligations);
                    result.AddRange(newObligations);
                }
                else
                {
                    result = outerObligations;
                }
            }
            else
            {
                throw new NotSupportedException("Invalid input mode");
            }

            return new OperationResult<List<Obligation>>(OperationResultTypes.SuccessfullyCompleted) { Result = result };
        }
    }
}
