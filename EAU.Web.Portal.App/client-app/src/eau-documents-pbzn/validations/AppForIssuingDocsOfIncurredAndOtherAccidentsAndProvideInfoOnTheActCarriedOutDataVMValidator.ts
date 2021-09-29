﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, EkatteAddressValidator, DocumentMustServeToVMValidator, ErrMsgCodesConstants, PoliceDepartmentValidator } from "eau-documents";
import { ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM } from "../models/ModelsAutoGenerated";


export class AppForIssuingDocsOfIncurredAndOtherAccidentsAndProvideInfoOnTheActCarriedOutDataVMValidator extends EAUBaseValidator<ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.entityManagementAddress).setValidator(new EkatteAddressValidator()).when(m => m.isRecipientEntity);
        this.ruleFor(m => m.corespondingAddress).setValidator(new EkatteAddressValidator());
        this.ruleFor(m => m.documentMustServeTo).setValidator(new DocumentMustServeToVMValidator());
        this.ruleFor(m => m.documentCertifyingTheAccidentOccurredOrOtherInformation).notEmpty()
            .withMessage(ResourceHelpers.getErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, "DOC_PBZN_DocumentCertifyingTheAccidentOccurredOrOtherInformation_L"));
        this.ruleFor(m => m.issuingPoliceDepartment).setValidator(new PoliceDepartmentValidator());
        this.ruleFor(m => m.phoneNumber).isValidPhone().withMessage(resourceManager.getResourceByKey("DOC_GL_WRONG_PHONE_NUMBER_E"))

    }
}