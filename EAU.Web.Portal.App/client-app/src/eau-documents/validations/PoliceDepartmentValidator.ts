﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { PoliceDepartment } from "../models/ModelsAutoGenerated";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";
import { ErrMsgCodesConstants } from ".";

export class PoliceDepartmentValidator extends EAUBaseValidator<PoliceDepartment, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(x => x.policeDepartmentCode).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.AdministrativeDepartmentCode, new PoliceDepartment(), 'policeDepartmentCode'));
    }
}