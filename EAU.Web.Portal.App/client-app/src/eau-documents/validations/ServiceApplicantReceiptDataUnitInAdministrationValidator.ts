﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";
import { ServiceApplicantReceiptDataUnitInAdministration } from "../models/ModelsAutoGenerated";
import { EntityBasicDataValidator } from "./EntityBasicDataValidator";
import { ErrMsgCodesConstants } from "./ErrMsgCodesConstants";

export class ServiceApplicantReceiptDataUnitInAdministrationValidator extends EAUBaseValidator<ServiceApplicantReceiptDataUnitInAdministration, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(x => x.administrativeDepartmentCode).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.AdministrativeDepartmentCode, new ServiceApplicantReceiptDataUnitInAdministration(), 'mainAdministrativeDepartmentCode'))
        this.ruleFor(m => m.entityBasicData).setValidator(new EntityBasicDataValidator());
    }
}