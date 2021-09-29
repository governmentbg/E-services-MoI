﻿import { BindableReference, ObjectHelper } from 'cnsys-core';
import { AsyncUIProps, BaseProps, withAsyncFrame, withRouter } from 'cnsys-ui-react';
import { EAUBaseComponent, resourceManager, ValidationSummaryErrors } from 'eau-core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../Constants';
import { ANDObligationSearchCriteria, ANDObligationSearchMode, Obligation, ObligationTypes, StartPaymentRequest } from '../../models/ModelsAutoGenerated';
import { PaymentHelper } from '../../services';
import { ObligationsDataService } from '../../services/ObligationsDataService';
import { KatObligationsModalFromUI } from './KatObligationsModalFromUI';
import { KatObligationsResultUI } from './KatObligationsResultUI';

interface KatObligationsResultProps extends BaseProps, AsyncUIProps {
    callbackFormProccessStatus: (value: any) => any,
    ANDObligationsList: Obligation[],
    searchCriteria: ANDObligationSearchCriteria,
    hasNonHandedSlip: boolean
    errorOnHasNonHandedSlip: boolean;
}

@observer class KatObligationsResultsUIImpl extends EAUBaseComponent<KatObligationsResultProps, Obligation>{

    @observable modal: boolean = false;
    @observable currentObligation: Obligation = null;
    // @observable isLoaded;

    @observable registrationDataType;
    @observable withDiscount: boolean = false;
    @observable modalType;

    public obligationDM: ObligationsDataService;

    constructor(props: KatObligationsResultProps) {
        super(props);

        this.obligationDM = new ObligationsDataService();

        // binds
        this.onCancel = this.onCancel.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.startPayment = this.startPayment.bind(this);
        this.handlePayAction = this.handlePayAction.bind(this);
    }

    onCancel(e) {
        e.preventDefault();
        this.props.callbackFormProccessStatus(false);
    }

    @action toggleModal() {
        this.modal = !this.modal;
    }

    /**
     * Плащане на задължение към АНД
     * 
     * @param obligation 
     * @param registrationDataType 
     * @param withDiscount 
     */
    @action handlePayAction(obligation: Obligation, registrationDataType: number, withDiscount: boolean, isPaymentSent?: boolean) {

        this.registrationDataType = registrationDataType;
        this.withDiscount = withDiscount;

        // Модал - потребителят трябва да се съгласи да инициира ново плащане към ePay
        if (isPaymentSent) {
            this.currentObligation = obligation;
            this.modalType = 2; // Съобщение за вече инициирано плащане
            this.toggleModal();
            return;
        }

        // Модал - попълват се липсващи данни от обекта Obligation
        if (!obligation.obligedPersonName || !obligation.obligedPersonIdentType || !obligation.obligedPersonIdent) {
            this.modalType = 1; // Форма
            this.currentObligation = obligation;
            this.toggleModal();
            return;
        }

        this.props.registerAsyncOperation(
            PaymentHelper.processObligation(obligation, ObligationTypes.AND)
                .then(result => {
                    let okCancelUrl = this.genOkCancelUrl(this.props.searchCriteria);
                    PaymentHelper.createPaymenRequest(result, registrationDataType, okCancelUrl, withDiscount).then(paymenRequest => {
                        this.startPayment(paymenRequest, result);
                    });
                })
        );
    }


    /**
     * Генерира URL за обратно пренасочване от платежна система
     * @param searchCriteria 
     */
    genOkCancelUrl(searchCriteria: ANDObligationSearchCriteria) {

        let query = searchCriteria.toJSON();

        var queryStringArr = Object.keys(query).map(function (key) {
            if (!ObjectHelper.isNullOrUndefined(query[key])) {
                return key + '=' + query[key];
            }
            return null;
        });

        queryStringArr = queryStringArr.filter(function (e) { return e });

        let queryString = '/services/kat-obligations?' + queryStringArr.join("&");

        return queryString;
    }

    /**
     * Създава payment request и прехвърля потребителя в избраната разплащателна система
     * 
     * @param paymenRequest 
     * @param obligationId 
     */
    @action startPayment(paymenRequest: StartPaymentRequest, obligation: Obligation) {

        this.props.registerAsyncOperation(
            this.obligationDM.startPayment(paymenRequest, obligation.obligationID)
                .then(result => {
                    PaymentHelper.processPayment(result);
                }));
    }

