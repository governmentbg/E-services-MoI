﻿import { ObjectHelper } from "cnsys-core";
import { AsyncUIProps, BaseProps, ConfirmationModal, withAsyncFrame } from 'cnsys-ui-react';
import { EAUBaseComponent, NotificationPanel, NotificationType, Pagination, ValidationSummaryErrors } from 'eau-core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../../Constants';
import { RegistrationData, RegistrationDataSearchCriteria } from '../../../models/ModelsAutoGenerated';
import { RegistrationsDataService } from '../../../services/RegistrationsDataService';


interface PepPaymentsListProps extends BaseProps, AsyncUIProps {
}

@observer class PepPaymentsImpl extends EAUBaseComponent<PepPaymentsListProps, RegistrationDataSearchCriteria>{

    @observable private registrationData: RegistrationData[];
    @observable private isLoaded: boolean;
    @observable private notification: any;

    private registrationsDataService: RegistrationsDataService;

    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
        this.deleteValue = this.deleteValue.bind(this);

        this.init();
    }

    render() {

        let dataResult: any = null;

        if (this.isLoaded) {

            if (!ObjectHelper.isNullOrUndefined(this.registrationData)) {
                dataResult = <div className="card">
                    <div className="card-body">
                        {this.notification}
                        <ValidationSummaryErrors asyncErrors={this.props.asyncErrors} />
                        <div className="card-navbar">
                            <div className="button-bar">
                                <div className="right-side">
                                    <Link to={Constants.PATHS.PaymentsAddPep}>
                                        <button className="btn btn-primary"><i className="ui-icon ui-icon-plus-white"></i> {this.getResource("GL_ADD_PAYMENT_L")}</button>
                                    </Link>
                                </div>
                                <div className="left-side"></div>
                            </div>
                        </div>
                        <Pagination activePage={this.model.page} count={this.model.count}
                            pagesCount={this.model.getPagesCount()} maxVisiblePage={10} size="sm"
                            onSelect={this.onPageChange} aditionalCssClass="pagination-container--page-top" />

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>{this.getResource("GL_PROVIDER_NAME_L")}</th>
                                        <th className="w-10">{this.getResource("GL_ACTIONS_L")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.registrationData.map((pepPayment, index) => <tr key={pepPayment.type + "_" + index}>

                                            <td>{pepPayment.description}</td>
                                            <td className="buttons-td">
                                                <Link to={Constants.PATHS.PaymentsEditPep.replace(':pepID', pepPayment.registrationDataID.toString())}>
                                                    <button className="btn btn-secondary" title={this.getResource("GL_EDIT_L")}>
                                                        <i className="ui-icon ui-icon-edit"></i>
                                                    </button>
                                                </Link>
                                                <ConfirmationModal
                                                    modalTitleKey={"GL_DELETING_L"}
                                                    modalTextKeys={["GL_DEL_CONFIRM_L"]}
                                                    noTextKey="GL_CANCEL_L"
                                                    yesTextKey="GL_CONFIRM_L"
                                                    onSuccess={() => this.deleteValue(pepPayment.registrationDataID)}>
                                                    <button type="button" className="btn btn-secondary" title={this.getResource("GL_DELETING_L")}>
                                                        <i className="ui-icon ui-icon-trash"></i>
                                                    </button>
                                                </ConfirmationModal>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination activePage={this.model.page} count={this.model.count}
                            pagesCount={this.model.getPagesCount()} maxVisiblePage={10} size="sm"
                            onSelect={this.onPageChange} />
                    </div>
                </div>
            } else {
                dataResult = (<div className="card">
                    <div className="card-body">
                        <ValidationSummaryErrors asyncErrors={this.props.asyncErrors} />
                        <NotificationPanel notificationType={NotificationType.Info} text={this.getResource("GL_NO_RESULTS_I")} />
                    </div>
                </div>);
            }
        }

        return <>
            {dataResult}
        </>
    }

    private deleteValue(registrationDataId: number) {
        this.props.registerAsyncOperation(this.registrationsDataService.deleteRegistrationData(registrationDataId).then(() => {
            this.searchPayments().then(() => {
                this.notification = <div className="alert alert-success">
                    <p>{this.getResource("GL_DELETED_TIME_I")}</p>
                </div>
            })
        }));
    }

    @action private onPageChange(page: any): void {
        this.model.page = page;
        this.props.registerAsyncOperation(this.searchPayments());
    }

    @action private searchPayments() {

        this.isLoaded = false;

        return this.registrationsDataService.searchPayments(this.model).then(result => {
            this.registrationData = result;
        })
            .finally(() => {
                this.isLoaded = true;
            })
    }

    @action private init() {

        this.isLoaded = false;
        this.registrationData = [];
        this.registrationsDataService = new RegistrationsDataService();
        this.model = new RegistrationDataSearchCriteria();
        this.model.page = 1;
        this.model.type = 2;

        this.props.registerAsyncOperation(this.registrationsDataService.searchPayments(this.model)
            .then(result => { this.registrationData = result; })
            .finally(() => { this.isLoaded = true })
        );
    }
}

export const PepPaymentsUI = withAsyncFrame(PepPaymentsImpl, false); 
