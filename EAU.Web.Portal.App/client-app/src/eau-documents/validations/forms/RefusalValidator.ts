import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "..";
import { RefusalVM } from "../..";


export class RefusalValidator extends EAUBaseValidator<RefusalVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.refusalContent).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new RefusalVM(), 'refusalContent'));
    }
}
