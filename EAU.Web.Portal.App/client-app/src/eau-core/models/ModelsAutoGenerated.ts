// Auto Generated Object
import * as moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel, BasePagedSearchCriteria } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'


export enum AppParameterTypes { 

    DateTime = 1,

    Interval = 2,

    String = 3,

    Integer = 4,

    HourAndMinute = 5,

}
TypeSystem.registerEnumInfo(AppParameterTypes , 'AppParameterTypes' , moduleContext.moduleName)
export enum DocumentTypes { 

    EDocument = 1,

    AttachableDocument = 2,

}
TypeSystem.registerEnumInfo(DocumentTypes , 'DocumentTypes' , moduleContext.moduleName)
export enum AdmServiceTermType { 

    Regular = 1,

    Fast = 2,

    Express = 3,

}
TypeSystem.registerEnumInfo(AdmServiceTermType , 'AdmServiceTermType' , moduleContext.moduleName)
export enum ExecutionPeriodType { 

    Hours = 1,

    Days = 2,

}
TypeSystem.registerEnumInfo(ExecutionPeriodType , 'ExecutionPeriodType' , moduleContext.moduleName)
export enum WaysToStartService { 

    ByAplication = 1,

    ByRedirectToWebPage = 2,

}
TypeSystem.registerEnumInfo(WaysToStartService , 'WaysToStartService' , moduleContext.moduleName)
export enum Functionalities { 

    Audit = 1,

    Users = 2,

    Signing = 3,

    SystemLimits = 4,

    Portal = 5,

}
TypeSystem.registerEnumInfo(Functionalities , 'Functionalities' , moduleContext.moduleName)
export enum EkatteTypes { 

    Undefined = 0,

    District = 1,

    Municipality = 2,

    Settlement = 3,

    Mayoralty = 4,

    Area = 5,

}
TypeSystem.registerEnumInfo(EkatteTypes , 'EkatteTypes' , moduleContext.moduleName)
export enum GraoTypes { 

    Undefined = 0,

    District = 1,

    Municipality = 2,

    Settlement = 3,

}
TypeSystem.registerEnumInfo(GraoTypes , 'GraoTypes' , moduleContext.moduleName)
export enum RegistrationDataTypes { 

    ePay = 1,

    PepOfDaeu = 2,

}
TypeSystem.registerEnumInfo(RegistrationDataTypes , 'RegistrationDataTypes' , moduleContext.moduleName)
export enum UserPermissions { 

    ADM_USERS = 1,

    ADM_CMS = 2,

    ADM_NOM = 3,

    ADM_AUDIT = 4,

    ADM_PARAM_LIMIT = 5,

}
TypeSystem.registerEnumInfo(UserPermissions , 'UserPermissions' , moduleContext.moduleName)
export enum AuthenticationTypes { 

    UsernamePassword = 1,

    ActiveDirectory = 2,

    Certificate = 3,

    NRA = 4,

    EAuth = 5,

}
TypeSystem.registerEnumInfo(AuthenticationTypes , 'AuthenticationTypes' , moduleContext.moduleName)
export enum UserStatuses { 

    NotConfirmed = 1,

    Active = 2,

    Inactive = 3,

    Locked = 4,

    Deactivated = 5,

}
TypeSystem.registerEnumInfo(UserStatuses , 'UserStatuses' , moduleContext.moduleName)

@TypeSystem.typeDecorator('AppParameterSearchCriteria', moduleContext.moduleName)
export class AppParameterSearchCriteria extends BasePagedSearchCriteria { 

    //#region functionalityID

    @observable private _functionalityID: Functionalities = null;

    @TypeSystem.propertyDecorator(Functionalities)
    public set functionalityID(val: Functionalities){
        this._functionalityID = val;
    }

    public get functionalityID(): Functionalities{
        return this._functionalityID;
    } 

    //#endregion functionalityID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region codeIsExact

    @observable private _codeIsExact: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set codeIsExact(val: boolean){
        this._codeIsExact = val;
    }

    public get codeIsExact(): boolean{
        return this._codeIsExact;
    } 

    //#endregion codeIsExact 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region isSystem

    @observable private _isSystem: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSystem(val: boolean){
        this._isSystem = val;
    }

    public get isSystem(): boolean{
        return this._isSystem;
    } 

    //#endregion isSystem 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeclarationSearchCriteria', moduleContext.moduleName)
export class DeclarationSearchCriteria extends BasePagedSearchCriteria { 

