import * as React from 'react';
import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import { observer } from "mobx-react";
import { SelectListItem} from "cnsys-core";
import { ItemChoiceType1, DocumentMustServeToVM } from '../../models';
import { action } from 'mobx';

interface DocumentMustServeToUIProps extends BaseProps {
}

@observer export class DocumentMustServeToUI extends EAUBaseComponent<DocumentMustServeToUIProps, DocumentMustServeToVM> {
    private listItems: SelectListItem[];

    constructor(props: DocumentMustServeToUIProps) {
        super(props);

        //Bind
        this.onRadioChange = this.onRadioChange.bind(this);

        //Init
        this.listItems = [
            new SelectListItem({
                value: ItemChoiceType1.InRepublicOfBulgariaDocumentMustServeTo.toString(),
                text: this.getResourceByProperty(m => m.itemInRepublicOfBulgariaDocumentMustServeTo),
                selected: this.model.itemElementName === ItemChoiceType1.InRepublicOfBulgariaDocumentMustServeTo
            }),
            new SelectListItem({
                value: ItemChoiceType1.AbroadDocumentMustServeTo.toString(),
                text: this.getResourceByProperty(m => m.itemAbroadDocumentMustServeTo),
                selected: this.model.itemElementName === ItemChoiceType1.AbroadDocumentMustServeTo
            })
        ];

        if (!this.model.itemElementName) {
            this.model.itemElementName = ItemChoiceType1.InRepublicOfBulgariaDocumentMustServeTo;
        }
    }

    renderEdit(): JSX.Element {
        return (
            <>
                <div className="form-inline">
                    {this.radioButtonListFor(m => m.itemElementName, this.listItems, { className: "custom-control-inline custom-control custom-radio" }, this.onRadioChange)}
                </div>
                {this.model.itemElementName == ItemChoiceType1.AbroadDocumentMustServeTo ?
                    this.textAreaFor(m => m.itemAbroadDocumentMustServeTo) :
                    this.textAreaFor(m => m.itemInRepublicOfBulgariaDocumentMustServeTo)}
            </>
        );
    }
    
    renderDisplay(): JSX.Element {
        return (
            <>
                {this.model.itemElementName == ItemChoiceType1.AbroadDocumentMustServeTo
                    ? this.labelFor(m => m.itemAbroadDocumentMustServeTo)
                    : this.labelFor(m => m.itemInRepublicOfBulgariaDocumentMustServeTo)}
                {this.model.itemElementName == ItemChoiceType1.AbroadDocumentMustServeTo
                    ? this.textDisplayFor(m => m.itemAbroadDocumentMustServeTo)
                    : this.textDisplayFor(m => m.itemInRepublicOfBulgariaDocumentMustServeTo)}
            </>
        );
    }

    @action private onRadioChange(e: any): void {
        let that = this;

        if (e.target.value === ItemChoiceType1.AbroadDocumentMustServeTo.toString()) {
            that.model.itemInRepublicOfBulgariaDocumentMustServeTo = undefined;
        } else {
            that.model.itemAbroadDocumentMustServeTo = undefined;
        }        
    }
}