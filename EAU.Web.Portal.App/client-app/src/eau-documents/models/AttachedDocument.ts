import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

@TypeSystem.typeDecorator('AttachedDocument', moduleContext.moduleName)
export class AttachedDocument extends BaseDataModel {

    //#region attachedDocumentID

    @observable private _attachedDocumentID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set attachedDocumentID(val: number) {
        this._attachedDocumentID = val;
    }

    public get attachedDocumentID(): number {
        return this._attachedDocumentID;
    }

    //#endregion attachedDocumentID 
    
    //#region attachedDocumentGuid

    @observable private _attachedDocumentGuid: string = null;

    @TypeSystem.propertyDecorator('string')
    public set attachedDocumentGuid(val: string) {
        this._attachedDocumentGuid = val;
    }

    public get attachedDocumentGuid(): string {
        return this._attachedDocumentGuid;
    }

    //#endregion attachedDocumentGuid 

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

    //#region documentProcessContentID

    @observable private _documentProcessContentID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentProcessContentID(val: number) {
        this._documentProcessContentID = val;
    }

    public get documentProcessContentID(): number {
        return this._documentProcessContentID;
    }

    //#endregion documentProcessContentID

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

    //#region documentTypeName

    @observable private _documentTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentTypeName(val: string) {
        this._documentTypeName = val;
    }

    public get documentTypeName(): string {
        return this._documentTypeName;
    }

    //#endregion documentTypeName

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string) {
        this._description = val;
    }

    public get description(): string {
        return this._description;
    }

    //#endregion description 

    //#region mimeType

    @observable private _mimeType: string = null;

    @TypeSystem.propertyDecorator('string')
    public set mimeType(val: string) {
        this._mimeType = val;
    }

    public get mimeType(): string {
        return this._mimeType;
    }

    //#endregion mimeType 

    //#region fileName

    @observable private _fileName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set fileName(val: string) {
        this._fileName = val;
    }

    public get fileName(): string {
        return this._fileName;
    }

    //#endregion fileName 

    //#region htmlContent

    @observable private _htmlContent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set htmlContent(val: string) {
        this._htmlContent = val;
    }

    public get htmlContent(): string {
        return this._htmlContent;
    }

    //#endregion htmlContent

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

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 