    //#region id

    @observable private _id: number = null;

    @TypeSystem.propertyDecorator('number')
    public set id(val: number){
        this._id = val;
    }

    public get id(): number{
        return this._id;
    } 

    //#endregion id 

    //#region iDs

    @observable private _iDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set iDs(val: number[]){
        this._iDs = val;
    }

    public get iDs(): number[]{
        return this._iDs;
    } 

    //#endregion iDs 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentTemplateSearchCriteria', moduleContext.moduleName)
export class DocumentTemplateSearchCriteria extends BasePagedSearchCriteria { 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number){
        this._documentTypeID = val;
    }

    public get documentTypeID(): number{
        return this._documentTypeID;
    } 

    //#endregion documentTypeID 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceSearchCriteria', moduleContext.moduleName)
export class ServiceSearchCriteria extends BasePagedSearchCriteria { 

    //#region iDs

    @observable private _iDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set iDs(val: number[]){
        this._iDs = val;
    }

    public get iDs(): number[]{
        return this._iDs;
    } 

    //#endregion iDs 

    //#region languageID

    @observable private _languageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set languageID(val: number){
        this._languageID = val;
    }

    public get languageID(): number{
        return this._languageID;
    } 

    //#endregion languageID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region loadDecsription

    @observable private _loadDecsription: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadDecsription(val: boolean){
        this._loadDecsription = val;
    }

    public get loadDecsription(): boolean{
        return this._loadDecsription;
    } 

    //#endregion loadDecsription 

    //#region loadSeparateValueI18N

    @observable private _loadSeparateValueI18N: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadSeparateValueI18N(val: boolean){
        this._loadSeparateValueI18N = val;
    }

    public get loadSeparateValueI18N(): boolean{
        return this._loadSeparateValueI18N;
    } 

    //#endregion loadSeparateValueI18N 

    //#region loadOnlyUntranslated

    @observable private _loadOnlyUntranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadOnlyUntranslated(val: boolean){
        this._loadOnlyUntranslated = val;
    }

    public get loadOnlyUntranslated(): boolean{
        return this._loadOnlyUntranslated;
    } 

    //#endregion loadOnlyUntranslated 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    //#region sunauServiceUri

    @observable private _sunauServiceUri: string = null;

    @TypeSystem.propertyDecorator('string')
    public set sunauServiceUri(val: string){
        this._sunauServiceUri = val;
    }

    public get sunauServiceUri(): string{
        return this._sunauServiceUri;
    } 

    //#endregion sunauServiceUri 

    //#region groupID

    @observable private _groupID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set groupID(val: number){
        this._groupID = val;
    }

    public get groupID(): number{
        return this._groupID;
    } 

    //#endregion groupID 

    //#region attachedDocumentType

    @observable private _attachedDocumentType: DocumentType = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentType')
    public set attachedDocumentType(val: DocumentType){
        this._attachedDocumentType = val;
    }

    public get attachedDocumentType(): DocumentType{
        return this._attachedDocumentType;
    } 

    //#endregion attachedDocumentType 

    //#region forceTranslated

    @observable private _forceTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set forceTranslated(val: boolean){
        this._forceTranslated = val;
    }

    public get forceTranslated(): boolean{
        return this._forceTranslated;
    } 

    //#endregion forceTranslated 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceGroupSearchCriteria', moduleContext.moduleName)
export class ServiceGroupSearchCriteria extends BasePagedSearchCriteria { 

    //#region iDs

    @observable private _iDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set iDs(val: number[]){
        this._iDs = val;
    }

    public get iDs(): number[]{
        return this._iDs;
    } 

    //#endregion iDs 

    //#region languageID

    @observable private _languageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set languageID(val: number){
        this._languageID = val;
    }

    public get languageID(): number{
        return this._languageID;
    } 

    //#endregion languageID 

    //#region forceTranslated

    @observable private _forceTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set forceTranslated(val: boolean){
        this._forceTranslated = val;
    }

    public get forceTranslated(): boolean{
        return this._forceTranslated;
    } 

    //#endregion forceTranslated 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('LabelSearchCriteria', moduleContext.moduleName)
export class LabelSearchCriteria extends BasePagedSearchCriteria { 

    //#region labelIDs

    @observable private _labelIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set labelIDs(val: number[]){
        this._labelIDs = val;
    }

