﻿import { EAUBaseValidator } from "eau-core";
import { ApplicationForIssuingDocumentofVehicleOwnershipVM } from "../../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ElectronicServiceApplicantVMValidator, DeclarationsVMValidator, ServiceTermTypeAndApplicantReceiptVMValidator } from "eau-documents";
import { ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator } from '../ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator'



export class ApplicationForIssuingDocumentofVehicleOwnershipValidator extends EAUBaseValidator<ApplicationForIssuingDocumentofVehicleOwnershipVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.electronicServiceApplicant).setValidator(new ElectronicServiceApplicantVMValidator());
        this.ruleFor(m => m.circumstances).setValidator(new ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator());
        this.ruleFor(m => m.declarations).setValidator(new DeclarationsVMValidator());
        this.ruleFor(m => m.serviceTermTypeAndApplicantReceipt).setValidator(new ServiceTermTypeAndApplicantReceiptVMValidator());
    }
}