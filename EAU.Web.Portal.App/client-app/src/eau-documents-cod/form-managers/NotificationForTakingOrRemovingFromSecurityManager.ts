﻿import { ObjectHelper, TypeSystem, ArrayHelper } from 'cnsys-core';
import { ResourceHelpers } from 'eau-core';
import { ApplicationFormManagerBase, DocumentFormValidationContext, IApplicationFormManager, Section } from 'eau-documents';
import { NotificationForTakingOrRemovingFromSecurityVM, NotificationType, PointOfPrivateSecurityServicesLaw, SecurityObject, SecurityObjectsDataVM, SelfProtectionPersonsProperty, AssignorPersonEntityType, PersonAssignorData } from '../models/ModelsAutoGenerated';
import { NotificationForTakingOrRemovingFromSecurityDataUI } from '../ui/section-forms/NotificationForTakingOrRemovingFromSecurityDataUI';
import { SecurityObjectsDataUI } from '../ui/section-forms/SecurityObjectsDataUI';
import { NotificationForTakingOrRemovingFromSecurityDataValidator } from '../validations/NotificationForTakingOrRemovingFromSecurityDataValidator';
import { SecurityObjectsData_NValidator, SecurityObjectsData_TValidator } from '../validations/SecurityObjectsDataValidator';
import { observable } from 'mobx';
import moment, { Moment } from 'moment';

export interface IFNotificationForTakingOrRemovingFromSecurityManager extends IApplicationFormManager {
    getPointOfPrivateSecurityServicesLaw: () => string[];
    resetSecurityObjectsData: () => void;
    initSecurityObject: (securityObj: SecurityObject) => void;
    isTerminationNotification: () => boolean;
    isValidAssignor: (objectType: PointOfPrivateSecurityServicesLaw) => boolean;
    getPersonAssignorData: () => PersonAssignorData;
    getActualDate: () => moment.Moment;
}

export function isNotificationForTakingOrRemovingFromSecurityManager(obj: IFNotificationForTakingOrRemovingFromSecurityManager | any): obj is IFNotificationForTakingOrRemovingFromSecurityManager {
    return obj && (ObjectHelper.isSubClassOf(obj, NotificationForTakingOrRemovingFromSecurityManager));
}

export class NotificationForTakingOrRemovingFromSecurityManager extends ApplicationFormManagerBase<NotificationForTakingOrRemovingFromSecurityVM> implements IFNotificationForTakingOrRemovingFromSecurityManager {

    @observable private securityObjectsValidator: any;
    //#region ApplicationFormManagerBase

    createDocument(obj: any): NotificationForTakingOrRemovingFromSecurityVM {
        return new NotificationForTakingOrRemovingFromSecurityVM(obj);
    }

    //#endregion

    protected initDocumentForm() {
        super.initDocumentForm();
        
        if (!this.documentForm.securityObjectsData) {
            this.documentForm.securityObjectsData = new SecurityObjectsDataVM();
        }

        if (this.documentForm.securityObjectsData.securityObjects.length == 0) {
            var newObject = new SecurityObject();
            this.documentForm.securityObjectsData.securityObjects.push(newObject);
        }

        this.securityObjectsValidator = new SecurityObjectsData_NValidator();
        if (this.documentForm.circumstances && this.documentForm.circumstances.notificationType && this.isTerminationNotification())
            this.securityObjectsValidator = new SecurityObjectsData_TValidator();
    }

