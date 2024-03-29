﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { VehicleOwnerDataVM, VehicleOwnerAdditionalCircumstances, PersonEntityChoiceType, PersonEntityFarmerChoiceType } from "../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { PersonEntityDataVMValidator } from "./PersonEntityDataVMValidator";
import { action } from "mobx";


export class VehicleOwnerDataVMValidator extends EAUBaseValidator<VehicleOwnerDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.personEntityData).setValidator(new PersonEntityDataVMValidator());
        this.ruleFor(m => m.successorData).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new VehicleOwnerDataVM(), 'successorData'))
            .when(m => m.vehicleOwnerAdditionalCircumstances == VehicleOwnerAdditionalCircumstances.DeadPerson);
    }
    @action validate(obj: VehicleOwnerDataVM): boolean {
        let result = super.validate(obj);

        if (obj.vehicleOwnerAdditionalCircumstances) {
            if (obj.personEntityData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person)
                obj.personEntityData.person.clearErrors();
        }
       
        return result;
    }
}