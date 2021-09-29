import { EAUBaseComponent } from 'eau-core';
import React from 'react';
import { AsyncUIProps, BaseProps } from 'cnsys-ui-react';
import { LogAction } from '../../models/LogAction';
import AuditResultUI from './AuditResultUI';
import { ActionType, ObjectType } from '../../models/ModelsAutoGenerated';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { observer } from 'mobx-react';
import { action, observable } from "mobx";
import { ModalTypes } from './AuditSearchUI';
import { UserProfileFormUI } from '../users';
import JsonToList from './JsonToList';
import { LoginSessionPreview } from './LoginSessionPreview';

interface AuditResultsProps extends BaseProps, AsyncUIProps {
    auditList: LogAction[],
    actionTypes: ActionType[],
    objectTypes: ObjectType[]
}

@observer class AuditResultsUI extends EAUBaseComponent<AuditResultsProps, null> {
    
    @observable private modal: boolean;
    @observable private modalContent: any;
    @observable private modalTitle: string;
    @observable private modalSize: string = 'md';

    objectTypesDescriptionValue = {};
    actionTypesDescriptionValue = {};
    
    constructor(props: AuditResultsProps) {
        super(props);

        this.funcBinds();
        this.init();
    }

    private init() {

        this.props.actionTypes.forEach(actionType => {
            this.actionTypesDescriptionValue[actionType.actionTypeID] = actionType.description
        });

        this.props.objectTypes.forEach(actionType => {
            this.objectTypesDescriptionValue[actionType.objectTypeID] = actionType.description
        });
        
    }

    private funcBinds() {
        this.onOpenModalCallback = this.onOpenModalCallback.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.modal = !this.modal;
    }

    @action onOpenModalCallback(e, modalType: ModalTypes, data){
        
        e.preventDefault();
        
        switch (modalType) {
            case ModalTypes.additionalDataPreview :
                this.modalTitle = this.getResource('GL_DETAILS_L');
                this.modalContent = <JsonToList json={data}/>;
                this.modalSize = 'md';
            break;

            case ModalTypes.loginSessionPreview :
                this.modalTitle = this.getResource('GL_LOG_SESSION_L');
                this.modalContent = <LoginSessionPreview loginSessionId={data}/>;
                this.modalSize = 'md';
            break;

            case ModalTypes.userPreview :
                this.modalTitle = this.getResource('GL_USER_L');
                this.modalContent = <UserProfileFormUI userId={data} previewMode={true} />
                this.modalSize = 'lg';
            break;
        }
        this.modal = !this.modal;
    }
    
    render() {
        return <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>{this.getResource("GL_LOG_EVENT_DATE_TIME_L")}</th>
                        <th>{this.getResource("GL_LOG_OBJECT_TYPE_L")}</th>
                        <th>{this.getResource("GL_LOG_OBJECT_L")}</th>
                        <th>{this.getResource("GL_LOG_ACTION_TYPE_L")}</th>
                        <th>{this.getResource("GL_USER_L")}</th>
                        <th>{this.getResource("GL_IP_ADDRESS_L")}</th>
                        <th>{this.getResource("GL_LOG_SESSION_L")}</th>
                        <th>{this.getResource("GL_DETAILS_L")}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.auditList.map((audit, index) => <tr key={audit.logActionID + "_" + index}>
                            <AuditResultUI  
                            audit={audit} 
                            onOpenModalCallback={this.onOpenModalCallback}
                            actionTypesDescriptionValue={this.actionTypesDescriptionValue}
                            objectTypesDescriptionValue={this.objectTypesDescriptionValue}
                            />
                        </tr>)
                    }
                </tbody>
            </table>

            <Modal isOpen={this.modal} toggle={this.toggle} size={this.modalSize}>
                <ModalHeader toggle={this.toggle}>{this.modalTitle}</ModalHeader>
                <ModalBody>
                        {this.modalContent}
                </ModalBody>
                <ModalFooter>
                        <div className="button-bar">
                        <div className="right-side">
                            <Button color="primary" onClick={this.toggle}>{this.getResource("GL_CLOSE_L")}</Button>
                        </div>
                        <div className="left-side">
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    }

    
}

export default AuditResultsUI;