    render() {

        let result = <div></div>;

        if (this.props.ANDObligationsList.length > 0) {

            let messagePersonIdent = '';


            switch (Number(this.props.searchCriteria.mode)) {
                case ANDObligationSearchMode.ObligedPerson: // Търсеве по ЕГН и шофьорска книжка
                    messagePersonIdent = `${this.getResource("GL_AND_USR_IDENT_INFO_I")} ${this.props.searchCriteria.obligedPersonIdent.slice(0, -4)}ХХХХ`;
                    break;

                case ANDObligationSearchMode.Document: // Търсеве по ФИШ/АУАН/НП
                    // Ако съществува докумен, който отговаря на критериите за търсене, то той е първи в списъка. isMainDocument = true
                    messagePersonIdent = this.props.ANDObligationsList[0].additionalData.isMainDocument.toLowerCase() == "true" ? this.props.ANDObligationsList[0].additionalData.obigedPersonIdent : '';
                    break;
            }

            result = <>
                <h2 className="section-title">
                    <span>{messagePersonIdent}</span>
                </h2>

                {/*Невръчени актове*/}
                {this.props.searchCriteria.mode == ANDObligationSearchMode.ObligedPerson ?
                        this.props.errorOnHasNonHandedSlip === true ?
                        <div className="alert alert-warning mt-4" role="alert"><p>{this.getResource("GL_UNDELIVERED_DEBTS_E")}</p></div>
                        :
                        this.props.hasNonHandedSlip === true ?
                            <div className="alert alert-warning mt-4" role="alert"><p>{this.getResource("GL_KAT_OBLIGATION_RESULT_003_I")}</p></div>
                            :
                            <div className="alert alert-warning mt-4" role="alert"><p>{this.getResource("GL_KAT_OBLIGATION_RESULT_002_I")}</p></div>
                    :
                    null
                }

                <ValidationSummaryErrors asyncErrors={this.props.asyncErrors} />

                <fieldset className="fields-group">
                    <legend>
                        <h3 className="field-title">
                            <span>{this.getResource("GL_UNPAID_OBLIGATIONS_L")}</span>
                        </h3>
                    </legend>
                    <div className="table-responsive-block">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>{this.getResource("GL_DOCUMENT_TYPE_L")}</th>
                                    <th>{this.getResource("GL_DOCUMENT_SERIES_L")}</th>
                                    <th>{this.getResource("GL_DOCUMENT_NUMBER_L")}</th>
                                    <th>{this.getResource("GL_DATE_OF_ISSUE_L")}</th>
                                    <th className="text-right">{this.getResource("GL_AMOUNT_DUE_L")}</th>
                                    <th className="text-right">{this.getResource("GL_DISCOUNT_L")}</th>
                                    <th className="text-right">{this.getResource("GL_PAYMENT_AMOUNT_L")}</th>
                                    <th className="text-right">{this.getResource("GL_ACTIONS_L")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.ANDObligationsList.map(
                                        (obligation, index) =>
                                            <KatObligationsResultUI
                                                key={obligation.obligationID + "_" + index}
                                                modelReference={new BindableReference(obligation)}
                                                callbackPayAction={this.handlePayAction}
                                            />
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </fieldset>

                <div className="alert alert-info" role="alert"><p>{this.getResource("GL_ANDOBLIGATION_HAVE_ACT_I")}</p></div>

                <div className="button-bar button-bar--form button-bar--responsive">
                    <div className="right-side">
                        <button type="button" onClick={this.onCancel} className="btn btn-primary">{this.getResource("GL_NEW_CHECK_L")}</button>
                    </div>

                    <div className="left-side">
                        <Link className="btn btn-secondary" to={Constants.PATHS.Services}>{resourceManager.getResourceByKey("GL_REFUSE_L")}</Link>
                    </div>
                </div>

                <KatObligationsModalFromUI
                    model={this.model}
                    isOpen={this.modal}
                    toggleModal={this.toggleModal}
                    obligation={this.currentObligation}
                    callbackPayAction={this.handlePayAction}
                    registrationDataType={this.registrationDataType}
                    withDiscount={this.withDiscount}
                    modalType={this.modalType}
                > </KatObligationsModalFromUI>

            </>

        }
        else {
            result = <div>{this.getResource("GL_NO_DATA_FOUND_L")}</div>;
        }

        return <>{result}</>
    }
}

export const KatObligationsResultsUI = withRouter(withAsyncFrame(KatObligationsResultsUIImpl, false))