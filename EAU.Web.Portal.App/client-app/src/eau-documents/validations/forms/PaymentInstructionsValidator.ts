import { EAUBaseValidator, ResourceHelpers, resourceManager } from "eau-core";
import { DocumentFormValidationContext, ErrMsgCodesConstants } from "..";
import { PaymentInstructionsVM } from "../..";

export class PaymentInstructionsValidator extends EAUBaseValidator<PaymentInstructionsVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.amount).notEmpty()
            .withMessage(resourceManager.getResourceByKey("DOC_GL_PaymentData_AmountRequired_E"));

        //this.ruleFor(m => m.amount).must(obj => { return obj.amount && obj.amount > 0 })
        //    .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldMustContainsDigitGreatThan, new PaymentInstructionsVM(), 'amount', 0));

    }
}