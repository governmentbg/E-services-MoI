﻿import { AsyncUIProps, BaseProps, withAsyncFrame, withRouter, BaseRoutePropsExt } from 'cnsys-ui-react';
import { EAUBaseComponent, Constants, Service, RegistrationDataTypes, ValidationSummaryErrors, resourceManager } from 'eau-core';
import { observer } from 'mobx-react';
import { action, observable, runInAction } from 'mobx';
import React from 'react';
import { ServiceInstanceStatuses, ObligationSearchCriteria, Obligation, PaymentRequestStatuses, ObligationTypes, StartPaymentRequest, ServiceInstanceInfo, ObligationStatuses } from "../../models/ModelsAutoGenerated";
import { ObjectHelper } from "cnsys-core";
import { Link } from 'react-router-dom';
import MyEServiceInstancePreviousStagesUI from './MyEServiceInstancePreviousStagesUI';
import { ServiceInstance } from 'eau-portal/models/ServiceInstance';
import { ObligationsDataService } from "../../services/ObligationsDataService";
import { PaymentHelper } from 'eau-portal/services';
import { ModalBody, ModalFooter, Button, Modal, ModalHeader } from 'reactstrap';

interface MyEServiceInstanceCurrentStageUIProps extends BaseProps, AsyncUIProps, BaseRoutePropsExt {
    eService: Service;
    showPreviousStages: boolean;
    obligationList?: Obligation[];
    eServicesInstanceInfo?: ServiceInstanceInfo;
}

@observer
class MyEServiceInstanceCurrentStageUI extends EAUBaseComponent<MyEServiceInstanceCurrentStageUIProps, ServiceInstance>{

    @observable private eServiceObligationsInstance: Obligation[];

    private obligationsDataService: ObligationsDataService;

    @observable private isLoadedObligation: boolean = false;

    @observable private obligation: Obligation;

    @observable modal: boolean = false;

    private sentPaymentAgain: boolean = false;

    constructor(props: MyEServiceInstanceCurrentStageUIProps) {

        super(props);

        this.obligationsDataService = new ObligationsDataService();

        this.goToApplyApplication = this.goToApplyApplication.bind(this);
        this.payAction = this.payAction.bind(this);
        this.startPayment = this.startPayment.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onClickNewPaymentRequest = this.onClickNewPaymentRequest.bind(this);
        this.onClickClosePaymentSentModal = this.onClickClosePaymentSentModal.bind(this);

        this.init = this.init.bind(this);
        this.init();
    }

