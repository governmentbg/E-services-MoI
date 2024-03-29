﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { ErrMsgCodesConstants } from "./ErrMsgCodesConstants";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";
import { CitizenshipVM } from "../models";

export class CitizenshipVMValidator extends EAUBaseValidator<CitizenshipVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.countryName).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new CitizenshipVM(), 'countryName'));

        this.ruleFor(m => m.countryGRAOCode).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new CitizenshipVM(), 'countryGRAOCode'));
    }
}

