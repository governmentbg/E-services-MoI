﻿import { DocumentProcessContextBase } from "./IDocumentProcessContext";
import { NewProcessRequest } from "../models/ModelsAutoGenerated";
import { DocumentProcess } from "../models/DocumentProcess";

export class PreviewDocumentProcessContext extends DocumentProcessContextBase {
    constructor() {
        super();
    }

    public createPreviewDocumentProcess(documentURI?: string, caseFileURI?: string, docProcessId?: number,  notAcknowledgedMessageURI?: string): Promise<void> {
        var request = new NewProcessRequest();
        request.documentURI = documentURI;
        request.caseFileURI = caseFileURI;
        request.docProcessId = docProcessId;
        request.notAcknowledgedMessageURI = notAcknowledgedMessageURI;

        return this.processDataService.createDocumentProcess(request).bind(this).then(process => {
            return this.initDocumentProcessContext(process);
        })
    }

    public initDocumentProcessContext(process: DocumentProcess): Promise<void> {
        return super.initDocumentProcessContext(process);
    }

    public getCreatePreviewDocumentProcessURL(): string {
        return this.processDataService.getCreatePreviewDocumentProcessURL();
    }
}