

// Auto Generated ObjectAuthenticationTypes
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel, BasePagedSearchCriteria } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { RegistrationDataTypes } from 'eau-core'


export enum DataServiceLimitStatus { 

    Inactive = 0,

    Active = 1,

}
TypeSystem.registerEnumInfo(DataServiceLimitStatus , 'DataServiceLimitStatus' , moduleContext.moduleName)
export enum ObjectTypes { 

    Document = 1,

    ServiceCaseFile = 2,

    UserProfile = 3,

    AuthenticationMeans = 4,

    User = 5,

}
TypeSystem.registerEnumInfo(ObjectTypes , 'ObjectTypes' , moduleContext.moduleName)
export enum ActionTypes { 

    Submission = 1,

    Preview = 2,

    Edit = 3,

    Login = 4,

    Add = 5,

    Delete = 6,

}
TypeSystem.registerEnumInfo(ActionTypes , 'ActionTypes' , moduleContext.moduleName)
export enum LogActionSearchModes { 

    Operational = 1,

    Archive = 2,

}
TypeSystem.registerEnumInfo(LogActionSearchModes , 'LogActionSearchModes' , moduleContext.moduleName)
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

@TypeSystem.typeDecorator('DocumentTypeSearchCriteria', moduleContext.moduleName)
export class DocumentTypeSearchCriteria extends BasePagedSearchCriteria { 

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

@TypeSystem.typeDecorator('LabelTranslation', moduleContext.moduleName)
export class LabelTranslation extends BaseDataModel { 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceTranslation', moduleContext.moduleName)
export class ServiceTranslation extends BaseDataModel { 

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

@TypeSystem.typeDecorator('ServiceGroupTranslation', moduleContext.moduleName)
export class ServiceGroupTranslation extends BaseDataModel { 

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

@TypeSystem.typeDecorator('LDAPUserSearchCritaria', moduleContext.moduleName)
export class LDAPUserSearchCritaria extends BasePagedSearchCriteria { 

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

    //#region firstName

    @observable private _firstName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set firstName(val: string){
        this._firstName = val;
    }

    public get firstName(): string{
        return this._firstName;
    } 

    //#endregion firstName 

    //#region surname

    @observable private _surname: string = null;

    @TypeSystem.propertyDecorator('string')
    public set surname(val: string){
        this._surname = val;
    }

    public get surname(): string{
        return this._surname;
    } 

    //#endregion surname 

    //#region lastName

    @observable private _lastName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lastName(val: string){
        this._lastName = val;
    }

    public get lastName(): string{
        return this._lastName;
    } 

    //#endregion lastName 

    //#region eMail

    @observable private _eMail: string = null;

    @TypeSystem.propertyDecorator('string')
    public set eMail(val: string){
        this._eMail = val;
    }

    public get eMail(): string{
        return this._eMail;
    } 

    //#endregion eMail 

    //#region fullName

    @observable private _fullName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set fullName(val: string){
        this._fullName = val;
    }

    public get fullName(): string{
        return this._fullName;
    } 

    //#endregion fullName 

    //#region displayName

    @observable private _displayName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set displayName(val: string){
        this._displayName = val;
    }

    public get displayName(): string{
        return this._displayName;
    } 

    //#endregion displayName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('LDAPUser', moduleContext.moduleName)
export class LDAPUser extends BaseDataModel { 

    //#region accountGuid

    @observable private _accountGuid: string = null;

    @TypeSystem.propertyDecorator('string')
    public set accountGuid(val: string){
        this._accountGuid = val;
    }

    public get accountGuid(): string{
        return this._accountGuid;
    } 

    //#endregion accountGuid 

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

    //#region firstName

    @observable private _firstName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set firstName(val: string){
        this._firstName = val;
    }

    public get firstName(): string{
        return this._firstName;
    } 

    //#endregion firstName 

    //#region surname

    @observable private _surname: string = null;

    @TypeSystem.propertyDecorator('string')
    public set surname(val: string){
        this._surname = val;
    }

    public get surname(): string{
        return this._surname;
    } 

    //#endregion surname 

