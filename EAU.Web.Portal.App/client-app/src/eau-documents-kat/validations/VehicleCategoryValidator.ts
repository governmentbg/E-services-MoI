﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { VehicleCategory } from "../models/ModelsAutoGenerated";

export class VehicleCategoryValidator extends EAUBaseValidator<VehicleCategory, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.code).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new VehicleCategory(), 'code'));

    }
}