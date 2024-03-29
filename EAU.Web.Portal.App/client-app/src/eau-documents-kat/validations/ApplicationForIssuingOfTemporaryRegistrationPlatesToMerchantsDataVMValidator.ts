﻿import { ObjectHelper } from "cnsys-core";
import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, EkatteAddressValidator, ErrMsgCodesConstants } from "eau-documents";
import { ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM } from "../models/ModelsAutoGenerated";
import { AuthorizedPersonCollectionVMValidator } from "./AuthorizedPersonCollectionVMValidator";

export class ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVMValidator
    extends EAUBaseValidator<ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.temporaryPlatesCount)
            .notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'temporaryPlatesCount'));
        this.ruleFor(m => m.temporaryPlatesCount)
            .must((obj, val) => {
                if (ObjectHelper.isNullOrUndefined(val)) return true;

                return val >= 1 && val <= 99;
            })
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FiledValueMustBeBetween, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'temporaryPlatesCount', '1', '99'));

        this.ruleFor(m => m.operationalNewVehicleMakes)
            .length(0, 500)
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldCanNotContainsMoreThanSymbols, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'operationalNewVehicleMakes', '500'));

        this.ruleFor(m => m.operationalSecondHandVehicleMakes)
            .length(0, 500)
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldCanNotContainsMoreThanSymbols, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'operationalSecondHandVehicleMakes', '500'));

        this.ruleFor(m => m.vehicleDealershipAddress).setValidator(new EkatteAddressValidator());

        this.ruleFor(m => m.authorizedPersons)
            .notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'authorizedPersons'));

        this.ruleFor(m => m.authorizedPersons).setValidator(new AuthorizedPersonCollectionVMValidator());

        this.ruleFor(m => m.phone).notEmpty().withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'phone'));

        this.ruleFor(m => m.phone)
            .length(0, 100)
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldCanNotContainsMoreThanSymbols, new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM(), 'phone', '100'));
    }
}