    public get labelIDs(): number[]{
        return this._labelIDs;
    } 

    //#endregion labelIDs 

    //#region languageID

    @observable private _languageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set languageID(val: number){
        this._languageID = val;
    }

    public get languageID(): number{
        return this._languageID;
    } 

    //#endregion languageID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region value

    @observable private _value: string = null;

    @TypeSystem.propertyDecorator('string')
    public set value(val: string){
        this._value = val;
    }

    public get value(): string{
        return this._value;
    } 

    //#endregion value 

    //#region loadDecsription

    @observable private _loadDecsription: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadDecsription(val: boolean){
        this._loadDecsription = val;
    }

    public get loadDecsription(): boolean{
        return this._loadDecsription;
    } 

    //#endregion loadDecsription 

    //#region loadSeparateValueI18N

    @observable private _loadSeparateValueI18N: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadSeparateValueI18N(val: boolean){
        this._loadSeparateValueI18N = val;
    }

    public get loadSeparateValueI18N(): boolean{
        return this._loadSeparateValueI18N;
    } 

    //#endregion loadSeparateValueI18N 

    //#region loadOnlyUntranslated

    @observable private _loadOnlyUntranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadOnlyUntranslated(val: boolean){
        this._loadOnlyUntranslated = val;
    }

    public get loadOnlyUntranslated(): boolean{
        return this._loadOnlyUntranslated;
    } 

    //#endregion loadOnlyUntranslated 

    //#region forceTranslated

    @observable private _forceTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set forceTranslated(val: boolean){
        this._forceTranslated = val;
    }

    public get forceTranslated(): boolean{
        return this._forceTranslated;
    } 

    //#endregion forceTranslated 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PageSearchCriteria', moduleContext.moduleName)
export class PageSearchCriteria extends BasePagedSearchCriteria { 

    //#region pageIDs

    @observable private _pageIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set pageIDs(val: number[]){
        this._pageIDs = val;
    }

    public get pageIDs(): number[]{
        return this._pageIDs;
    } 

    //#endregion pageIDs 

    //#region languageID

    @observable private _languageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set languageID(val: number){
        this._languageID = val;
    }

    public get languageID(): number{
        return this._languageID;
    } 

    //#endregion languageID 

    //#region forceTranslated

    @observable private _forceTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set forceTranslated(val: boolean){
        this._forceTranslated = val;
    }

    public get forceTranslated(): boolean{
        return this._forceTranslated;
    } 

    //#endregion forceTranslated 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AppParameter', moduleContext.moduleName)
export class AppParameter extends BaseDataModel { 

    //#region appParamID

    @observable private _appParamID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set appParamID(val: number){
        this._appParamID = val;
    }

    public get appParamID(): number{
        return this._appParamID;
    } 

    //#endregion appParamID 

    //#region functionalityID

    @observable private _functionalityID: Functionalities = null;

    @TypeSystem.propertyDecorator(Functionalities)
    public set functionalityID(val: Functionalities){
        this._functionalityID = val;
    }

    public get functionalityID(): Functionalities{
        return this._functionalityID;
    } 

    //#endregion functionalityID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region isSystem

    @observable private _isSystem: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSystem(val: boolean){
        this._isSystem = val;
    }

    public get isSystem(): boolean{
        return this._isSystem;
    } 

    //#endregion isSystem 

    //#region parameterType

    @observable private _parameterType: AppParameterTypes = null;

    @TypeSystem.propertyDecorator(AppParameterTypes)
    public set parameterType(val: AppParameterTypes){
        this._parameterType = val;
    }

    public get parameterType(): AppParameterTypes{
        return this._parameterType;
    } 

    //#endregion parameterType 

    //#region valueDateTime

    @observable private _valueDateTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set valueDateTime(val: moment.Moment){
        this._valueDateTime = val;
    }

    public get valueDateTime(): moment.Moment{
        return this._valueDateTime;
    } 

    //#endregion valueDateTime 

    //#region valueIntervalFromStartDate

    @observable private _valueIntervalFromStartDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set valueIntervalFromStartDate(val: moment.Moment){
        this._valueIntervalFromStartDate = val;
    }

    public get valueIntervalFromStartDate(): moment.Moment{
        return this._valueIntervalFromStartDate;
    } 

    //#endregion valueIntervalFromStartDate 

    //#region valueInterval

    @observable private _valueInterval: string = null;

