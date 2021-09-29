using EAU.Documents.Domain.Validations;
using EAU.Documents.Domain.Validations.FluentValidation;
using FluentValidation;

namespace EAU.BDS.Documents.Domain.Validations
{
    public class OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsValidator : EAUValidator<Models.OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments>
    {
        public OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsValidator()
        {
            EAURuleFor(m => m.NessesaryInformation).Must((val) =>
            {
                if (string.IsNullOrEmpty(val) || string.IsNullOrWhiteSpace(val))
                    return false;
                else
                    return true;
            }).WithEAUErrorCode(ErrorMessagesConstants.DefaultNotEmptyErrorMessage);
        }
    }
}
