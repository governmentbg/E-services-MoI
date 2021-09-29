using CNSys;
using EAU.ServiceLimits.AspNetCore.Mvc;
using EAU.Web.Mvc;
using EAU.Web.Portal.App.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WAIS.Integration.MOI.BDS.NRBLD;
using WAIS.Integration.MOI.BDS.NRBLD.Models;
using WAIS.Integration.MOI.KAT.SPRKRTCO;
using WAIS.Integration.MOI.KAT.SPRKRTCO.Models;

namespace EAU.Web.Portal.App.Controllers
{
    //TODO_	MVREAU2020-756

    /// <summary>
    /// Контролер за работа с услуги на МВР
    /// </summary>   
    [Authorize]
    [Route("Api/MOI")]
    [Produces("application/json")]
    public class MOIController : BaseApiController
    {
        private readonly INRBLDServicesClientFactory _nRBLDServicesClientFactory;
        private readonly IAuthorizationService _authorizationService;
        private readonly ISPRKRTCOServiceClientFactory miSPRKRTCOServiceClientFactory;

        public MOIController(INRBLDServicesClientFactory iNRBLDServicesClientFactory, IAuthorizationService authorizationService, ISPRKRTCOServiceClientFactory sPRKRTCOServiceClientFactory)
        {
            _nRBLDServicesClientFactory = iNRBLDServicesClientFactory;
            _authorizationService = authorizationService;
            miSPRKRTCOServiceClientFactory = sPRKRTCOServiceClientFactory;
        }

        [ServiceLimiter(ServiceCode = "NAIF_NRBLD_LIMIT")]
        [Route("NRBLD/PersonsInfo/{pid}")]
        [HttpGet]
        [ProducesResponseType(typeof(PersonInfo), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetPersonsInfo([FromRoute] string pid, CancellationToken cancellationToken)
        {
            var authorizationResult = await _authorizationService.AuthorizeAsync(User, pid, Code.Authorization.PolicyNames.PersonIdentifierDataPolicyName);
            if (!authorizationResult.Succeeded) return new ForbidResult();

            var result = await _nRBLDServicesClientFactory.GetNRBLDServicesClient().GetPersonInfoAsync(pid, false, cancellationToken);

            if (result.IsSuccessfullyCompleted && result.Response.PersonData != null && result.Response.PersonData.PersonIdentification != null)
            {
                var personInfo = new PersonInfo();

                if (result.Response.PersonData.PersonIdentification.PersonIdentificationBG != null)
                {
                    var bgCitizen = result.Response.PersonData.PersonIdentification.PersonIdentificationBG;
                    personInfo.PIN = bgCitizen.PIN;

                    MapPersonDataCyrilicLatinNames(personInfo, bgCitizen.Names);
                }
                else if (result.Response.PersonData.PersonIdentification.PersonIdentificationF != null)
                {
                    var foreigner = result.Response.PersonData.PersonIdentification.PersonIdentificationF;
                    personInfo.PIN = foreigner.PIN;

                    MapPersonDataCyrilicLatinNames(personInfo, foreigner.Names);
                }

                return Ok(personInfo);
            }

            var errors = new ErrorCollection();
            errors.AddRange(result.Errors?.Select(e => (IError)(new TextError(e.Code, e.Message))));

            return OperationResult(new CNSys.OperationResult(errors));
        }

        [Route("SPRKRTCO/FreeFourDigitsRegNumbers")]
        [HttpGet]
        [ProducesResponseType(typeof(FourDigitSearchResultVM), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetFreeFourDigitsRegNumbers([FromQuery] FourDigitSearchCriteriaVM criteria, CancellationToken cancellationToken)
        {
            var domCriteria = Mapper.Map<FourDigitSearchCriteria>(criteria);
            var res = await miSPRKRTCOServiceClientFactory.GetISPRKRTCOServiceClient().FourDigitStatusCheckAsync(domCriteria, cancellationToken);

            if (res.IsSuccessfullyCompleted)
            {
                var resUI = new FourDigitSearchResultVM()
                { 
                    ExceedResultLimiteWarnning = res.Errors != null && res.Errors.Count == 1 ? res.Errors[0].Message : null,
                    Result = res.Response
                };

                return Ok(resUI);
            }
            else
            {
                return BadRequest(res.Errors[0].Code, res.Errors[0].Message);
            }
        }

        [Route("SPRKRTCO/FreeSpecialNumbers")]
        [HttpGet]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetFreeSpecialNumbers([FromQuery] SpecialNumberSearchCriteria criteria, CancellationToken cancellationToken)
        {
            var res = await miSPRKRTCOServiceClientFactory.GetISPRKRTCOServiceClient().SpecialNumberStatusCheckAsync(criteria, cancellationToken);

            if (res.IsSuccessfullyCompleted)
                return Ok(res.Response);
            else
                return BadRequest(res.Errors[0].Code, res.Errors[0].Message);
        }

        #region Helpers

        private void MapPersonDataCyrilicLatinNames(PersonInfo personInfo, NamesType names)
        {
            personInfo.FirstName = new CyrilicLatinName
            {
                Cyrillic = names?.FirstName.Cyrillic,
                Latin = names?.FirstName.Latin
            };
            personInfo.Surname = new CyrilicLatinName
            {
                Cyrillic = names?.Surname?.Cyrillic,
                Latin = names?.Surname?.Latin
            };

            personInfo.Family = new CyrilicLatinName
            {
                Cyrillic = names?.Family.Cyrillic,
                Latin = names?.Family.Latin
            };
        }

        #endregion
    }
}