﻿import { BaseProps } from "cnsys-ui-react";
import { attributesClassFormControlLabel, attributesClassFormControlRequiredLabel, Constants, EAUBaseComponent } from "eau-core";
import React from "react";
import { IssuerCountryUI } from "./IssuerCountryUI";
import { TravelDocumentVM } from "../../models/TravelDocumentVM";

export class TravelDocumentUI extends EAUBaseComponent<BaseProps, TravelDocumentVM> {

    renderEdit() {
        return <>
            <div className="row">
                <div className="form-group col-sm-6 col-lg-3">
                    {this.labelFor(m => m.identityNumber, null, attributesClassFormControlRequiredLabel)}
                    {this.textBoxFor(m => m.identityNumber)}
                </div>
                <div className="form-group col-sm-6 col-lg-3">
                    {this.labelFor(m => m.identitityIssueDate, null, attributesClassFormControlRequiredLabel)}
                    {this.dateFor(m => m.identitityIssueDate, null, null, null, null, true)}
                </div>
                <div className="form-group col-sm-6 col-lg-3">
                    {this.labelFor(m => m.identitityExpireDate, null, attributesClassFormControlRequiredLabel)}
                    {this.dateFor(m => m.identitityExpireDate, null, null, null, null, true )}
                </div>
                <IssuerCountryUI {...this.bind(m => m.identityIssuer)} />
            </div>
        </>
    }

    renderDisplay() {
        
        return <div className="row">
            <div className="form-group col-sm-6 col-lg-3">
                {this.labelFor(m => m.identityNumber, null, attributesClassFormControlLabel)}
                {this.textDisplayFor(m => m.identityNumber)}
            </div>
            <div className="form-group col-sm-6 col-lg-3">
                {this.labelFor(m => m.identitityIssueDate, null, attributesClassFormControlLabel)}
                <p className="field-text">{this.dateDisplayFor(this.model.identitityIssueDate, Constants.DATE_FORMATS.date)}</p>
            </div>
            <div className="form-group col-sm-6 col-lg-3">
                {this.labelFor(m => m.identitityExpireDate, null, attributesClassFormControlLabel)}
                <p className="field-text">{this.dateDisplayFor(this.model.identitityExpireDate, Constants.DATE_FORMATS.date)}</p>
            </div>
            <IssuerCountryUI {...this.bind(m => m.identityIssuer)} />
        </div>
    }
}