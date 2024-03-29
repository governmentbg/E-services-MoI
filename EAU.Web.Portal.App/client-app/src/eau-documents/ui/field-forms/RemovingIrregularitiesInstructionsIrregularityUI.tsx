﻿import { SelectListItem } from "cnsys-core";
import { AsyncUIProps, BaseProps, withAsyncFrame, ViewMode } from "cnsys-ui-react";
import { attributesClassFormControlLabel, attributesClassFormControlRequiredLabel, EAUBaseComponent, TextEditorUI } from "eau-core";
import { observable, runInAction } from "mobx";
import React from "react";
import { RemovingIrregularitiesInstructionsIrregularitiesVM } from "../../models/ModelsAutoGenerated";
import { NomenclatureType } from "../../models/NomenclatureItem";
import { DocumentFormManagerProps, withDocumentFormManager } from "../document-forms";

interface RemovingIrregularitiesInstructionsIrregularityProps extends BaseProps, DocumentFormManagerProps, AsyncUIProps {
}

export class RemovingIrregularitiesInstructionsIrregularityImpl extends EAUBaseComponent<RemovingIrregularitiesInstructionsIrregularityProps, RemovingIrregularitiesInstructionsIrregularitiesVM>{
    @observable private selectListItems: SelectListItem[] = [];

    constructor(props: RemovingIrregularitiesInstructionsIrregularityProps) {
        super(props);

        if (this.props.viewMode == ViewMode.Edit && this.selectListItems && this.selectListItems.length == 0)
            this.initServiceIrregularities();
    }

    renderEdit(): JSX.Element {

        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.irregularityType, null, attributesClassFormControlRequiredLabel)}
                        {this.dropDownListFor(m => m.irregularityType, this.selectListItems, null, null, true, this.getResource('GL_DDL_CHOICE_L'))}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.additionalInformationSpecifyingIrregularity, null, attributesClassFormControlLabel)}
                        <TextEditorUI {...this.bind(m => m.additionalInformationSpecifyingIrregularity)} />
                    </div>
                </div>
            </>
        )
    };

    renderDisplay(): JSX.Element {

        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {this.textDisplayFor(m => m.irregularityType)}
                        {this.model.additionalInformationSpecifyingIrregularity ?
                            this.rawHtml(this.model.additionalInformationSpecifyingIrregularity)
                            : null
                        }
                    </div>
                </div>

            </>
        )
    }

    initServiceIrregularities() {
        this.props.registerAsyncOperation(this.props.documentFormManager.getNomenclatures(NomenclatureType.Irregularity).then(irregularities => {

            if (irregularities && irregularities.length > 0) {
                runInAction(() => {
                    for (let i: number = 0; i < irregularities.length; i++) {

                        let tmpItem: SelectListItem = new SelectListItem({
                            value: irregularities[i].value,
                            text: irregularities[i].value
                        });

                        this.selectListItems.push(tmpItem);
                    }
                });
            }
        }));
    }
}

export const RemovingIrregularitiesInstructionsIrregularityUI = withAsyncFrame(withDocumentFormManager(RemovingIrregularitiesInstructionsIrregularityImpl));