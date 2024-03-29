﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { PersonEntityDataVM, PersonEntityChoiceType, PersonDataVM, PersonIdentifierVM, EntityDataVM, PersonEntityFarmerChoiceType } from "../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ErrMsgCodesConstants, PersonIdentifierChoiceType } from "eau-documents";
import { ValidationHelper, ObjectHelper } from "../../cnsys-core";
import { action } from "mobx";


export class PersonEntityDataVMValidator extends EAUBaseValidator<PersonEntityDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.selectedPersonEntityFarmerChoiceType).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new PersonEntityDataVM(), 'selectedPersonEntityFarmerChoiceType'));

        this.ruleFor(m => m.person).setValidator(new PersonDataVMValidator()).when(m => m.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person);

        this.ruleFor(m => m.entity).setValidator(new EntityDataVMValidator(false)).when(m => m.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Entity && m.isFarmer == false);

        this.ruleFor(m => m.entity).setValidator(new EntityDataVMValidator(true)).when(m => m.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Farmer && m.isFarmer == true);
    }
    @action validate(obj: PersonEntityDataVM): boolean {
        let result = super.validate(obj);

        if (obj.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Entity || obj.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Farmer) {
            if (obj.isFarmer) {
                if (!ObjectHelper.isStringNullOrEmpty(obj.entity.identifier) && !ValidationHelper.isValidEGN(obj.entity.identifier)) {
                    obj.entity.addError('identifier', resourceManager.getResourceByKey("GL_INVALID_BULSTAT_E"));
                    result = false;
                }
            }
            else {
                if (!ValidationHelper.isValidBULSTATEIK(obj.entity.identifier)) {
                    obj.entity.addError('identifier', ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.InvalidBULSTATAndEIK, new EntityDataVM(), 'identifier'));
                    result = false;
                }
            }
        }

        return result;
    }
}

export class PersonDataVMValidator extends EAUBaseValidator<PersonDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.identifier).setValidator(new PersonIdentifierVMValidator());

        this.ruleFor(m => m.identityNumber).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new PersonDataVM(), 'identityNumber'))
            .when(x => (x.identifier.itemElementName == PersonIdentifierChoiceType.EGN &&
                (x.identifier && x.identifier.item && x.identifier.item != "") &&
                ValidationHelper.isValidEGN(x.identifier.item)
                && !ValidationHelper.isMinorPerson(x.identifier.item)) ||
                x.identifier.itemElementName == PersonIdentifierChoiceType.LNCh
            );

        this.ruleFor(m => m.identityNumber).match(/^([А-Я]{1,2})?\d+$/)
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.OnlyDigitsAllowedAnd2CyrilicLetters, new PersonDataVM(), 'identityNumber'));

    }
}

export class PersonIdentifierVMValidator extends EAUBaseValidator<PersonIdentifierVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.itemElementName).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new PersonIdentifierVM(), 'itemElementName'));

        this.ruleFor(m => m.item).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new PersonIdentifierVM(), 'item'));

        this.ruleFor(m => m.item).isValidEGN()
            .when(m => m.itemElementName == PersonIdentifierChoiceType.EGN && (m.item != null && m.item != ""))
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.InvalidEGN, new PersonIdentifierVM(), 'item'));

        this.ruleFor(m => m.item).isValidLNCh()
            .when(m => m.itemElementName == PersonIdentifierChoiceType.LNCh && (m.item != null && m.item != ""))
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.InvalidLNCh, new PersonIdentifierVM(), 'item'));
    }
}

export class EntityDataVMValidator extends EAUBaseValidator<EntityDataVM, DocumentFormValidationContext> {
    constructor(isFarmer?: boolean) {
        super();

        //this.ruleFor(m => m.identifier).notEmpty()
        //    .withMessage(isFarmer ?
        //        ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new EntityDataVM(), 'identifierBulsat') :
        //        ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new EntityDataVM(), 'identifier'));

        this.ruleFor(m => m.identifier).notEmpty()
            .withMessage(this.getMessage(ErrMsgCodesConstants.FieldNotEmptyErrorMessage));

    }
}

export class FarmerDataValidator extends EAUBaseValidator<EntityDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.clearRules('identifier');

        this.ruleFor(m => m.identifier).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new EntityDataVM(), 'identifierBulsat'));

        this.ruleFor(m => m.identifier).isValidEGN()
            .withMessage(resourceManager.getResourceByKey("GL_INVALID_BULSTAT_E"));

    }
}
