﻿import { BindableReference } from 'cnsys-core';
import { AsyncUIProps, BaseProps, withAsyncFrame } from 'cnsys-ui-react';
import { EAUBaseComponent, resourceManager } from 'eau-core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../Constants';
import { ANDObligationSearchCriteria, ANDObligationSearchMode, DocTypes } from '../../models/ModelsAutoGenerated';
import { KatObligationsValidator } from '../../validations/KatObligationsValidator';
import { KatObligationsFormByActUI } from './KatObligationsFormByActUI';
import { KatObligationsFormByIdentityUI } from './KatObligationsFormByIdentityUI';

interface KatObligationsFormProps extends BaseProps, AsyncUIProps {
    callbackFormProccessStatus: (value: any, model) => any;
    querySearchParams: ANDObligationSearchCriteria
}

@observer class KatObligationsFormUIImpl extends EAUBaseComponent<KatObligationsFormProps, ANDObligationSearchCriteria>{

    @observable selectedSearchType: number = 1;

    constructor(props: KatObligationsFormProps) {
        super(props);

        //Init
        this.validators = [new KatObligationsValidator()];
        this.model = new ANDObligationSearchCriteria();
        this.model.mode = 1; // По подразбиране формата е в режим търсене оп ЕГН/СУМПС

        //Bind
        this.onSearch = this.onSearch.bind(this);
        this.processSearchCriteria = this.processSearchCriteria.bind(this);
        this.processSearchCriteria();
    }

    processSearchCriteria() {

        if (this.props.querySearchParams && this.props.querySearchParams.mode in ANDObligationSearchMode && this.validators[0].validate(this.props.querySearchParams)) {

            switch (Number(this.props.querySearchParams.mode)) {
                case ANDObligationSearchMode.Document:

                    if (this.props.querySearchParams.documentType in DocTypes)
                        this.props.callbackFormProccessStatus(true, this.props.querySearchParams);
                    break;

                default:
                    this.props.callbackFormProccessStatus(true, this.props.querySearchParams);
                    break;
            }
        }
    }

    /**
     * Смяна на режим на търсене СУМПС или ФИШ/АУАН/НП
     * @param searchType 
     */
    @action onSearchTypeChange(searchType: number) {
        this.selectedSearchType = searchType;
        this.model.mode = this.selectedSearchType;
        this.model.drivingLicenceNumber = this.model.obligedPersonIdent = this.model.documentNumber = this.model.documentSeries = this.model.documentType = null;
        this.model.clearErrors(true);
    }

    /**
     * Проверява за валидни критерии за търсене
     * @param e 
     */
    @action onSearch(e) {
        e.preventDefault();

        if (this.validators[0].validate(this.model))
            this.props.callbackFormProccessStatus(true, this.model);
    }

    render() {
        return (
            <>
                <div className="alert alert-info" role="alert"><p>{this.getResource("GL_KAT_OBLIGATION_RESULT_I")}</p></div>
                <form ref="oblgForm">
                    <fieldset className="fields-group">
                        <legend>
                            <h3 className="field-title"><span>{this.getResource("GL_DATA_FOR_CHECK_L")}</span></h3>
                        </legend>

                        <div className="row">
                            <div className="col-12 form-group">
                                <div className="form-inline">
                                    <div className="custom-control-inline custom-control custom-radio">
                                        <input className="custom-control-input" onChange={() => this.onSearchTypeChange(ANDObligationSearchMode.ObligedPerson)} name="byIdentity" id="byIdentity" value="byIdentity" type="radio" checked={this.selectedSearchType === ANDObligationSearchMode.ObligedPerson ? true : false} />
                                        <label className="custom-control-label" htmlFor="byIdentity">{this.getResource("GL_DRIVING_LICENSE_L")}</label>
                                    </div>
                                    <div className="custom-control-inline custom-control custom-radio">
                                        <input className="custom-control-input" onChange={() => this.onSearchTypeChange(ANDObligationSearchMode.Document)} name="byAct" id="byAct" value="byAct" type="radio" checked={this.selectedSearchType === ANDObligationSearchMode.Document ? true : false} />
                                        <label className="custom-control-label" htmlFor="byAct">{this.getResource("GL_ACT_AUAN_NP_L")}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                this.selectedSearchType === ANDObligationSearchMode.ObligedPerson
                                    ? <KatObligationsFormByIdentityUI validator={this.validators} modelReference={new BindableReference(this.model)} />
                                    : <KatObligationsFormByActUI validators={this.validators} modelReference={new BindableReference(this.model)} />
                            }
                        </div>
                    </fieldset>
                    <div className="button-bar button-bar--form button-bar--responsive">
                        <div className="right-side">
                            <button type="button" onClick={this.onSearch} className="btn btn-primary">{this.getResource("GL_CHECK_L")}</button>
                        </div>

                        <div className="left-side">
                            <Link className="btn btn-secondary" to={Constants.PATHS.Services}>{resourceManager.getResourceByKey("GL_REFUSE_L")}</Link>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export const KatObligationsFormUI = withAsyncFrame(KatObligationsFormUIImpl)