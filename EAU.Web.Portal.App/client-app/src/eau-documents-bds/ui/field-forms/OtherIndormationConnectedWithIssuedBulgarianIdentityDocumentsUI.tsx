﻿import { ObjectHelper } from "cnsys-core";
import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import React from "react";
import { OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM } from "../../models/ModelsAutoGenerated";

export class OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsUI extends EAUBaseComponent<BaseProps, OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM> {

    renderEdit(): JSX.Element {
        return this.textAreaFor(x => x.nessesaryInformation)
    }

    renderDisplay(): JSX.Element {
        return <>
            {this.textDisplayFor(m => m.nessesaryInformation)} 
        </>
    }
}