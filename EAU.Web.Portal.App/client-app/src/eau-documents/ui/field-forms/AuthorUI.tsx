﻿import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import { observer } from "mobx-react";
import React from "react";
import { ElectronicServiceRecipientVM } from "../../models/ModelsAutoGenerated";
import { PersonBasicDataUI, EntityBasicDataUI } from ".";

@observer export class AuthorUI extends EAUBaseComponent<BaseProps, ElectronicServiceRecipientVM> {
    constructor(props: BaseProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <>
                {this.model.itemPersonBasicData ?
                    <PersonBasicDataUI {...this.bind(m => m.itemPersonBasicData)} viewMode={this.props.viewMode} skipIdentityDocumentBasicData={true} />
                    :null
                }
                {this.model.itemEntityBasicData ? 
                    <EntityBasicDataUI {...this.bind(m => m.itemEntityBasicData)} viewMode={this.props.viewMode} />
                    : null
                }
            </>
        );
    }
}