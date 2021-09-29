using EAU.Security;
using EAU.ServiceLimits.AspNetCore;
using EAU.ServiceLimits.AspNetCore.Mvc;
using EAU.Users;
using EAU.Users.Models;
using EAU.Web.Filters;
using EAU.Web.Mvc;
using EAU.Web.Portal.App.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace EAU.Web.Portal.App.Controllers
{
    [Produces("application/json")]
    public class UsersController : BaseApiController
    {
        #region Fields

        private readonly IUsersService _usersService;

        #endregion

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        /// <summary>
        /// Операция за регистриране на потребител.
        /// </summary>
        /// <param name="model">Входящи данни за регистрация на потребител.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("Register")]
        [ProducesResponseType(typeof(UserRegistrationResult), StatusCodes.Status200OK)]
        [ServiceLimiter(ServiceCode = "PEAU_REGISTRATION_LIMIT")]
        public async Task<IActionResult> Register([FromBody] RegisterInputModel model, CancellationToken cancellationToken)
        {
            if (ModelState.IsValid)
            {
                var result = await _usersService.BeginPublicUserRegistrationAsync(model.Email, model.Password, cancellationToken);

                if (result.Result != null && result.Result.EmailAlreadyExists && result.Result.EmailUserStillNotActivated)
                {
                    return Ok(result.Result);
                }
                else
                {
                    return OperationResult(result);
                }

            }

            return BadRequest();
        }


        /// <summary>
        /// Операция за изпращане на нов линк за активиране на регистрация.
        /// </summary>
        /// <param name="processGuid">Идентификатор на процеса на потребителя</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("RenewUserRegistration")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ServiceLimiter(ServiceCode = "PEAU_REGISTRATION_LIMIT")]
        public async Task<IActionResult> RenewUserRegistration([FromBody] Guid processGuid, CancellationToken cancellationToken)
        {
            if (processGuid != null)
            {
                var result = await _usersService.RenewPublicUserRegistrationAsync(processGuid, cancellationToken);

                return OperationResult(result);

            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за потвърждаване на регистрация на потребител.
        /// </summary>
        /// <param name="processId">Guid на процес за завършване на регистрация</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpGet]
        [Route("CompleteRegistration/{processId}")]
        [ProducesResponseType(typeof(UserConfirmRegistrationResult), StatusCodes.Status200OK)]
        public async Task<IActionResult> CompleteRegistration([FromRoute] Guid processId, CancellationToken cancellationToken)
        {
            if (processId != null)
            {
                var result = await _usersService.CompletePublicUserRegistrationAsync(processId, cancellationToken);

                if (!result.IsSuccessfullyCompleted && result.Errors.HasErrors && result.Errors.Any(x => x.Code == "GL_USR_0004_E"))
                    return Ok(result.Result);
                else
                    return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за отказване на регистрация на потребител.
        /// </summary>
        /// <param name="processId">Guid на процес за отказване на регистрация</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpGet]
        [Route("CancelRegistration/{processId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> CancelRegistration([FromRoute] Guid processId, CancellationToken cancellationToken)
        {
            if (processId != null)
            {
                var result = await _usersService.CancelPublicUserRegistrationAsync(processId, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за получаване на нова парола
        /// </summary>
        /// <param name="email">Адрес на електронна поща на потребител</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("ResetPassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ServiceLimiter(ServiceCode = "PEAU_PASS_LIMIT")]
        public async Task<IActionResult> ResetPassword([FromBody] string email, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrWhiteSpace(email))
            {
                var result = await _usersService.SendForgottenPasswordAsync(email, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("ResendConfirmationEmail")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ResendConfirmationEmail([FromBody] string email, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrWhiteSpace(email))
            {
                var result = await _usersService.ResendConfirmationEmailAsync(email, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за изпращане на нов линк за смяна на забравена парола.
        /// </summary>
        /// <param name="processGuid">Идентификатор на процеса на потребителя</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("RenewResetPassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> RenewResetPassword([FromBody] Guid processGuid, CancellationToken cancellationToken)
        {
            if (processGuid != null)
            {
                var result = await _usersService.RenewForgottenPasswordAsync(processGuid, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }


        /// <summary>
        /// Операция за получаване на нова парола
        /// </summary>
        /// <param name="model">Данни за генериране на нова парола.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [HttpPut]
        [Route("CompleteForgottenPassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> CompleteForgottenPassword([FromBody] CompleteForgottenPasswordModel model, CancellationToken cancellationToken)
        {
            if (model.ProcessId != null && !string.IsNullOrWhiteSpace(model.NewPassword))
            {
                var result = await _usersService.CompleteForgottenPasswordAsync(model.ProcessId, model.NewPassword, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за смяна на потребителска парола.
        /// </summary>
        /// <param name="model">Входящи данни за смяна на потребителска парола.</param>
        /// <param name="userAccessor">Интерфейс за достъп до EAU потребител.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("ChangePassword")]
        [ProducesResponseType(typeof(ChangePasswordInputModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordInputModel model, [FromServices] IEAUUserAccessor userAccessor, CancellationToken cancellationToken)
        {
            if (!string.IsNullOrWhiteSpace(model.Email) && !string.IsNullOrWhiteSpace(model.CurrentPassword) && !string.IsNullOrWhiteSpace(model.Password))
            {
                var result = await _usersService.ChangePasswordAsync(userAccessor.User.CIN, model.Email, model.CurrentPassword, model.Password, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Операция за редактиране на потребителски профил.
        /// </summary>
        /// <param name="email">Електронен адрес на потребителя.</param>
        /// <param name="userAccessor">Интерфейс за достъп до EAU потребител.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("UpdateProfile")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateUserProfile([FromServices] IEAUUserAccessor userAccessor, [FromBody] string email, CancellationToken cancellationToken)
        {
            var userCIN = userAccessor.User.CIN;

            if (!string.IsNullOrWhiteSpace(email) && userCIN.HasValue)
            {
                var result = await _usersService.EditPublicUserAsync(userCIN.Value, email, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Деактивиране на потребителски профил.
        /// </summary>
        /// <param name="userAccessor">Интерфейс за достъп до EAU потребител.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("DeactivateUserProfile")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeactivateUserProfile([FromServices] IEAUUserAccessor userAccessor, CancellationToken cancellationToken)
        {
            var userCIN = userAccessor.User.CIN;

            if (userCIN.HasValue)
            {
                var result = await _usersService.DeactivatePublicUserAsync(userCIN.Value, cancellationToken);

                return OperationResult(result);
            }

            return BadRequest();
        }

        /// <summary>
        /// Връща всички средства за автентикация на потребителя различни от потребителско име и парола.
        /// </summary>
        /// <param name="userAccessor">Интерфейс за достъп до EAU потребител.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        [Route("UsersAuthTypes")]
        [ProducesResponseType(typeof(IEnumerable<UserAuthentication>), StatusCodes.Status200OK)]
        public async Task<IActionResult> UsersAuthTypes([FromServices] IEAUUserAccessor userAccessor, CancellationToken cancellationToken)
        {
            var userCIN = userAccessor.User.CIN;

            if (userCIN.HasValue)
            {
                var userAuthentications = await _usersService.GetUsersAuthenticationTypesAsync(userCIN.Value, cancellationToken);

                return Ok(userAuthentications);
            }

            return BadRequest();
        }

        /// <summary>
        /// Изтрива сертификат като средство за автентикация на конкретния потребител.
        /// </summary>
        /// <param name="userAccessor">Интерфейс за достъп до EAU потребител.</param>
        /// <param name="userAuthenticationId">Идентификатор на средство за автентикация.</param>
        /// <param name="cancellationToken">Токън за спиране на процеса при нужда.</param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete]
        [Route("DeleteUserAuthentication/{userAuthenticationId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteUserAuthentication([FromServices] IEAUUserAccessor userAccessor, int userAuthenticationId, CancellationToken cancellationToken)
        {
            var userCIN = userAccessor.User.CIN;

            if (userCIN.HasValue)
            {
                var result = await _usersService.DeleteUserAuthenticationTypeAsync(userCIN.Value, userAuthenticationId, cancellationToken);

                if (result.IsSuccessfullyCompleted)
                    return Ok();
            }

            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        [Route("Certificates")]
        [ProducesResponseType(typeof(IEnumerable<UserAuthenticationInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> UserCertificateAuthentications([FromServices] IEAUUserAccessor userAccessor, CancellationToken cancellationToken)
        {
            var userCertificates = await _usersService.GetUserAuthentications(userAccessor.User.LocalClientID.Value, AuthenticationTypes.Certificate, cancellationToken);
            return Ok(userCertificates);
        }

        [Authorize]
        [HttpGet]
        [Route("EAuthentications")]
        [ProducesResponseType(typeof(IEnumerable<UserAuthenticationInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> UserEAuthAuthentications([FromServices] IEAUUserAccessor userAccessor, CancellationToken cancellationToken)
        {
            var userCertificates = await _usersService.GetUserAuthentications(userAccessor.User.LocalClientID.Value, AuthenticationTypes.EAuth, cancellationToken);
            return Ok(userCertificates);
        }

        [Authorize]
        [HttpPost]
        [Route("login")]
        public IActionResult Login()
        {
            return NoContent();
        }

        private readonly string[] limits = { "BASE_DATA_SERVICE_LIMIT" };

        [HttpPost]
        [Route("Logout")]
        [NoopServiceLimiter]
        public async Task<IActionResult> Logout([FromForm] string redirectUri, [FromServices] IServiceLimiter limiter, [FromServices] IEAUUserAccessor userAccessor)
        {
            if (await limiter.ShouldRateLimitAsync(limits, userAccessor.User?.CIN.HasValue == true ? userAccessor.User.CIN : null, userAccessor.RemoteIpAddress))
            {
                return Redirect($"~/TooManyRequests/");
            }

            var authProps = new AuthenticationProperties();

            if (!string.IsNullOrWhiteSpace(redirectUri))
            {
                authProps.RedirectUri = redirectUri;
                authProps.SetParameter("postlogoutregirect", "true");
            }

            return SignOut(authProps,
                Microsoft.AspNetCore.Authentication.Cookies.CookieAuthenticationDefaults.AuthenticationScheme,
                Microsoft.AspNetCore.Authentication.OpenIdConnect.OpenIdConnectDefaults.AuthenticationScheme);
        }

        [Authorize]
        [HttpGet]
        [Route("KeepSessionAlive")]
        public IActionResult KeepSessionAlive()
        {
            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("current")]
        public IActionResult CurrentUserInfo([FromServices] IEAUUserAccessor userAccessor)
        {
            var currentPrincipal = userAccessor.User;
            var email = currentPrincipal.Claims.GetEmail();

            var idp = currentPrincipal.FindFirst(IdentityModel.JwtClaimTypes.IdentityProvider)?.Value;
            var amr = currentPrincipal.FindFirst(IdentityModel.JwtClaimTypes.AuthenticationMethod)?.Value;

            return Ok(new
            {
                Email = email,
                currentPrincipal.CIN,
                currentPrincipal.IsUserIdentifiable,
                idp,
                amr,
                currentPrincipal.UIC
            });
        }

        [HttpGet]
        [Route("{processGuid}/IsActiveLink")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetUserProcess(Guid processGuid, CancellationToken cancellationToken)
        {
            var userProcess = await _usersService.GetUserProcess(processGuid, cancellationToken);

            if (userProcess != null && userProcess.InvalidAfter.HasValue && userProcess.InvalidAfter.Value > DateTime.Now)
                return Ok(true);

            return Ok(false);
        }
    }
}