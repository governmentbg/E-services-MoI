﻿using EAU.Documents.Domain.Models;
using EAU.Documents.Domain.Validations.FluentValidation;
using FluentValidation;
using FluentValidation.Results;
using System;
using System.Linq;

namespace EAU.Documents.Domain.Validations
{
    public class IdentityDocumentBasicDataValidator :  EAUValidator<IdentityDocumentBasicData>
    {
        public IdentityDocumentBasicDataValidator()
        {
            RuleSet("All", () => {
                EAURuleFor(m => m.IdentityDocumentType).RequiredField();

                EAURuleFor(m => m.IdentityIssuer)
                    .RequiredField()
                    .MinLengthValidatior(1);

                EAURuleFor(m => m.IdentityNumber)
                    .RequiredField()
                    .MinLengthValidatior(1)
                    .MatchesValidatior("^[0-9]+$", ErrorMessagesConstants.OnlyDigitsAllowed);

                EAURuleFor(m => m.IdentitityIssueDate)
                    .RequiredField();
            });

            RuleSet("OnlyNumber", () => {
                EAURuleFor(m => m.IdentityNumber)
                    .RequiredField()
                    .MinLengthValidatior(1)
                    .MatchesValidatior("^[0-9]+$", ErrorMessagesConstants.OnlyDigitsAllowed);
            });

            RuleSet("OnlyNumberWith2Letters", () => {
                EAURuleFor(m => m.IdentityNumber)
                    .RequiredField()
                    .MinLengthValidatior(1)
                    .MatchesValidatior("^([А-Я]{1,2})?\\d+$", ErrorMessagesConstants.OnlyDigitsAllowedAnd2CyrilicLetters);
            });
        }

        public override ValidationResult Validate(ValidationContext<IdentityDocumentBasicData> context)
        {
            ValidationResult validationRes = base.Validate(context);
            var instance = context.InstanceToValidate;

            if(validationRes.IsValid && validationRes.RuleSetsExecuted.Contains("All"))
            {
                DateTime toDayEndOfDay = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 23, 59, 59);
                if (instance.IdentitityIssueDate > toDayEndOfDay)
                {
                    EAUValidator<IdentityDocumentBasicData>.PlaceHolder[] parameters = new EAUValidator<IdentityDocumentBasicData>.PlaceHolder[]
                   {
                        new EAUValidator<IdentityDocumentBasicData>.PlaceHolder("Field",FluentValidationExtensions.GetObjectPropertyResourseCode(instance.GetType(), "IdentitityIssueDate")),
                        new EAUValidator<IdentityDocumentBasicData>.PlaceHolder("Param1", toDayEndOfDay.ToShortDateString())
                   };

                    AddValidationFailureWithoutParamsTranslation(validationRes
                        , ErrorMessagesConstants.FiledLessThenOrEqual
                        , parameters);
                }
            }

            return validationRes;
        }
    }
}