    @TypeSystem.propertyDecorator('string')
    public set valueInterval(val: string){
        this._valueInterval = val;
    }

    public get valueInterval(): string{
        return this._valueInterval;
    } 

    //#endregion valueInterval 

    //#region valueString

    @observable private _valueString: string = null;

    @TypeSystem.propertyDecorator('string')
    public set valueString(val: string){
        this._valueString = val;
    }

    public get valueString(): string{
        return this._valueString;
    } 

    //#endregion valueString 

    //#region valueInt

    @observable private _valueInt: number = null;

    @TypeSystem.propertyDecorator('number')
    public set valueInt(val: number){
        this._valueInt = val;
    }

    public get valueInt(): number{
        return this._valueInt;
    } 

    //#endregion valueInt 

    //#region valueHour

    @observable private _valueHour: string = null;

    @TypeSystem.propertyDecorator('string')
    public set valueHour(val: string){
        this._valueHour = val;
    }

    public get valueHour(): string{
        return this._valueHour;
    } 

    //#endregion valueHour 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Declaration', moduleContext.moduleName)
export class Declaration extends BaseDataModel { 

    //#region declarationID

    @observable private _declarationID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set declarationID(val: number){
        this._declarationID = val;
    }

    public get declarationID(): number{
        return this._declarationID;
    } 

    //#endregion declarationID 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region content

    @observable private _content: string = null;

    @TypeSystem.propertyDecorator('string')
    public set content(val: string){
        this._content = val;
    }

    public get content(): string{
        return this._content;
    } 

    //#endregion content 

    //#region isRquired

    @observable private _isRquired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isRquired(val: boolean){
        this._isRquired = val;
    }

    public get isRquired(): boolean{
        return this._isRquired;
    } 

    //#endregion isRquired 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region isAdditionalDescriptionRequired

    @observable private _isAdditionalDescriptionRequired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isAdditionalDescriptionRequired(val: boolean){
        this._isAdditionalDescriptionRequired = val;
    }

    public get isAdditionalDescriptionRequired(): boolean{
        return this._isAdditionalDescriptionRequired;
    } 

    //#endregion isAdditionalDescriptionRequired 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment){
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment{
        return this._updatedOn;
    } 

    //#endregion updatedOn 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentTemplate', moduleContext.moduleName)
export class DocumentTemplate extends BaseDataModel { 

    //#region docTemplateID

    @observable private _docTemplateID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set docTemplateID(val: number){
        this._docTemplateID = val;
    }

    public get docTemplateID(): number{
        return this._docTemplateID;
    } 

    //#endregion docTemplateID 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number){
        this._documentTypeID = val;
    }

    public get documentTypeID(): number{
        return this._documentTypeID;
    } 

    //#endregion documentTypeID 

    //#region content

    @observable private _content: string = null;

    @TypeSystem.propertyDecorator('string')
    public set content(val: string){
        this._content = val;
    }

    public get content(): string{
        return this._content;
    } 

    //#endregion content 

    //#region isSubmittedAccordingToTemplate

    @observable private _isSubmittedAccordingToTemplate: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSubmittedAccordingToTemplate(val: boolean){
        this._isSubmittedAccordingToTemplate = val;
    }

    public get isSubmittedAccordingToTemplate(): boolean{
        return this._isSubmittedAccordingToTemplate;
    } 

    //#endregion isSubmittedAccordingToTemplate 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment){
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment{
        return this._updatedOn;
    } 

    //#endregion updatedOn 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentTemplateField', moduleContext.moduleName)
export class DocumentTemplateField extends BaseDataModel { 

    //#region key

    @observable private _key: string = null;

    @TypeSystem.propertyDecorator('string')
    public set key(val: string){
        this._key = val;
    }

    public get key(): string{
        return this._key;
    } 

    //#endregion key 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentType', moduleContext.moduleName)
export class DocumentType extends BaseDataModel { 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number){
        this._documentTypeID = val;
    }

    public get documentTypeID(): number{
        return this._documentTypeID;
    } 

    //#endregion documentTypeID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region uri

    @observable private _uri: string = null;

    @TypeSystem.propertyDecorator('string')
    public set uri(val: string){
        this._uri = val;
    }

    public get uri(): string{
        return this._uri;
    } 

    //#endregion uri 

    //#region type

    @observable private _type: DocumentTypes = null;

    @TypeSystem.propertyDecorator(DocumentTypes)
    public set type(val: DocumentTypes){
        this._type = val;
    }

