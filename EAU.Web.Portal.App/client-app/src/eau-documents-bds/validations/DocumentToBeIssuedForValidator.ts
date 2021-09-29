﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, DocumentMustServeToVMValidator, ErrMsgCodesConstants } from "eau-documents";
import moment, { isMoment } from "moment";
import { DocumentToBeIssuedForVM, IssuedBulgarianIdentityDocumentsInPeriodVM, IssueDocumentFor, OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM } from "../models/ModelsAutoGenerated";

class OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsValidator extends EAUBaseValidator<OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.nessesaryInformation).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM, 'nessesaryInformation'));
    }
}

class IssuedBulgarianIdentityDocumentsInPeriodValidator extends EAUBaseValidator<IssuedBulgarianIdentityDocumentsInPeriodVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.identitityIssueDate).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, IssuedBulgarianIdentityDocumentsInPeriodVM, 'identitityIssueDate'));

        this.ruleFor(m => m.identitityExpireDate).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, IssuedBulgarianIdentityDocumentsInPeriodVM, 'identitityExpireDate'));

        this.ruleFor(m => m.identitityIssueDate).must(m => m.identitityIssueDate >= moment("2000-01-01"))
            .withMessage(resourceManager.getResourceByKey("DOC_BDS_WRONG_PERIOD_START_DATE_E")).when(m => isMoment(m.identitityIssueDate))

        this.ruleFor(m => m.identitityExpireDate).must(m => m.identitityExpireDate <= moment().endOf("day"))
            .withMessage(resourceManager.getResourceByKey("DOC_BDS_NO_CAN_EXECUTE_DATE_E")).when(m => isMoment(m.identitityExpireDate))

        this.ruleFor(m => m.identitityIssueDate).must(m => m.identitityIssueDate <= m.identitityExpireDate)
            .withMessage(resourceManager.getResourceByKey("DOC_BDS_PERIOD_START_DATE_MUST_LESS_E")).when(m => isMoment(m.identitityIssueDate) && isMoment(m.identitityExpireDate))
    }
}

export class DocumentToBeIssuedForValidator extends EAUBaseValidator<DocumentToBeIssuedForVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.issuedBulgarianIdentityDocumentsInPeriod).setValidator(new IssuedBulgarianIdentityDocumentsInPeriodValidator())
            .when(x => x.chooseIssuingDocument == IssueDocumentFor.IssuedBulgarianIdentityDocumentsInPeriod);

        this.ruleFor(m => m.otherIndormationConnectedWithIssuedBulgarianIdentityDocuments).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, IssuedBulgarianIdentityDocumentsInPeriodVM, 'otherIndormationConnectedWithIssuedBulgarianIdentityDocuments'))
            .when(x => x.chooseIssuingDocument == IssueDocumentFor.OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments);

        this.ruleFor(m => m.otherIndormationConnectedWithIssuedBulgarianIdentityDocuments).setValidator(new OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsValidator())
            .when(x => x.chooseIssuingDocument == IssueDocumentFor.OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments);

        this.ruleFor(m => m.documentMustServeTo).setValidator(new DocumentMustServeToVMValidator())

        this.ruleFor(m => m.documentMustServeTo).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, IssuedBulgarianIdentityDocumentsInPeriodVM, 'documentMustServeTo'));
    }
}