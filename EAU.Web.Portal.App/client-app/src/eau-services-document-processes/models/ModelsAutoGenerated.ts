// Auto Generated Object
import * as moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel, BasePagedSearchCriteria } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'



@TypeSystem.typeDecorator('NewProcessRequest', moduleContext.moduleName)
export class NewProcessRequest extends BaseDataModel { 

    //#region serviceID

    @observable private _serviceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceID(val: number){
        this._serviceID = val;
    }

    public get serviceID(): number{
        return this._serviceID;
    } 

    //#endregion serviceID 

    //#region requestID

    @observable private _requestID: string = null;

    @TypeSystem.propertyDecorator('string')
    public set requestID(val: string){
        this._requestID = val;
    }

    public get requestID(): string{
        return this._requestID;
    } 

    //#endregion requestID 

    //#region caseFileURI

    @observable private _caseFileURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set caseFileURI(val: string){
        this._caseFileURI = val;
    }

    public get caseFileURI(): string{
        return this._caseFileURI;
    } 

    //#endregion caseFileURI 

    //#region documentURI

    @observable private _documentURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentURI(val: string){
        this._documentURI = val;
    }

    public get documentURI(): string{
        return this._documentURI;
    } 

    //#endregion documentURI 

    //#region removingIrregularitiesInstructionURI

    @observable private _removingIrregularitiesInstructionURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set removingIrregularitiesInstructionURI(val: string){
        this._removingIrregularitiesInstructionURI = val;
    }

    public get removingIrregularitiesInstructionURI(): string{
        return this._removingIrregularitiesInstructionURI;
    } 

    //#endregion removingIrregularitiesInstructionURI 

    //#region additionalApplicationURI

    @observable private _additionalApplicationURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalApplicationURI(val: string){
        this._additionalApplicationURI = val;
    }

    public get additionalApplicationURI(): string{
        return this._additionalApplicationURI;
    } 

    //#endregion additionalApplicationURI 

    //#region documentXMLContent

    @observable private _documentXMLContent: any = null;

    @TypeSystem.propertyDecorator('any')
    public set documentXMLContent(val: any){
        this._documentXMLContent = val;
    }

    public get documentXMLContent(): any{
        return this._documentXMLContent;
    } 

    //#endregion documentXMLContent 

    //#region documentMetadataURL

    @observable private _documentMetadataURL: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentMetadataURL(val: string){
        this._documentMetadataURL = val;
    }

    public get documentMetadataURL(): string{
        return this._documentMetadataURL;
    } 

    //#endregion documentMetadataURL 

    //#region docProcessId

    @observable private _docProcessId: number = null;

    @TypeSystem.propertyDecorator('number')
    public set docProcessId(val: number) {
        this._docProcessId = val;
    }

    public get docProcessId(): number {
        return this._docProcessId;
    }

    //#endregion docProcessId

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 







