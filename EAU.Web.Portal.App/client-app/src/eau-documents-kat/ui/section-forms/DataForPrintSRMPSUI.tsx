﻿import * as React from "react";
import { observer } from "mobx-react";
import { BaseProps, ViewMode } from "cnsys-ui-react";
import { EAUBaseComponent, ValidationSummary, ValidationSummaryStrategy } from "eau-core";
import { FieldFormUI, PoliceDepartmentUI, PersonNames, PersonIdentifierChoiceType } from "eau-documents";
import { DataForPrintSRMPSDataVM, PersonEntityDataVM, PersonDataVM, PersonIdentifierVM, PersonEntityFarmerChoiceType } from "../../models/ModelsAutoGenerated";
import { SelectListItem, ValidationHelper, ObjectHelper } from "cnsys-core";
import { action } from "mobx";
import { VehicleOwnerOrHolderUI } from "../field-forms";

interface DataForPrintSRMPSUIProps extends BaseProps {
}


@observer
export class DataForPrintSRMPSUI
    extends EAUBaseComponent<DataForPrintSRMPSUIProps, DataForPrintSRMPSDataVM> {

    constructor(props: DataForPrintSRMPSUIProps) {
        super(props);

        //Bind       
        this.getNewOwners = this.getNewOwners.bind(this);
        this.holderChecked = this.holderChecked.bind(this);
        this.userChecked = this.userChecked.bind(this);

        //Init
        if (!this.model.holderData)
            this.model.holderData = this.model.newOwners[0];

    }

    renderEdit(): JSX.Element {
        return (
            <>
                <FieldFormUI title={this.getResourceByProperty(m => m.holderData)} >
                    <div className="row">
                        <div className="form-group col-xl-6">
                            {this.labelFor(m => m.selectedNewOwner, null, { className: "form-control-label" })}
                            {this.dropDownListFor(m => m.selectedNewOwner, this.getNewOwners(), { className: "form-control" }, this.handleChangeHolder.bind(this))}
                        </div>
                    </div>
                    {this.renderNewOwner()}
                </FieldFormUI>
                <FieldFormUI title={this.getResourceByProperty(m => m.userData)} >
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <div className="custom-control custom-checkbox">
                                {this.checkBoxFor(m => m.holderNotSameAsUser, null, null, this.handleOnCheck.bind(this))}
                            </div>
                        </div>
                    </div>
                    <ValidationSummary model={this.model} {...this.props} strategy={ValidationSummaryStrategy.includeAllExcept} />
                    {
                        this.model.holderNotSameAsUser
                            ? this.model.checkedUserData
                                ?
                                <>
                                    <div className="interactive-container">
                                        <div className="interactive-container__content">
                                            <VehicleOwnerOrHolderUI {...this.bind(m => m.userData, ViewMode.Display)} />
                                        </div>
                                        <div className="interactive-container__controls">
                                            <button title={this.getResource("GL_CHANGE_L")} className="btn btn-light btn-sm" id="IURIDICHESKO-BUTTON-DELETE" type="button" onClick={this.handleChangeUserData.bind(this)}>
                                                <i className="ui-icon ui-icon-edit" aria-hidden="true"></i>
                                                <span className="d-none">{this.getResource("GL_CHANGE_L")}</span></button>
                                        </div>
                                    </div>
                                </>
                                : <div><VehicleOwnerOrHolderUI {...this.bind(m => m.userData, ViewMode.Edit)} callBack={this.userChecked} /></div>
                            : null
                    }
                </FieldFormUI>
                <FieldFormUI title={this.getResourceByProperty(m => m.possiblePoliceDepartments)} required>
                    {this.renderPoliceDepartment()}
                </FieldFormUI>
            </>
        );
    }

    renderDisplay(): JSX.Element {
        return (
            <>
                <FieldFormUI title={this.getResourceByProperty(m => m.holderData)}>
                    <VehicleOwnerOrHolderUI {...this.bind(m => m.holderData)} />
                </FieldFormUI>
                {this.model.userData ?
                    <FieldFormUI title={this.getResourceByProperty(m => m.userData)}>
                        {this.propertyErrorsDispleyFor(m => m.userData)}
                        <VehicleOwnerOrHolderUI {...this.bind(m => m.userData)} />
                    </FieldFormUI>
                    : null}
                <FieldFormUI title={this.getResourceByProperty(m => m.possiblePoliceDepartments)}>
                    <PoliceDepartmentUI  {...this.bind(m => m.issuingPoliceDepartment, ViewMode.Display)} />
                </FieldFormUI>
            </>
        );
    }

    private renderPoliceDepartment() {
        if (this.model.possiblePoliceDepartments != null && this.model.possiblePoliceDepartments.length > 1) {
            var listItems: SelectListItem[] = [];

            for (var i = 0; i < this.model.possiblePoliceDepartments.length; i++) {
                listItems.push(new SelectListItem({
                    selected: this.model.possiblePoliceDepartments[i].policeDepartmentCode == this.model.issuingPoliceDepartment.policeDepartmentCode,
                    text: this.model.possiblePoliceDepartments[i].policeDepartmentName,
                    value: this.model.possiblePoliceDepartments[i].policeDepartmentCode.toString()
                }))
            }

            return (
                <div className="row">
                    <div className="form-group col-xl-6">
                        {this.dropDownListFor(m => m.issuingPoliceDepartment.policeDepartmentCode, listItems, { className: "form-control" }, (e) => { this.model.issuingPoliceDepartment.policeDepartmentName = this.model.possiblePoliceDepartments.filter(pd => pd.policeDepartmentCode == e.target.value)[0].policeDepartmentName }, false)}
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <PoliceDepartmentUI  {...this.bind(m => m.issuingPoliceDepartment, ViewMode.Display)} />
                </>
            )
        }
    }

    getNewOwners(): SelectListItem[] {
        var newOwners: SelectListItem[] = [];

        for (var i = 0; i < this.model.newOwners.length; i++) {
            if (this.model.newOwners[i].selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person) {

                newOwners.push(new SelectListItem(
                    {
                        text: `${this.model.newOwners[i].person.names.first} ${this.model.newOwners[i].person.names.last}`,
                        value: this.model.newOwners[i].person.identifier.item.toString(),
                        selected: this.model.selectedNewOwner == this.model.newOwners[i].person.identifier.item.toString() ? true : false
                    })
                )

            } else if (this.model.newOwners[i].selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Entity ||
                this.model.newOwners[i].selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Farmer
            ) {
                newOwners.push(new SelectListItem({
                    text: this.model.newOwners[i].entity.name,
                    value: this.model.newOwners[i].entity.identifier,
                    selected: this.model.selectedNewOwner == this.model.newOwners[i].entity.identifier ? true : false
                })
                )
            }
        }

        newOwners.push(new SelectListItem({
            text: this.getResource("GL_NewOwner_L"),
            value: "new owner",
            selected: this.model.selectedNewOwner == "new owner" ? true : false
        }))

        return newOwners;
    }

    @action handleChangeHolder() {
        if (this.model.selectedNewOwner != "new owner") {
            var data = this.model.newOwners.filter((newOwner) =>
                (newOwner.person && newOwner.person.identifier.item == this.model.selectedNewOwner) || (newOwner.entity && newOwner.entity.identifier == this.model.selectedNewOwner));
            this.model.holderData = data && data.length > 0 ? data[0] : undefined;
        } else {
            this.model.checkedHolderData = false;
            this.model.holderData = new PersonEntityDataVM();
            this.model.holderData.selectedPersonEntityFarmerChoiceType = PersonEntityFarmerChoiceType.Person;
            this.model.holderData.person = new PersonDataVM();
            this.model.holderData.person.names = new PersonNames();
            this.model.holderData.person.identifier = new PersonIdentifierVM();
            this.model.holderData.person.identifier.itemElementName = PersonIdentifierChoiceType.EGN;
            this.model.holderData.person.validateIdentityNumber = true;
        }

        this.model.userData = this.model.holderNotSameAsUser ? this.model.userData : undefined;
        this.model.selectedNewOwner = this.model.selectedNewOwner;
        this.model.clearErrors();
    }

    renderNewOwner() {
        if (this.model.selectedNewOwner == "new owner") {
            if (this.model.checkedHolderData) {
                return (
                    <div className="interactive-container">
                        <div className="interactive-container__content">
                            <VehicleOwnerOrHolderUI {...this.bind(m => m.holderData, ViewMode.Display)} />
                        </div>
                        <div className="interactive-container__controls">
                            <button title={this.getResource("GL_CHANGE_L")} className="btn btn-light btn-sm" id="IURIDICHESKO-BUTTON-DELETE" type="button" onClick={this.handleChangeHolderData.bind(this)}>
                                <i className="ui-icon ui-icon-edit" aria-hidden="true"></i>
                                <span className="d-none">{this.getResource("GL_CHANGE_L")}</span></button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <VehicleOwnerOrHolderUI {...this.bind(m => m.holderData)} callBack={this.holderChecked} />
                )
            }
        } else {
            return (
                <VehicleOwnerOrHolderUI {...this.bind(m => m.holderData, ViewMode.Display)} />)
        }
    }

    @action handleOnCheck() {
        if (!this.model.holderNotSameAsUser) {
            this.model.userData = undefined;
        }
        else {
            this.model.userData = new PersonEntityDataVM();
            this.model.userData.selectedPersonEntityFarmerChoiceType = PersonEntityFarmerChoiceType.Person;
            this.model.userData.person = new PersonDataVM();
            this.model.userData.person.names = new PersonNames();
            this.model.userData.person.identifier = new PersonIdentifierVM();
            this.model.userData.person.identifier.itemElementName = PersonIdentifierChoiceType.EGN;
            this.model.userData.person.validateIdentityNumber = true;

            this.model.checkedUserData = false;
        }
    }

    @action holderChecked(e: any) {
        this.model.checkedHolderData = true;
        this.model.holderData.clearErrors();
        this.model.clearErrors();
    }

    @action userChecked(e: any) {
        this.model.checkedUserData = true;
        this.model.userData.clearErrors();
        this.model.clearErrors();

    }

    private handleChangeHolderData(event: any) {

        if (this.model.holderData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person) {
            this.model.holderData.entity = undefined;
        }
        else if (this.model.holderData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Entity) {
            this.model.holderData.person = undefined;
        }

        this.model.checkedHolderData = false;
    }

    private handleChangeUserData(event: any) {

        if (this.model.userData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Person) {
            this.model.userData.entity = undefined;
        }
        else if (this.model.userData.selectedPersonEntityFarmerChoiceType == PersonEntityFarmerChoiceType.Entity) {
            this.model.userData.person = undefined;
        }

        this.model.checkedUserData = false;
    }
}