using CNSys;
using EAU.Common;
using EAU.Nomenclatures;
using EAU.Payments.Obligations.Models;
using EAU.Security;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WAIS.Integration.Models;
using WAIS.Integration.MOI.BDS.NRBLD;
using WAIS.Integration.MOI.BDS.NRBLD.Models;
using WAIS.Integration.MOI.KAT.AND;
using WAIS.Integration.MOI.KAT.AND.Models;

namespace EAU.Payments.Obligations.AND
{
    public class AndObligationChannelService : IObligationChannelService
    {
        private readonly IEAUUserAccessor _eAUUserAccessor;
        private readonly IOptionsMonitor<GlobalOptions> _optionsMonitor;
        private readonly IServices _services;
        private readonly IServiceProvider _serviceProvider;
        private readonly INRBLDServicesClientFactory _nRBLDServicesClientFactory;
        private readonly IANDServicesClientFactory _iANDServicesClientFactory;

        private readonly char _identifierSeparator = '|';

        public AndObligationChannelService(IEAUUserAccessor eAUUserAccessor,
            IOptionsMonitor<GlobalOptions> optionsMonitor,
            IServices services,
            INRBLDServicesClientFactory iNRBLDServicesClientFactory,
            IANDServicesClientFactory iANDServicesClientFactory,
            IServiceProvider serviceProvider)
        {
            _eAUUserAccessor = eAUUserAccessor;
            _optionsMonitor = optionsMonitor;
            _services = services;
            _nRBLDServicesClientFactory = iNRBLDServicesClientFactory;
            _iANDServicesClientFactory = iANDServicesClientFactory;

            _serviceProvider = serviceProvider;
        }

        public async Task<OperationResult> ProcessObligation(Obligation obligation, long activePaymentRequestID, CancellationToken cancellationToken)
        {
            var paymentRequest = obligation.PaymentRequests.Single(t => t.PaymentRequestID == activePaymentRequestID);

            var transactionNum = paymentRequest.AdditionalData.ContainsKey("transactionNumber") ? paymentRequest.AdditionalData["transactionNumber"] : null;
            if (string.IsNullOrEmpty(transactionNum) && paymentRequest.ExternalPortalPaymentNumber != null)
            {
                transactionNum = paymentRequest.ExternalPortalPaymentNumber.ToString();
            }

            var andResponse = await _iANDServicesClientFactory.GetANDServicesClient().SendPaymentNotificationAsync(new PaymentNotificationRequest()
            {
                documentNumber = obligation.AdditionalData.ContainsKey("documentNumber") ? obligation.AdditionalData["documentNumber"] : null,
                documentSeries = obligation.AdditionalData.ContainsKey("documentSeries") ? obligation.AdditionalData["documentSeries"] : null,
                documentType = obligation.AdditionalData.ContainsKey("documentType") ? obligation.AdditionalData["documentType"] : null,
                paymentAmount = (double)obligation.DiscountAmount,
                paymentDate = paymentRequest.PayDate?.ToString("yyyy-MM-dd HH:mm:ss"),
                transactionNumber = transactionNum,
                username = obligation.ObligedPersonName
            }, cancellationToken);

            if (!andResponse.IsSuccessfullyCompleted)
            {
                return new OperationResult<List<Obligation>>(ExtractErrors(andResponse));
            }

            return new OperationResult(OperationResultTypes.SuccessfullyCompleted);
        }

        public async Task<OperationResult<List<Obligation>>> SearchAsync(ObligationChannelSearchCriteria criteria, CancellationToken cancellationToken)
        {
            var result = new List<Obligation>();
            if (!string.IsNullOrEmpty(criteria.ObligedPersonIdent)
                && !string.IsNullOrEmpty(criteria.DrivingLicenceNumber))
            {
                return await GetObligationDocumentsByLicenceNumAsync(criteria.ObligedPersonIdent, criteria.DrivingLicenceNumber, cancellationToken);
            }
            else if (criteria.DocumentType.HasValue
                && !string.IsNullOrEmpty(criteria.DocumentNumber)
                && criteria.Amount.HasValue)
            {
                return await GetObligationDocumentsAsync(ConvertDocTypesValueToString(criteria.DocumentType.Value), criteria.DocumentSeries, criteria.DocumentNumber, (double)criteria.Amount, cancellationToken);
            }
            else if (!string.IsNullOrEmpty(criteria.ObligationIdentifier))
            {
                string[] oblIdentifiers = criteria.ObligationIdentifier.Split(_identifierSeparator);
                return await GetObligationDocumentsAsync(oblIdentifiers[0], oblIdentifiers[1], oblIdentifiers[2], (double)(Decimal.Parse(oblIdentifiers[3])), cancellationToken);
            }

            return new OperationResult<List<Obligation>>(OperationResultTypes.SuccessfullyCompleted) { Result = result };
        }

        #region Helpers

