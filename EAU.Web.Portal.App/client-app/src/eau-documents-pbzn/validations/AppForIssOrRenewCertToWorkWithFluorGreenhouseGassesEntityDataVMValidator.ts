﻿import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants, EkatteAddressValidator } from "eau-documents";
import { ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM } from "../models/ModelsAutoGenerated";
import { AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesCertifiedPersonelVMValidator } from "./AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesCertifiedPersonelVMValidator";
import { forEach } from "typescript-collections/dist/lib/arrays";
import { ObjectHelper } from "../../cnsys-core";


export class AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesEntityDataVMValidator extends EAUBaseValidator<ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.correspondingAddress).setValidator(new EkatteAddressValidator());
        this.ruleFor(m => m.entityManagementAddress).setValidator(new EkatteAddressValidator());
        this.ruleFor(m => m.declaredScopeOfCertification).notEmpty()
            .withMessage(ResourceHelpers.getErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, 'GL_PBZN_ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData_DeclaredScopeOfCertification_L'));

        this.ruleFor(m => m.availableCertifiedPersonnel).setCollectionValidator(new AppForIssOrRenewCertToWorkWithFluorGreenhouseGassesCertifiedPersonelVMValidator());

    }

    //public validate(obj: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM): boolean {
    //    let res = super.validate(obj);

    //    let countOfNotEmptyElemement = 0;

    //    for (var i = 0; i < obj.availableCertifiedPersonnel.length; i++) {
    //        var person = obj.availableCertifiedPersonnel[i];

    //        if (!ObjectHelper.isNullOrUndefined(person.personFirstName) ||
    //            !ObjectHelper.isNullOrUndefined(person.personLastName) ||
    //            !ObjectHelper.isNullOrUndefined(person.certificateNumber))
    //            countOfNotEmptyElemement++;
    //    }

    //    if (countOfNotEmptyElemement < 2) {
    //        obj.addError("availableCertifiedPersonnel", resourceManager.getResourceByKey("DOC_PBZN_AvailableCertifiedPersonnel_Min2_E"));
    //        obj.addError(resourceManager.getResourceByKey("DOC_PBZN_AvailableCertifiedPersonnel_Min2_E"));

    //        res = false;
    //    }

    //    return res;
    //}
}