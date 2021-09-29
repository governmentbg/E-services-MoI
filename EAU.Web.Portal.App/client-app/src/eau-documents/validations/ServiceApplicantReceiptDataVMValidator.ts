﻿import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";
import { ServiceApplicantReceiptDataVM, ServiceResultReceiptMethods } from "../models/ModelsAutoGenerated";
//import { ErrMsgCodesConstants } from "./ErrMsgCodesConstants";
import { ServiceApplicantReceiptDataUnitInAdministrationValidator } from "./ServiceApplicantReceiptDataUnitInAdministrationValidator";
import { EkatteAddressValidator } from "./EkatteAddressValidator";

export class ServiceApplicantReceiptDataVMValidator extends EAUBaseValidator<ServiceApplicantReceiptDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        //this.ruleFor(m => m.postOfficeBox).length(1, 2147483647)
        //    .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultBottomRangeLengthErrorMessage, new ServiceApplicantReceiptDataVM(), 'postOfficeBox', 1, 2147483647));

        this.ruleFor(m => m.unitInAdministration)
            .setValidator(new ServiceApplicantReceiptDataUnitInAdministrationValidator())
            .when(m => m.serviceResultReceiptMethod == ServiceResultReceiptMethods.UnitInAdministration);

        this.ruleFor(m => m.applicantAdress)
            .setValidator(new EkatteAddressValidator())
            .when(m => m.serviceResultReceiptMethod == ServiceResultReceiptMethods.CourierToOtherAddress);
    }
}