    public get type(): DocumentTypes{
        return this._type;
    } 

    //#endregion type 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Label', moduleContext.moduleName)
export class Label extends BaseDataModel { 

    //#region labelID

    @observable private _labelID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set labelID(val: number){
        this._labelID = val;
    }

    public get labelID(): number{
        return this._labelID;
    } 

    //#endregion labelID 

    //#region isTranslated

    @observable private _isTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isTranslated(val: boolean){
        this._isTranslated = val;
    }

    public get isTranslated(): boolean{
        return this._isTranslated;
    } 

    //#endregion isTranslated 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region value

    @observable private _value: string = null;

    @TypeSystem.propertyDecorator('string')
    public set value(val: string){
        this._value = val;
    }

    public get value(): string{
        return this._value;
    } 

    //#endregion value 

    //#region languageCode

    @observable private _languageCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set languageCode(val: string){
        this._languageCode = val;
    }

    public get languageCode(): string{
        return this._languageCode;
    } 

    //#endregion languageCode 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Language', moduleContext.moduleName)
export class Language extends BaseDataModel { 

    //#region languageID

    @observable private _languageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set languageID(val: number){
        this._languageID = val;
    }

    public get languageID(): number{
        return this._languageID;
    } 

    //#endregion languageID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    //#region isDefault

    @observable private _isDefault: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isDefault(val: boolean){
        this._isDefault = val;
    }

    public get isDefault(): boolean{
        return this._isDefault;
    } 

    //#endregion isDefault 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeliveryChannel', moduleContext.moduleName)
export class DeliveryChannel extends BaseDataModel { 

    //#region deliveryChannelID

    @observable private _deliveryChannelID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set deliveryChannelID(val: number){
        this._deliveryChannelID = val;
    }

    public get deliveryChannelID(): number{
        return this._deliveryChannelID;
    } 

    //#endregion deliveryChannelID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Service', moduleContext.moduleName)
export class Service extends BaseDataModel { 

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

    //#region isTranslated

    @observable private _isTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isTranslated(val: boolean){
        this._isTranslated = val;
    }

    public get isTranslated(): boolean{
        return this._isTranslated;
    } 

    //#endregion isTranslated 

    //#region groupID

    @observable private _groupID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set groupID(val: number){
        this._groupID = val;
    }

    public get groupID(): number{
        return this._groupID;
    } 

    //#endregion groupID 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number){
        this._documentTypeID = val;
    }

    public get documentTypeID(): number{
        return this._documentTypeID;
    } 

    //#endregion documentTypeID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region sunauServiceUri

    @observable private _sunauServiceUri: string = null;

    @TypeSystem.propertyDecorator('string')
    public set sunauServiceUri(val: string){
        this._sunauServiceUri = val;
    }

    public get sunauServiceUri(): string{
        return this._sunauServiceUri;
    } 

    //#endregion sunauServiceUri 

    //#region initiationTypeID

    @observable private _initiationTypeID: WaysToStartService = null;

    @TypeSystem.propertyDecorator(WaysToStartService)
    public set initiationTypeID(val: WaysToStartService){
        this._initiationTypeID = val;
    }

    public get initiationTypeID(): WaysToStartService{
        return this._initiationTypeID;
    } 

    //#endregion initiationTypeID 

    //#region resultDocumentName

    @observable private _resultDocumentName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set resultDocumentName(val: string){
        this._resultDocumentName = val;
    }

    public get resultDocumentName(): string{
        return this._resultDocumentName;
    } 

    //#endregion resultDocumentName 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region explanatoryTextService

    @observable private _explanatoryTextService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextService(val: string){
        this._explanatoryTextService = val;
    }

    public get explanatoryTextService(): string{
        return this._explanatoryTextService;
    } 

    //#endregion explanatoryTextService 

    //#region explanatoryTextFulfilledService

    @observable private _explanatoryTextFulfilledService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextFulfilledService(val: string){
        this._explanatoryTextFulfilledService = val;
    }

    public get explanatoryTextFulfilledService(): string{
        return this._explanatoryTextFulfilledService;
    } 

    //#endregion explanatoryTextFulfilledService 

    //#region explanatoryTextRefusedOrTerminatedService

    @observable private _explanatoryTextRefusedOrTerminatedService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextRefusedOrTerminatedService(val: string){
        this._explanatoryTextRefusedOrTerminatedService = val;
    }