    //#region lastName

    @observable private _lastName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lastName(val: string){
        this._lastName = val;
    }

    public get lastName(): string{
        return this._lastName;
    } 

    //#endregion lastName 

    //#region eMail

    @observable private _eMail: string = null;

    @TypeSystem.propertyDecorator('string')
    public set eMail(val: string){
        this._eMail = val;
    }

    public get eMail(): string{
        return this._eMail;
    } 

    //#endregion eMail 

    //#region fullName

    @observable private _fullName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set fullName(val: string){
        this._fullName = val;
    }

    public get fullName(): string{
        return this._fullName;
    } 

    //#endregion fullName 

    //#region displayName

    @observable private _displayName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set displayName(val: string){
        this._displayName = val;
    }

    public get displayName(): string{
        return this._displayName;
    } 

    //#endregion displayName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DataServiceLimitsSearchCriteria', moduleContext.moduleName)
export class DataServiceLimitsSearchCriteria extends BasePagedSearchCriteria { 

    //#region serviceLimitIDs

    @observable private _serviceLimitIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set serviceLimitIDs(val: number[]){
        this._serviceLimitIDs = val;
    }

    public get serviceLimitIDs(): number[]{
        return this._serviceLimitIDs;
    } 

    //#endregion serviceLimitIDs 

    //#region serviceCode

    @observable private _serviceCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceCode(val: string){
        this._serviceCode = val;
    }

    public get serviceCode(): string{
        return this._serviceCode;
    } 

    //#endregion serviceCode 

    //#region serviceName

    @observable private _serviceName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceName(val: string){
        this._serviceName = val;
    }

    public get serviceName(): string{
        return this._serviceName;
    } 

    //#endregion serviceName 

    //#region status

    @observable private _status: DataServiceLimitStatus = null;

    @TypeSystem.propertyDecorator(DataServiceLimitStatus)
    public set status(val: DataServiceLimitStatus){
        this._status = val;
    }