    render() {

        let dataResultRow: any = null;

        let currentStageIconSection: any = null;
        let currentStageBodySection: any = null;

        switch (this.model.status) {

            case ServiceInstanceStatuses.InProcess: {

                let removingIrregularitiesInstruction: any = '';
                let additionalApplicationInstruction: any = '';
                let paymentInstruction: any = '';

                removingIrregularitiesInstruction =
                    !ObjectHelper.isNullOrUndefined(this.model.additionalData.removingIrregularitiesInstructionURI)
                        ? <>
                            <p>{this.getResource('GL_PREVIEW_DOCUMENT_L')} <Link to={Constants.PATHS.ServiceInstanceDocumentPreview.replace(':caseFileURI', this.model.caseFileURI.toString()).replace(':documentURI', this.model.additionalData.removingIrregularitiesInstructionURI.toString())} title={resourceManager.getResourceByKey("GL_PAGE_OPEN_IN_NEW_TAB_L")} target="_blank">
                                {this.getResource('GL_INSTRUCTIONS_REMOVING_IRREGULARITIES_L')}
                            </Link>
                            </p>

                            <div className="button-bar button-bar--responsive">
                                <div className="right-side">
                                </div>
                                <div className="left-side">
                                    <Button type="button" color="primary" onClick={() => this.goToApplyApplication('removingIrregularitiesInstruction')}>{this.getResource('GL_APPLY_APPLICATION_L')}</Button>
                                </div>
                            </div>
                        </>
                        : '';

                additionalApplicationInstruction =
                    !ObjectHelper.isNullOrUndefined(this.model.additionalData.additionalApplicationURI)
                        ? <>
                            <div className="button-bar button-bar--responsive">
                                <div className="right-side">
                                </div>
                                <div className="left-side">
                                    <Button type="button" color="primary" onClick={() => this.goToApplyApplication('additionalApplicationInstruction')}>{this.getResource('GL_APPLY_DOCUMENT_L')}</Button>
                                </div>
                            </div>
                        </>
                        : '';

                if (!ObjectHelper.isNullOrUndefined(this.model.additionalData.paymentInstructionURI) && this.isLoadedObligation) {

                    const obligationStatuses = ObligationStatuses;
                    const registrationDataTypes = RegistrationDataTypes;

                    let isPaymentSent = false;
                    let isPaymentSentArr = [];

                    if (!ObjectHelper.isNullOrUndefined(this.obligation) && ObjectHelper.isArray(this.obligation.paymentRequests)) {
                        this.obligation.paymentRequests.forEach((request, index) => {

                            if (request.registrationDataType != RegistrationDataTypes.ePay)
                                return;

                            if (request.status == PaymentRequestStatuses.Sent) {
                                isPaymentSentArr[index] = true;
                            }
                        })
                    }

                    if (isPaymentSentArr.length > 0)
                        isPaymentSent = true;

                    paymentInstruction =
                        <>
                            <p>{this.getResource('GL_PREVIEW_DOCUMENT_L')} <Link to={Constants.PATHS.ServiceInstanceDocumentPreview.replace(':caseFileURI', this.model.caseFileURI.toString()).replace(':documentURI', this.model.additionalData.paymentInstructionURI.toString())} title={resourceManager.getResourceByKey("GL_PAGE_OPEN_IN_NEW_TAB_L")} target="_blank">
                                {this.getResource('GL_PAYMENT_INSTRUCTIONS_L')}
                            </Link>
                            </p>

                            <div className="button-bar button-bar--responsive">
                                <div className="right-side">
                                </div>
                                <div className="left-side">

                                    {!ObjectHelper.isNullOrUndefined(this.obligation) && this.obligation.status != obligationStatuses.Paid && this.obligation.status != obligationStatuses.Processed ?
                                        <button type="button" className="btn btn-primary" onClick={() => this.payAction(this.obligation, registrationDataTypes.ePay, isPaymentSent)}>{this.getResource('GL_PAY_BY_EPAY_L')}</button> : ""}

                                    {!ObjectHelper.isNullOrUndefined(this.obligation) && this.obligation.status != obligationStatuses.Paid && this.obligation.status != obligationStatuses.Processed && this.obligation.pepCin ?
                                        <button type="button" className="btn btn-primary" onClick={() => this.payAction(this.obligation, registrationDataTypes.PepOfDaeu, isPaymentSent)}>{this.getResource('GL_PAY_BY_CARD_L')}</button> : ""}

                                </div>
                            </div>


                            <Modal isOpen={this.modal} toggle={this.toggleModal} centered={true}>
                                <ModalHeader toggle={this.toggleModal}>{this.getResource("GL_PAYMENT_EPAY_L")}</ModalHeader>
                                <ModalBody>

                                    <div className="alert alert-warning">
                                        <p>{this.getResource("GL_EPAY_STATUS_SENT_CONFIRM_I")}</p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="button-bar button-bar--responsive">
                                        <div className="right-side">
                                            <Button color="primary" onClick={this.onClickNewPaymentRequest}>{this.getResource("GL_EPAY_NEW_REQUEST_L")}</Button>
                                        </div>

                                        <div className="left-side">
                                            <Button color="secondary" onClick={this.onClickClosePaymentSentModal}>{this.getResource("GL_REFUSE_L")}</Button>
                                        </div>
                                    </div>
                                </ModalFooter>
                            </Modal>

                        </>

                }

                currentStageIconSection =
                    <div className="stage-status">
                        <div className="item-status warning active" title={this.getResource('GL_CURRENT_STAGE_L')}>
                            <div className="item-status-content">
                                <i className="ui-icon ui-icon-warning" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                currentStageBodySection =
                    <div className="stage-info arrow">
                        <div className="stage-info-date" aria-hidden="true">{this.getResource('GL_CURRENT_STAGE_L')}</div>
                        <div className="stage-info-title">{this.model.additionalData.currentStage}</div>

                        <div className="stage-info-body">

                            {removingIrregularitiesInstruction}
                            {additionalApplicationInstruction}
                            {paymentInstruction}

                        </div>
                    </div>

                break;
            }

            case ServiceInstanceStatuses.Completed: {

                currentStageIconSection =
                    <div className="stage-status last">
                        <div className="item-status success active" title={this.getResource('GL_SERVICE_PROVIDED_L')}>
                            <div className="item-status-content">
                                <i className="ui-icon ui-icon-check" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                currentStageBodySection =
                    <div className="stage-info arrow arrow-left">
                        <div className="stage-info-date">{!ObjectHelper.isNullOrUndefined(this.model.additionalData.lastStageActualCompletionDate) ? this.model.additionalData.lastStageActualCompletionDate : ''}</div>

                        <div className="stage-info-title">{this.model.additionalData.lastStage}</div>

                        <div className="stage-info-body">
                            {!ObjectHelper.isNullOrUndefined(this.props.eService.explanatoryTextFulfilledService) ? <p dangerouslySetInnerHTML={{ __html: this.props.eService.explanatoryTextFulfilledService }}></p> : ''}
                        </div>
                    </div>

                break;
            }

            case ServiceInstanceStatuses.Rejected: {

                currentStageIconSection =
                    <div className="stage-status last">
                        <div className="item-status danger active" title={this.getResource('GL_SERVICE_TERMINATED_L')}>
                            <div className="item-status-content">
                                <i className="ui-icon ui-icon-times" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                currentStageBodySection =
                    <div className="stage-info arrow arrow-left">
                        <div className="stage-info-date">{!ObjectHelper.isNullOrUndefined(this.model.additionalData.lastStageActualCompletionDate) ? this.model.additionalData.lastStageActualCompletionDate : ''}</div>
                        <div className="stage-info-title">{this.model.additionalData.lastStage}</div>
                        <div className="stage-info-body">
                            {!ObjectHelper.isNullOrUndefined(this.props.eService.explanatoryTextRefusedOrTerminatedService) ? <p dangerouslySetInnerHTML={{ __html: this.props.eService.explanatoryTextRefusedOrTerminatedService }}></p> : ''}
                        </div>
                    </div>

                break;
            }
        }

        dataResultRow = <>

            <ValidationSummaryErrors asyncErrors={this.props.asyncErrors} />

            <ul className="stage-list" aria-live="polite">

                <li className="stage-list-item">

                    {currentStageIconSection}

                    {currentStageBodySection}

                </li>

                {this.props.showPreviousStages ? <MyEServiceInstancePreviousStagesUI eServicesInstanceInfo={this.props.eServicesInstanceInfo} eServicesInstanceStatus={this.model.status} /> : null}

            </ul>

        </>

        return <>
            {dataResultRow}
        </>
    }

