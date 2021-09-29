﻿import { DocumentFormValidationContext, Section, DocumentFormManagerBase } from 'eau-documents'
import { ResourceHelpers } from 'eau-core';
import { ReportForVehicleVM } from '../models/ModelsAutoGenerated';
import { ReportForVehicleValidator } from '../validations/forms/ReportForVehicleValidator';
import { ReportForVehicleUI } from '../ui/certificate-forms/ReportForVehicleUI';
 
export class ReportForVehicleManager extends DocumentFormManagerBase<ReportForVehicleVM>{

    //#region ApplicationFormManagerBase

    createDocument(obj: any): ReportForVehicleVM {
        return new ReportForVehicleVM(obj);
    }

    //#endregion   

    protected createSections(validationContext: DocumentFormValidationContext): Section[] {
        var sections = super.createSections(validationContext);

        var main = new Section();
        main.code = "main";
        main.title = ResourceHelpers.getResourceByProperty(m => m, ReportForVehicleVM);
        main.form = this.documentForm;
        main.formUICmp = ReportForVehicleUI;
        main.validator = new ReportForVehicleValidator();
        main.validator.setValidationContext(validationContext);
        main.validate = () => this.validateSection(main);

        sections.push(main);

        return sections;
    }
}