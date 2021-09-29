﻿import { SelectListItem } from "cnsys-core";
import { BaseProps } from "cnsys-ui-react";
import { attributesClassFormControlReqired, attributesClassFormControlRequiredLabel, EAUBaseComponent } from "eau-core";
import { ApplicationFormManagerProps, PersonIdentifier, PersonIdentifierChoiceType, withDocumentFormManager } from "eau-documents";
import { action } from 'mobx';
import { observer } from "mobx-react";
import React from "react";
import { OwnerVM, PersonEntityChoiceType } from "../../models/ModelsAutoGenerated";
import { PersonIdentifierKATUI } from "./PersonIdentifierKATUI";

interface VehicleDataRequestOwnersProps extends BaseProps, ApplicationFormManagerProps {
}

@observer class VehicleOwnerImpl extends EAUBaseComponent<VehicleDataRequestOwnersProps, OwnerVM> {

    private peronEntityChoiceTypes: SelectListItem[];

    constructor(props?: VehicleDataRequestOwnersProps, context?: any) {
        super(props, context);

        //Bind
        this.onOwnerTypeChange = this.onOwnerTypeChange.bind(this);

        this.peronEntityChoiceTypes = [
            new SelectListItem({
                value: PersonEntityChoiceType.Person.toString(),
                text: this.getResource("DOC_GL_PersonAndEntityChoiceType_Person_L"),
                selected: this.model.type === PersonEntityChoiceType.Person
            }),
            new SelectListItem({
                value: PersonEntityChoiceType.Entity.toString(),
                text: this.getResource("DOC_KAT_LEGAL_ENTITY_OR_AGRICULTURAL_PRODUCER_L"),
                selected: this.model.type === PersonEntityChoiceType.Entity
            })
        ];
    }

    renderEdit(): JSX.Element {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        <fieldset>
                            <legend className="form-control-label">{this.getResourceByProperty(m => m.type)}</legend>
                            {this.radioButtonListFor(m => m.type, this.peronEntityChoiceTypes, null, this.onOwnerTypeChange)}
                        </fieldset>
                    </div>
                </div>
                {this.model.type == PersonEntityChoiceType.Person ?
                    <PersonIdentifierKATUI {...this.bind(m => m.personIdentifier)} />
                    :
                    <div className="row">
                        <div className="col-12">
                            {this.labelFor(m => m.entityIdentifier, null, attributesClassFormControlRequiredLabel)}
                        </div>
                        <div className="form-group col col-sm-6">
                            {this.textBoxFor(m => m.entityIdentifier, attributesClassFormControlReqired)}
                        </div>
                    </div>}
            </>
        );
    }

    renderDisplay(): JSX.Element {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {/** Вид на лицето */}
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.type)}</h4>
                        <p className="field-text">
                            {this.model.type == PersonEntityChoiceType.Person && this.getResource("DOC_GL_PersonAndEntityChoiceType_Person_L")}
                            {this.model.type == PersonEntityChoiceType.Entity && this.getResource("DOC_KAT_LEGAL_ENTITY_OR_AGRICULTURAL_PRODUCER_L")}
                        </p>
                        {this.propertyErrorsDispleyFor(m => m.type)}
                    </div>
                </div>
                {this.model.type == PersonEntityChoiceType.Person ?
                    <PersonIdentifierKATUI {...this.bind(m => m.personIdentifier)} />
                    :
                    <div className="row">
                        <div className="form-group col-6">
                            <h4 className="form-control-label">{this.getResourceByProperty(x => x.entityIdentifier)}</h4>
                            {this.textDisplayFor(m => m.entityIdentifier)}
                        </div>
                    </div>}
            </>
        );
    }

    @action onOwnerTypeChange(e: any): void {
        let val: PersonEntityChoiceType = Number(e.target.value);

        if (val == PersonEntityChoiceType.Person) {
            this.model.type = PersonEntityChoiceType.Person;
            this.model.entityIdentifier = undefined;
            this.model.personIdentifier = new PersonIdentifier();
            this.model.personIdentifier.itemElementName = PersonIdentifierChoiceType.EGN;
        } else {
            this.model.type = PersonEntityChoiceType.Entity;
            this.model.personIdentifier = undefined;
            this.model.entityIdentifier = undefined;
        }
    }
}

export const VehicleOwnerUI = withDocumentFormManager(VehicleOwnerImpl)