    @action private init() {

        if (!ObjectHelper.isNullOrUndefined(this.model.additionalData.paymentInstructionURI) && this.model.serviceInstanceID) {

            this.isLoadedObligation = false;

            let criteria = new ObligationSearchCriteria();
            criteria.serviceInstanceID = this.model.serviceInstanceID;
            criteria.paymentInstructionURI = this.model.additionalData.paymentInstructionURI;
            criteria.page = 1;

            runInAction.bind(this)(() => {

                this.props.registerAsyncOperation(this.obligationsDataService.searchObligationsServiceInstances(criteria)
                    .then((result) => {
                        this.obligation = result[0];
                    })
                    .finally(() => this.isLoadedObligation = true)
                );
            })

        }
    }

    private goToApplyApplication(instructions) {

        var path = Constants.PATHS.APPLICATION_PROCESSES.replace(':serviceID', this.props.eService.serviceID.toString()).replace('/:sectionCode?', '');

        var params: any = {};

        if (this.model.caseFileURI) {
            params.caseFileURI = this.model.caseFileURI;
        }

        if (instructions == 'removingIrregularitiesInstruction' && this.model.additionalData.removingIrregularitiesInstructionURI) {
            params.instructionURI = this.model.additionalData.removingIrregularitiesInstructionURI;
        }

        if (instructions == 'additionalApplicationInstruction' && this.model.additionalData.additionalApplicationURI) {
            params.additionalApplicationURI = this.model.additionalData.additionalApplicationURI;
        }

        this.props.routerExt.goTo(path, params);
    }

    @action toggleModal() {
        this.modal = !this.modal;
    }

    @action onClickNewPaymentRequest() {
        this.payAction(this.obligation, RegistrationDataTypes.ePay);
        this.toggleModal();
    }

    @action onClickClosePaymentSentModal() {
        this.sentPaymentAgain = true;
        this.toggleModal();
    }

    @action payAction(obligation: Obligation, registrationDataType: number, isPaymentSent?: boolean) {

        if (isPaymentSent) {
            this.toggleModal();

            if (!this.sentPaymentAgain || registrationDataType != RegistrationDataTypes.PepOfDaeu)
                return;
        }

        this.props.registerAsyncOperation(
            PaymentHelper.processObligation(obligation, ObligationTypes.ServiceInstance)
                .then(result => {
                    let okCancelUrl = Constants.PATHS.ServiceInstance.replace(':caseFileURI', this.model.caseFileURI.toString());
                    PaymentHelper.createPaymenRequest(result, registrationDataType, okCancelUrl).then(paymenRequest => {
                        this.startPayment(paymenRequest, result);
                    });
                })
        );
    }

    /**
     * Създава payment request и прехвърля потребителя в избраната разплащателна система
     * 
     * @param paymenRequest 
     * @param obligationId 
     */
    @action startPayment(paymenRequest: StartPaymentRequest, obligation: Obligation) {

        this.props.registerAsyncOperation(
            this.obligationsDataService.startPayment(paymenRequest, obligation.obligationID)
                .then(result => {
                    PaymentHelper.processPayment(result);
                }));
    }
}

export default withRouter(withAsyncFrame(MyEServiceInstanceCurrentStageUI, false));