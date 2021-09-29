import { EAUBaseValidator } from "eau-core";
import { DocumentFormValidationContext } from "eau-documents";
import { TravelDocumentVM } from "../models/TravelDocumentVM";

export class TravelDocumentValidator extends EAUBaseValidator<TravelDocumentVM, DocumentFormValidationContext> {

    constructor() {
        super();
    }
}