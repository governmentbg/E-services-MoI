﻿import { BaseProps } from "cnsys-ui-react";
import { attributesClassFormControlLabel, attributesClassFormControlReqired, attributesClassFormControlRequiredLabel, attributesClassInlineRadioButtons, EAUBaseComponent, ResourceHelpers } from "eau-core";
import { action } from "mobx";
import React from "react";
import { Employee, EmployeeIdentifierType } from "../../models/ModelsAutoGenerated";

export class EmployeeUI extends EAUBaseComponent<BaseProps, Employee>{
    constructor(props?: BaseProps, context?: any) {
        super(props, context);

        //Bind
        this.onEmployeeIdentifierTypeChange = this.onEmployeeIdentifierTypeChange.bind(this);
    }

    renderEdit() {
        return (
            <div className="row">
                <div className="form-group col-12 col-lg-6 col-xl-7">
                    {this.labelFor(x => x.fullName, null, attributesClassFormControlRequiredLabel)}
                    {this.textBoxFor(x => x.fullName, attributesClassFormControlReqired)}
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="row">
                        <div className="col-12">
                            {this.labelFor(x => x.identifier, null, attributesClassFormControlRequiredLabel)}
                        </div>
                        <div className="form-group col col-sm-6 col-lg">
                            {this.textBoxFor(x => x.identifier, attributesClassFormControlReqired)}
                        </div>
                        <div className="form-group col-auto">
                            <fieldset className="form-inline">
                                <legend className="sr-only">{this.getResourceByProperty(x => x.employeeIdentifierType)}</legend>
                                {this.radioButtonListFor(m => m.employeeIdentifierType
                                    , ResourceHelpers.getSelectListItemsForEnum(EmployeeIdentifierType)
                                    , attributesClassInlineRadioButtons
                                    , this.onEmployeeIdentifierTypeChange)}
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderDisplay() {
        return (
            <div className="row">
                <div className="form-group col-sm-6">
                    {this.labelFor(x => x.fullName, null, attributesClassFormControlLabel)}
                    {this.textDisplayFor(x => x.fullName)}
                </div>
                <div className="form-group col-sm-6">
                    <h4 className="form-control-label">{ResourceHelpers.getResourceByEmun(this.model.employeeIdentifierType, EmployeeIdentifierType)}</h4>
                    {this.textDisplayFor(m => m.identifier)}
                </div>
            </div>
        );
    };

    @action private onEmployeeIdentifierTypeChange(e: any): void {
        this.model.removeError("identifier");
    }
}