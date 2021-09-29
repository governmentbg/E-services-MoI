using EAU.BDS.Documents.Domain.Models;
using EAU.Documents.Domain.Validations.FluentValidation;
using EAU.Documents.Domain.Validations;

namespace EAU.BDS.Documents.Domain.Validations
{
    public class IssuerCountryValidator : EAUValidator<IssuerCountry>
    {
        public IssuerCountryValidator()
        {
            //EAURuleFor(m => m.CountryGRAOCode).RequiredField().MinLengthValidatior(1);
            EAURuleFor(m => m.CountryName).RequiredField().MinLengthValidatior(1);
        }
    }
}
