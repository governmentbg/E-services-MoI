﻿import { ObjectHelper } from "cnsys-core";
import { BaseProps } from "cnsys-ui-react";
import { withCollectionItems } from "eau-documents";
import React from "react";
import { SecurityTransport, VehicleOwnershipType } from "../../models/ModelsAutoGenerated";
import { EAUBaseComponent, attributesClassFormControlRequiredLabel, ResourceHelpers, attributesClassFormControlLabel } from "eau-core";

interface  SecurityObjectTransportProps extends BaseProps {
    isRequired?: boolean
}

class SecurityObjectTransportUIImpl extends EAUBaseComponent<SecurityObjectTransportProps, SecurityTransport>{
    private classOfLabels: {};

    constructor(props: SecurityObjectTransportProps) {
        super(props);

        if (this.props.isRequired && this.props.isRequired === true) {
            this.classOfLabels = attributesClassFormControlRequiredLabel;
        }
        else
            this.classOfLabels = attributesClassFormControlLabel;
    }

    renderEdit() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-lg-6">
                        {this.labelFor(m => m.vehicleOwnershipType, null, this.classOfLabels)}
                        {this.dropDownListFor(m => m.vehicleOwnershipType, ResourceHelpers.getSelectListItemsForEnum(VehicleOwnershipType), null, null, true, this.getResource('GL_DDL_CHOICE_L'))}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6 col-md-12 col-lg-6 ">
                        {this.labelFor(m => m.registrationNumber, null, this.classOfLabels)}
                        {this.textBoxFor(m => m.registrationNumber)}
                    </div>
                    <div className="form-group col-sm-6 col-md-12 col-lg-6">
                        {this.labelFor(m => m.makeAndModel, null, this.classOfLabels)}
                        {this.textBoxFor(m => m.makeAndModel)}
                    </div>
                </div>
            </>
        );
    }

    renderDisplay() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-sm-12 col-xl-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.vehicleOwnershipType)}</h4>
                        {ResourceHelpers.getResourceByEmun(this.model.vehicleOwnershipType, VehicleOwnershipType)}
                        {this.propertyErrorsDispleyFor(m => m.vehicleOwnershipType)}
                    </div>
                    <div className="form-group col-sm-6 col-xl-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.registrationNumber)}</h4>
                        {this.textDisplayFor(m => m.registrationNumber)}
                    </div>
                    <div className="form-group col-sm-6 col-xl-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.makeAndModel)}</h4>
                        {this.textDisplayFor(m => m.makeAndModel)}
                    </div>
                </div>
            </>
        );
    };

}

export const SecurityObjectTransportUI = withCollectionItems(SecurityObjectTransportUIImpl, {
    initItem: () => new SecurityTransport(),
    addButtonLabelKey: 'GL_ADD_TRANSPORT_L'
})