﻿import { EAUBaseValidator } from "eau-core";
import { DeclarationsVMValidator, DocumentFormValidationContext, ElectronicServiceApplicantVMValidator, ServiceTermTypeAndApplicantReceiptVMValidator } from "eau-documents";
import { ApplicationForChangeRegistrationOfVehiclesVM } from "../../models/ModelsAutoGenerated";
import { ApplicationForChangeRegistrationOfVehiclesDataValidator } from "../ApplicationForChangeRegistrationOfVehiclesDataValidator";

export class ApplicationForChangeRegistrationOfVehiclesValidator extends EAUBaseValidator<ApplicationForChangeRegistrationOfVehiclesVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.electronicServiceApplicant).setValidator(new ElectronicServiceApplicantVMValidator());
        this.ruleFor(m => m.circumstances).setValidator(new ApplicationForChangeRegistrationOfVehiclesDataValidator());
        this.ruleFor(m => m.declarations).setValidator(new DeclarationsVMValidator());
        this.ruleFor(m => m.serviceTermTypeAndApplicantReceipt).setValidator(new ServiceTermTypeAndApplicantReceiptVMValidator());
    }
}