using EAU.BDS.Documents.Domain.Models;
using EAU.Documents.Domain.Validations.FluentValidation;
using EAU.Documents.Domain.Validations;

namespace EAU.BDS.Documents.Domain.Validations
{
    public class PersonNamesLatinValidator : EAUValidator<PersonNamesLatin>
    {
        public PersonNamesLatinValidator()
        {
            EAURuleFor(m => m.First).MatchesValidatior("[A-Za-z]+([\' -][A-Za-z]+)*");
            EAURuleFor(m => m.Middle).MatchesValidatior("[A-Za-z]+([\' -][A-Za-z]+)*");
            EAURuleFor(m => m.Last).MatchesValidatior("[A-Za-z]+([\' -][A-Za-z]+)*");
        }
    }
}