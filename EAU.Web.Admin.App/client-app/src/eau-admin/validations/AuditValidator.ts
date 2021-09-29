﻿import { EAUBaseValidator } from "eau-core";
import { DataServiceLimit } from "../models/ModelsAutoGenerated";
import moment from "moment";
import { LogActionSearchCriteria } from "eau-admin/models/LogActionSearchCriteria";

export class AuditValidator extends EAUBaseValidator<LogActionSearchCriteria, any> {

    constructor() {
        super();
        this.ruleFor(x => x.mode).notEmpty().withMessage(this.getMessage('GL_INPUT_FIELD_MUST_E'));
        this.ruleFor(x => x.logActionDateFrom).notEmpty().withMessage(this.getMessage('GL_INPUT_FIELD_MUST_E'));
        this.ruleFor(x => x.logActionDateTo).notEmpty().withMessage(this.getMessage('GL_INPUT_FIELD_MUST_E'));



    }

    public validate(obj: LogActionSearchCriteria): boolean {

        
        
        let isValid = super.validate(obj);

        if (obj.logActionDateFrom > obj.logActionDateTo) {
            isValid = false;
            obj.addError('logActionDateFrom', this.getMessage('GL_DATE_TO_GREATER_THAN_DATE_FROM_E'));
        }

        return isValid;
    }
}