﻿import { ObjectHelper } from "cnsys-core";
import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "eau-documents";
import { NotificationForTemporaryRegistrationPlatesVM } from "../../models/ModelsAutoGenerated";

export class NotificationForTemporaryRegistrationPlatesValidator extends EAUBaseValidator<NotificationForTemporaryRegistrationPlatesVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(x => x.countOfSetsOfTemporaryPlates).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new NotificationForTemporaryRegistrationPlatesVM(), 'countOfSetsOfTemporaryPlates'));

        this.ruleFor(x => x.countOfSetsOfTemporaryPlates)
            .must(x => ObjectHelper.isNullOrUndefined(x.countOfSetsOfTemporaryPlates)
                || (x.countOfSetsOfTemporaryPlates > 0 && x.countOfSetsOfTemporaryPlates < 100))
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldCanNotContainsLessThanOrMoreThanSymbols, new NotificationForTemporaryRegistrationPlatesVM(), 'countOfSetsOfTemporaryPlates', 1, 99));

        this.ruleFor(x => x.countOfSetsOfTemporaryPlatesText).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new NotificationForTemporaryRegistrationPlatesVM(), 'countOfSetsOfTemporaryPlatesText'));

        this.ruleFor(x => x.registrationNumbersForEachSet).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new NotificationForTemporaryRegistrationPlatesVM(), 'registrationNumbersForEachSet'));
    }
}