using EAU.COD.Documents.Domain.Models;
using EAU.Documents.Domain.Validations;
using EAU.Documents.Domain.Validations.FluentValidation;
using FluentValidation;
using FluentValidation.Results;
using System;

namespace EAU.COD.Documents.Domain.Validations
{
    public class NotificationForTakingOrRemovingFromSecurityDataValidator : EAUValidator<NotificationForTakingOrRemovingFromSecurityData>
    {
        public NotificationForTakingOrRemovingFromSecurityDataValidator()
        {
            EAURuleFor(m => m.IssuingPoliceDepartment).RequiredField().EAUInjectValidator();
            EAURuleFor(m => m.NotificationType).RequiredField();
            EAURuleFor(m => m.SecurityContractData).RequiredFieldFromSection().EAUInjectValidator();

            When(m => m.NotificationType == Models.NotificationType.NewSecurityContr235789 ||
             m.NotificationType == Models.NotificationType.TerminationSecurityContr235789, () =>
             {
                 EAURuleFor(m => m.ContractAssignor).RequiredFieldFromSection();
                 EAURuleFor(m => m.ContractAssignor).InjectValidator();
             });
        }

        public override ValidationResult Validate(ValidationContext<NotificationForTakingOrRemovingFromSecurityData> context)
        {
            ValidationResult validationRes = base.Validate(context);
            var instance = context.InstanceToValidate;

            if (instance.NotificationType == NotificationType.NewSecurityContr235789 || instance.NotificationType == NotificationType.NewSecurityContr4)
            {
                if (instance.SecurityContractData != null && string.IsNullOrEmpty(instance.SecurityContractData.ContractNumber))
                {
                    PlaceHolder[] parameters = new PlaceHolder[]
                        {
                            new PlaceHolder()
                            {
                                Name = "Field",
                                ResourceCode = FluentValidationExtensions.GetObjectPropertyResourseCode(instance.SecurityContractData.GetType(), "ContractNumber")
                            }
                        };

                    AddValidationFailure(validationRes, ErrorMessagesConstants.DefaultNotEmptyErrorMessage, parameters);
                }
            }
            else
            {
                if (instance.SecurityContractData != null)
                {
                    PlaceHolder[] parameters;
                    if (string.IsNullOrEmpty(instance.SecurityContractData.DocumentNumber))
                    {
                        parameters = new PlaceHolder[]
                                {
                                    new PlaceHolder()
                                    {
                                        Name = "Field",
                                        ResourceCode = FluentValidationExtensions.GetObjectPropertyResourseCode(instance.SecurityContractData.GetType(), "DocumentNumber")
                                    }
                                };
                        AddValidationFailure(validationRes, ErrorMessagesConstants.DefaultNotEmptyErrorMessage, parameters);
                    }
                    if (string.IsNullOrEmpty(instance.SecurityContractData.ContractType))
                    {
                        parameters = new PlaceHolder[]
                            {
                                new PlaceHolder()
                                {
                                    Name = "Field",
                                    ResourceCode = FluentValidationExtensions.GetObjectPropertyResourseCode(instance.SecurityContractData.GetType(), "ContractType")
                                }
                            };
                        AddValidationFailure(validationRes, ErrorMessagesConstants.DefaultNotEmptyErrorMessage, parameters);
                    }
                }
            }

            return validationRes;
        }
    }
}