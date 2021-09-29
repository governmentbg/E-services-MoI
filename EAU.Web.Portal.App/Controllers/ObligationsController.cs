using CNSys;
using CNSys.Data;
using EAU.Common;
using EAU.Payments;
using EAU.Payments.Obligations.Models;
using EAU.Payments.PaymentRequests.Models;
using EAU.Payments.RegistrationsData.Models;
using EAU.Security;
using EAU.Web.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using WAIS.Integration.MOI.KAT.AND;

namespace EAU.Web.Portal.App.Controllers
{
    /// <summary>
    /// Контролер реализиращ уеб услуга за работа с моите плащания.
    /// </summary>    
    [Route("Api/Obligations")]
    [Produces("application/json")]
    public class ObligationsController : BaseApiController
    {
        private readonly IObligationService _obligationService;
        private readonly IPaymentRequestService _paymentRequestService;
        private readonly IEAUUserAccessor _eAUUserAccessor;
        private readonly IOptionsMonitor<GlobalOptions> _optionsMonitor;
        private readonly IANDServicesClientFactory _iANDServicesClientFactory;


        public ObligationsController(
            IObligationService obligationService,
            IPaymentRequestService paymentRequestService,
            IEAUUserAccessor eAUUserAccessor,
            IOptionsMonitor<GlobalOptions> optionsMonitor,
            IANDServicesClientFactory iANDServicesClientFactory
            )
        {
            _obligationService = obligationService;
            _paymentRequestService = paymentRequestService;
            _eAUUserAccessor = eAUUserAccessor;
            _optionsMonitor = optionsMonitor;
            _iANDServicesClientFactory = iANDServicesClientFactory;
        }

        /// <summary>
        /// Операция за изчитане на задължения за моите плащания.
        /// </summary>
        /// <param name="criteria">Китерии за търсене.</param>
        /// <param name="cancellationToken">Токен по отказване.</param>
        /// <returns>Задължения.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Obligation>), StatusCodes.Status200OK)]
        [Authorize]
        public async Task<IActionResult> Get([FromQuery] MyPaymentsObligationSearchCriteria criteria, CancellationToken cancellationToken)
        {
            ObligationSearchCriteria serviceCriteria = new ObligationSearchCriteria()
            {
                Mode = ObligationSearchModes.MyPayments,

                ApplicantID = _eAUUserAccessor?.User?.LocalClientID,

                ServiceInstanceID = criteria.ServiceInstanceID
            };

            var state = criteria.ExtractState();
            var result = await _obligationService.SearchAsync(state, serviceCriteria, cancellationToken);

            if (!result.IsSuccessfullyCompleted)
            {
                return OperationResult(result);
            }

            return PagedResult(result.Result, state);
        }

