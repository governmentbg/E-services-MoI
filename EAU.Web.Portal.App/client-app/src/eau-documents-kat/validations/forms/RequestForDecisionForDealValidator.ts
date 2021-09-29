﻿import { EAUBaseValidator } from "eau-core";
import { RequestForDecisionForDealVM } from "../../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ElectronicServiceApplicantVMValidator, DeclarationsVMValidator, ServiceTermTypeAndApplicantReceiptVMValidator } from "eau-documents";
import { RequestForDecisionForDealDataVMValidator } from "../RequestForDecisionForDealDataVMValidator";


export class RequestForDecisionForDealValidator extends EAUBaseValidator<RequestForDecisionForDealVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.electronicServiceApplicant).setValidator(new ElectronicServiceApplicantVMValidator());
        this.ruleFor(m => m.circumstances).setValidator(new RequestForDecisionForDealDataVMValidator());
        this.ruleFor(m => m.declarations).setValidator(new DeclarationsVMValidator());
        this.ruleFor(m => m.serviceTermTypeAndApplicantReceipt).setValidator(new ServiceTermTypeAndApplicantReceiptVMValidator());
    }
}