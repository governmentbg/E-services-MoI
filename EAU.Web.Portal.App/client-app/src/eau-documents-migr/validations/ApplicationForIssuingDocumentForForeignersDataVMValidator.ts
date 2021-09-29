﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { CitizenshipVMValidator, DocumentFormValidationContext, DocumentMustServeToVMValidator, ErrMsgCodesConstants, PersonAddressValidator } from "eau-documents";
import moment from "moment";
import { ApplicationForIssuingDocumentForForeignersDataVM } from "../models/ModelsAutoGenerated";

export class ApplicationForIssuingDocumentForForeignersDataVMValidator extends EAUBaseValidator<ApplicationForIssuingDocumentForForeignersDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.address).setValidator(new PersonAddressValidator());

        this.ruleFor(m => m.citizenship).setValidator(new CitizenshipVMValidator());

        this.ruleFor(m => m.birthDate).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingDocumentForForeignersDataVM(), 'birthDate'));

        this.ruleFor(x => x.birthDate).must(obj => {
            return !obj.birthDate || moment(obj.birthDate, 'YYYY', true).isValid() || moment(obj.birthDate, 'MM.YYYY', true).isValid() || moment(obj.birthDate, 'DD.MM.YYYY', true).isValid()
        }).withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DateFormat, new ApplicationForIssuingDocumentForForeignersDataVM(), 'birthDate'));

        this.ruleFor(m => m.birthDate).must(m => {

            if (!moment(m.birthDate, 'YYYY', true).isValid() && !moment(m.birthDate, 'MM.YYYY', true).isValid() && !moment(m.birthDate, 'DD.MM.YYYY', true).isValid())
                return true;

            if (moment(m.birthDate, 'MM.YYYY', true).isValid() &&
                ( moment(m.birthDate, "MM.YYYY", true).years() < moment().years() ||
                moment(m.birthDate, "MM.YYYY", true).months() <= moment().months() && moment(m.birthDate, "MM.YYYY", true).years() == moment().years())
            )
                return true;

            if (moment(m.birthDate, 'YYYY', true).isValid() && moment(m.birthDate, "YYYY", true).years() <= moment().years())
                return true;

            if (moment(m.birthDate, "DD.MM.YYYY", true) <= moment().endOf("day"))
                return true;

            return false;

        }).withMessage(resourceManager.getResourceByKey("DOC_GL_InvalidBirthDate_E"));

        this.ruleFor(m => m.certificateFor).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingDocumentForForeignersDataVM(), 'certificateFor'));

        this.ruleFor(m => m.certificateFor).matches("^[а-яА-Яa-zA-Z\\s+\\d+~@#$%^&*()_{}|\"':>=|!<.,/\\\\?;-]+$")
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldValidationCyrillicLatinNumbersSymbols, new ApplicationForIssuingDocumentForForeignersDataVM(), 'certificateFor'));

        this.ruleFor(m => m.documentMustServeTo).setValidator(new DocumentMustServeToVMValidator());

    }
}