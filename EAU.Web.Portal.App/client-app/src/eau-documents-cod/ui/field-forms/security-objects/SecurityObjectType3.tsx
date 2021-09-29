﻿import { SelectListItem, ArrayHelper, ObjectHelper } from "cnsys-core";
import { BaseProps, AsyncUIProps, withAsyncFrame } from "cnsys-ui-react";
import { attributesClassFormControlRequiredLabel, Constants, EAUBaseComponent, ResourceHelpers, attributesClassFormControlLabel, Nomenclatures, GraoTypes, Grao } from "eau-core";
import { runInAction, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { SecurityObjectTransportUI } from "..";
import { SecurityType, AlarmAndSecurityActivity } from "../../../models/ModelsAutoGenerated";
import { withDocumentFormManager, ApplicationFormManagerProps } from "eau-documents";
import { isNotificationForTakingOrRemovingFromSecurityManager } from "../../../form-managers/NotificationForTakingOrRemovingFromSecurityManager";

interface SecurityObjectType3Props extends BaseProps, AsyncUIProps, ApplicationFormManagerProps {
    isForTermination: boolean
}

@observer export class SecurityObjectType3Impl extends EAUBaseComponent<SecurityObjectType3Props, AlarmAndSecurityActivity>{

    @observable private districts: Grao[] = [];

    constructor(props: SecurityObjectType3Props) {
        super(props);

        this.getDistricts = this.getDistricts.bind(this);
        this.handleDistrictsChange = this.handleDistrictsChange.bind(this);

        if (isNotificationForTakingOrRemovingFromSecurityManager(this.props.documentFormManager)) {

            if (this.props.isForTermination && !this.model.terminationDate) {
                this.model.terminationDate = this.props.documentFormManager.getActualDate();
            }
            if (!this.props.isForTermination && !this.model.actualDate) {
                this.model.actualDate = this.props.documentFormManager.getActualDate();
            }
        }
    }

    componentDidMount() {
        this.props.registerAsyncOperation(this.loadEkatteDistricts())
    }

    private loadEkatteDistricts() {
        let that = this;

        return Nomenclatures.getGrao().then(nom => {
            runInAction(() => {
                that.districts = ArrayHelper.queryable.from(nom).where(el => el.graoTypeID == GraoTypes.District).toArray();
            });
        });
    }
    private getDistricts(): SelectListItem[] {
        return this.districts.map(d => {
            return new SelectListItem({ text: d.name, value: d.code });
        })
    }

    renderEdit(): JSX.Element {
        return this.props.isForTermination ? this.renderTerminationEditUI() : this.renderEditUI()
    }

    renderDisplay(): JSX.Element {
        return this.props.isForTermination ? this.renderTerminationDisplayUI() : this.renderDisplayUI()

    }

    renderEditUI() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.actualDate, null, attributesClassFormControlRequiredLabel)}
                        <div className="input-group date-control">
                            {this.dateFor(m => m.actualDate)}
                        </div>
                        <div className="sr-only" id="HELP_P-4">Попълнете две цифри за дата, две цифри за месец и четири цифри за година. Разделете цифрите за дата, месец и година с точка.</div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md">
                        {this.labelFor(m => m.securityObjectName, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.securityObjectName)}
                    </div>
                    <div className="form-group col-md-6">
                        {this.labelFor(m => m.districtCode, null, attributesClassFormControlRequiredLabel)}
                        {this.dropDownListFor(m => m.districtCode, this.getDistricts(), null, this.handleDistrictsChange, true, this.getResource("GL_DDL_CHOICE_L"))}

                    </div>
                    <div className="form-group col-12">
                        {this.labelFor(m => m.address, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.address)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        {this.labelFor(m => m.securityType, null, attributesClassFormControlLabel)}
                        {this.dropDownListFor(m => m.securityType, ResourceHelpers.getSelectListItemsForEnum(SecurityType), null, null, true, this.getResource('GL_DDL_CHOICE_L'))}
                    </div>
                </div>
                <div className="list-fileds-group" id="TRANSPORT"><SecurityObjectTransportUI {...this.bind(m => m.securityTransports)} /></div>
            </>
        )
    }

    renderTerminationEditUI() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.terminationDate, null, attributesClassFormControlRequiredLabel)}
                        <div className="input-group date-control">
                            <div className="input-group date-control">
                                {this.dateFor(m => m.terminationDate)}
                            </div>
                            <div className="sr-only" id="HELP_P-2">Попълнете две цифри за дата, две цифри за месец и четири цифри за година. Разделете цифрите за дата, месец и година с точка.</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md">
                        {this.labelFor(m => m.securityObjectName, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.securityObjectName)}
                    </div>
                    <div className="form-group col-12">
                        {this.labelFor(m => m.address, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.address)}
                    </div>
                </div>
            </>
        )
    }

    renderDisplayUI() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.actualDate)}</h4>
                        {this.dateDisplayFor(this.model.actualDate, Constants.DATE_FORMATS.date)}
                        {this.propertyErrorsDispleyFor(m => m.actualDate)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6 col-xl-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.securityObjectName)}</h4>
                        {this.textDisplayFor(m => m.securityObjectName)}
                    </div>
                    <div className="form-group col-sm-6 col-xl-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.districtCode)}</h4>
                        {this.textDisplayFor(m => m.districtName)}
                        {this.propertyErrorsDispleyFor(m => m.districtCode)}
                    </div>
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.address)}</h4>
                        {this.textDisplayFor(m => m.address)}
                    </div>
                </div>
                {this.model.securityType ?
                    <div className="row">
                        <div className="form-group col-sm-6 col-xl-4">
                            <h4 className="form-control-label">{this.getResourceByProperty(m => m.securityType)}</h4>
                            {ResourceHelpers.getResourceByEmun(this.model.securityType, SecurityType)}
                        </div>
                    </div>
                    : null}
                {this.model.securityTransports && !this.isEmptysSecurityTransports() ?
                    <div className="list-fileds-group"><SecurityObjectTransportUI {...this.bind(m => m.securityTransports)} /></div>
                    : null}
            </>
        )
    }

    renderTerminationDisplayUI() {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.terminationDate)}</h4>
                        {this.dateDisplayFor(this.model.terminationDate, Constants.DATE_FORMATS.date)}
                        {this.propertyErrorsDispleyFor(m => m.terminationDate)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.securityObjectName)}</h4>
                        {this.textDisplayFor(m => m.securityObjectName)}
                    </div>
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.address)}</h4>
                        {this.textDisplayFor(m => m.address)}
                    </div>
                </div>
            </>
        )
    }

    private handleDistrictsChange(e: any) {
        this.model.districtName = null;
        if (e.target.value) {
            this.model.districtName = e.target.text;

            let district = this.districts.find(x => x.code == e.target.value);

            if (district) {
                this.model.districtName = district.name;
            }
        }
    }

    isEmptysSecurityTransports() {
        if (ArrayHelper.queryable.from(this.model.securityTransports).
            where(el => !ObjectHelper.isNullOrUndefined(el.vehicleOwnershipType)
                || !ObjectHelper.isNullOrUndefined(el.registrationNumber)
                || !ObjectHelper.isNullOrUndefined(el.makeAndModel)).toArray().length > 0)
            return false;
        else return true;
    }
}

export const SecurityObjectType3 = withAsyncFrame(withDocumentFormManager(SecurityObjectType3Impl));