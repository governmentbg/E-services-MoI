﻿import moment from "moment";
import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { moduleContext } from "../ModuleContext";
import { IdentityDocumentBasicDataVM } from "../models/ModelsAutoGenerated";
import { ErrMsgCodesConstants } from "./ErrMsgCodesConstants";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";

export class IdentityDocumentBasicDataVMValidator extends EAUBaseValidator<IdentityDocumentBasicDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.identityDocumentType).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new IdentityDocumentBasicDataVM(), 'identityDocumentType'));

        this.ruleFor(m => m.identityNumber).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new IdentityDocumentBasicDataVM(), 'identityNumber'));

        this.ruleFor(m => m.identityNumber).matches("^[0-9]+$")
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.OnlyDigitsAllowed, new IdentityDocumentBasicDataVM(), 'identityNumber'));


        this.ruleFor(m => m.identitityIssueDate).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new IdentityDocumentBasicDataVM(), 'identitityIssueDate'));

        this.ruleFor(m => m.identitityIssueDate).must(m => {
            if (moment.isMoment(m.identitityIssueDate))
                return m.identitityIssueDate < moment();
            else
                return true;
        })
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FiledLessThenOrEqual, new IdentityDocumentBasicDataVM(), 'identitityIssueDate', moment().format("l")));

        this.ruleFor(m => m.identityIssuer).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new IdentityDocumentBasicDataVM(), 'identityIssuer'));
    }
}