    public get status(): DataServiceLimitStatus{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DataServiceLimit', moduleContext.moduleName)
export class DataServiceLimit extends BaseDataModel { 

    //#region serviceLimitID

    @observable private _serviceLimitID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceLimitID(val: number){
        this._serviceLimitID = val;
    }

    public get serviceLimitID(): number{
        return this._serviceLimitID;
    } 

    //#endregion serviceLimitID 

    //#region serviceCode

    @observable private _serviceCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceCode(val: string){
        this._serviceCode = val;
    }

    public get serviceCode(): string{
        return this._serviceCode;
    } 

    //#endregion serviceCode 

    //#region serviceName

    @observable private _serviceName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceName(val: string){
        this._serviceName = val;
    }

    public get serviceName(): string{
        return this._serviceName;
    } 

    //#endregion serviceName 

    //#region requestsIntervalFromStartDate

    @observable private _requestsIntervalFromStartDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set requestsIntervalFromStartDate(val: moment.Moment){
        this._requestsIntervalFromStartDate = val;
    }

    public get requestsIntervalFromStartDate(): moment.Moment{
        return this._requestsIntervalFromStartDate;
    } 

    //#endregion requestsIntervalFromStartDate 

    //#region requestsInterval

    @observable private _requestsInterval: string = null;

    @TypeSystem.propertyDecorator('string')
    public set requestsInterval(val: string){
        this._requestsInterval = val;
    }

    public get requestsInterval(): string{
        return this._requestsInterval;
    } 

    //#endregion requestsInterval 

    //#region requestsNumber

    @observable private _requestsNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set requestsNumber(val: number){
        this._requestsNumber = val;
    }

    public get requestsNumber(): number{
        return this._requestsNumber;
    } 

    //#endregion requestsNumber 

    //#region status

    @observable private _status: DataServiceLimitStatus = null;

    @TypeSystem.propertyDecorator(DataServiceLimitStatus)
    public set status(val: DataServiceLimitStatus){
        this._status = val;
    }

    public get status(): DataServiceLimitStatus{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RegistrationDataSearchCriteria', moduleContext.moduleName)
export class RegistrationDataSearchCriteria extends BasePagedSearchCriteria { 

    //#region registrationDataIDs

    @observable private _registrationDataIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set registrationDataIDs(val: number[]){
        this._registrationDataIDs = val;
    }

    public get registrationDataIDs(): number[]{
        return this._registrationDataIDs;
    } 

    //#endregion registrationDataIDs 

    //#region type

    @observable private _type: RegistrationDataTypes = null;

    @TypeSystem.propertyDecorator(RegistrationDataTypes)
    public set type(val: RegistrationDataTypes){
        this._type = val;
    }

    public get type(): RegistrationDataTypes{
        return this._type;
    } 

    //#endregion type 

    //#region cin

    @observable private _cin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set cin(val: string){
        this._cin = val;
    }

    public get cin(): string{
        return this._cin;
    } 

    //#endregion cin 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RegistrationData', moduleContext.moduleName)
export class RegistrationData extends BaseDataModel { 

    //#region registrationDataID

    @observable private _registrationDataID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set registrationDataID(val: number){
        this._registrationDataID = val;
    }

    public get registrationDataID(): number{
        return this._registrationDataID;
    } 

    //#endregion registrationDataID 

    //#region type

    @observable private _type: RegistrationDataTypes = null;

    @TypeSystem.propertyDecorator(RegistrationDataTypes)
    public set type(val: RegistrationDataTypes){
        this._type = val;
    }

    public get type(): RegistrationDataTypes{
        return this._type;
    } 

    //#endregion type 

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

    //#region cin

    @observable private _cin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set cin(val: string){
        this._cin = val;
    }

    public get cin(): string{
        return this._cin;
    } 

    //#endregion cin 

    //#region email

    @observable private _email: string = null;

    @TypeSystem.propertyDecorator('string')
    public set email(val: string){
        this._email = val;
    }

    public get email(): string{
        return this._email;
    } 

    //#endregion email 

    //#region secretWord

    @observable private _secretWord: string = null;

    @TypeSystem.propertyDecorator('string')
    public set secretWord(val: string){
        this._secretWord = val;
    }

    public get secretWord(): string{
        return this._secretWord;
    } 

    //#endregion secretWord 

    //#region validityPeriod

    @observable private _validityPeriod: string = null;

    @TypeSystem.propertyDecorator('string')
    public set validityPeriod(val: string){
        this._validityPeriod = val;
    }

    public get validityPeriod(): string{
        return this._validityPeriod;
    } 

    //#endregion validityPeriod 

    //#region portalUrl

    @observable private _portalUrl: string = null;

    @TypeSystem.propertyDecorator('string')
    public set portalUrl(val: string){
        this._portalUrl = val;
    }

    public get portalUrl(): string{
        return this._portalUrl;
    } 

    //#endregion portalUrl 

    //#region notificationUrl

    @observable private _notificationUrl: string = null;

    @TypeSystem.propertyDecorator('string')
    public set notificationUrl(val: string){
        this._notificationUrl = val;
    }

    public get notificationUrl(): string{
        return this._notificationUrl;
    } 

    //#endregion notificationUrl 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ActionType', moduleContext.moduleName)
export class ActionType extends BaseDataModel { 

    //#region actionTypeID

    @observable private _actionTypeID: ActionTypes = null;

    @TypeSystem.propertyDecorator(ActionTypes)
    public set actionTypeID(val: ActionTypes){
        this._actionTypeID = val;
    }

    public get actionTypeID(): ActionTypes{
        return this._actionTypeID;
    } 

    //#endregion actionTypeID 

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

@TypeSystem.typeDecorator('ObjectType', moduleContext.moduleName)
export class ObjectType extends BaseDataModel { 

    //#region objectTypeID

    @observable private _objectTypeID: ObjectTypes = null;

    @TypeSystem.propertyDecorator(ObjectTypes)
    public set objectTypeID(val: ObjectTypes){
        this._objectTypeID = val;
    }

    public get objectTypeID(): ObjectTypes{
        return this._objectTypeID;
    } 

    //#endregion objectTypeID 

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

 
 
