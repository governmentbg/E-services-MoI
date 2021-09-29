﻿import { ObjectHelper } from "cnsys-core";
import { BaseProps, ViewMode } from "cnsys-ui-react";
import { attributesClassFormControlLabel, attributesClassFormControlRequiredLabel, EAUBaseComponent, ResourceHelpers, attributesClassFormControlReqired } from "eau-core";
import { FieldFormUI, GraoAddressUI, IdentityDocumentType } from "eau-documents";
import React from "react";
import { ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM } from "../../models/ModelsAutoGenerated";
import { PersonDataUI } from "../field-forms/PersonDataUI";

export class ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataUI
    extends EAUBaseComponent<BaseProps, ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM> {

    renderEdit(): JSX.Element {
        return <>
            {
                this.model.identificationDocuments && this.model.identificationDocuments.length > 0
                && <FieldFormUI title={this.getResourceByProperty(m => m.identificationDocuments)}>
                    <div className="form-group">
                        <p className="field-text"> {ResourceHelpers.getResourceByEmun(this.model.identificationDocuments[0], IdentityDocumentType).toUpperCase()}</p>
                    </div>
                </FieldFormUI>
            }
            <FieldFormUI title={this.getResourceByProperty(m => m.person)} required>
                <PersonDataUI {...this.bind(m => m.person)} viewMode={this.model.identificationDocuments
                    && this.model.identificationDocuments.length > 0
                    && this.model.identificationDocuments[0] == IdentityDocumentType.DrivingLicense ? ViewMode.Display : ViewMode.Edit} />
                <div className="row">
                    <div className="form-group col-sm-4">
                        {this.labelFor(m => m.phone, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.phone, attributesClassFormControlReqired)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.permanentAddress, null, attributesClassFormControlLabel)}
                        <GraoAddressUI {...this.bind(m => m.permanentAddress)} viewMode={ViewMode.Display} />
                    </div>
                </div>
                {this.labelFor(m => m.abroadAddress, null, attributesClassFormControlLabel)}
                {this.textAreaFor(m => m.abroadAddress, null, 3)}
            </FieldFormUI>
        </>
    }

    renderDisplay(): JSX.Element {
        return <>
            {
                this.model.identificationDocuments && this.model.identificationDocuments.length > 0
                && <FieldFormUI title={this.getResourceByProperty(m => m.identificationDocuments)}>
                    <div className="form-group">
                        <p className="field-text"> {ResourceHelpers.getResourceByEmun(this.model.identificationDocuments[0], IdentityDocumentType).toUpperCase()}</p>
                    </div>
                </FieldFormUI>
            }
            <FieldFormUI title={this.getResourceByProperty(m => m.person)}>
                <PersonDataUI {...this.bind(m => m.person)} />
                <div className="row">
                    <div className="form-group col-sm-4">
                        {this.labelFor(m => m.phone, null, attributesClassFormControlLabel)}
                        {this.textDisplayFor(m => m.phone)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.permanentAddress, null, attributesClassFormControlLabel)}
                        <GraoAddressUI {...this.bind(m => m.permanentAddress)} viewMode={ViewMode.Display} />
                    </div>
                </div>
                {
                    !ObjectHelper.isStringNullOrEmpty(this.model.abroadAddress)
                        ? <div className="row">
                            <div className="form-group col-12">
                                {this.labelFor(m => m.abroadAddress, null, attributesClassFormControlLabel)}
                                <p className="field-text">{this.model.abroadAddress}</p>
                            </div>
                        </div>
                        : null
                }
                {this.propertyErrorsDispleyFor(m => m.abroadAddress)}
            </FieldFormUI>
        </>
    }
}