﻿import { EAUBaseValidator } from "eau-core";
import { RecipientGroupVM } from "../models/ModelsAutoGenerated";
import { DocumentFormValidationContext } from "./DocumentFormValidationContext";
import { AuthorWithQualityVMValidator } from "./AuthorWithQualityVMValidator";
import { ElectronicServiceRecipientVMValidator } from "./ElectronicServiceRecipientVMValidator";

export class RecipientGroupVMValidator extends EAUBaseValidator<RecipientGroupVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.authorWithQuality).setValidator(new AuthorWithQualityVMValidator());
        this.ruleFor(m => m.recipient).setValidator(new ElectronicServiceRecipientVMValidator());
    }
}