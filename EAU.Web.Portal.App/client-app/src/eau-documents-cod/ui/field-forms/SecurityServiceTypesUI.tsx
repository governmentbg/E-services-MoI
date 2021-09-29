﻿import { BaseProps } from "cnsys-ui-react";
import { EAUBaseComponent, ResourceHelpers } from "eau-core";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { PointOfPrivateSecurityServicesLaw, ScopeOfCertification, SecurityServiceTypesVM, TerritorialScopeOfServicesVM } from "../../models/ModelsAutoGenerated";
import { TerritorialScopeOfServicesUI } from "./TerritorialScopeOfServicesUI";

@observer export class SecurityServiceTypesUI extends EAUBaseComponent<BaseProps, SecurityServiceTypesVM>{

    @observable public showTerritorialScopeOfServicesSelection: boolean;
    private securityServicesLawPropertyName: string;

    constructor(props?: any, context?: any) {
        super(props, context);

        this.showTerritorialScopeOfServicesSelection = this.model.isSelected;
        this.onChangePointOfPrivateSecurityServicesLaw = this.onChangePointOfPrivateSecurityServicesLaw.bind(this);

        this.securityServicesLawPropertyName = ResourceHelpers.getPropertyKey(ResourceHelpers.getPropertyKeyByEnum(this.model.pointOfPrivateSecurityServicesLaw, PointOfPrivateSecurityServicesLaw), PointOfPrivateSecurityServicesLaw)
    }

    renderEdit() {

        return (
            <fieldset className="fields-group">
                <legend>
                    <h4 className="field-title">
                        <div className="custom-control custom-checkbox">
                            {this.checkBoxFor(m => m.isSelected, this.securityServicesLawPropertyName, { className: "custom-control-input" }, this.onChangePointOfPrivateSecurityServicesLaw)}
                        </div>
                    </h4>
                </legend>
                {this.showTerritorialScopeOfServicesSelection == true ? <TerritorialScopeOfServicesUI {...this.bind(m => m.territorialScopeOfServices)} /> : ""}
            </fieldset>
        );
    }

    renderDisplay() {
        return (
            <div className="row">
                <div className="form-group col-12">
                    <h4 className="form-control-label">
                        {ResourceHelpers.getResourceByProperty(PointOfPrivateSecurityServicesLaw[this.model.pointOfPrivateSecurityServicesLaw], PointOfPrivateSecurityServicesLaw)}
                    </h4>
                    <div className="ml-3">
                        {this.showTerritorialScopeOfServicesSelection == true ? <TerritorialScopeOfServicesUI {...this.bind(m => m.territorialScopeOfServices)} /> : ""}
                    </div>
                </div>
            </div>
        );
    };

    @action public onChangePointOfPrivateSecurityServicesLaw(event?: any, value?: string) {
        if (value) {
            this.model.territorialScopeOfServices = new TerritorialScopeOfServicesVM();
            this.model.territorialScopeOfServices.scopeOfCertification = ScopeOfCertification.WholeCountry;

            this.showTerritorialScopeOfServicesSelection = true;
        }
        else {
            this.model.territorialScopeOfServices = null;

            this.showTerritorialScopeOfServicesSelection = false;
        }
    }
}