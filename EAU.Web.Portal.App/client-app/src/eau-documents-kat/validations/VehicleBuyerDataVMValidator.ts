﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { VehicleBuyerDataVM, PersonEntityFarmerChoiceType } from "../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { PersonEntityDataVMValidator } from "./PersonEntityDataVMValidator";
import { action } from "mobx";


export class VehicleBuyerDataVMValidator extends EAUBaseValidator<VehicleBuyerDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.personEntityData).setValidator(new PersonEntityDataVMValidator());

        //this.ruleFor(m => m.emailAddress).notEmpty()
        //    .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new VehicleBuyerDataVM(), 'emailAddress'));

        this.ruleFor(m => m.emailAddress).emailAddress()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldMustContainsValidEmailAddress, new VehicleBuyerDataVM(), 'emailAddress'));
    }
    @action validate(obj: VehicleBuyerDataVM): boolean {
        let result = super.validate(obj);

        if (obj.vehicleOwnerAdditionalCircumstances) {
            if (obj.personEntityData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person)
                obj.personEntityData.person.clearErrors();
        }

        return result;
    }
}