    public get explanatoryTextRefusedOrTerminatedService(): string{
        return this._explanatoryTextRefusedOrTerminatedService;
    } 

    //#endregion explanatoryTextRefusedOrTerminatedService 

    //#region orderNumber

    @observable private _orderNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set orderNumber(val: number){
        this._orderNumber = val;
    }

    public get orderNumber(): number{
        return this._orderNumber;
    } 

    //#endregion orderNumber 

    //#region admStructureUnitName

    @observable private _admStructureUnitName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set admStructureUnitName(val: string){
        this._admStructureUnitName = val;
    }

    public get admStructureUnitName(): string{
        return this._admStructureUnitName;
    } 

    //#endregion admStructureUnitName 

    //#region attachedDocumentsDescription

    @observable private _attachedDocumentsDescription: string = null;

    @TypeSystem.propertyDecorator('string')
    public set attachedDocumentsDescription(val: string){
        this._attachedDocumentsDescription = val;
    }

    public get attachedDocumentsDescription(): string{
        return this._attachedDocumentsDescription;
    } 

    //#endregion attachedDocumentsDescription 

    //#region additionalConfiguration

    @observable private _additionalConfiguration: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalConfiguration(val: any){
        this._additionalConfiguration = val;
    }

    public get additionalConfiguration(): any{
        return this._additionalConfiguration;
    } 

    //#endregion additionalConfiguration 

    //#region additionalDataAsString

    @observable private _additionalDataAsString: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalDataAsString(val: string){
        this._additionalDataAsString = val;
    }

    public get additionalDataAsString(): string{
        return this._additionalDataAsString;
    } 

    //#endregion additionalDataAsString 

    //#region serviceUrl

    @observable private _serviceUrl: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceUrl(val: string){
        this._serviceUrl = val;
    }

    public get serviceUrl(): string{
        return this._serviceUrl;
    } 

    //#endregion serviceUrl 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    //#region languageCode

    @observable private _languageCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set languageCode(val: string){
        this._languageCode = val;
    }

    public get languageCode(): string{
        return this._languageCode;
    } 

    //#endregion languageCode 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment){
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment{
        return this._updatedOn;
    } 

    //#endregion updatedOn 

    //#region attachedDocumentTypes

    @observable private _attachedDocumentTypes: DocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DocumentType')
    public set attachedDocumentTypes(val: DocumentType[]){
        this._attachedDocumentTypes = val;
    }

    public get attachedDocumentTypes(): DocumentType[]{
        return this._attachedDocumentTypes;
    } 

    //#endregion attachedDocumentTypes 

    //#region declarations

