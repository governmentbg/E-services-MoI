using EAU.BDS.Documents.Domain.Models;
using EAU.Documents.Domain.Validations.FluentValidation;
using EAU.Documents.Domain.Validations;

namespace EAU.BDS.Documents.Domain.Validations
{
    public class PersonIdentificationDataValidator : EAUValidator<PersonIdentificationData>
    {
        public PersonIdentificationDataValidator()
        {
            EAURuleFor(m => m.Names).EAUInjectValidator();
            EAURuleFor(m => m.NamesLatin).EAUInjectValidator();
            EAURuleFor(m => m.Identifier).EAUInjectValidator();
            EAURuleFor(m => m.Gender).EAUInjectValidator();
        }
    }
}