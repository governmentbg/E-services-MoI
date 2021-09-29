﻿import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import React from "react";
import { ApplicationForIssuingDocumentDataVM } from "../../models/ModelsAutoGenerated";
import { DocumentToBeIssuedForUI } from "../field-forms/DocumentToBeIssuedForUI";

export class ApplicationForIssuingDocumentDataUI extends EAUBaseComponent<BaseProps, ApplicationForIssuingDocumentDataVM> {

    renderEdit(): JSX.Element {
        return <>
            <DocumentToBeIssuedForUI {...this.bind(m => m.documentToBeIssuedFor)} />
        </>
    }

    renderDisplay(): JSX.Element {
        return <>
            <DocumentToBeIssuedForUI {...this.bind(m => m.documentToBeIssuedFor)} />
        </>
    }
}