    protected createSections(validationContext: DocumentFormValidationContext): Section[] {
        var sections = super.createSections(validationContext);

        //Обстоятелства
        var circumstances = new Section();
        circumstances.code = "circumstances";
        circumstances.title = ResourceHelpers.getResourceByProperty(m => m.circumstances, this.documentForm);
        circumstances.form = this.documentForm.circumstances;
        circumstances.formUICmp = NotificationForTakingOrRemovingFromSecurityDataUI;
        circumstances.validator = new NotificationForTakingOrRemovingFromSecurityDataValidator();
        circumstances.validator.setValidationContext(validationContext);
        circumstances.validate = () => this.validateSection(circumstances);

        sections.splice(1, 0, circumstances);

        //Данни за обекта за охрана
        var securityObjects = new Section();
        securityObjects.code = "securityObjects";
        securityObjects.title = ResourceHelpers.getResourceByProperty(m => m.securityObjectsData, this.documentForm);
        securityObjects.form = this.documentForm.securityObjectsData;
        securityObjects.formUICmp = SecurityObjectsDataUI;
        securityObjects.validator = this.securityObjectsValidator;
        securityObjects.validator.setValidationContext(validationContext);
        securityObjects.validate = () => this.validateSection(securityObjects);

        sections.splice(2, 0, securityObjects);

        return sections;
    }

    public getPointOfPrivateSecurityServicesLaw() {

        let filteredPointOfPrivateSecurityServicesLaw = TypeSystem.getEnumValues(PointOfPrivateSecurityServicesLaw);

        if (this.documentForm.circumstances.notificationType == NotificationType.NewSecurityContr235789 ||
            this.documentForm.circumstances.notificationType == NotificationType.TerminationSecurityContr235789) {
            return filteredPointOfPrivateSecurityServicesLaw.filter(p => p.toString() != "3")
        } else
            return filteredPointOfPrivateSecurityServicesLaw.filter(p => p.toString() == "3")
    }

    public initSecurityObject(securityObj: SecurityObject) {
        if (this.documentForm.circumstances.notificationType == NotificationType.NewSecurityContr4 || this.documentForm.circumstances.notificationType == NotificationType.TerminationSecurityContr4) {
            securityObj.selfProtectionPersonsProperty = new SelfProtectionPersonsProperty();
        }
    }

    public resetSecurityObjectsData() {
        this.documentForm.securityObjectsData.securityObjects.splice(0);
        var newObject = new SecurityObject();
        this.documentForm.securityObjectsData.securityObjects.push(newObject);

        this.initSecurityObjectsValidator();
    }

    public isTerminationNotification() {
        return (this.documentForm.circumstances.notificationType == NotificationType.TerminationSecurityContr235789 ||
            this.documentForm.circumstances.notificationType == NotificationType.TerminationSecurityContr4)
    }

    public isValidAssignor(objectType: PointOfPrivateSecurityServicesLaw) {
        if (this.documentForm.circumstances.contractAssignor && this.documentForm.circumstances.contractAssignor.assignorPersonEntityType) {

            if (objectType == PointOfPrivateSecurityServicesLaw.RealEstatSecurity)
                return this.documentForm.circumstances.contractAssignor.assignorPersonEntityType == AssignorPersonEntityType.Entity;
            if (objectType == PointOfPrivateSecurityServicesLaw.PersonalSecurityServicesForPersons)
                return this.documentForm.circumstances.contractAssignor.assignorPersonEntityType == AssignorPersonEntityType.Person;
        }
        return true;
    }

    private initSecurityObjectsValidator() {
        this.securityObjectsValidator = this.isTerminationNotification() ? new SecurityObjectsData_TValidator() : new SecurityObjectsData_NValidator();
        let sect = ArrayHelper.queryable.from(this.sections).first(m => m.code == "securityObjects");
        let cnx = sect.validator.getValidationContext();
        sect.validator = this.securityObjectsValidator;
        sect.validator.setValidationContext(cnx);
    }

    public getPersonAssignorData(): PersonAssignorData {
        if (this.documentForm.circumstances.contractAssignor && this.documentForm.circumstances.contractAssignor.assignorPersonEntityType == AssignorPersonEntityType.Person)
            return this.documentForm.circumstances.contractAssignor.personAssignorData;
        else
            return new PersonAssignorData();
    }

    public getActualDate(): moment.Moment {
        if (this.documentForm.circumstances.securityContractData)
            return this.documentForm.circumstances.securityContractData.contractDate;
        else return null;
    }  
}
