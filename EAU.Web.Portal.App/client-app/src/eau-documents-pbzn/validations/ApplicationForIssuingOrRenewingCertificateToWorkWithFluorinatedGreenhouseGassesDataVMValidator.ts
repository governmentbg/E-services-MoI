﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM } from "../models/ModelsAutoGenerated";
import { AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesEntityDataVMValidator } from "./AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesEntityDataVMValidator";
import { AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesPersonDataVMValidator } from "./AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesPersonDataVMValidator";



export class ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVMValidator extends EAUBaseValidator<ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData).setValidator(new AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesPersonDataVMValidator());
        this.ruleFor(m => m.applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData).setValidator(new AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesEntityDataVMValidator());
        this.ruleFor(m => m.workPhone).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM(), 'workPhone'));
        this.ruleFor(m => m.workPhone).isValidPhone().withMessage(resourceManager.getResourceByKey("DOC_GL_WRONG_PHONE_NUMBER_E"))

    }
}