        private List<Obligation> MapAndObligation(ObligationDocument[] oblDocuments, string customerType, string userPid, int? applicantID)
        {
            var service = _services.Search().Single(s => string.Compare(s.SunauServiceUri, _optionsMonitor.CurrentValue.AND_SERVICE_SUNAU_ID) == 0);
            return oblDocuments.Select(t =>
            {
                var addData = new Utilities.AdditionalData();
                if (t.isServed.HasValue)
                    addData["isServed"] = t.isServed.ToString();

                addData["discount"] = t.discount.ToString();
                addData["isMainDocument"] = t.isMainDocument.ToString();
                addData["documentType"] = t.documentType;
                addData["documentSeries"] = t.documentSeries;
                addData["documentNumber"] = t.documentNumber;
                addData["amount"] = t.initialAmount.ToString();

                addData["fishCreateDate"] = t.createDate;
                if (t.isMainDocument)
                {
                    addData["obigedPersonIdent"] = userPid;
                    addData["obigedPersonIdentType"] = customerType;
                }

                return new Obligation()
                {
                    PepCin = _optionsMonitor.CurrentValue.GL_AND_PEP_CIN,
                    DiscountAmount = (decimal?)t.totalAmount,
                    Amount = (decimal?)t.initialAmount,
                    Iban = t.iban,
                    Bic = t.bic,
                    PaymentReason = t.paymentReason,
                    ObligationDate = DateTime.Now.TrimDateTimeToDate(),
                    Type = ObligationTypes.AND,
                    Status = ObligationStatuses.Pending,
                    ExpirationDate = DateTime.Now.RoundToEndOfDay(),
                    ServiceID = service.ServiceID,
                    ApplicantID = applicantID,

                    ObligationIdentifier = $"{t.documentType}{_identifierSeparator}{t.documentSeries}{_identifierSeparator}{t.documentNumber}{_identifierSeparator}{t.initialAmount}",
                    AdditionalData = addData
                };
            }).ToList();
        }

        private void SetObligedPerson(List<Obligation> obligations, PersonData personData)
        {
            foreach (var andObligation in obligations)
            {
                string firstName = null;
                string secondName = null;
                string thirdName = null;
                string egn = null;
                string lnch = null;

                if (personData?.PersonIdentification?.PersonIdentificationBG != null)
                {
                    firstName = personData.PersonIdentification.PersonIdentificationBG.Names?.FirstName?.Cyrillic;
                    secondName = personData.PersonIdentification.PersonIdentificationBG.Names?.Surname?.Cyrillic;
                    thirdName = personData.PersonIdentification.PersonIdentificationBG.Names?.Family?.Cyrillic;
                    egn = personData.PersonIdentification.PersonIdentificationBG.PIN;
                }
                else if (personData?.PersonIdentification?.PersonIdentificationF != null)
                {
                    firstName = personData.PersonIdentification.PersonIdentificationF.Names?.FirstName?.Cyrillic;
                    secondName = personData.PersonIdentification.PersonIdentificationF.Names?.Surname?.Cyrillic;
                    thirdName = personData.PersonIdentification.PersonIdentificationF.Names?.Family?.Cyrillic;
                    egn = personData.PersonIdentification.PersonIdentificationF.PIN;
                    lnch = personData.PersonIdentification.PersonIdentificationF.LNC;
                }

                andObligation.ObligedPersonName = GetObligedPersonName(firstName, secondName, thirdName);

                if (!string.IsNullOrEmpty(egn))
                {
                    andObligation.ObligedPersonIdent = egn;
                    andObligation.ObligedPersonIdentType = ObligedPersonIdentTypes.EGN;
                }
                else if (!string.IsNullOrEmpty(lnch))
                {
                    andObligation.ObligedPersonIdent = lnch;
                    andObligation.ObligedPersonIdentType = ObligedPersonIdentTypes.LNC;
                }
            }
        }

        private ErrorCollection ExtractErrors(ServiceResult ServiceResult)
        {
            return new ErrorCollection(ServiceResult.Errors.Select(t => new TextError(t.Code, t.Message)));
        }

        private async Task<OperationResult<List<Obligation>>> GetObligationDocumentsAsync(string documentType, string documentSeries, string documentNumber, double initialAmount, CancellationToken cancellationToken)
        {
            var result = new List<Obligation>();

            var andResponse = await _iANDServicesClientFactory.GetANDServicesClient().GetObligationDocumentsAsync(new ObligationDocumentsRequest()
            {
                documentType = documentType,
                documentSeries = documentSeries,
                documentNumber = documentNumber,
                initialAmount = initialAmount
            }, cancellationToken);

            if (!andResponse.IsSuccessfullyCompleted)
            {
                var errorCollection = new ErrorCollection();
                errorCollection.Add(new TextError("GL_UNDELIVERED_AND_UNPAID_DEBTS_E", "GL_UNDELIVERED_AND_UNPAID_DEBTS_E"));
                return new OperationResult<List<Obligation>>(errorCollection);
            }
            else if (andResponse.IsSuccessfullyCompleted && andResponse.Response != null && andResponse.Response.status == 0)
            {
                if (andResponse.Response.allObligations != null && andResponse.Response.allObligations.Any())
                {
                    result = MapAndObligation(andResponse.Response.allObligations, andResponse.Response.customerType, andResponse.Response.userPid, _eAUUserAccessor.User?.LocalClientID);
                }
            }
            else if (andResponse.IsSuccessfullyCompleted && andResponse.Response != null && andResponse.Response.status == 2)
            {
                var errorCollection = new ErrorCollection();
                errorCollection.Add(new TextError("GL_NO_DATA_FOUND_L", "GL_NO_DATA_FOUND_L"));
                return new OperationResult<List<Obligation>>(errorCollection) { OperationResultType = OperationResultTypes.CompletedWithError, Result = result };
            }

            return new OperationResult<List<Obligation>>(OperationResultTypes.SuccessfullyCompleted) { Result = result };
        }