    @observable private _declarations: Declaration[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Declaration')
    public set declarations(val: Declaration[]){
        this._declarations = val;
    }

    public get declarations(): Declaration[]{
        return this._declarations;
    } 

    //#endregion declarations 

    //#region seviceTerms

    @observable private _seviceTerms: ServiceTerm[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ServiceTerm')
    public set seviceTerms(val: ServiceTerm[]){
        this._seviceTerms = val;
    }

    public get seviceTerms(): ServiceTerm[]{
        return this._seviceTerms;
    } 

    //#endregion seviceTerms 

    //#region deliveryChannels

    @observable private _deliveryChannels: DeliveryChannel[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DeliveryChannel')
    public set deliveryChannels(val: DeliveryChannel[]){
        this._deliveryChannels = val;
    }

    public get deliveryChannels(): DeliveryChannel[]{
        return this._deliveryChannels;
    } 

    //#endregion deliveryChannels 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceGroup', moduleContext.moduleName)
export class ServiceGroup extends BaseDataModel { 

    //#region groupID

    @observable private _groupID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set groupID(val: number){
        this._groupID = val;
    }

    public get groupID(): number{
        return this._groupID;
    } 

    //#endregion groupID 

    //#region isTranslated

    @observable private _isTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isTranslated(val: boolean){
        this._isTranslated = val;
    }

    public get isTranslated(): boolean{
        return this._isTranslated;
    } 

    //#endregion isTranslated 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region orderNumber

    @observable private _orderNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set orderNumber(val: number){
        this._orderNumber = val;
    }

    public get orderNumber(): number{
        return this._orderNumber;
    } 

    //#endregion orderNumber 

    //#region iconName

    @observable private _iconName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set iconName(val: string){
        this._iconName = val;
    }

    public get iconName(): string{
        return this._iconName;
    } 

    //#endregion iconName 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    //#region languageCode

    @observable private _languageCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set languageCode(val: string){
        this._languageCode = val;
    }

    public get languageCode(): string{
        return this._languageCode;
    } 

    //#endregion languageCode 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment){
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment{
        return this._updatedOn;
    } 

    //#endregion updatedOn 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceTerm', moduleContext.moduleName)
export class ServiceTerm extends BaseDataModel { 

    //#region serviceTermID

    @observable private _serviceTermID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceTermID(val: number){
        this._serviceTermID = val;
    }

    public get serviceTermID(): number{
        return this._serviceTermID;
    } 

    //#endregion serviceTermID 

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

    //#region serviceTermType

    @observable private _serviceTermType: AdmServiceTermType = null;

    @TypeSystem.propertyDecorator(AdmServiceTermType)
    public set serviceTermType(val: AdmServiceTermType){
        this._serviceTermType = val;
    }

    public get serviceTermType(): AdmServiceTermType{
        return this._serviceTermType;
    } 

    //#endregion serviceTermType 

    //#region price

    @observable private _price: number = null;

    @TypeSystem.propertyDecorator('number')
    public set price(val: number){
        this._price = val;
    }

    public get price(): number{
        return this._price;
    } 

    //#endregion price 

    //#region executionPeriod

    @observable private _executionPeriod: number = null;

    @TypeSystem.propertyDecorator('number')
    public set executionPeriod(val: number){
        this._executionPeriod = val;
    }

    public get executionPeriod(): number{
        return this._executionPeriod;
    } 

    //#endregion executionPeriod 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    //#region periodType

    @observable private _periodType: ExecutionPeriodType = null;

    @TypeSystem.propertyDecorator(ExecutionPeriodType)
    public set periodType(val: ExecutionPeriodType){
        this._periodType = val;
    }

    public get periodType(): ExecutionPeriodType{
        return this._periodType;
    } 

    //#endregion periodType 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Ekatte', moduleContext.moduleName)
export class Ekatte extends BaseDataModel { 

    //#region ekatteID

    @observable private _ekatteID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set ekatteID(val: number){
        this._ekatteID = val;
    }

    public get ekatteID(): number{
        return this._ekatteID;
    } 

    //#endregion ekatteID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region ekatteTypeID

    @observable private _ekatteTypeID: EkatteTypes = null;

    @TypeSystem.propertyDecorator(EkatteTypes)
    public set ekatteTypeID(val: EkatteTypes){
        this._ekatteTypeID = val;
    }

    public get ekatteTypeID(): EkatteTypes{
        return this._ekatteTypeID;
    } 

    //#endregion ekatteTypeID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region parentID

    @observable private _parentID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set parentID(val: number){
        this._parentID = val;
    }

    public get parentID(): number{
        return this._parentID;
    } 

    //#endregion parentID 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Grao', moduleContext.moduleName)
export class Grao extends BaseDataModel { 

    //#region graoID

    @observable private _graoID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set graoID(val: number){
        this._graoID = val;
    }

    public get graoID(): number{
        return this._graoID;
    } 

    //#endregion graoID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region graoTypeID

    @observable private _graoTypeID: GraoTypes = null;

    @TypeSystem.propertyDecorator(GraoTypes)
    public set graoTypeID(val: GraoTypes){
        this._graoTypeID = val;
    }

    public get graoTypeID(): GraoTypes{
        return this._graoTypeID;
    } 

    //#endregion graoTypeID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region parentID

    @observable private _parentID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set parentID(val: number){
        this._parentID = val;
    }

    public get parentID(): number{
        return this._parentID;
    } 

    //#endregion parentID 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Page', moduleContext.moduleName)
export class Page extends BaseDataModel { 

    //#region pageID

    @observable private _pageID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set pageID(val: number){
        this._pageID = val;
    }

    public get pageID(): number{
        return this._pageID;
    } 

    //#endregion pageID 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    //#region title

    @observable private _title: string = null;

    @TypeSystem.propertyDecorator('string')
    public set title(val: string){
        this._title = val;
    }

    public get title(): string{
        return this._title;
    } 

    //#endregion title 

    //#region content

    @observable private _content: string = null;

    @TypeSystem.propertyDecorator('string')
    public set content(val: string){
        this._content = val;
    }

    public get content(): string{
        return this._content;
    } 

    //#endregion content 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment){
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment{
        return this._updatedOn;
    } 

    //#endregion updatedOn 

    //#region isTranslated

    @observable private _isTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isTranslated(val: boolean){
        this._isTranslated = val;
    }

    public get isTranslated(): boolean{
        return this._isTranslated;
    } 

    //#endregion isTranslated 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Functionality', moduleContext.moduleName)
export class Functionality extends BaseDataModel { 

    //#region functionalityID

    @observable private _functionalityID: Functionalities = null;

    @TypeSystem.propertyDecorator(Functionalities)
    public set functionalityID(val: Functionalities){
        this._functionalityID = val;
    }

    public get functionalityID(): Functionalities{
        return this._functionalityID;
    } 

    //#endregion functionalityID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string){
        this._description = val;
    }

    public get description(): string{
        return this._description;
    } 

    //#endregion description 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UserPermission', moduleContext.moduleName)
export class UserPermission extends BaseDataModel { 

    //#region userID

    @observable private _userID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set userID(val: number){
        this._userID = val;
    }

    public get userID(): number{
        return this._userID;
    } 

    //#endregion userID 

    //#region permissionID

    @observable private _permissionID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set permissionID(val: number){
        this._permissionID = val;
    }

    public get permissionID(): number{
        return this._permissionID;
    } 

    //#endregion permissionID 

    //#region permission

    @observable private _permission: UserPermissions = null;

    @TypeSystem.propertyDecorator(UserPermissions)
    public set permission(val: UserPermissions){
        this._permission = val;
    }

    public get permission(): UserPermissions{
        return this._permission;
    } 

    //#endregion permission 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UserAuthentication', moduleContext.moduleName)
export class UserAuthentication extends BaseDataModel { 

    //#region authenticationID

    @observable private _authenticationID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set authenticationID(val: number){
        this._authenticationID = val;
    }

    public get authenticationID(): number{
        return this._authenticationID;
    } 

    //#endregion authenticationID 

    //#region userID

    @observable private _userID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set userID(val: number){
        this._userID = val;
    }

    public get userID(): number{
        return this._userID;
    } 

    //#endregion userID 

    //#region authenticationType

    @observable private _authenticationType: AuthenticationTypes = null;

    @TypeSystem.propertyDecorator(AuthenticationTypes)
    public set authenticationType(val: AuthenticationTypes){
        this._authenticationType = val;
    }

    public get authenticationType(): AuthenticationTypes{
        return this._authenticationType;
    } 

    //#endregion authenticationType 

    //#region passwordHash

    @observable private _passwordHash: string = null;

    @TypeSystem.propertyDecorator('string')
    public set passwordHash(val: string){
        this._passwordHash = val;
    }

    public get passwordHash(): string{
        return this._passwordHash;
    } 

    //#endregion passwordHash 

    //#region username

    @observable private _username: string = null;

    @TypeSystem.propertyDecorator('string')
    public set username(val: string){
        this._username = val;
    }

    public get username(): string{
        return this._username;
    } 

    //#endregion username 

    //#region certificateID

    @observable private _certificateID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set certificateID(val: number){
        this._certificateID = val;
    }

    public get certificateID(): number{
        return this._certificateID;
    } 

    //#endregion certificateID 

    //#region isLocked

    @observable private _isLocked: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isLocked(val: boolean){
        this._isLocked = val;
    }

    public get isLocked(): boolean{
        return this._isLocked;
    } 

    //#endregion isLocked 

    //#region lockedUntil

    @observable private _lockedUntil: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set lockedUntil(val: moment.Moment){
        this._lockedUntil = val;
    }

    public get lockedUntil(): moment.Moment{
        return this._lockedUntil;
    } 

    //#endregion lockedUntil 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean){
        this._isActive = val;
    }

    public get isActive(): boolean{
        return this._isActive;
    } 

    //#endregion isActive 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Country', moduleContext.moduleName)
export class Country extends BaseDataModel { 

    //#region countryID

    @observable private _countryID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set countryID(val: number){
        this._countryID = val;
    }

    public get countryID(): number{
        return this._countryID;
    } 

    //#endregion countryID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string){
        this._name = val;
    }

    public get name(): string{
        return this._name;
    } 

    //#endregion name 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string){
        this._code = val;
    }

    public get code(): string{
        return this._code;
    } 

    //#endregion code 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 
