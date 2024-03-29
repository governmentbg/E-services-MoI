﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { DeclarationForLostSRPPSData } from "../models/ModelsAutoGenerated";

export class DeclarationForLostSRPPSDataValidator extends EAUBaseValidator<DeclarationForLostSRPPSData, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.declaration)
            .notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new DeclarationForLostSRPPSData(), 'declaration'));

    }
}