﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants, PoliceDepartmentValidator } from "eau-documents";
import { ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM } from "../models/ModelsAutoGenerated";

export class ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVMValidator extends EAUBaseValidator<ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.issuingPoliceDepartment).setValidator(new PoliceDepartmentValidator());

        this.ruleFor(m => m.couponDuplicateIssuensReason).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM(), 'couponDuplicateIssuensReason'));   
    }
}