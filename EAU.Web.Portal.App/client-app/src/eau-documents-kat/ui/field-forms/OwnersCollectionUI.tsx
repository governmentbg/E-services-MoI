﻿import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import { PersonIdentifierChoiceType } from "eau-documents";
import { action } from "mobx";
import React from "react";
import { PersonDataVM, PersonEntityChoiceType, PersonEntityDataVM, PersonIdentifierVM, VehicleOwnerDataVM, RequestForDecisionForDealDataVM } from "../../models/ModelsAutoGenerated";
import { OwnerUI } from "./OwnerUI";

export class OwnersCollectionUI extends EAUBaseComponent<BaseProps, RequestForDecisionForDealDataVM>{

    renderEdit(): JSX.Element {
        return (
            <>
                <ul className="list-filed">
                    {this.model.ownersCollection.map((item: VehicleOwnerDataVM, index: number) => {
                        return (
                            <li className="list-filed__item" key={index} role="group">
                                <div id={"ownersCollection-" + index} className="interactive-container interactive-container--form">
                                    <div className="interactive-container__content record-container">
                                        <OwnerUI key={index} {...this.bindArrayElement(m => m.ownersCollection[index], [index])} />
                                    </div>
                                    <div className="interactive-container__controls">
                                        {index > 0
                                            ? <button title={this.getResource("GL_DELETE_L")} className="btn btn-light btn-sm" onFocus={() => this.onHover(index)} onBlur={() => this.onHoverLeave(index)} onMouseOver={() => this.onHover(index)} onMouseLeave={() => this.onHoverLeave(index)} onClick={this.removeOwner.bind(this, index)}>
                                                <i className="ui-icon ui-icon-times" aria-hidden="true"></i>
                                                <span className="d-none">{this.getResource("GL_DELETE_L")}</span>
                                            </button>
                                            : null}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="row">
                    <div className="form-group col">
                        <hr aria-hidden="true" />
                        <button className="btn btn-light" onClick={this.addOwner.bind(this)} type="button">
                            <i className="ui-icon ui-icon-plus mr-1" aria-hidden="true"></i>
                            {this.getResource("GL_ADD_CURRENT_OWNER_L")}
                        </button>
                    </div>
                </div>
            </>
        )
    }


    renderDisplay(): JSX.Element {
        return (
            <ul className="list-filed">
                {
                    this.model.ownersCollection.map((item: VehicleOwnerDataVM, index: number) => {
                        return (
                            <li className="list-filed__item" role="group" key={index}>
                                <OwnerUI key={index} {...this.bindArrayElement(m => m.ownersCollection[index], [index])} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    @action addOwner() {
        var newOwner = new VehicleOwnerDataVM();
        newOwner.personEntityData = new PersonEntityDataVM();
        newOwner.personEntityData.selectedChoiceType = PersonEntityChoiceType.Person;
        newOwner.personEntityData.person = new PersonDataVM();
        newOwner.personEntityData.person.identifier = new PersonIdentifierVM();
        newOwner.personEntityData.person.identifier.itemElementName = PersonIdentifierChoiceType.EGN;
        newOwner.personEntityData.person.validateIdentityNumber = true;
        this.model.ownersCollection.push(newOwner);
    }

    removeOwner(index: number) {
        if (index > 0) {
            this.model.ownersCollection.splice(index, 1);
        }
    }

    private onHover(index: number) {
        $("#" + "ownersCollection-" + index).addClass("interactive-container--focus");
    }

    private onHoverLeave(index: number) {
        $("#" + "ownersCollection-" + index).removeClass("interactive-container--focus");
    }
}