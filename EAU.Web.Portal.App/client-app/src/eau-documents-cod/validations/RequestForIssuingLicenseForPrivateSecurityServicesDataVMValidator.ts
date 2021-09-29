﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, EkatteAddressValidator, PoliceDepartmentValidator } from "eau-documents";
import { RequestForIssuingLicenseForPrivateSecurityServicesDataVM } from "../models/ModelsAutoGenerated";
import { SecurityServiceTypesVMValidator } from "./SecurityServiceTypesVMValidator";

export class RequestForIssuingLicenseForPrivateSecurityServicesDataVMValidator extends EAUBaseValidator<RequestForIssuingLicenseForPrivateSecurityServicesDataVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.entityManagementAddress).setValidator(new EkatteAddressValidator());

        this.ruleFor(m => m.correspondingAddress).setValidator(new EkatteAddressValidator());

        this.ruleFor(m => m.securityServiceTypes).setCollectionValidator(new SecurityServiceTypesVMValidator());

        this.ruleFor(m => m.issuingPoliceDepartment).setValidator(new PoliceDepartmentValidator());

        this.ruleFor(m => m.mobilePhone).isValidPhone().withMessage(resourceManager.getResourceByKey("DOC_GL_WRONG_PHONE_NUMBER_E"));

    }

    public validate(obj: RequestForIssuingLicenseForPrivateSecurityServicesDataVM): boolean {
        let res = super.validate(obj);
        let selectedServiceTypes = false;

        obj.securityServiceTypes.forEach(function (item) {
            if (item.isSelected) {
                selectedServiceTypes = true;
            }
        });

        if (!selectedServiceTypes) {
            obj.addError('securityServiceTypes', ResourceHelpers.formatErrorMessage("GL_COD_SecurityServiceTypesIsRequired_E", new RequestForIssuingLicenseForPrivateSecurityServicesDataVM(), 'securityServiceTypes'));
            res = false;           
        }
        return res;
    }
}