        private async Task<OperationResult<List<Obligation>>> GetObligationDocumentsByLicenceNumAsync(string obligedPersonIdent, string licenceNum, CancellationToken cancellationToken)
        {
            var result = new List<Obligation>();

            try
            {
                var andResponse = await _iANDServicesClientFactory.GetANDServicesClient().GetObligationDocumentsByLicenceNumAsync(new ObligationDocumentsByLicenceNumRequest()
                {
                    egn = obligedPersonIdent,
                    licenceNum = licenceNum
                }, cancellationToken);

                if (!andResponse.IsSuccessfullyCompleted)
                {
                    var errorCollection = new ErrorCollection();
                    errorCollection.Add(new TextError("GL_UNDELIVERED_AND_UNPAID_DEBTS_E", "GL_UNDELIVERED_AND_UNPAID_DEBTS_E"));
                    return new OperationResult<List<Obligation>>(errorCollection);

                }
                else if (andResponse.IsSuccessfullyCompleted && andResponse.Response != null && andResponse.Response.status == 0)
                {
                    if (andResponse.Response.allObligations != null && andResponse.Response.allObligations.Any())
                    {
                        result = MapAndObligation(andResponse.Response.allObligations, andResponse.Response.customerType, andResponse.Response.userPid, _eAUUserAccessor.User?.LocalClientID);

                        var personInfoResult = await _nRBLDServicesClientFactory.GetNRBLDServicesClient().GetPersonInfoAsync(obligedPersonIdent, false, cancellationToken);

                        if (personInfoResult.IsSuccessfullyCompleted
                            && personInfoResult.Response != null
                            && personInfoResult.Response.PersonData != null)
                        {
                            SetObligedPerson(result, personInfoResult.Response.PersonData);
                        }
                        else
                        {
                            var errorCollection = new ErrorCollection();
                            errorCollection.Add(new TextError("GL_UNDELIVERED_AND_UNPAID_DEBTS_E", "GL_UNDELIVERED_AND_UNPAID_DEBTS_E"));
                            return new OperationResult<List<Obligation>>(errorCollection);
                        }
                    }
                }
                else if (andResponse.IsSuccessfullyCompleted && andResponse.Response != null && andResponse.Response.status == 2)
                {
                    var errorCollection = new ErrorCollection();
                    errorCollection.Add(new TextError("GL_00038_E", "GL_00038_E"));
                    return new OperationResult<List<Obligation>>(errorCollection) { OperationResultType = OperationResultTypes.CompletedWithError, Result = result };
                }
            }
            catch (Exception)
            {
                var errorCollection = new ErrorCollection();
                errorCollection.Add(new TextError("GL_UNDELIVERED_AND_UNPAID_DEBTS_E", "GL_UNDELIVERED_AND_UNPAID_DEBTS_E"));
                return new OperationResult<List<Obligation>>(errorCollection);
            }

            return new OperationResult<List<Obligation>>(OperationResultTypes.SuccessfullyCompleted) { Result = result };
        }

        private T GetService<T>()
        {
            return (T)_serviceProvider.GetService(typeof(T));
        }

        private string ConvertDocTypesValueToString(DocTypes docTypes)
        {
            switch (docTypes)
            {
                case DocTypes.Fish:
                    return "TICKET";
                case DocTypes.AUAN:
                    return "ACT";
                case DocTypes.NP:
                    return "PENAL_DECREE";
                default:
                    throw new NotSupportedException();
            }
        }

        private string GetObligedPersonName(string firstName, string secondName, string thirdName)
        {
            var obligedPersonName = "";

            if (!string.IsNullOrEmpty(firstName))
            {
                obligedPersonName += firstName;
            }

            if (!string.IsNullOrEmpty(secondName))
            {
                obligedPersonName += " " + secondName;
            }

            if (!string.IsNullOrEmpty(thirdName))
            {
                obligedPersonName += " " + thirdName;
            }

            if (obligedPersonName.Length > 26)
            {
                obligedPersonName = "";

                if (!string.IsNullOrEmpty(firstName))
                {
                    obligedPersonName += firstName;
                }

                if (!string.IsNullOrEmpty(thirdName))
                {
                    obligedPersonName += " " + thirdName;
                }

            }

            if (obligedPersonName.Length > 26)
            {
                obligedPersonName = obligedPersonName.Substring(0, 26);
            }

            return obligedPersonName;
        }

        #endregion
    }
}