        /// <summary>
        /// Операция за изчитане на задължения към АНД.
        /// </summary>
        /// <param name="criteria">Китерии за търсене.</param>
        /// <param name="cancellationToken">Токен по отказване.</param>
        /// <returns>Задължения.</returns>
        [HttpGet]
        [Route("AND")]
        [ProducesResponseType(typeof(ANDObligationSearchResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAND([FromQuery] ANDObligationSearchCriteria criteria, CancellationToken cancellationToken)
        {
            if (!criteria.Mode.HasValue
                || criteria.Mode == ANDObligationSearchMode.ObligedPerson && (string.IsNullOrEmpty(criteria.ObligedPersonIdent) || string.IsNullOrEmpty(criteria.DrivingLicenceNumber))
                || criteria.Mode == ANDObligationSearchMode.Document && (!criteria.DocumentType.HasValue || string.IsNullOrEmpty(criteria.DocumentNumber) || !criteria.Amount.HasValue)
                )
            {
                return OperationResult(new OperationResult("GL_INVALID_SEARCH_AND_INPUT_PARAMS_E", "GL_INVALID_SEARCH_AND_INPUT_PARAMS_E"));
            }

            if (criteria.DocumentType == DocTypes.Fish)
            {
                string[] possibleFishSeries = _optionsMonitor.CurrentValue.POSSIBLE_KAT_OBLIGATIONS_FISH_SERIES.Split(',');

                if (!possibleFishSeries.Any(t => string.Compare(t, criteria.DocumentSeries) == 0))
                {
                    return OperationResult(new OperationResult("GL_INVALID_FISH_SERIES_E", "GL_INVALID_FISH_SERIES_E"));
                }
            }

            ObligationSearchCriteria serviceCriteria = new ObligationSearchCriteria()
            {
                Mode = ObligationSearchModes.AND,
                ApplicantID = _eAUUserAccessor?.User?.LocalClientID,
                Type = ObligationTypes.AND,
                DocumentType = criteria.DocumentType,
                DocumentSeries = criteria.DocumentSeries,
                DocumentNumber = criteria.DocumentNumber,
                Amount = criteria.Amount,
                ObligedPersonIdent = criteria.ObligedPersonIdent,
                DrivingLicenceNumber = criteria.DrivingLicenceNumber
            };

            var state = PagedDataState.CreateMaxPagedDataState();
            var obligationsResult = await _obligationService.SearchAsync(state, serviceCriteria, cancellationToken);
            var result = new ANDObligationSearchResponse() { Obligations = obligationsResult.Result };

            if (!obligationsResult.IsSuccessfullyCompleted)
            {
                if (obligationsResult.Errors != null && obligationsResult.Errors.Count == 1 )
                {
                    if (obligationsResult.Errors.Where(e => e.Code == "GL_00038_E").Count() > 0)
                        result.ErrorNoDataFound = true;
                }
                return OperationResult(obligationsResult);
            }
            else
            {                
                if (criteria.Mode == ANDObligationSearchMode.ObligedPerson)
                {
                    //Прихващаме евентуален проблем с услугата и връщаме само данните с неплатените задължения.
                    //Ако hasNonHandedSlip = null, приемаме че услугата е дала грешка и нямаме сетната стойност. Показваме подходящо съобщение на потребителя. MVREAU2020-1531
                    try
                    {
                        var hasNonHandedSlipRes = (await _iANDServicesClientFactory.GetANDServicesClient().CheckNonHandedSlipAsync(criteria.ObligedPersonIdent, cancellationToken));

                        if (hasNonHandedSlipRes.IsSuccessfullyCompleted)
                            result.HasNonHandedSlip = hasNonHandedSlipRes.Response;
                    }
                    catch (Exception) 
                    {
                        result.ErrorOnHasNonHandedSlip = true;
                    }
                }

                return PagedResult(result, state);
            }
        }

        /// <summary>
        /// Операция за изчитане на задължения за инстанции на услуги.
        /// </summary>
        /// <param name="criteria">Китерии за търсене.</param>
        /// <param name="cancellationToken">Токен по отказване.</param>
        /// <returns>Задължения.</returns>
        [HttpGet]
        [Route("ServiceInstances")]
        [ProducesResponseType(typeof(IEnumerable<Obligation>), StatusCodes.Status200OK)]
        [Authorize]
        public async Task<IActionResult> GetServiceInstances([FromQuery] SIObligationSearchCriteria criteria, CancellationToken cancellationToken)
        {
            ObligationSearchCriteria serviceCriteria = new ObligationSearchCriteria()
            {
                Mode = ObligationSearchModes.ServiceInstances,
                ApplicantID = _eAUUserAccessor?.User?.LocalClientID,
                Type = ObligationTypes.ServiceInstance,
                ServiceInstanceID = criteria.ServiceInstanceID,
                PaymentInstructionURI = criteria.PaymentInstructionURI
            };

            var state = PagedDataState.CreateMaxPagedDataState();
            var result = await _obligationService.SearchAsync(state, serviceCriteria, cancellationToken);

            if (!result.IsSuccessfullyCompleted)
            {
                return OperationResult(result);
            }

            return PagedResult(result.Result, state);
        }

        /// <summary>
        /// Операция за създаване на задължение.
        /// </summary>
        /// <param name="obligationRequest">Заявка за създаване на задължение.</param>
        /// <param name="cancellationToken">Токен по отказване.</param>
        /// <returns>Създаденото задължение.</returns>
        [HttpPost]
        [ProducesResponseType(typeof(Obligation), StatusCodes.Status200OK)]
        public async Task<IActionResult> Create(ObligationRequest obligationRequest, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrEmpty(obligationRequest.ObligedPersonName) && obligationRequest.ObligedPersonName.Length > 26)
            {
                return OperationResult(new OperationResult("GL_OBLIGED_PERSON_NAME_TOO_LONG_E", "GL_OBLIGED_PERSON_NAME_TOO_LONG_E"));
            }

            obligationRequest.ApplicantID = _eAUUserAccessor?.User?.LocalClientID;

            var result = await _obligationService.CreateAsync(obligationRequest, cancellationToken);
            return OperationResult(result);
        }

        /// <summary>
        /// Операция за започване на плащане.
        /// </summary>
        /// <param name="obligationId">Идентификатор на задължение.</param>
        /// <param name="startPaymentRequest">Заявка за започване на плащане.</param>
        /// <param name="cancellationToken">Създаденото задължение.</param>
        /// <returns>създадената заявка за плащане</returns>
        [Route("{obligationId}/StartPayment")]
        [HttpPost]
        [ProducesResponseType(typeof(PaymentRequest), StatusCodes.Status200OK)]
        public async Task<IActionResult> StartPayment([FromRoute] long obligationId, [FromBody] StartPaymentRequest startPaymentRequest, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrEmpty(startPaymentRequest.ObligedPersonName) && startPaymentRequest.ObligedPersonName.Length > 26)
            {
                return OperationResult(new OperationResult("GL_OBLIGED_PERSON_NAME_TOO_LONG_E", "GL_OBLIGED_PERSON_NAME_TOO_LONG_E"));
            }

            if (!Url.IsLocalUrl(startPaymentRequest.OkCancelUrl))
            {
                return OperationResult(new CNSys.OperationResult("GL_INVALID_OK_CANCEL_URL_E", "GL_INVALID_OK_CANCEL_URL_E"));
            }
            if (startPaymentRequest.RegistrationDataType == RegistrationDataTypes.PepOfDaeu)
            {
                var obj = new { returnURL = startPaymentRequest.OkCancelUrl };
                startPaymentRequest.OkCancelUrl = Url.Link("PEPDeauOkCancelUrl", obj);
            }
            else if (startPaymentRequest.RegistrationDataType == RegistrationDataTypes.ePay)
            {
                UriBuilder uriBuilder = new UriBuilder();
                uriBuilder.Scheme = Request.Scheme;
                uriBuilder.Host = Request.Host.Host;
                if (Request.Host.Port.HasValue)
                {
                    uriBuilder.Port = Request.Host.Port.Value;
                }

                uriBuilder.Path = (Request.PathBase + "/").Replace("//", "/");

                if (!startPaymentRequest.OkCancelUrl.StartsWith("."))
                    startPaymentRequest.OkCancelUrl = "." + startPaymentRequest.OkCancelUrl;

                var resultUri = new Uri(uriBuilder.Uri, startPaymentRequest.OkCancelUrl);
                startPaymentRequest.OkCancelUrl = resultUri.AbsoluteUri;
            }

            var result = await _paymentRequestService.StartPaymentAsync(obligationId, startPaymentRequest, cancellationToken);
            return OperationResult(result);
        }
    }
}
