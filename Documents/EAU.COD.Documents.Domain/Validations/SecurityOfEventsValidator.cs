﻿using EAU.COD.Documents.Domain.Models;
using EAU.Documents.Domain.Validations;
using EAU.Documents.Domain.Validations.FluentValidation;
using FluentValidation;

namespace EAU.COD.Documents.Domain.Validations
{
    public class SecurityOfEventsValidator : EAUValidator<SecurityOfEvents>
    {
        public SecurityOfEventsValidator()
        {
            RuleSet("New", () => {
                EAURuleFor(m => m.ActualDate).RequiredField();
                EAURuleFor(m => m.SecurityObjectName).RequiredField();
                EAURuleFor(m => m.SecurityObjectName).MaxLengthValidatior(150);
                EAURuleFor(m => m.DistrictCode).RequiredField();
                EAURuleFor(m => m.Address).RequiredField();              
                EAURuleForEach(m => m.SecurityTransports).EAUInjectValidator("NotRequired");
                EAURuleFor(m => m.SecurityType).RequiredField();

                EAURuleFor(m => m.SecurityObjectName).MatchesValidatior("^[а-яА-Яa-zA-Z\\s+\\d+~@#$%^&*()_{}|\"':>=|!<.,/\\?;-]+$").WithEAUErrorCode(ErrorMessagesConstants.FieldValidationCyrillicLatinNumbersSymbols);
                EAURuleFor(m => m.Address).MatchesValidatior("^[а-яА-Яa-zA-Z\\s+\\d+~@№#$%^&*()_{}|\"':>=|!<.,/\\?;-]+$").WithEAUErrorCode(ErrorMessagesConstants.FieldValidationCyrillicLatinNumbersSymbols2);
                EAURuleFor(m => m.Address).MaxLengthValidatior(250);
            });
            RuleSet("Termination", () => {
                EAURuleFor(m => m.TerminationDate).RequiredField();
                EAURuleFor(m => m.SecurityObjectName).RequiredField();
                EAURuleFor(m => m.SecurityObjectName).MaxLengthValidatior(150);
                EAURuleFor(m => m.SecurityObjectName).MatchesValidatior("^[а-яА-Яa-zA-Z\\s+\\d+~@#$%^&*()_{}|\"':>=|!<.,/\\?;-]+$").WithEAUErrorCode(ErrorMessagesConstants.FieldValidationCyrillicLatinNumbersSymbols);
                EAURuleFor(m => m.Address).MatchesValidatior("^[а-яА-Яa-zA-Z\\s+\\d+~@№#$%^&*()_{}|\"':>=|!<.,/\\?;-]+$").WithEAUErrorCode(ErrorMessagesConstants.FieldValidationCyrillicLatinNumbersSymbols2);
                EAURuleFor(m => m.Address).MaxLengthValidatior(250);
                EAURuleFor(m => m.Address).RequiredField();
            });
        }
    }
}



