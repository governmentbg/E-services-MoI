﻿import { ValidationHelper } from "cnsys-core";
import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { EntityBasicData } from "../models/ModelsAutoGenerated";
import { ErrMsgCodesConstants } from "./ErrMsgCodesConstants";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";

export class EntityBasicDataValidator extends EAUBaseValidator<EntityBasicData, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.name).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new EntityBasicData(), 'name'));

        this.ruleFor(m => m.identifier).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new EntityBasicData(), 'identifier'));

        //this.ruleFor(m => m.identifier).isValidBULSTAT()
        //    .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.InvalidBULSTATAndEIK, new EntityBasicData(), 'identifier'));

        this.ruleFor(m => m.identifier).must((obj, val) => {
            return (ValidationHelper.isValidBULSTATEIK(val) || ValidationHelper.isValidEGNLNCh(val));
        }).withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.InvalidBULSTATAndEIK, new EntityBasicData(), 'identifier'));
    }
}