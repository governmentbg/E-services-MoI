import { BaseDataModel, TypeSystem } from 'cnsys-core'
import { AttachedDocument } from 'eau-documents'
import { observable } from 'mobx'
import { moduleContext } from '../ModuleContext'

export enum ProcessStatuses {

    InProcess = 1,

    Signing = 2,

    ReadyForSending = 3,

    Sending = 4,

    Accepted = 5,

    ErrorInAccepting = 6,

    Registered = 7,

    NotRegistered = 8,

}
TypeSystem.registerEnumInfo(ProcessStatuses, 'ProcessStatuses', moduleContext.moduleName)

export enum DocumentProcessModes {

    Read = 1,

    Write = 2,

    Sign = 3,

    WriteAndSign = 4,

}
TypeSystem.registerEnumInfo(DocumentProcessModes, 'DocumentProcessModes', moduleContext.moduleName)

export enum DocumentProcessContentTypes {

    FormJSON = 1,

    FromXML = 2,

    AttachedDocument = 3,

}
TypeSystem.registerEnumInfo(DocumentProcessContentTypes, 'DocumentProcessContentTypes', moduleContext.moduleName)

@TypeSystem.typeDecorator('DocumentProcess', moduleContext.moduleName)
export class DocumentProcess extends BaseDataModel {

    //#region documentProcessID

    @observable private _documentProcessID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentProcessID(val: number) {
        this._documentProcessID = val;
    }

    public get documentProcessID(): number {
        return this._documentProcessID;
    }

    //#endregion documentProcessID 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number) {
        this._documentTypeID = val;
    }

    public get documentTypeID(): number {
        return this._documentTypeID;
    }

    //#endregion documentTypeID 

    //#region serviceID

    @observable private _serviceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceID(val: number) {
        this._serviceID = val;
    }

    public get serviceID(): number {
        return this._serviceID;
    }

    //#endregion serviceID 

    //#region status

    @observable private _status: ProcessStatuses = null;

    @TypeSystem.propertyDecorator(ProcessStatuses)
    public set status(val: ProcessStatuses) {
        this._status = val;
    }

    public get status(): ProcessStatuses {
        return this._status;
    }

    //#endregion status 

    //#region mode

    @observable private _mode: number = null;

    @TypeSystem.propertyDecorator('number')
    public set mode(val: number) {
        this._mode = val;
    }

    public get mode(): number {
        return this._mode;
    }

    //#endregion mode 

    //#region additionalData

    @observable private _additionalData: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalData(val: any) {
        this._additionalData = val;
    }

    public get additionalData(): any {
        return this._additionalData;
    }

    //#endregion additionalData 

    //#region signingGuid

    @observable private _signingGuid: string = null;

    @TypeSystem.propertyDecorator('string')
    public set signingGuid(val: string) {
        this._signingGuid = val;
    }

    public get signingGuid(): string {
        return this._signingGuid;
    }

    //#endregion signingGuid 

    //#region errorMessage

    @observable private _errorMessage: string = null;

    @TypeSystem.propertyDecorator('string')
    public set errorMessage(val: string) {
        this._errorMessage = val;
    }

    public get errorMessage(): string {
        return this._errorMessage;
    }

    //#endregion errorMessage 

    //#region caseFileURI

    @observable private _caseFileURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set caseFileURI(val: string) {
        this._caseFileURI = val;
    }

    public get caseFileURI(): string {
        return this._caseFileURI;
    }

    //#endregion caseFileURI 

    //#region notAcknowledgedMessageURI

    @observable private _notAcknowledgedMessageURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set notAcknowledgedMessageURI(val: string) {
        this._notAcknowledgedMessageURI = val;
    }

    public get notAcknowledgedMessageURI(): string {
        return this._notAcknowledgedMessageURI;
    }

    //#endregion notAcknowledgedMessageURI 

    //#region Form

    @observable private _form: any = null;

    @TypeSystem.propertyDecorator('any')
    public set form(val: any) {
        this._form = val;
    }

    public get form(): any {
        return this._form;
    }

    //#endregion Form

    //#region attachedDocuments

    @observable private _attachedDocuments: AttachedDocument[] = null;

    @TypeSystem.propertyArrayDecorator(AttachedDocument)
    public set attachedDocuments(val: AttachedDocument[]) {
        this._attachedDocuments = val;
    }

    public get attachedDocuments(): AttachedDocument[] {
        return this._attachedDocuments;
    }

    //#endregion attachedDocuments 

    //#region HasChangesInApplicationsNomenclature

    @observable private _hasChangesInApplicationsNomenclature: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasChangesInApplicationsNomenclature(val: boolean) {
        this._hasChangesInApplicationsNomenclature = val;
    }

    public get hasChangesInApplicationsNomenclature(): boolean {
        return this._hasChangesInApplicationsNomenclature;
    }

    //#endregion HasChangesInApplicationsNomenclature

    //#region HasChangedApplicant

    @observable private _hasChangedApplicant: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasChangedApplicant(val: boolean) {
        this._hasChangedApplicant = val;
    }

    public get hasChangedApplicant(): boolean {
        return this._hasChangedApplicant;
    }

    //#endregion HasChangedApplicant

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 