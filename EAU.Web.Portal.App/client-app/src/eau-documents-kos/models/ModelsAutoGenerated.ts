

// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { ApplicationFormVMBase, PersonAddress, PersonalInformationVM, PoliceDepartment, IdentityDocumentType, PersonBasicDataVM } from 'eau-documents'


export enum PersonIdentifierChoiceType { 

    EGN = 0,

    LNCh = 1,

}
TypeSystem.registerEnumInfo(PersonIdentifierChoiceType , 'PersonIdentifierChoiceType' , moduleContext.moduleName)
export enum WeaponNoticeType { 

    Acquired = 0,

    Transferred = 1,

}
TypeSystem.registerEnumInfo(WeaponNoticeType , 'WeaponNoticeType' , moduleContext.moduleName)

@TypeSystem.typeDecorator('ApplicationByFormAnnex9VM', moduleContext.moduleName)
export class ApplicationByFormAnnex9VM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationByFormAnnex9DataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationByFormAnnex9DataVM')
    public set circumstances(val: ApplicationByFormAnnex9DataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationByFormAnnex9DataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationByFormAnnex9DataVM', moduleContext.moduleName)
export class ApplicationByFormAnnex9DataVM extends BaseDataModel { 

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

    //#region personalInformation

    @observable private _personalInformation: PersonalInformationVM = null;

    @TypeSystem.propertyDecorator(PersonalInformationVM)
    public set personalInformation(val: PersonalInformationVM){
        this._personalInformation = val;
    }

    public get personalInformation(): PersonalInformationVM{
        return this._personalInformation;
    } 

    //#endregion personalInformation 

    //#region issuingPoliceDepartment

    @observable private _issuingPoliceDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set issuingPoliceDepartment(val: PoliceDepartment){
        this._issuingPoliceDepartment = val;
    }

    public get issuingPoliceDepartment(): PoliceDepartment{
        return this._issuingPoliceDepartment;
    } 

    //#endregion issuingPoliceDepartment 

    //#region issuingDocument

    @observable private _issuingDocument: string = null;

    @TypeSystem.propertyDecorator('string')
    public set issuingDocument(val: string){
        this._issuingDocument = val;
    }

    public get issuingDocument(): string{
        return this._issuingDocument;
    } 

    //#endregion issuingDocument 

    //#region personGrantedFromIssuingDocument

    @observable private _personGrantedFromIssuingDocument: PersonBasicDataVM = null;

    @TypeSystem.propertyDecorator(PersonBasicDataVM)
    public set personGrantedFromIssuingDocument(val: PersonBasicDataVM){
        this._personGrantedFromIssuingDocument = val;
    }

    public get personGrantedFromIssuingDocument(): PersonBasicDataVM{
        return this._personGrantedFromIssuingDocument;
    } 

    //#endregion personGrantedFromIssuingDocument 

    //#region specificDataForIssuingDocumentsForKOS

    @observable private _specificDataForIssuingDocumentsForKOS: string = null;

    @TypeSystem.propertyDecorator('string')
    public set specificDataForIssuingDocumentsForKOS(val: string){
        this._specificDataForIssuingDocumentsForKOS = val;
    }

    public get specificDataForIssuingDocumentsForKOS(): string{
        return this._specificDataForIssuingDocumentsForKOS;
    } 

    //#endregion specificDataForIssuingDocumentsForKOS 

    //#region servicesWithOuterDocumentForThirdPerson

    @observable private _servicesWithOuterDocumentForThirdPerson: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set servicesWithOuterDocumentForThirdPerson(val: boolean){
        this._servicesWithOuterDocumentForThirdPerson = val;
    }

    public get servicesWithOuterDocumentForThirdPerson(): boolean{
        return this._servicesWithOuterDocumentForThirdPerson;
    } 

    //#endregion servicesWithOuterDocumentForThirdPerson 

    //#region onlyGDNPPoliceDepartment

    @observable private _onlyGDNPPoliceDepartment: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set onlyGDNPPoliceDepartment(val: boolean){
        this._onlyGDNPPoliceDepartment = val;
    }

    public get onlyGDNPPoliceDepartment(): boolean{
        return this._onlyGDNPPoliceDepartment;
    } 

    //#endregion onlyGDNPPoliceDepartment 

    //#region isRecipientEntity

    @observable private _isRecipientEntity: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isRecipientEntity(val: boolean){
        this._isRecipientEntity = val;
    }

    public get isRecipientEntity(): boolean{
        return this._isRecipientEntity;
    } 

    //#endregion isRecipientEntity 

    //#region isSpecificDataForIssuingDocumentsForKOSRequired

    @observable private _isSpecificDataForIssuingDocumentsForKOSRequired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSpecificDataForIssuingDocumentsForKOSRequired(val: boolean){
        this._isSpecificDataForIssuingDocumentsForKOSRequired = val;
    }

    public get isSpecificDataForIssuingDocumentsForKOSRequired(): boolean{
        return this._isSpecificDataForIssuingDocumentsForKOSRequired;
    } 

    //#endregion isSpecificDataForIssuingDocumentsForKOSRequired 

    //#region agreementToReceiveERefusal

    @observable private _agreementToReceiveERefusal: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set agreementToReceiveERefusal(val: boolean){
        this._agreementToReceiveERefusal = val;
    }

    public get agreementToReceiveERefusal(): boolean{
        return this._agreementToReceiveERefusal;
    } 

    //#endregion agreementToReceiveERefusal 

    //#region persistedPersonAddress

    @observable private _persistedPersonAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set persistedPersonAddress(val: PersonAddress){
        this._persistedPersonAddress = val;
    }

    public get persistedPersonAddress(): PersonAddress{
        return this._persistedPersonAddress;
    } 

    //#endregion persistedPersonAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationByFormAnnex10VM', moduleContext.moduleName)
export class ApplicationByFormAnnex10VM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationByFormAnnex10DataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationByFormAnnex10DataVM')
    public set circumstances(val: ApplicationByFormAnnex10DataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationByFormAnnex10DataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationByFormAnnex10DataVM', moduleContext.moduleName)
export class ApplicationByFormAnnex10DataVM extends BaseDataModel { 

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

    //#region personalInformation

    @observable private _personalInformation: PersonalInformationVM = null;

    @TypeSystem.propertyDecorator(PersonalInformationVM)
    public set personalInformation(val: PersonalInformationVM){
        this._personalInformation = val;
    }

    public get personalInformation(): PersonalInformationVM{
        return this._personalInformation;
    } 

    //#endregion personalInformation 

    //#region issuingPoliceDepartment

    @observable private _issuingPoliceDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set issuingPoliceDepartment(val: PoliceDepartment){
        this._issuingPoliceDepartment = val;
    }

    public get issuingPoliceDepartment(): PoliceDepartment{
        return this._issuingPoliceDepartment;
    } 

    //#endregion issuingPoliceDepartment 

    //#region issuingDocument

    @observable private _issuingDocument: string = null;

    @TypeSystem.propertyDecorator('string')
    public set issuingDocument(val: string){
        this._issuingDocument = val;
    }

    public get issuingDocument(): string{
        return this._issuingDocument;
    } 

    //#endregion issuingDocument 

    //#region personGrantedFromIssuingDocument

    @observable private _personGrantedFromIssuingDocument: PersonBasicDataVM = null;

    @TypeSystem.propertyDecorator(PersonBasicDataVM)
    public set personGrantedFromIssuingDocument(val: PersonBasicDataVM){
        this._personGrantedFromIssuingDocument = val;
    }

    public get personGrantedFromIssuingDocument(): PersonBasicDataVM{
        return this._personGrantedFromIssuingDocument;
    } 

    //#endregion personGrantedFromIssuingDocument 

    //#region specificDataForIssuingDocumentsForKOS

    @observable private _specificDataForIssuingDocumentsForKOS: string = null;

    @TypeSystem.propertyDecorator('string')
    public set specificDataForIssuingDocumentsForKOS(val: string){
        this._specificDataForIssuingDocumentsForKOS = val;
    }

    public get specificDataForIssuingDocumentsForKOS(): string{
        return this._specificDataForIssuingDocumentsForKOS;
    } 

    //#endregion specificDataForIssuingDocumentsForKOS 

    //#region servicesWithOuterDocumentForThirdPerson

    @observable private _servicesWithOuterDocumentForThirdPerson: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set servicesWithOuterDocumentForThirdPerson(val: boolean){
        this._servicesWithOuterDocumentForThirdPerson = val;
    }

    public get servicesWithOuterDocumentForThirdPerson(): boolean{
        return this._servicesWithOuterDocumentForThirdPerson;
    } 

    //#endregion servicesWithOuterDocumentForThirdPerson 

    //#region isRecipientEntity

    @observable private _isRecipientEntity: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isRecipientEntity(val: boolean){
        this._isRecipientEntity = val;
    }

    public get isRecipientEntity(): boolean{
        return this._isRecipientEntity;
    } 

    //#endregion isRecipientEntity 

    //#region onlyGDNPPoliceDepartment

    @observable private _onlyGDNPPoliceDepartment: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set onlyGDNPPoliceDepartment(val: boolean){
        this._onlyGDNPPoliceDepartment = val;
    }

    public get onlyGDNPPoliceDepartment(): boolean{
        return this._onlyGDNPPoliceDepartment;
    } 

    //#endregion onlyGDNPPoliceDepartment 

    //#region isSpecificDataForIssuingDocumentsForKOSRequired

    @observable private _isSpecificDataForIssuingDocumentsForKOSRequired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSpecificDataForIssuingDocumentsForKOSRequired(val: boolean){
        this._isSpecificDataForIssuingDocumentsForKOSRequired = val;
    }

    public get isSpecificDataForIssuingDocumentsForKOSRequired(): boolean{
        return this._isSpecificDataForIssuingDocumentsForKOSRequired;
    } 

    //#endregion isSpecificDataForIssuingDocumentsForKOSRequired 

    //#region agreementToReceiveERefusal

    @observable private _agreementToReceiveERefusal: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set agreementToReceiveERefusal(val: boolean){
        this._agreementToReceiveERefusal = val;
    }

    public get agreementToReceiveERefusal(): boolean{
        return this._agreementToReceiveERefusal;
    } 

    //#endregion agreementToReceiveERefusal 

    //#region persistedPersonAddress

    @observable private _persistedPersonAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set persistedPersonAddress(val: PersonAddress){
        this._persistedPersonAddress = val;
    }

    public get persistedPersonAddress(): PersonAddress{
        return this._persistedPersonAddress;
    } 

    //#endregion persistedPersonAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonNames', moduleContext.moduleName)
export class PersonNames extends BaseDataModel { 

    //#region first

    @observable private _first: string = null;

    @TypeSystem.propertyDecorator('string')
    public set first(val: string){
        this._first = val;
    }

    public get first(): string{
        return this._first;
    } 

    //#endregion first 

    //#region middle

    @observable private _middle: string = null;

    @TypeSystem.propertyDecorator('string')
    public set middle(val: string){
        this._middle = val;
    }

    public get middle(): string{
        return this._middle;
    } 

    //#endregion middle 

    //#region last

    @observable private _last: string = null;

    @TypeSystem.propertyDecorator('string')
    public set last(val: string){
        this._last = val;
    }

    public get last(): string{
        return this._last;
    } 

    //#endregion last 

    //#region pseudonim

    @observable private _pseudonim: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pseudonim(val: string){
        this._pseudonim = val;
    }

    public get pseudonim(): string{
        return this._pseudonim;
    } 

    //#endregion pseudonim 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonIdentifier', moduleContext.moduleName)
export class PersonIdentifier extends BaseDataModel { 

    //#region item

    @observable private _item: string = null;

    @TypeSystem.propertyDecorator('string')
    public set item(val: string){
        this._item = val;
    }

    public get item(): string{
        return this._item;
    } 

    //#endregion item 

    //#region itemElementName

    @observable private _itemElementName: PersonIdentifierChoiceType = null;

    @TypeSystem.propertyDecorator(PersonIdentifierChoiceType)
    public set itemElementName(val: PersonIdentifierChoiceType){
        this._itemElementName = val;
    }

    public get itemElementName(): PersonIdentifierChoiceType{
        return this._itemElementName;
    } 

    //#endregion itemElementName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentityDocumentBasicDataVM', moduleContext.moduleName)
export class IdentityDocumentBasicDataVM extends BaseDataModel { 

    //#region identityNumber

    @observable private _identityNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identityNumber(val: string){
        this._identityNumber = val;
    }

    public get identityNumber(): string{
        return this._identityNumber;
    } 

    //#endregion identityNumber 

    //#region identitityIssueDate

    @observable private _identitityIssueDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set identitityIssueDate(val: moment.Moment){
        this._identitityIssueDate = val;
    }

    public get identitityIssueDate(): moment.Moment{
        return this._identitityIssueDate;
    } 

    //#endregion identitityIssueDate 

    //#region identityIssuer

    @observable private _identityIssuer: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identityIssuer(val: string){
        this._identityIssuer = val;
    }

    public get identityIssuer(): string{
        return this._identityIssuer;
    } 

    //#endregion identityIssuer 

    //#region identityDocumentType

    @observable private _identityDocumentType: IdentityDocumentType = null;

    @TypeSystem.propertyDecorator(IdentityDocumentType)
    public set identityDocumentType(val: IdentityDocumentType){
        this._identityDocumentType = val;
    }

    public get identityDocumentType(): IdentityDocumentType{
        return this._identityDocumentType;
    } 

    //#endregion identityDocumentType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('NotificationForNonFirearmVM', moduleContext.moduleName)
export class NotificationForNonFirearmVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: NotificationForNonFirearmDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'NotificationForNonFirearmDataVM')
    public set circumstances(val: NotificationForNonFirearmDataVM){
        this._circumstances = val;
    }

    public get circumstances(): NotificationForNonFirearmDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('NotificationForNonFirearmDataVM', moduleContext.moduleName)
export class NotificationForNonFirearmDataVM extends BaseDataModel { 

    //#region issuingPoliceDepartment

    @observable private _issuingPoliceDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set issuingPoliceDepartment(val: PoliceDepartment){
        this._issuingPoliceDepartment = val;
    }

    public get issuingPoliceDepartment(): PoliceDepartment{
        return this._issuingPoliceDepartment;
    } 

    //#endregion issuingPoliceDepartment 

    //#region weaponNoticeType

    @observable private _weaponNoticeType: WeaponNoticeType = null;

    @TypeSystem.propertyDecorator(WeaponNoticeType)
    public set weaponNoticeType(val: WeaponNoticeType){
        this._weaponNoticeType = val;
    }

    public get weaponNoticeType(): WeaponNoticeType{
        return this._weaponNoticeType;
    } 

    //#endregion weaponNoticeType 

    //#region applicantInformation

    @observable private _applicantInformation: PersonalInformationVM = null;

    @TypeSystem.propertyDecorator(PersonalInformationVM)
    public set applicantInformation(val: PersonalInformationVM){
        this._applicantInformation = val;
    }

    public get applicantInformation(): PersonalInformationVM{
        return this._applicantInformation;
    } 

    //#endregion applicantInformation 

    //#region purchaserInformation

    @observable private _purchaserInformation: string = null;

    @TypeSystem.propertyDecorator('string')
    public set purchaserInformation(val: string){
        this._purchaserInformation = val;
    }

    public get purchaserInformation(): string{
        return this._purchaserInformation;
    } 

    //#endregion purchaserInformation 

    //#region technicalSpecificationsOfWeapons

    @observable private _technicalSpecificationsOfWeapons: TechnicalSpecificationOfWeapon[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'TechnicalSpecificationOfWeapon')
    public set technicalSpecificationsOfWeapons(val: TechnicalSpecificationOfWeapon[]){
        this._technicalSpecificationsOfWeapons = val;
    }

    public get technicalSpecificationsOfWeapons(): TechnicalSpecificationOfWeapon[]{
        return this._technicalSpecificationsOfWeapons;
    } 

    //#endregion technicalSpecificationsOfWeapons 

    //#region persistedPersonAddress

    @observable private _persistedPersonAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set persistedPersonAddress(val: PersonAddress){
        this._persistedPersonAddress = val;
    }

    public get persistedPersonAddress(): PersonAddress{
        return this._persistedPersonAddress;
    } 

    //#endregion persistedPersonAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('NotificationForFirearmVM', moduleContext.moduleName)
export class NotificationForFirearmVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: NotificationForFirearmDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'NotificationForFirearmDataVM')
    public set circumstances(val: NotificationForFirearmDataVM){
        this._circumstances = val;
    }

    public get circumstances(): NotificationForFirearmDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('NotificationForFirearmDataVM', moduleContext.moduleName)
export class NotificationForFirearmDataVM extends BaseDataModel { 

    //#region issuingPoliceDepartment

    @observable private _issuingPoliceDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set issuingPoliceDepartment(val: PoliceDepartment){
        this._issuingPoliceDepartment = val;
    }

    public get issuingPoliceDepartment(): PoliceDepartment{
        return this._issuingPoliceDepartment;
    } 

    //#endregion issuingPoliceDepartment 

    //#region applicantInformation

    @observable private _applicantInformation: PersonalInformationVM = null;

    @TypeSystem.propertyDecorator(PersonalInformationVM)
    public set applicantInformation(val: PersonalInformationVM){
        this._applicantInformation = val;
    }

    public get applicantInformation(): PersonalInformationVM{
        return this._applicantInformation;
    } 

    //#endregion applicantInformation 

    //#region purchaserUIC

    @observable private _purchaserUIC: string = null;

    @TypeSystem.propertyDecorator('string')
    public set purchaserUIC(val: string){
        this._purchaserUIC = val;
    }

    public get purchaserUIC(): string{
        return this._purchaserUIC;
    } 

    //#endregion purchaserUIC 

    //#region agreementToReceiveERefusal

    @observable private _agreementToReceiveERefusal: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set agreementToReceiveERefusal(val: boolean){
        this._agreementToReceiveERefusal = val;
    }

    public get agreementToReceiveERefusal(): boolean{
        return this._agreementToReceiveERefusal;
    } 

    //#endregion agreementToReceiveERefusal 

    //#region technicalSpecificationsOfWeapons

    @observable private _technicalSpecificationsOfWeapons: TechnicalSpecificationOfWeapon[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'TechnicalSpecificationOfWeapon')
    public set technicalSpecificationsOfWeapons(val: TechnicalSpecificationOfWeapon[]){
        this._technicalSpecificationsOfWeapons = val;
    }

    public get technicalSpecificationsOfWeapons(): TechnicalSpecificationOfWeapon[]{
        return this._technicalSpecificationsOfWeapons;
    } 

    //#endregion technicalSpecificationsOfWeapons 

    //#region persistedPersonAddress

    @observable private _persistedPersonAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set persistedPersonAddress(val: PersonAddress){
        this._persistedPersonAddress = val;
    }

    public get persistedPersonAddress(): PersonAddress{
        return this._persistedPersonAddress;
    } 

    //#endregion persistedPersonAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('TechnicalSpecificationOfWeapon', moduleContext.moduleName)
export class TechnicalSpecificationOfWeapon extends BaseDataModel { 

    //#region weaponTypeCode

    @observable private _weaponTypeCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set weaponTypeCode(val: string){
        this._weaponTypeCode = val;
    }

    public get weaponTypeCode(): string{
        return this._weaponTypeCode;
    } 

    //#endregion weaponTypeCode 

    //#region weaponTypeName

    @observable private _weaponTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set weaponTypeName(val: string){
        this._weaponTypeName = val;
    }

    public get weaponTypeName(): string{
        return this._weaponTypeName;
    } 

    //#endregion weaponTypeName 

    //#region weaponPurposeCode

    @observable private _weaponPurposeCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set weaponPurposeCode(val: string){
        this._weaponPurposeCode = val;
    }

    public get weaponPurposeCode(): string{
        return this._weaponPurposeCode;
    } 

    //#endregion weaponPurposeCode 

    //#region weaponPurposeName

    @observable private _weaponPurposeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set weaponPurposeName(val: string){
        this._weaponPurposeName = val;
    }

    public get weaponPurposeName(): string{
        return this._weaponPurposeName;
    } 

    //#endregion weaponPurposeName 

    //#region make

    @observable private _make: string = null;

    @TypeSystem.propertyDecorator('string')
    public set make(val: string){
        this._make = val;
    }

    public get make(): string{
        return this._make;
    } 

    //#endregion make 

    //#region model

    @observable private _model: string = null;

    @TypeSystem.propertyDecorator('string')
    public set model(val: string){
        this._model = val;
    }

    public get model(): string{
        return this._model;
    } 

    //#endregion model 

    //#region caliber

    @observable private _caliber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set caliber(val: string){
        this._caliber = val;
    }

    public get caliber(): string{
        return this._caliber;
    } 

    //#endregion caliber 

    //#region weaponNumber

    @observable private _weaponNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set weaponNumber(val: string){
        this._weaponNumber = val;
    }

    public get weaponNumber(): string{
        return this._weaponNumber;
    } 

    //#endregion weaponNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 
