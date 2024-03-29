﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, EkatteAddressValidator, ErrMsgCodesConstants } from "eau-documents";
import { SpecialNumberSearchCriteria } from "../models/SpecialNumberSearchCriteria";

export class SpecialNumberSearchCriteriaValidator extends EAUBaseValidator<SpecialNumberSearchCriteria, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.provinceCode).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new SpecialNumberSearchCriteria(), 'provinceCode'));

        this.ruleFor(m => m.number).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new SpecialNumberSearchCriteria(), 'number'));

        this.ruleFor(m => m.number).matches("^[0-9АВЕКМНОРСТУХ]{6}$")
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultRegexErrorMessage, new SpecialNumberSearchCriteria(), 'number'));

    }
}