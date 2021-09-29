
// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'


export enum QualifierType { 

    OIDAsURI = 0,

    OIDAsURN = 1,

}
TypeSystem.registerEnumInfo(QualifierType , 'QualifierType' , moduleContext.moduleName)
export enum ServiceTermType { 

    Regular = 1,

    Fast = 2,

    Express = 3,

}
TypeSystem.registerEnumInfo(ServiceTermType , 'ServiceTermType' , moduleContext.moduleName)
export enum ApplicationType { 

    AppForFirstReg = 0,

    AppForChangeData = 1,

    AppForRemoveInvalidData = 2,

}
TypeSystem.registerEnumInfo(ApplicationType , 'ApplicationType' , moduleContext.moduleName)
export enum ServiceResultReceiptMethods { 

    EmailOrWebApplication = 1,

    Desk = 2,

    DeskInAdministration = 3,

    CourierToAddress = 4,

    CourierToOtherAddress = 5,

    CourierToMailBox = 6,

    UnitInAdministration = 7,

}
TypeSystem.registerEnumInfo(ServiceResultReceiptMethods , 'ServiceResultReceiptMethods' , moduleContext.moduleName)
export enum ElectronicServiceProviderType { 

    Administration = 1,

    PhysicalPerson = 2,

    Company = 3,

}
TypeSystem.registerEnumInfo(ElectronicServiceProviderType , 'ElectronicServiceProviderType' , moduleContext.moduleName)
export enum ElectronicServiceAuthorQualityType { 

    Personal = 0,

    Representative = 1,

    LegalRepresentative = 2,

    Official = 3,

}
TypeSystem.registerEnumInfo(ElectronicServiceAuthorQualityType , 'ElectronicServiceAuthorQualityType' , moduleContext.moduleName)
export enum PersonAndEntityChoiceType { 

    Person = 0,

    ForeignPerson = 1,

    Entity = 2,

    ForeignEntity = 3,

}
TypeSystem.registerEnumInfo(PersonAndEntityChoiceType , 'PersonAndEntityChoiceType' , moduleContext.moduleName)
export enum ForeignEntityChoiceType { 

    RegisterData = 1,

    OtherData = 2,

}
TypeSystem.registerEnumInfo(ForeignEntityChoiceType , 'ForeignEntityChoiceType' , moduleContext.moduleName)
export enum PersonIdentifierChoiceType { 

    EGN = 0,

    LNCh = 1,

}
TypeSystem.registerEnumInfo(PersonIdentifierChoiceType , 'PersonIdentifierChoiceType' , moduleContext.moduleName)
export enum IdentityDocumentType { 

    PersonalCard = 0,

    Passport = 1,

    DiplomaticPassport = 2,

    OfficialPassport = 3,

    SeaManPassport = 4,

    MilitaryIDCard = 5,

    DrivingLicense = 6,

    TemporaryPassport = 7,

    OfficeOpenSheetBorderCrossing = 8,

    TemporaryPassportForLeavingTheRepublicOfBulgaria = 9,

    RefugeeCard = 10,

    MapForeignerGrantedAsylum = 11,

    MapOfForeignerWithHumanitarianStatus = 12,

    TemporaryCardOfForeigner = 13,

    CertificateForTravelingAbroadOfRefugee = 14,

    CertificateForTravelingAbroadOfAForeignerGrantedAsylum = 15,

    CertificateForTravelingAbroadOfAForeignerWithHumanitarianStatus = 16,

    CertificateForTravelingAbroadForAPersonWithoutCitizenship = 17,

    TemporaryCertificateForLeavingTheRepublicOfBulgaria = 18,

    ResidencePermitForAContinuouslyStayingForeignerInBulgaria = 19,

    ResidencePermitForPermanentResidenceInBulgariaForeigner = 20,

    ResidencePermitForResidentFamilyMemberOfEUCitizenWhoHasNotExercised = 21,

    ResidencePermitForContinuouslyStayingForeignerMarkedBeneficiaryUnderArticle3 = 22,

    ResidencePermitForPermanentResidentAlienMarkedBeneficiaryUnderArticle3 = 23,

    ResidencePermitContinuousResidentFamilyMembers = 24,

    ResidencePermitForResidentFamilyMembers = 25,

    CertificateForLongStay = 26,

    CertificateOfResidence = 27,

    DiplomaticCard = 28,

    ConsularCard = 29,

    MapOfTheAdministrativeAndTechnicalStaff = 30,

    MapOfStaff = 31,

    CertificateForReturnToTheRepublicOfBulgariaToAForeigner = 32,

    ResidencePermitContinuousResidentFamilyMemberOfAnEUCitizen = 33,

    ResidencePermit = 34,

    ResidenceCertificateForEUCitizens = 35,

}
TypeSystem.registerEnumInfo(IdentityDocumentType , 'IdentityDocumentType' , moduleContext.moduleName)
export enum DocumentElectronicTransportType { 

    Item0006000001 = 0,

    Item0006000002 = 1,

    Item0006000003 = 2,

    Item0006000004 = 3,

}
TypeSystem.registerEnumInfo(DocumentElectronicTransportType , 'DocumentElectronicTransportType' , moduleContext.moduleName)
export enum ElectronicDocumentDiscrepancyType { 

    Item0006000005 = 0,

    Item0006000006 = 1,

    Item0006000007 = 2,

    Item0006000008 = 3,

    Item0006000009 = 4,

    Item0006000010 = 5,

    Item0006000011 = 6,

}
TypeSystem.registerEnumInfo(ElectronicDocumentDiscrepancyType , 'ElectronicDocumentDiscrepancyType' , moduleContext.moduleName)
export enum ChoiceType { 

    DocumentUri = 0,

    TextUri = 1,

}
TypeSystem.registerEnumInfo(ChoiceType , 'ChoiceType' , moduleContext.moduleName)
export enum OfficialChoiceType { 

    PersonNames = 0,

    ForeignCitizenNames = 1,

}
TypeSystem.registerEnumInfo(OfficialChoiceType , 'OfficialChoiceType' , moduleContext.moduleName)
export enum ItemChoiceType { 

    Person = 0,

    ForeignCitizen = 1,

}
TypeSystem.registerEnumInfo(ItemChoiceType , 'ItemChoiceType' , moduleContext.moduleName)
export enum RecipientChoiceType { 

    Person = 0,

    ForeignPerson = 1,

    Entity = 2,

    ForeignEntity = 3,

}
TypeSystem.registerEnumInfo(RecipientChoiceType , 'RecipientChoiceType' , moduleContext.moduleName)
export enum ForeignEntityIdentifierChoiceType { 

    ForeignEntityIdentifier = 0,

    ForeignEntityOtherData = 1,

    ForeignEntityRegister = 2,

}
TypeSystem.registerEnumInfo(ForeignEntityIdentifierChoiceType , 'ForeignEntityIdentifierChoiceType' , moduleContext.moduleName)
export enum ItemChoiceType1 { 

    InRepublicOfBulgariaDocumentMustServeTo = 0,

    AbroadDocumentMustServeTo = 1,

}
TypeSystem.registerEnumInfo(ItemChoiceType1 , 'ItemChoiceType1' , moduleContext.moduleName)
export enum BIDPersonalIdentificationDocumentReceivePlace { 

    ODMVR = 0,

    RPU = 1,

}
TypeSystem.registerEnumInfo(BIDPersonalIdentificationDocumentReceivePlace , 'BIDPersonalIdentificationDocumentReceivePlace' , moduleContext.moduleName)
export enum BIDMaritalStatus { 

    Widowed = 0,

    Single = 1,

    Maried = 2,

    Divorsed = 3,

    Separated = 4,

    Unspecified = 5,

}
TypeSystem.registerEnumInfo(BIDMaritalStatus , 'BIDMaritalStatus' , moduleContext.moduleName)
export enum ExecutionPeriodType { 

    Hours = 1,

    Days = 2,

}
TypeSystem.registerEnumInfo(ExecutionPeriodType , 'ExecutionPeriodType' , moduleContext.moduleName)

@TypeSystem.typeDecorator('EkatteAddress', moduleContext.moduleName)
export class EkatteAddress extends BaseDataModel { 

    //#region districtCode

    @observable private _districtCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtCode(val: string){
        this._districtCode = val;
    }

    public get districtCode(): string{
        return this._districtCode;
    } 

    //#endregion districtCode 

    //#region districtName

    @observable private _districtName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtName(val: string){
        this._districtName = val;
    }

    public get districtName(): string{
        return this._districtName;
    } 

    //#endregion districtName 

    //#region municipalityCode

    @observable private _municipalityCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityCode(val: string){
        this._municipalityCode = val;
    }

    public get municipalityCode(): string{
        return this._municipalityCode;
    } 

    //#endregion municipalityCode 

    //#region municipalityName

    @observable private _municipalityName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityName(val: string){
        this._municipalityName = val;
    }

    public get municipalityName(): string{
        return this._municipalityName;
    } 

    //#endregion municipalityName 

    //#region settlementCode

    @observable private _settlementCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementCode(val: string){
        this._settlementCode = val;
    }

    public get settlementCode(): string{
        return this._settlementCode;
    } 

    //#endregion settlementCode 

    //#region settlementName

    @observable private _settlementName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementName(val: string){
        this._settlementName = val;
    }

    public get settlementName(): string{
        return this._settlementName;
    } 

    //#endregion settlementName 

    //#region areaCode

    @observable private _areaCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set areaCode(val: string){
        this._areaCode = val;
    }

    public get areaCode(): string{
        return this._areaCode;
    } 

    //#endregion areaCode 

    //#region areaName

    @observable private _areaName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set areaName(val: string){
        this._areaName = val;
    }

    public get areaName(): string{
        return this._areaName;
    } 

    //#endregion areaName 

    //#region postCode

    @observable private _postCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set postCode(val: string){
        this._postCode = val;
    }

    public get postCode(): string{
        return this._postCode;
    } 

    //#endregion postCode 

    //#region housingEstate

    @observable private _housingEstate: string = null;

    @TypeSystem.propertyDecorator('string')
    public set housingEstate(val: string){
        this._housingEstate = val;
    }

    public get housingEstate(): string{
        return this._housingEstate;
    } 

    //#endregion housingEstate 

    //#region street

    @observable private _street: string = null;

    @TypeSystem.propertyDecorator('string')
    public set street(val: string){
        this._street = val;
    }

    public get street(): string{
        return this._street;
    } 

    //#endregion street 

    //#region streetNumber

    @observable private _streetNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set streetNumber(val: string){
        this._streetNumber = val;
    }

    public get streetNumber(): string{
        return this._streetNumber;
    } 

    //#endregion streetNumber 

    //#region block

    @observable private _block: string = null;

    @TypeSystem.propertyDecorator('string')
    public set block(val: string){
        this._block = val;
    }

    public get block(): string{
        return this._block;
    } 

    //#endregion block 

    //#region entrance

    @observable private _entrance: string = null;

    @TypeSystem.propertyDecorator('string')
    public set entrance(val: string){
        this._entrance = val;
    }

    public get entrance(): string{
        return this._entrance;
    } 

    //#endregion entrance 

    //#region floor

    @observable private _floor: string = null;

    @TypeSystem.propertyDecorator('string')
    public set floor(val: string){
        this._floor = val;
    }

    public get floor(): string{
        return this._floor;
    } 

    //#endregion floor 

    //#region apartment

    @observable private _apartment: string = null;

    @TypeSystem.propertyDecorator('string')
    public set apartment(val: string){
        this._apartment = val;
    }

    public get apartment(): string{
        return this._apartment;
    } 

    //#endregion apartment 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('GRAOAddress', moduleContext.moduleName)
export class GRAOAddress extends BaseDataModel { 

    //#region districtGRAOCode

    @observable private _districtGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtGRAOCode(val: string){
        this._districtGRAOCode = val;
    }

    public get districtGRAOCode(): string{
        return this._districtGRAOCode;
    } 

    //#endregion districtGRAOCode 

    //#region districtGRAOName

    @observable private _districtGRAOName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtGRAOName(val: string){
        this._districtGRAOName = val;
    }

    public get districtGRAOName(): string{
        return this._districtGRAOName;
    } 

    //#endregion districtGRAOName 

    //#region municipalityGRAOCode

    @observable private _municipalityGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityGRAOCode(val: string){
        this._municipalityGRAOCode = val;
    }

    public get municipalityGRAOCode(): string{
        return this._municipalityGRAOCode;
    } 

    //#endregion municipalityGRAOCode 

    //#region municipalityGRAOName

    @observable private _municipalityGRAOName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityGRAOName(val: string){
        this._municipalityGRAOName = val;
    }

    public get municipalityGRAOName(): string{
        return this._municipalityGRAOName;
    } 

    //#endregion municipalityGRAOName 

    //#region settlementGRAOCode

    @observable private _settlementGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementGRAOCode(val: string){
        this._settlementGRAOCode = val;
    }

    public get settlementGRAOCode(): string{
        return this._settlementGRAOCode;
    } 

    //#endregion settlementGRAOCode 

    //#region settlementGRAOName

    @observable private _settlementGRAOName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementGRAOName(val: string){
        this._settlementGRAOName = val;
    }

    public get settlementGRAOName(): string{
        return this._settlementGRAOName;
    } 

    //#endregion settlementGRAOName 

    //#region streetGRAOCode

    @observable private _streetGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set streetGRAOCode(val: string){
        this._streetGRAOCode = val;
    }

    public get streetGRAOCode(): string{
        return this._streetGRAOCode;
    } 

    //#endregion streetGRAOCode 

    //#region streetText

    @observable private _streetText: string = null;

    @TypeSystem.propertyDecorator('string')
    public set streetText(val: string){
        this._streetText = val;
    }

    public get streetText(): string{
        return this._streetText;
    } 

    //#endregion streetText 

    //#region buildingNumber

    @observable private _buildingNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set buildingNumber(val: string){
        this._buildingNumber = val;
    }

    public get buildingNumber(): string{
        return this._buildingNumber;
    } 

    //#endregion buildingNumber 

    //#region entrance

    @observable private _entrance: string = null;

    @TypeSystem.propertyDecorator('string')
    public set entrance(val: string){
        this._entrance = val;
    }

    public get entrance(): string{
        return this._entrance;
    } 

    //#endregion entrance 

    //#region floor

    @observable private _floor: string = null;

    @TypeSystem.propertyDecorator('string')
    public set floor(val: string){
        this._floor = val;
    }

    public get floor(): string{
        return this._floor;
    } 

    //#endregion floor 

    //#region apartment

    @observable private _apartment: string = null;

    @TypeSystem.propertyDecorator('string')
    public set apartment(val: string){
        this._apartment = val;
    }

    public get apartment(): string{
        return this._apartment;
    } 

    //#endregion apartment 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentifierType', moduleContext.moduleName)
export class IdentifierType extends BaseDataModel { 

    //#region qualifier

    @observable private _qualifier: QualifierType = null;

    @TypeSystem.propertyDecorator(QualifierType)
    public set qualifier(val: QualifierType){
        this._qualifier = val;
    }

    public get qualifier(): QualifierType{
        return this._qualifier;
    } 

    //#endregion qualifier 

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

@TypeSystem.typeDecorator('EntityBasicData', moduleContext.moduleName)
export class EntityBasicData extends BaseDataModel { 

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

    //#region identifier

    @observable private _identifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identifier(val: string){
        this._identifier = val;
    }

    public get identifier(): string{
        return this._identifier;
    } 

    //#endregion identifier 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentFormVMBase', moduleContext.moduleName)
export class DocumentFormVMBase extends BaseDataModel { 

    //#region editStrategySelectedList

    @observable private _editStrategySelectedList: string[] = null;

    @TypeSystem.propertyArrayDecorator('string')
    public set editStrategySelectedList(val: string[]){
        this._editStrategySelectedList = val;
    }

    public get editStrategySelectedList(): string[]{
        return this._editStrategySelectedList;
    } 

    //#endregion editStrategySelectedList 

    //#region documentTypeURI

    @observable private _documentTypeURI: DocumentTypeURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentTypeURI')
    public set documentTypeURI(val: DocumentTypeURI){
        this._documentTypeURI = val;
    }

    public get documentTypeURI(): DocumentTypeURI{
        return this._documentTypeURI;
    } 

    //#endregion documentTypeURI 

    //#region documentTypeName

    @observable private _documentTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentTypeName(val: string){
        this._documentTypeName = val;
    }

    public get documentTypeName(): string{
        return this._documentTypeName;
    } 

    //#endregion documentTypeName 

    //#region documentURI

    @observable private _documentURI: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set documentURI(val: DocumentURI){
        this._documentURI = val;
    }

    public get documentURI(): DocumentURI{
        return this._documentURI;
    } 

    //#endregion documentURI 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('SigningDocumentFormVMBase<T>', moduleContext.moduleName)
export class SigningDocumentFormVMBase<T> extends DocumentFormVMBase { 

    //#region digitalSignatures

    @observable private _digitalSignatures: T[] = null;

    @TypeSystem.propertyArrayDecorator('any')
    public set digitalSignatures(val: T[]){
        this._digitalSignatures = val;
    }

    public get digitalSignatures(): T[]{
        return this._digitalSignatures;
    } 

    //#endregion digitalSignatures 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationFormVMBase', moduleContext.moduleName)
export class ApplicationFormVMBase extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region electronicServiceApplicantContactData

    @observable private _electronicServiceApplicantContactData: ElectronicServiceApplicantContactData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantContactData')
    public set electronicServiceApplicantContactData(val: ElectronicServiceApplicantContactData){
        this._electronicServiceApplicantContactData = val;
    }

    public get electronicServiceApplicantContactData(): ElectronicServiceApplicantContactData{
        return this._electronicServiceApplicantContactData;
    } 

    //#endregion electronicServiceApplicantContactData 

    //#region serviceTermTypeAndApplicantReceipt

    @observable private _serviceTermTypeAndApplicantReceipt: ServiceTermTypeAndApplicantReceiptVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceTermTypeAndApplicantReceiptVM')
    public set serviceTermTypeAndApplicantReceipt(val: ServiceTermTypeAndApplicantReceiptVM){
        this._serviceTermTypeAndApplicantReceipt = val;
    }

    public get serviceTermTypeAndApplicantReceipt(): ServiceTermTypeAndApplicantReceiptVM{
        return this._serviceTermTypeAndApplicantReceipt;
    } 

    //#endregion serviceTermTypeAndApplicantReceipt 

    //#region declarations

    @observable private _declarations: DeclarationsVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DeclarationsVM')
    public set declarations(val: DeclarationsVM){
        this._declarations = val;
    }

    public get declarations(): DeclarationsVM{
        return this._declarations;
    } 

    //#endregion declarations 

    //#region electronicAdministrativeServiceHeader

    @observable private _electronicAdministrativeServiceHeader: ElectronicAdministrativeServiceHeaderVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicAdministrativeServiceHeaderVM')
    public set electronicAdministrativeServiceHeader(val: ElectronicAdministrativeServiceHeaderVM){
        this._electronicAdministrativeServiceHeader = val;
    }

    public get electronicAdministrativeServiceHeader(): ElectronicAdministrativeServiceHeaderVM{
        return this._electronicAdministrativeServiceHeader;
    } 

    //#endregion electronicAdministrativeServiceHeader 

    //#region authorHasNonHandedSlip

    @observable private _authorHasNonHandedSlip: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set authorHasNonHandedSlip(val: boolean){
        this._authorHasNonHandedSlip = val;
    }

    public get authorHasNonHandedSlip(): boolean{
        return this._authorHasNonHandedSlip;
    } 

    //#endregion authorHasNonHandedSlip 

    //#region authorHasNonPaidSlip

    @observable private _authorHasNonPaidSlip: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set authorHasNonPaidSlip(val: boolean){
        this._authorHasNonPaidSlip = val;
    }

    public get authorHasNonPaidSlip(): boolean{
        return this._authorHasNonPaidSlip;
    } 

    //#endregion authorHasNonPaidSlip 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RegisterObjectURI', moduleContext.moduleName)
export class RegisterObjectURI extends BaseDataModel { 

    //#region registerIndex

    @observable private _registerIndex: number = null;

    @TypeSystem.propertyDecorator('number')
    public set registerIndex(val: number){
        this._registerIndex = val;
    }

    public get registerIndex(): number{
        return this._registerIndex;
    } 

    //#endregion registerIndex 

    //#region batchNumber

    @observable private _batchNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set batchNumber(val: number){
        this._batchNumber = val;
    }

    public get batchNumber(): number{
        return this._batchNumber;
    } 

    //#endregion batchNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentTypeURI', moduleContext.moduleName)
export class DocumentTypeURI extends RegisterObjectURI { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentsWillBeIssuedMessageVM', moduleContext.moduleName)
export class DocumentsWillBeIssuedMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    //#region identityDocumentsWillBeIssuedMessage

    @observable private _identityDocumentsWillBeIssuedMessage: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identityDocumentsWillBeIssuedMessage(val: string){
        this._identityDocumentsWillBeIssuedMessage = val;
    }

    public get identityDocumentsWillBeIssuedMessage(): string{
        return this._identityDocumentsWillBeIssuedMessage;
    } 

    //#endregion identityDocumentsWillBeIssuedMessage 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PoliceDepartment')
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region deliveryDate

    @observable private _deliveryDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set deliveryDate(val: moment.Moment){
        this._deliveryDate = val;
    }

    public get deliveryDate(): moment.Moment{
        return this._deliveryDate;
    } 

    //#endregion deliveryDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('OutstandingConditionsForStartOfServiceMessageVM', moduleContext.moduleName)
export class OutstandingConditionsForStartOfServiceMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region outstandingConditionsForStartOfServiceMessageHeader

    @observable private _outstandingConditionsForStartOfServiceMessageHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set outstandingConditionsForStartOfServiceMessageHeader(val: string){
        this._outstandingConditionsForStartOfServiceMessageHeader = val;
    }

    public get outstandingConditionsForStartOfServiceMessageHeader(): string{
        return this._outstandingConditionsForStartOfServiceMessageHeader;
    } 

    //#endregion outstandingConditionsForStartOfServiceMessageHeader 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region grounds

    @observable private _grounds: OutstandingConditionsForStartOfServiceMessageGrounds[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'OutstandingConditionsForStartOfServiceMessageGrounds')
    public set grounds(val: OutstandingConditionsForStartOfServiceMessageGrounds[]){
        this._grounds = val;
    }

    public get grounds(): OutstandingConditionsForStartOfServiceMessageGrounds[]{
        return this._grounds;
    } 

    //#endregion grounds 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PaymentInstructionsVM', moduleContext.moduleName)
export class PaymentInstructionsVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region bankName

    @observable private _bankName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bankName(val: string){
        this._bankName = val;
    }

    public get bankName(): string{
        return this._bankName;
    } 

    //#endregion bankName 

    //#region bic

    @observable private _bic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bic(val: string){
        this._bic = val;
    }

    public get bic(): string{
        return this._bic;
    } 

    //#endregion bic 

    //#region iban

    @observable private _iban: string = null;

    @TypeSystem.propertyDecorator('string')
    public set iban(val: string){
        this._iban = val;
    }

    public get iban(): string{
        return this._iban;
    } 

    //#endregion iban 

    //#region paymentReason

    @observable private _paymentReason: string = null;

    @TypeSystem.propertyDecorator('string')
    public set paymentReason(val: string){
        this._paymentReason = val;
    }

    public get paymentReason(): string{
        return this._paymentReason;
    } 

    //#endregion paymentReason 

    //#region amount

    @observable private _amount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set amount(val: number){
        this._amount = val;
    }

    public get amount(): number{
        return this._amount;
    } 

    //#endregion amount 

    //#region amountCurrency

    @observable private _amountCurrency: string = null;

    @TypeSystem.propertyDecorator('string')
    public set amountCurrency(val: string){
        this._amountCurrency = val;
    }

    public get amountCurrency(): string{
        return this._amountCurrency;
    } 

    //#endregion amountCurrency 

    //#region deadlineForPayment

    @observable private _deadlineForPayment: DeadlineVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DeadlineVM')
    public set deadlineForPayment(val: DeadlineVM){
        this._deadlineForPayment = val;
    }

    public get deadlineForPayment(): DeadlineVM{
        return this._deadlineForPayment;
    } 

    //#endregion deadlineForPayment 

    //#region deadlineMessage

    @observable private _deadlineMessage: string = null;

    @TypeSystem.propertyDecorator('string')
    public set deadlineMessage(val: string){
        this._deadlineMessage = val;
    }

    public get deadlineMessage(): string{
        return this._deadlineMessage;
    } 

    //#endregion deadlineMessage 

    //#region paymentInstructionsHeader

    @observable private _paymentInstructionsHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set paymentInstructionsHeader(val: string){
        this._paymentInstructionsHeader = val;
    }

    public get paymentInstructionsHeader(): string{
        return this._paymentInstructionsHeader;
    } 

    //#endregion paymentInstructionsHeader 

    //#region pepCin

    @observable private _pepCin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pepCin(val: string){
        this._pepCin = val;
    }

    public get pepCin(): string{
        return this._pepCin;
    } 

    //#endregion pepCin 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReceiptAcknowledgedMessageVM', moduleContext.moduleName)
export class ReceiptAcknowledgedMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region electronicServiceProvider

    @observable private _electronicServiceProvider: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProvider(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProvider = val;
    }

    public get electronicServiceProvider(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProvider;
    } 

    //#endregion electronicServiceProvider 

    //#region transportType

    @observable private _transportType: DocumentElectronicTransportType = null;

    @TypeSystem.propertyDecorator(DocumentElectronicTransportType)
    public set transportType(val: DocumentElectronicTransportType){
        this._transportType = val;
    }

    public get transportType(): DocumentElectronicTransportType{
        return this._transportType;
    } 

    //#endregion transportType 

    //#region receiptTime

    @observable private _receiptTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set receiptTime(val: moment.Moment){
        this._receiptTime = val;
    }

    public get receiptTime(): moment.Moment{
        return this._receiptTime;
    } 

    //#endregion receiptTime 

    //#region registeredBy

    @observable private _registeredBy: ReceiptAcknowledgedMessageRegisteredByVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReceiptAcknowledgedMessageRegisteredByVM')
    public set registeredBy(val: ReceiptAcknowledgedMessageRegisteredByVM){
        this._registeredBy = val;
    }

    public get registeredBy(): ReceiptAcknowledgedMessageRegisteredByVM{
        return this._registeredBy;
    } 

    //#endregion registeredBy 

    //#region caseAccessIdentifier

    @observable private _caseAccessIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set caseAccessIdentifier(val: string){
        this._caseAccessIdentifier = val;
    }

    public get caseAccessIdentifier(): string{
        return this._caseAccessIdentifier;
    } 

    //#endregion caseAccessIdentifier 

    //#region applicant

    @observable private _applicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set applicant(val: ElectronicServiceApplicantVM){
        this._applicant = val;
    }

    public get applicant(): ElectronicServiceApplicantVM{
        return this._applicant;
    } 

    //#endregion applicant 

    //#region applicationDocumentTypeName

    @observable private _applicationDocumentTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set applicationDocumentTypeName(val: string){
        this._applicationDocumentTypeName = val;
    }

    public get applicationDocumentTypeName(): string{
        return this._applicationDocumentTypeName;
    } 

    //#endregion applicationDocumentTypeName 

    //#region applicationDocumentTypeURI

    @observable private _applicationDocumentTypeURI: DocumentTypeURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentTypeURI')
    public set applicationDocumentTypeURI(val: DocumentTypeURI){
        this._applicationDocumentTypeURI = val;
    }

    public get applicationDocumentTypeURI(): DocumentTypeURI{
        return this._applicationDocumentTypeURI;
    } 

    //#endregion applicationDocumentTypeURI 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReceiptAcknowledgedPaymentForMOIVM', moduleContext.moduleName)
export class ReceiptAcknowledgedPaymentForMOIVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region bankName

    @observable private _bankName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bankName(val: string){
        this._bankName = val;
    }

    public get bankName(): string{
        return this._bankName;
    } 

    //#endregion bankName 

    //#region bic

    @observable private _bic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bic(val: string){
        this._bic = val;
    }

    public get bic(): string{
        return this._bic;
    } 

    //#endregion bic 

    //#region iban

    @observable private _iban: string = null;

    @TypeSystem.propertyDecorator('string')
    public set iban(val: string){
        this._iban = val;
    }

    public get iban(): string{
        return this._iban;
    } 

    //#endregion iban 

    //#region paymentReason

    @observable private _paymentReason: string = null;

    @TypeSystem.propertyDecorator('string')
    public set paymentReason(val: string){
        this._paymentReason = val;
    }

    public get paymentReason(): string{
        return this._paymentReason;
    } 

    //#endregion paymentReason 

    //#region amount

    @observable private _amount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set amount(val: number){
        this._amount = val;
    }

    public get amount(): number{
        return this._amount;
    } 

    //#endregion amount 

    //#region amountCurrency

    @observable private _amountCurrency: string = null;

    @TypeSystem.propertyDecorator('string')
    public set amountCurrency(val: string){
        this._amountCurrency = val;
    }

    public get amountCurrency(): string{
        return this._amountCurrency;
    } 

    //#endregion amountCurrency 

    //#region receiptAcknowledgedPaymentMessage

    @observable private _receiptAcknowledgedPaymentMessage: string = null;

    @TypeSystem.propertyDecorator('string')
    public set receiptAcknowledgedPaymentMessage(val: string){
        this._receiptAcknowledgedPaymentMessage = val;
    }

    public get receiptAcknowledgedPaymentMessage(): string{
        return this._receiptAcknowledgedPaymentMessage;
    } 

    //#endregion receiptAcknowledgedPaymentMessage 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReceiptNotAcknowledgedMessageVM', moduleContext.moduleName)
export class ReceiptNotAcknowledgedMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region messageURI

    @observable private _messageURI: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set messageURI(val: DocumentURI){
        this._messageURI = val;
    }

    public get messageURI(): DocumentURI{
        return this._messageURI;
    } 

    //#endregion messageURI 

    //#region electronicServiceProvider

    @observable private _electronicServiceProvider: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProvider(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProvider = val;
    }

    public get electronicServiceProvider(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProvider;
    } 

    //#endregion electronicServiceProvider 

    //#region transportType

    @observable private _transportType: DocumentElectronicTransportType = null;

    @TypeSystem.propertyDecorator(DocumentElectronicTransportType)
    public set transportType(val: DocumentElectronicTransportType){
        this._transportType = val;
    }

    public get transportType(): DocumentElectronicTransportType{
        return this._transportType;
    } 

    //#endregion transportType 

    //#region discrepancies

    @observable private _discrepancies: ElectronicDocumentDiscrepancyType[] = null;

    @TypeSystem.propertyArrayDecorator(ElectronicDocumentDiscrepancyType)
    public set discrepancies(val: ElectronicDocumentDiscrepancyType[]){
        this._discrepancies = val;
    }

    public get discrepancies(): ElectronicDocumentDiscrepancyType[]{
        return this._discrepancies;
    } 

    //#endregion discrepancies 

    //#region applicant

    @observable private _applicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set applicant(val: ElectronicServiceApplicantVM){
        this._applicant = val;
    }

    public get applicant(): ElectronicServiceApplicantVM{
        return this._applicant;
    } 

    //#endregion applicant 

    //#region messageCreationTime

    @observable private _messageCreationTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set messageCreationTime(val: moment.Moment){
        this._messageCreationTime = val;
    }

    public get messageCreationTime(): moment.Moment{
        return this._messageCreationTime;
    } 

    //#endregion messageCreationTime 

    //#region applicationDocumentTypeName

    @observable private _applicationDocumentTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set applicationDocumentTypeName(val: string){
        this._applicationDocumentTypeName = val;
    }

    public get applicationDocumentTypeName(): string{
        return this._applicationDocumentTypeName;
    } 

    //#endregion applicationDocumentTypeName 

    //#region applicationDocumentTypeURI

    @observable private _applicationDocumentTypeURI: DocumentTypeURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentTypeURI')
    public set applicationDocumentTypeURI(val: DocumentTypeURI){
        this._applicationDocumentTypeURI = val;
    }

    public get applicationDocumentTypeURI(): DocumentTypeURI{
        return this._applicationDocumentTypeURI;
    } 

    //#endregion applicationDocumentTypeURI 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RemovingIrregularitiesInstructionsVM', moduleContext.moduleName)
export class RemovingIrregularitiesInstructionsVM extends SigningDocumentFormVMBase<OfficialVM> { 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region irregularityDocumentURI

    @observable private _irregularityDocumentURI: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set irregularityDocumentURI(val: DocumentURI){
        this._irregularityDocumentURI = val;
    }

    public get irregularityDocumentURI(): DocumentURI{
        return this._irregularityDocumentURI;
    } 

    //#endregion irregularityDocumentURI 

    //#region removingIrregularitiesInstructionsHeader

    @observable private _removingIrregularitiesInstructionsHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set removingIrregularitiesInstructionsHeader(val: string){
        this._removingIrregularitiesInstructionsHeader = val;
    }

    public get removingIrregularitiesInstructionsHeader(): string{
        return this._removingIrregularitiesInstructionsHeader;
    } 

    //#endregion removingIrregularitiesInstructionsHeader 

    //#region applicationDocumentURI

    @observable private _applicationDocumentURI: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set applicationDocumentURI(val: DocumentURI){
        this._applicationDocumentURI = val;
    }

    public get applicationDocumentURI(): DocumentURI{
        return this._applicationDocumentURI;
    } 

    //#endregion applicationDocumentURI 

    //#region applicationDocumentReceiptOrSigningDate

    @observable private _applicationDocumentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set applicationDocumentReceiptOrSigningDate(val: moment.Moment){
        this._applicationDocumentReceiptOrSigningDate = val;
    }

    public get applicationDocumentReceiptOrSigningDate(): moment.Moment{
        return this._applicationDocumentReceiptOrSigningDate;
    } 

    //#endregion applicationDocumentReceiptOrSigningDate 

    //#region irregularityDocumentReceiptOrSigningDate

    @observable private _irregularityDocumentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set irregularityDocumentReceiptOrSigningDate(val: moment.Moment){
        this._irregularityDocumentReceiptOrSigningDate = val;
    }

    public get irregularityDocumentReceiptOrSigningDate(): moment.Moment{
        return this._irregularityDocumentReceiptOrSigningDate;
    } 

    //#endregion irregularityDocumentReceiptOrSigningDate 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region irregularities

    @observable private _irregularities: RemovingIrregularitiesInstructionsIrregularitiesVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'RemovingIrregularitiesInstructionsIrregularitiesVM')
    public set irregularities(val: RemovingIrregularitiesInstructionsIrregularitiesVM[]){
        this._irregularities = val;
    }

    public get irregularities(): RemovingIrregularitiesInstructionsIrregularitiesVM[]{
        return this._irregularities;
    } 

    //#endregion irregularities 

    //#region deadlineCorrectionIrregularities

    @observable private _deadlineCorrectionIrregularities: DeadlineVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DeadlineVM')
    public set deadlineCorrectionIrregularities(val: DeadlineVM){
        this._deadlineCorrectionIrregularities = val;
    }

    public get deadlineCorrectionIrregularities(): DeadlineVM{
        return this._deadlineCorrectionIrregularities;
    } 

    //#endregion deadlineCorrectionIrregularities 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('TerminationOfServiceMessageVM', moduleContext.moduleName)
export class TerminationOfServiceMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region terminationOfServiceMessageHeader

    @observable private _terminationOfServiceMessageHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set terminationOfServiceMessageHeader(val: string){
        this._terminationOfServiceMessageHeader = val;
    }

    public get terminationOfServiceMessageHeader(): string{
        return this._terminationOfServiceMessageHeader;
    } 

    //#endregion terminationOfServiceMessageHeader 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region grounds

    @observable private _grounds: TerminationOfServiceMessageGrounds[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'TerminationOfServiceMessageGrounds')
    public set grounds(val: TerminationOfServiceMessageGrounds[]){
        this._grounds = val;
    }

    public get grounds(): TerminationOfServiceMessageGrounds[]{
        return this._grounds;
    } 

    //#endregion grounds 

    //#region terminationDocumentRegistrationNumber

    @observable private _terminationDocumentRegistrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set terminationDocumentRegistrationNumber(val: string){
        this._terminationDocumentRegistrationNumber = val;
    }

    public get terminationDocumentRegistrationNumber(): string{
        return this._terminationDocumentRegistrationNumber;
    } 

    //#endregion terminationDocumentRegistrationNumber 

    //#region terminationDate

    @observable private _terminationDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set terminationDate(val: moment.Moment){
        this._terminationDate = val;
    }

    public get terminationDate(): moment.Moment{
        return this._terminationDate;
    } 

    //#endregion terminationDate 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PoliceDepartment')
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceApplicantVM', moduleContext.moduleName)
export class ElectronicServiceApplicantVM extends BaseDataModel { 

    //#region recipientGroup

    @observable private _recipientGroup: RecipientGroupVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'RecipientGroupVM')
    public set recipientGroup(val: RecipientGroupVM){
        this._recipientGroup = val;
    }

    public get recipientGroup(): RecipientGroupVM{
        return this._recipientGroup;
    } 

    //#endregion recipientGroup 

    //#region sendApplicationWithReceiptAcknowledgedMessage

    @observable private _sendApplicationWithReceiptAcknowledgedMessage: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set sendApplicationWithReceiptAcknowledgedMessage(val: boolean){
        this._sendApplicationWithReceiptAcknowledgedMessage = val;
    }

    public get sendApplicationWithReceiptAcknowledgedMessage(): boolean{
        return this._sendApplicationWithReceiptAcknowledgedMessage;
    } 

    //#endregion sendApplicationWithReceiptAcknowledgedMessage 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceApplicantContactData', moduleContext.moduleName)
export class ElectronicServiceApplicantContactData extends BaseDataModel { 

    //#region districtCode

    @observable private _districtCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtCode(val: string){
        this._districtCode = val;
    }

    public get districtCode(): string{
        return this._districtCode;
    } 

    //#endregion districtCode 

    //#region districtName

    @observable private _districtName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtName(val: string){
        this._districtName = val;
    }

    public get districtName(): string{
        return this._districtName;
    } 

    //#endregion districtName 

    //#region municipalityCode

    @observable private _municipalityCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityCode(val: string){
        this._municipalityCode = val;
    }

    public get municipalityCode(): string{
        return this._municipalityCode;
    } 

    //#endregion municipalityCode 

    //#region municipalityName

    @observable private _municipalityName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityName(val: string){
        this._municipalityName = val;
    }

    public get municipalityName(): string{
        return this._municipalityName;
    } 

    //#endregion municipalityName 

    //#region settlementCode

    @observable private _settlementCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementCode(val: string){
        this._settlementCode = val;
    }

    public get settlementCode(): string{
        return this._settlementCode;
    } 

    //#endregion settlementCode 

    //#region settlementName

    @observable private _settlementName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementName(val: string){
        this._settlementName = val;
    }

    public get settlementName(): string{
        return this._settlementName;
    } 

    //#endregion settlementName 

    //#region postCode

    @observable private _postCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set postCode(val: string){
        this._postCode = val;
    }

    public get postCode(): string{
        return this._postCode;
    } 

    //#endregion postCode 

    //#region addressDescription

    @observable private _addressDescription: string = null;

    @TypeSystem.propertyDecorator('string')
    public set addressDescription(val: string){
        this._addressDescription = val;
    }

    public get addressDescription(): string{
        return this._addressDescription;
    } 

    //#endregion addressDescription 

    //#region postOfficeBox

    @observable private _postOfficeBox: string = null;

    @TypeSystem.propertyDecorator('string')
    public set postOfficeBox(val: string){
        this._postOfficeBox = val;
    }

    public get postOfficeBox(): string{
        return this._postOfficeBox;
    } 

    //#endregion postOfficeBox 

    //#region phoneNumbers

    @observable private _phoneNumbers: PhoneNumbers = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PhoneNumbers')
    public set phoneNumbers(val: PhoneNumbers){
        this._phoneNumbers = val;
    }

    public get phoneNumbers(): PhoneNumbers{
        return this._phoneNumbers;
    } 

    //#endregion phoneNumbers 

    //#region faxNumbers

    @observable private _faxNumbers: FaxNumbers = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'FaxNumbers')
    public set faxNumbers(val: FaxNumbers){
        this._faxNumbers = val;
    }

    public get faxNumbers(): FaxNumbers{
        return this._faxNumbers;
    } 

    //#endregion faxNumbers 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceTermTypeAndApplicantReceiptVM', moduleContext.moduleName)
export class ServiceTermTypeAndApplicantReceiptVM extends BaseDataModel { 

    //#region serviceApplicantReceiptData

    @observable private _serviceApplicantReceiptData: ServiceApplicantReceiptDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceApplicantReceiptDataVM')
    public set serviceApplicantReceiptData(val: ServiceApplicantReceiptDataVM){
        this._serviceApplicantReceiptData = val;
    }

    public get serviceApplicantReceiptData(): ServiceApplicantReceiptDataVM{
        return this._serviceApplicantReceiptData;
    } 

    //#endregion serviceApplicantReceiptData 

    //#region serviceTermType

    @observable private _serviceTermType: ServiceTermType = null;

    @TypeSystem.propertyDecorator(ServiceTermType)
    public set serviceTermType(val: ServiceTermType){
        this._serviceTermType = val;
    }

    public get serviceTermType(): ServiceTermType{
        return this._serviceTermType;
    } 

    //#endregion serviceTermType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeclarationsVM', moduleContext.moduleName)
export class DeclarationsVM extends BaseDataModel { 

    //#region declarations

    @observable private _declarations: DeclarationVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DeclarationVM')
    public set declarations(val: DeclarationVM[]){
        this._declarations = val;
    }

    public get declarations(): DeclarationVM[]{
        return this._declarations;
    } 

    //#endregion declarations 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeclarationVM', moduleContext.moduleName)
export class DeclarationVM extends BaseDataModel { 

    //#region isDeclarationFilled

    @observable private _isDeclarationFilled: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isDeclarationFilled(val: boolean){
        this._isDeclarationFilled = val;
    }

    public get isDeclarationFilled(): boolean{
        return this._isDeclarationFilled;
    } 

    //#endregion isDeclarationFilled 

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

    //#region furtherDescriptionFromDeclarer

    @observable private _furtherDescriptionFromDeclarer: string = null;

    @TypeSystem.propertyDecorator('string')
    public set furtherDescriptionFromDeclarer(val: string){
        this._furtherDescriptionFromDeclarer = val;
    }

    public get furtherDescriptionFromDeclarer(): string{
        return this._furtherDescriptionFromDeclarer;
    } 

    //#endregion furtherDescriptionFromDeclarer 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicAdministrativeServiceHeaderVM', moduleContext.moduleName)
export class ElectronicAdministrativeServiceHeaderVM extends BaseDataModel { 

    //#region applicationType

    @observable private _applicationType: ApplicationType = null;

    @TypeSystem.propertyDecorator(ApplicationType)
    public set applicationType(val: ApplicationType){
        this._applicationType = val;
    }

    public get applicationType(): ApplicationType{
        return this._applicationType;
    } 

    //#endregion applicationType 

    //#region documentTypeName

    @observable private _documentTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentTypeName(val: string){
        this._documentTypeName = val;
    }

    public get documentTypeName(): string{
        return this._documentTypeName;
    } 

    //#endregion documentTypeName 

    //#region documentTypeURI

    @observable private _documentTypeURI: DocumentTypeURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentTypeURI')
    public set documentTypeURI(val: DocumentTypeURI){
        this._documentTypeURI = val;
    }

    public get documentTypeURI(): DocumentTypeURI{
        return this._documentTypeURI;
    } 

    //#endregion documentTypeURI 

    //#region documentURI

    @observable private _documentURI: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set documentURI(val: DocumentURI){
        this._documentURI = val;
    }

    public get documentURI(): DocumentURI{
        return this._documentURI;
    } 

    //#endregion documentURI 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicData')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicData){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicData{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region sunauServiceName

    @observable private _sunauServiceName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set sunauServiceName(val: string){
        this._sunauServiceName = val;
    }

    public get sunauServiceName(): string{
        return this._sunauServiceName;
    } 

    //#endregion sunauServiceName 

    //#region sunauServiceURI

    @observable private _sunauServiceURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set sunauServiceURI(val: string){
        this._sunauServiceURI = val;
    }

    public get sunauServiceURI(): string{
        return this._sunauServiceURI;
    } 

    //#endregion sunauServiceURI 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Signature', moduleContext.moduleName)
export class Signature extends BaseDataModel { 

    //#region isValid

    @observable private _isValid: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isValid(val: boolean){
        this._isValid = val;
    }

    public get isValid(): boolean{
        return this._isValid;
    } 

    //#endregion isValid 

    //#region error

    @observable private _error: string = null;

    @TypeSystem.propertyDecorator('string')
    public set error(val: string){
        this._error = val;
    }

    public get error(): string{
        return this._error;
    } 

    //#endregion error 

    //#region signatureTime

    @observable private _signatureTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set signatureTime(val: moment.Moment){
        this._signatureTime = val;
    }

    public get signatureTime(): moment.Moment{
        return this._signatureTime;
    } 

    //#endregion signatureTime 

    //#region signatureUniqueID

    @observable private _signatureUniqueID: string = null;

    @TypeSystem.propertyDecorator('string')
    public set signatureUniqueID(val: string){
        this._signatureUniqueID = val;
    }

    public get signatureUniqueID(): string{
        return this._signatureUniqueID;
    } 

    //#endregion signatureUniqueID 

    //#region signingCertificateData

    @observable private _signingCertificateData: SigningCertificateData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'SigningCertificateData')
    public set signingCertificateData(val: SigningCertificateData){
        this._signingCertificateData = val;
    }

    public get signingCertificateData(): SigningCertificateData{
        return this._signingCertificateData;
    } 

    //#endregion signingCertificateData 

    //#region timeStampInfos

    @observable private _timeStampInfos: TimeStampInfo[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'TimeStampInfo')
    public set timeStampInfos(val: TimeStampInfo[]){
        this._timeStampInfos = val;
    }

    public get timeStampInfos(): TimeStampInfo[]{
        return this._timeStampInfos;
    } 

    //#endregion timeStampInfos 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DigitalSignatureContainerVM', moduleContext.moduleName)
export class DigitalSignatureContainerVM extends BaseDataModel { 

    //#region signature

    @observable private _signature: Signature = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'Signature')
    public set signature(val: Signature){
        this._signature = val;
    }

    public get signature(): Signature{
        return this._signature;
    } 

    //#endregion signature 

    //#region signatureUniqueID

    @observable private _signatureUniqueID: string = null;

    @TypeSystem.propertyDecorator('string')
    public set signatureUniqueID(val: string){
        this._signatureUniqueID = val;
    }

    public get signatureUniqueID(): string{
        return this._signatureUniqueID;
    } 

    //#endregion signatureUniqueID 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RecipientGroupVM', moduleContext.moduleName)
export class RecipientGroupVM extends BaseDataModel { 

    //#region authorWithQuality

    @observable private _authorWithQuality: AuthorWithQualityVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AuthorWithQualityVM')
    public set authorWithQuality(val: AuthorWithQualityVM){
        this._authorWithQuality = val;
    }

    public get authorWithQuality(): AuthorWithQualityVM{
        return this._authorWithQuality;
    } 

    //#endregion authorWithQuality 

    //#region recipient

    @observable private _recipient: ElectronicServiceRecipientVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceRecipientVM')
    public set recipient(val: ElectronicServiceRecipientVM){
        this._recipient = val;
    }

    public get recipient(): ElectronicServiceRecipientVM{
        return this._recipient;
    } 

    //#endregion recipient 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PhoneNumbers', moduleContext.moduleName)
export class PhoneNumbers extends BaseDataModel { 

    //#region phoneNumberCollection

    @observable private _phoneNumberCollection: string[] = null;

    @TypeSystem.propertyArrayDecorator('string')
    public set phoneNumberCollection(val: string[]){
        this._phoneNumberCollection = val;
    }

    public get phoneNumberCollection(): string[]{
        return this._phoneNumberCollection;
    } 

    //#endregion phoneNumberCollection 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('FaxNumbers', moduleContext.moduleName)
export class FaxNumbers extends BaseDataModel { 

    //#region faxNumberCollection

    @observable private _faxNumberCollection: string[] = null;

    @TypeSystem.propertyArrayDecorator('string')
    public set faxNumberCollection(val: string[]){
        this._faxNumberCollection = val;
    }

    public get faxNumberCollection(): string[]{
        return this._faxNumberCollection;
    } 

    //#endregion faxNumberCollection 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceApplicantReceiptDataVM', moduleContext.moduleName)
export class ServiceApplicantReceiptDataVM extends BaseDataModel { 

    //#region serviceResultReceiptMethod

    @observable private _serviceResultReceiptMethod: ServiceResultReceiptMethods = null;

    @TypeSystem.propertyDecorator(ServiceResultReceiptMethods)
    public set serviceResultReceiptMethod(val: ServiceResultReceiptMethods){
        this._serviceResultReceiptMethod = val;
    }

    public get serviceResultReceiptMethod(): ServiceResultReceiptMethods{
        return this._serviceResultReceiptMethod;
    } 

    //#endregion serviceResultReceiptMethod 

    //#region applicantAdress

    @observable private _applicantAdress: ServiceApplicantReceiptDataAddress = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceApplicantReceiptDataAddress')
    public set applicantAdress(val: ServiceApplicantReceiptDataAddress){
        this._applicantAdress = val;
    }

    public get applicantAdress(): ServiceApplicantReceiptDataAddress{
        return this._applicantAdress;
    } 

    //#endregion applicantAdress 

    //#region municipalityAdministrationAdress

    @observable private _municipalityAdministrationAdress: ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM')
    public set municipalityAdministrationAdress(val: ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM){
        this._municipalityAdministrationAdress = val;
    }

    public get municipalityAdministrationAdress(): ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM{
        return this._municipalityAdministrationAdress;
    } 

    //#endregion municipalityAdministrationAdress 

    //#region unitInAdministration

    @observable private _unitInAdministration: ServiceApplicantReceiptDataUnitInAdministration = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceApplicantReceiptDataUnitInAdministration')
    public set unitInAdministration(val: ServiceApplicantReceiptDataUnitInAdministration){
        this._unitInAdministration = val;
    }

    public get unitInAdministration(): ServiceApplicantReceiptDataUnitInAdministration{
        return this._unitInAdministration;
    } 

    //#endregion unitInAdministration 

    //#region predifinedUnitInAdministration

    @observable private _predifinedUnitInAdministration: ServiceApplicantReceiptDataUnitInAdministration = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceApplicantReceiptDataUnitInAdministration')
    public set predifinedUnitInAdministration(val: ServiceApplicantReceiptDataUnitInAdministration){
        this._predifinedUnitInAdministration = val;
    }

    public get predifinedUnitInAdministration(): ServiceApplicantReceiptDataUnitInAdministration{
        return this._predifinedUnitInAdministration;
    } 

    //#endregion predifinedUnitInAdministration 

    //#region usePredifinedUnitInAdministration

    @observable private _usePredifinedUnitInAdministration: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set usePredifinedUnitInAdministration(val: boolean){
        this._usePredifinedUnitInAdministration = val;
    }

    public get usePredifinedUnitInAdministration(): boolean{
        return this._usePredifinedUnitInAdministration;
    } 

    //#endregion usePredifinedUnitInAdministration 

    //#region useFilteredUnitInAdministration

    @observable private _useFilteredUnitInAdministration: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set useFilteredUnitInAdministration(val: boolean){
        this._useFilteredUnitInAdministration = val;
    }

    public get useFilteredUnitInAdministration(): boolean{
        return this._useFilteredUnitInAdministration;
    } 

    //#endregion useFilteredUnitInAdministration 

    //#region postOfficeBox

    @observable private _postOfficeBox: string = null;

    @TypeSystem.propertyDecorator('string')
    public set postOfficeBox(val: string){
        this._postOfficeBox = val;
    }

    public get postOfficeBox(): string{
        return this._postOfficeBox;
    } 

    //#endregion postOfficeBox 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentURI', moduleContext.moduleName)
export class DocumentURI extends BaseDataModel { 

    //#region registerIndex

    @observable private _registerIndex: number = null;

    @TypeSystem.propertyDecorator('number')
    public set registerIndex(val: number){
        this._registerIndex = val;
    }

    public get registerIndex(): number{
        return this._registerIndex;
    } 

    //#endregion registerIndex 

    //#region sequenceNumber

    @observable private _sequenceNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set sequenceNumber(val: number){
        this._sequenceNumber = val;
    }

    public get sequenceNumber(): number{
        return this._sequenceNumber;
    } 

    //#endregion sequenceNumber 

    //#region receiptOrSigningDate

    @observable private _receiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set receiptOrSigningDate(val: moment.Moment){
        this._receiptOrSigningDate = val;
    }

    public get receiptOrSigningDate(): moment.Moment{
        return this._receiptOrSigningDate;
    } 

    //#endregion receiptOrSigningDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceProviderBasicData', moduleContext.moduleName)
export class ElectronicServiceProviderBasicData extends BaseDataModel { 

    //#region entityBasicData

    @observable private _entityBasicData: EntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityBasicData')
    public set entityBasicData(val: EntityBasicData){
        this._entityBasicData = val;
    }

    public get entityBasicData(): EntityBasicData{
        return this._entityBasicData;
    } 

    //#endregion entityBasicData 

    //#region electronicServiceProviderType

    @observable private _electronicServiceProviderType: ElectronicServiceProviderType = null;

    @TypeSystem.propertyDecorator(ElectronicServiceProviderType)
    public set electronicServiceProviderType(val: ElectronicServiceProviderType){
        this._electronicServiceProviderType = val;
    }

    public get electronicServiceProviderType(): ElectronicServiceProviderType{
        return this._electronicServiceProviderType;
    } 

    //#endregion electronicServiceProviderType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('SigningCertificateData', moduleContext.moduleName)
export class SigningCertificateData extends BaseDataModel { 

    //#region issuer

    @observable private _issuer: string = null;

    @TypeSystem.propertyDecorator('string')
    public set issuer(val: string){
        this._issuer = val;
    }

    public get issuer(): string{
        return this._issuer;
    } 

    //#endregion issuer 

    //#region serialNumber

    @observable private _serialNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serialNumber(val: string){
        this._serialNumber = val;
    }

    public get serialNumber(): string{
        return this._serialNumber;
    } 

    //#endregion serialNumber 

    //#region subject

    @observable private _subject: string = null;

    @TypeSystem.propertyDecorator('string')
    public set subject(val: string){
        this._subject = val;
    }

    public get subject(): string{
        return this._subject;
    } 

    //#endregion subject 

    //#region subjectAlternativeName

    @observable private _subjectAlternativeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set subjectAlternativeName(val: string){
        this._subjectAlternativeName = val;
    }

    public get subjectAlternativeName(): string{
        return this._subjectAlternativeName;
    } 

    //#endregion subjectAlternativeName 

    //#region validFrom

    @observable private _validFrom: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set validFrom(val: moment.Moment){
        this._validFrom = val;
    }

    public get validFrom(): moment.Moment{
        return this._validFrom;
    } 

    //#endregion validFrom 

    //#region validTo

    @observable private _validTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set validTo(val: moment.Moment){
        this._validTo = val;
    }

    public get validTo(): moment.Moment{
        return this._validTo;
    } 

    //#endregion validTo 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('TimeStampInfo', moduleContext.moduleName)
export class TimeStampInfo extends BaseDataModel { 

    //#region signingCertificateData

    @observable private _signingCertificateData: SigningCertificateData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'SigningCertificateData')
    public set signingCertificateData(val: SigningCertificateData){
        this._signingCertificateData = val;
    }

    public get signingCertificateData(): SigningCertificateData{
        return this._signingCertificateData;
    } 

    //#endregion signingCertificateData 

    //#region timeStampTime

    @observable private _timeStampTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set timeStampTime(val: moment.Moment){
        this._timeStampTime = val;
    }

    public get timeStampTime(): moment.Moment{
        return this._timeStampTime;
    } 

    //#endregion timeStampTime 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AuthorWithQualityVM', moduleContext.moduleName)
export class AuthorWithQualityVM extends BaseDataModel { 

    //#region selectedAuthorQuality

    @observable private _selectedAuthorQuality: ElectronicServiceAuthorQualityType = null;

    @TypeSystem.propertyDecorator(ElectronicServiceAuthorQualityType)
    public set selectedAuthorQuality(val: ElectronicServiceAuthorQualityType){
        this._selectedAuthorQuality = val;
    }

    public get selectedAuthorQuality(): ElectronicServiceAuthorQualityType{
        return this._selectedAuthorQuality;
    } 

    //#endregion selectedAuthorQuality 

    //#region author

    @observable private _author: ElectronicStatementAuthorVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicStatementAuthorVM')
    public set author(val: ElectronicStatementAuthorVM){
        this._author = val;
    }

    public get author(): ElectronicStatementAuthorVM{
        return this._author;
    } 

    //#endregion author 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonAndEntityBasicDataVM', moduleContext.moduleName)
export class PersonAndEntityBasicDataVM extends BaseDataModel { 

    //#region itemPersonBasicData

    @observable private _itemPersonBasicData: PersonBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonBasicDataVM')
    public set itemPersonBasicData(val: PersonBasicDataVM){
        this._itemPersonBasicData = val;
    }

    public get itemPersonBasicData(): PersonBasicDataVM{
        return this._itemPersonBasicData;
    } 

    //#endregion itemPersonBasicData 

    //#region itemForeignCitizenBasicData

    @observable private _itemForeignCitizenBasicData: ForeignCitizenBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenBasicData')
    public set itemForeignCitizenBasicData(val: ForeignCitizenBasicData){
        this._itemForeignCitizenBasicData = val;
    }

    public get itemForeignCitizenBasicData(): ForeignCitizenBasicData{
        return this._itemForeignCitizenBasicData;
    } 

    //#endregion itemForeignCitizenBasicData 

    //#region itemEntityBasicData

    @observable private _itemEntityBasicData: EntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityBasicData')
    public set itemEntityBasicData(val: EntityBasicData){
        this._itemEntityBasicData = val;
    }

    public get itemEntityBasicData(): EntityBasicData{
        return this._itemEntityBasicData;
    } 

    //#endregion itemEntityBasicData 

    //#region itemForeignEntityBasicData

    @observable private _itemForeignEntityBasicData: ForeignEntityBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignEntityBasicDataVM')
    public set itemForeignEntityBasicData(val: ForeignEntityBasicDataVM){
        this._itemForeignEntityBasicData = val;
    }

    public get itemForeignEntityBasicData(): ForeignEntityBasicDataVM{
        return this._itemForeignEntityBasicData;
    } 

    //#endregion itemForeignEntityBasicData 

    //#region selectedChoiceType

    @observable private _selectedChoiceType: PersonAndEntityChoiceType = null;

    @TypeSystem.propertyDecorator(PersonAndEntityChoiceType)
    public set selectedChoiceType(val: PersonAndEntityChoiceType){
        this._selectedChoiceType = val;
    }

    public get selectedChoiceType(): PersonAndEntityChoiceType{
        return this._selectedChoiceType;
    } 

    //#endregion selectedChoiceType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceRecipientVM', moduleContext.moduleName)
export class ElectronicServiceRecipientVM extends PersonAndEntityBasicDataVM { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceApplicantReceiptDataAddress', moduleContext.moduleName)
export class ServiceApplicantReceiptDataAddress extends EkatteAddress { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM', moduleContext.moduleName)
export class ServiceApplicantReceiptDataMunicipalityAdministrationAdressVM extends BaseDataModel { 

    //#region districtCode

    @observable private _districtCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtCode(val: string){
        this._districtCode = val;
    }

    public get districtCode(): string{
        return this._districtCode;
    } 

    //#endregion districtCode 

    //#region districtName

    @observable private _districtName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtName(val: string){
        this._districtName = val;
    }

    public get districtName(): string{
        return this._districtName;
    } 

    //#endregion districtName 

    //#region municipalityCode

    @observable private _municipalityCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityCode(val: string){
        this._municipalityCode = val;
    }

    public get municipalityCode(): string{
        return this._municipalityCode;
    } 

    //#endregion municipalityCode 

    //#region municipalityName

    @observable private _municipalityName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityName(val: string){
        this._municipalityName = val;
    }

    public get municipalityName(): string{
        return this._municipalityName;
    } 

    //#endregion municipalityName 

    //#region mayoraltyCode

    @observable private _mayoraltyCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set mayoraltyCode(val: string){
        this._mayoraltyCode = val;
    }

    public get mayoraltyCode(): string{
        return this._mayoraltyCode;
    } 

    //#endregion mayoraltyCode 

    //#region mayoralty

    @observable private _mayoralty: string = null;

    @TypeSystem.propertyDecorator('string')
    public set mayoralty(val: string){
        this._mayoralty = val;
    }

    public get mayoralty(): string{
        return this._mayoralty;
    } 

    //#endregion mayoralty 

    //#region areaCode

    @observable private _areaCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set areaCode(val: string){
        this._areaCode = val;
    }

    public get areaCode(): string{
        return this._areaCode;
    } 

    //#endregion areaCode 

    //#region areaName

    @observable private _areaName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set areaName(val: string){
        this._areaName = val;
    }

    public get areaName(): string{
        return this._areaName;
    } 

    //#endregion areaName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceApplicantReceiptDataUnitInAdministration', moduleContext.moduleName)
export class ServiceApplicantReceiptDataUnitInAdministration extends BaseDataModel { 

    //#region entityBasicData

    @observable private _entityBasicData: EntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityBasicData')
    public set entityBasicData(val: EntityBasicData){
        this._entityBasicData = val;
    }

    public get entityBasicData(): EntityBasicData{
        return this._entityBasicData;
    } 

    //#endregion entityBasicData 

    //#region administrativeDepartmentName

    @observable private _administrativeDepartmentName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeDepartmentName(val: string){
        this._administrativeDepartmentName = val;
    }

    public get administrativeDepartmentName(): string{
        return this._administrativeDepartmentName;
    } 

    //#endregion administrativeDepartmentName 

    //#region administrativeDepartmentCode

    @observable private _administrativeDepartmentCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeDepartmentCode(val: string){
        this._administrativeDepartmentCode = val;
    }

    public get administrativeDepartmentCode(): string{
        return this._administrativeDepartmentCode;
    } 

    //#endregion administrativeDepartmentCode 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicStatementAuthorVM', moduleContext.moduleName)
export class ElectronicStatementAuthorVM extends PersonAndEntityBasicDataVM { 

    //#region emailAddress

    @observable private _emailAddress: string = null;

    @TypeSystem.propertyDecorator('string')
    public set emailAddress(val: string){
        this._emailAddress = val;
    }

    public get emailAddress(): string{
        return this._emailAddress;
    } 

    //#endregion emailAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonBasicDataVM', moduleContext.moduleName)
export class PersonBasicDataVM extends BaseDataModel { 

    //#region names

    @observable private _names: PersonNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonNames')
    public set names(val: PersonNames){
        this._names = val;
    }

    public get names(): PersonNames{
        return this._names;
    } 

    //#endregion names 

    //#region identifier

    @observable private _identifier: PersonIdentifier = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonIdentifier')
    public set identifier(val: PersonIdentifier){
        this._identifier = val;
    }

    public get identifier(): PersonIdentifier{
        return this._identifier;
    } 

    //#endregion identifier 

    //#region identityDocument

    @observable private _identityDocument: IdentityDocumentBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IdentityDocumentBasicDataVM')
    public set identityDocument(val: IdentityDocumentBasicDataVM){
        this._identityDocument = val;
    }

    public get identityDocument(): IdentityDocumentBasicDataVM{
        return this._identityDocument;
    } 

    //#endregion identityDocument 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignCitizenBasicData', moduleContext.moduleName)
export class ForeignCitizenBasicData extends BaseDataModel { 

    //#region names

    @observable private _names: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenNames')
    public set names(val: ForeignCitizenNames){
        this._names = val;
    }

    public get names(): ForeignCitizenNames{
        return this._names;
    } 

    //#endregion names 

    //#region birthDateSpecified

    @observable private _birthDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set birthDateSpecified(val: boolean){
        this._birthDateSpecified = val;
    }

    public get birthDateSpecified(): boolean{
        return this._birthDateSpecified;
    } 

    //#endregion birthDateSpecified 

    //#region birthDate

    @observable private _birthDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set birthDate(val: moment.Moment){
        this._birthDate = val;
    }

    public get birthDate(): moment.Moment{
        return this._birthDate;
    } 

    //#endregion birthDate 

    //#region placeOfBirth

    @observable private _placeOfBirth: ForeignCitizenPlaceOfBirth = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenPlaceOfBirth')
    public set placeOfBirth(val: ForeignCitizenPlaceOfBirth){
        this._placeOfBirth = val;
    }

    public get placeOfBirth(): ForeignCitizenPlaceOfBirth{
        return this._placeOfBirth;
    } 

    //#endregion placeOfBirth 

    //#region identityDocument

    @observable private _identityDocument: ForeignCitizenIdentityDocument = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenIdentityDocument')
    public set identityDocument(val: ForeignCitizenIdentityDocument){
        this._identityDocument = val;
    }

    public get identityDocument(): ForeignCitizenIdentityDocument{
        return this._identityDocument;
    } 

    //#endregion identityDocument 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignEntityBasicDataVM', moduleContext.moduleName)
export class ForeignEntityBasicDataVM extends BaseDataModel { 

    //#region foreignEntityName

    @observable private _foreignEntityName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityName(val: string){
        this._foreignEntityName = val;
    }

    public get foreignEntityName(): string{
        return this._foreignEntityName;
    } 

    //#endregion foreignEntityName 

    //#region countryISO3166TwoLetterCode

    @observable private _countryISO3166TwoLetterCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryISO3166TwoLetterCode(val: string){
        this._countryISO3166TwoLetterCode = val;
    }

    public get countryISO3166TwoLetterCode(): string{
        return this._countryISO3166TwoLetterCode;
    } 

    //#endregion countryISO3166TwoLetterCode 

    //#region countryNameCyrillic

    @observable private _countryNameCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryNameCyrillic(val: string){
        this._countryNameCyrillic = val;
    }

    public get countryNameCyrillic(): string{
        return this._countryNameCyrillic;
    } 

    //#endregion countryNameCyrillic 

    //#region selectedChoiceType

    @observable private _selectedChoiceType: ForeignEntityChoiceType = null;

    @TypeSystem.propertyDecorator(ForeignEntityChoiceType)
    public set selectedChoiceType(val: ForeignEntityChoiceType){
        this._selectedChoiceType = val;
    }

    public get selectedChoiceType(): ForeignEntityChoiceType{
        return this._selectedChoiceType;
    } 

    //#endregion selectedChoiceType 

    //#region foreignEntityRegister

    @observable private _foreignEntityRegister: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityRegister(val: string){
        this._foreignEntityRegister = val;
    }

    public get foreignEntityRegister(): string{
        return this._foreignEntityRegister;
    } 

    //#endregion foreignEntityRegister 

    //#region foreignEntityIdentifier

    @observable private _foreignEntityIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityIdentifier(val: string){
        this._foreignEntityIdentifier = val;
    }

    public get foreignEntityIdentifier(): string{
        return this._foreignEntityIdentifier;
    } 

    //#endregion foreignEntityIdentifier 

    //#region foreignEntityOtherData

    @observable private _foreignEntityOtherData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityOtherData(val: string){
        this._foreignEntityOtherData = val;
    }

    public get foreignEntityOtherData(): string{
        return this._foreignEntityOtherData;
    } 

    //#endregion foreignEntityOtherData 

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

@TypeSystem.typeDecorator('ForeignCitizenNames', moduleContext.moduleName)
export class ForeignCitizenNames extends BaseDataModel { 

    //#region firstCyrillic

    @observable private _firstCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set firstCyrillic(val: string){
        this._firstCyrillic = val;
    }

    public get firstCyrillic(): string{
        return this._firstCyrillic;
    } 

    //#endregion firstCyrillic 

    //#region lastCyrillic

    @observable private _lastCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lastCyrillic(val: string){
        this._lastCyrillic = val;
    }

    public get lastCyrillic(): string{
        return this._lastCyrillic;
    } 

    //#endregion lastCyrillic 

    //#region otherCyrillic

    @observable private _otherCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set otherCyrillic(val: string){
        this._otherCyrillic = val;
    }

    public get otherCyrillic(): string{
        return this._otherCyrillic;
    } 

    //#endregion otherCyrillic 

    //#region pseudonimCyrillic

    @observable private _pseudonimCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pseudonimCyrillic(val: string){
        this._pseudonimCyrillic = val;
    }

    public get pseudonimCyrillic(): string{
        return this._pseudonimCyrillic;
    } 

    //#endregion pseudonimCyrillic 

    //#region firstLatin

    @observable private _firstLatin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set firstLatin(val: string){
        this._firstLatin = val;
    }

    public get firstLatin(): string{
        return this._firstLatin;
    } 

    //#endregion firstLatin 

    //#region lastLatin

    @observable private _lastLatin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lastLatin(val: string){
        this._lastLatin = val;
    }

    public get lastLatin(): string{
        return this._lastLatin;
    } 

    //#endregion lastLatin 

    //#region otherLatin

    @observable private _otherLatin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set otherLatin(val: string){
        this._otherLatin = val;
    }

    public get otherLatin(): string{
        return this._otherLatin;
    } 

    //#endregion otherLatin 

    //#region pseudonimLatin

    @observable private _pseudonimLatin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pseudonimLatin(val: string){
        this._pseudonimLatin = val;
    }

    public get pseudonimLatin(): string{
        return this._pseudonimLatin;
    } 

    //#endregion pseudonimLatin 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignCitizenPlaceOfBirth', moduleContext.moduleName)
export class ForeignCitizenPlaceOfBirth extends BaseDataModel { 

    //#region countryCode

    @observable private _countryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryCode(val: string){
        this._countryCode = val;
    }

    public get countryCode(): string{
        return this._countryCode;
    } 

    //#endregion countryCode 

    //#region countryName

    @observable private _countryName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryName(val: string){
        this._countryName = val;
    }

    public get countryName(): string{
        return this._countryName;
    } 

    //#endregion countryName 

    //#region settlementName

    @observable private _settlementName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementName(val: string){
        this._settlementName = val;
    }

    public get settlementName(): string{
        return this._settlementName;
    } 

    //#endregion settlementName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignCitizenIdentityDocument', moduleContext.moduleName)
export class ForeignCitizenIdentityDocument extends BaseDataModel { 

    //#region documentNumber

    @observable private _documentNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentNumber(val: string){
        this._documentNumber = val;
    }

    public get documentNumber(): string{
        return this._documentNumber;
    } 

    //#endregion documentNumber 

    //#region documentType

    @observable private _documentType: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentType(val: string){
        this._documentType = val;
    }

    public get documentType(): string{
        return this._documentType;
    } 

    //#endregion documentType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceApplicant', moduleContext.moduleName)
export class ElectronicServiceApplicant extends BaseDataModel { 

    //#region recipientGroups

    @observable private _recipientGroups: RecipientGroup[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'RecipientGroup')
    public set recipientGroups(val: RecipientGroup[]){
        this._recipientGroups = val;
    }

    public get recipientGroups(): RecipientGroup[]{
        return this._recipientGroups;
    } 

    //#endregion recipientGroups 

    //#region emailAddress

    @observable private _emailAddress: string = null;

    @TypeSystem.propertyDecorator('string')
    public set emailAddress(val: string){
        this._emailAddress = val;
    }

    public get emailAddress(): string{
        return this._emailAddress;
    } 

    //#endregion emailAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RegisteredDocumentURI', moduleContext.moduleName)
export class RegisteredDocumentURI extends BaseDataModel { 

    //#region item

    @observable private _item: any = null;

    @TypeSystem.propertyDecorator('any')
    public set item(val: any){
        this._item = val;
    }

    public get item(): any{
        return this._item;
    } 

    //#endregion item 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AISCaseURI', moduleContext.moduleName)
export class AISCaseURI extends RegisteredDocumentURI { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PoliceDepartment', moduleContext.moduleName)
export class PoliceDepartment extends BaseDataModel { 

    //#region policeDepartmentType

    @observable private _policeDepartmentType: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set policeDepartmentType(val: boolean){
        this._policeDepartmentType = val;
    }

    public get policeDepartmentType(): boolean{
        return this._policeDepartmentType;
    } 

    //#endregion policeDepartmentType 

    //#region policeDepartmentTypeSpecified

    @observable private _policeDepartmentTypeSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set policeDepartmentTypeSpecified(val: boolean){
        this._policeDepartmentTypeSpecified = val;
    }

    public get policeDepartmentTypeSpecified(): boolean{
        return this._policeDepartmentTypeSpecified;
    } 

    //#endregion policeDepartmentTypeSpecified 

    //#region policeDepartmentCode

    @observable private _policeDepartmentCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set policeDepartmentCode(val: string){
        this._policeDepartmentCode = val;
    }

    public get policeDepartmentCode(): string{
        return this._policeDepartmentCode;
    } 

    //#endregion policeDepartmentCode 

    //#region policeDepartmentName

    @observable private _policeDepartmentName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set policeDepartmentName(val: string){
        this._policeDepartmentName = val;
    }

    public get policeDepartmentName(): string{
        return this._policeDepartmentName;
    } 

    //#endregion policeDepartmentName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceProviderBasicDataVM', moduleContext.moduleName)
export class ElectronicServiceProviderBasicDataVM extends BaseDataModel { 

    //#region entityBasicData

    @observable private _entityBasicData: EntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityBasicData')
    public set entityBasicData(val: EntityBasicData){
        this._entityBasicData = val;
    }

    public get entityBasicData(): EntityBasicData{
        return this._entityBasicData;
    } 

    //#endregion entityBasicData 

    //#region electronicServiceProviderType

    @observable private _electronicServiceProviderType: ElectronicServiceProviderType = null;

    @TypeSystem.propertyDecorator(ElectronicServiceProviderType)
    public set electronicServiceProviderType(val: ElectronicServiceProviderType){
        this._electronicServiceProviderType = val;
    }

    public get electronicServiceProviderType(): ElectronicServiceProviderType{
        return this._electronicServiceProviderType;
    } 

    //#endregion electronicServiceProviderType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AISCaseURIVM', moduleContext.moduleName)
export class AISCaseURIVM extends BaseDataModel { 

    //#region choise

    @observable private _choise: ChoiceType = null;

    @TypeSystem.propertyDecorator(ChoiceType)
    public set choise(val: ChoiceType){
        this._choise = val;
    }

    public get choise(): ChoiceType{
        return this._choise;
    } 

    //#endregion choise 

    //#region documentUri

    @observable private _documentUri: DocumentURI = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentURI')
    public set documentUri(val: DocumentURI){
        this._documentUri = val;
    }

    public get documentUri(): DocumentURI{
        return this._documentUri;
    } 

    //#endregion documentUri 

    //#region textUri

    @observable private _textUri: string = null;

    @TypeSystem.propertyDecorator('string')
    public set textUri(val: string){
        this._textUri = val;
    }

    public get textUri(): string{
        return this._textUri;
    } 

    //#endregion textUri 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('OutstandingConditionsForStartOfServiceMessageGrounds', moduleContext.moduleName)
export class OutstandingConditionsForStartOfServiceMessageGrounds extends BaseDataModel { 

    //#region outstandingConditionsForStartOfServiceMessageGround

    @observable private _outstandingConditionsForStartOfServiceMessageGround: string = null;

    @TypeSystem.propertyDecorator('string')
    public set outstandingConditionsForStartOfServiceMessageGround(val: string){
        this._outstandingConditionsForStartOfServiceMessageGround = val;
    }

    public get outstandingConditionsForStartOfServiceMessageGround(): string{
        return this._outstandingConditionsForStartOfServiceMessageGround;
    } 

    //#endregion outstandingConditionsForStartOfServiceMessageGround 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeadlineVM', moduleContext.moduleName)
export class DeadlineVM extends BaseDataModel { 

    //#region executionPeriodType

    @observable private _executionPeriodType: ExecutionPeriodType = null;

    @TypeSystem.propertyDecorator(ExecutionPeriodType)
    public set executionPeriodType(val: ExecutionPeriodType){
        this._executionPeriodType = val;
    }

    public get executionPeriodType(): ExecutionPeriodType{
        return this._executionPeriodType;
    } 

    //#endregion executionPeriodType 

    //#region periodValue

    @observable private _periodValue: number = null;

    @TypeSystem.propertyDecorator('number')
    public set periodValue(val: number){
        this._periodValue = val;
    }

    public get periodValue(): number{
        return this._periodValue;
    } 

    //#endregion periodValue 

    //#region originalDeadline

    @observable private _originalDeadline: string = null;

    @TypeSystem.propertyDecorator('string')
    public set originalDeadline(val: string){
        this._originalDeadline = val;
    }

    public get originalDeadline(): string{
        return this._originalDeadline;
    } 

    //#endregion originalDeadline 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReceiptAcknowledgedMessageRegisteredByVM', moduleContext.moduleName)
export class ReceiptAcknowledgedMessageRegisteredByVM extends BaseDataModel { 

    //#region itemAISURI

    @observable private _itemAISURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set itemAISURI(val: string){
        this._itemAISURI = val;
    }

    public get itemAISURI(): string{
        return this._itemAISURI;
    } 

    //#endregion itemAISURI 

    //#region itemOfficer

    @observable private _itemOfficer: ReceiptAcknowledgedMessageRegisteredByOfficerVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReceiptAcknowledgedMessageRegisteredByOfficerVM')
    public set itemOfficer(val: ReceiptAcknowledgedMessageRegisteredByOfficerVM){
        this._itemOfficer = val;
    }

    public get itemOfficer(): ReceiptAcknowledgedMessageRegisteredByOfficerVM{
        return this._itemOfficer;
    } 

    //#endregion itemOfficer 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('OfficialVM', moduleContext.moduleName)
export class OfficialVM extends DigitalSignatureContainerVM { 

    //#region hasAuthorQuality

    @observable private _hasAuthorQuality: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasAuthorQuality(val: boolean){
        this._hasAuthorQuality = val;
    }

    public get hasAuthorQuality(): boolean{
        return this._hasAuthorQuality;
    } 

    //#endregion hasAuthorQuality 

    //#region electronicDocumentAuthorQuality

    @observable private _electronicDocumentAuthorQuality: string = null;

    @TypeSystem.propertyDecorator('string')
    public set electronicDocumentAuthorQuality(val: string){
        this._electronicDocumentAuthorQuality = val;
    }

    public get electronicDocumentAuthorQuality(): string{
        return this._electronicDocumentAuthorQuality;
    } 

    //#endregion electronicDocumentAuthorQuality 

    //#region choise

    @observable private _choise: OfficialChoiceType = null;

    @TypeSystem.propertyDecorator(OfficialChoiceType)
    public set choise(val: OfficialChoiceType){
        this._choise = val;
    }

    public get choise(): OfficialChoiceType{
        return this._choise;
    } 

    //#endregion choise 

    //#region personNames

    @observable private _personNames: PersonNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonNames')
    public set personNames(val: PersonNames){
        this._personNames = val;
    }

    public get personNames(): PersonNames{
        return this._personNames;
    } 

    //#endregion personNames 

    //#region foreignCitizenNames

    @observable private _foreignCitizenNames: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenNames')
    public set foreignCitizenNames(val: ForeignCitizenNames){
        this._foreignCitizenNames = val;
    }

    public get foreignCitizenNames(): ForeignCitizenNames{
        return this._foreignCitizenNames;
    } 

    //#endregion foreignCitizenNames 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RemovingIrregularitiesInstructionsIrregularitiesVM', moduleContext.moduleName)
export class RemovingIrregularitiesInstructionsIrregularitiesVM extends BaseDataModel { 

    //#region irregularityType

    @observable private _irregularityType: string = null;

    @TypeSystem.propertyDecorator('string')
    public set irregularityType(val: string){
        this._irregularityType = val;
    }

    public get irregularityType(): string{
        return this._irregularityType;
    } 

    //#endregion irregularityType 

    //#region additionalInformationSpecifyingIrregularity

    @observable private _additionalInformationSpecifyingIrregularity: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalInformationSpecifyingIrregularity(val: string){
        this._additionalInformationSpecifyingIrregularity = val;
    }

    public get additionalInformationSpecifyingIrregularity(): string{
        return this._additionalInformationSpecifyingIrregularity;
    } 

    //#endregion additionalInformationSpecifyingIrregularity 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('TerminationOfServiceMessageGrounds', moduleContext.moduleName)
export class TerminationOfServiceMessageGrounds extends BaseDataModel { 

    //#region terminationOfServiceMessageGround

    @observable private _terminationOfServiceMessageGround: string = null;

    @TypeSystem.propertyDecorator('string')
    public set terminationOfServiceMessageGround(val: string){
        this._terminationOfServiceMessageGround = val;
    }

    public get terminationOfServiceMessageGround(): string{
        return this._terminationOfServiceMessageGround;
    } 

    //#endregion terminationOfServiceMessageGround 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RecipientGroup', moduleContext.moduleName)
export class RecipientGroup extends BaseDataModel { 

    //#region authors

    @observable private _authors: ElectronicStatementAuthor[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ElectronicStatementAuthor')
    public set authors(val: ElectronicStatementAuthor[]){
        this._authors = val;
    }

    public get authors(): ElectronicStatementAuthor[]{
        return this._authors;
    } 

    //#endregion authors 

    //#region authorQuality

    @observable private _authorQuality: string = null;

    @TypeSystem.propertyDecorator('string')
    public set authorQuality(val: string){
        this._authorQuality = val;
    }

    public get authorQuality(): string{
        return this._authorQuality;
    } 

    //#endregion authorQuality 

    //#region recipients

    @observable private _recipients: ElectronicServiceRecipient[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceRecipient')
    public set recipients(val: ElectronicServiceRecipient[]){
        this._recipients = val;
    }

    public get recipients(): ElectronicServiceRecipient[]{
        return this._recipients;
    } 

    //#endregion recipients 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReceiptAcknowledgedMessageRegisteredByOfficerVM', moduleContext.moduleName)
export class ReceiptAcknowledgedMessageRegisteredByOfficerVM extends BaseDataModel { 

    //#region personNames

    @observable private _personNames: AISUserNamesVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISUserNamesVM')
    public set personNames(val: AISUserNamesVM){
        this._personNames = val;
    }

    public get personNames(): AISUserNamesVM{
        return this._personNames;
    } 

    //#endregion personNames 

    //#region aisUserIdentifier

    @observable private _aisUserIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set aisUserIdentifier(val: string){
        this._aisUserIdentifier = val;
    }

    public get aisUserIdentifier(): string{
        return this._aisUserIdentifier;
    } 

    //#endregion aisUserIdentifier 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicStatementAuthor', moduleContext.moduleName)
export class ElectronicStatementAuthor extends BaseDataModel { 

    //#region authorQuality

    @observable private _authorQuality: any = null;

    @TypeSystem.propertyDecorator('any')
    public set authorQuality(val: any){
        this._authorQuality = val;
    }

    public get authorQuality(): any{
        return this._authorQuality;
    } 

    //#endregion authorQuality 

    //#region item

    @observable private _item: any = null;

    @TypeSystem.propertyDecorator('any')
    public set item(val: any){
        this._item = val;
    }

    public get item(): any{
        return this._item;
    } 

    //#endregion item 

    //#region itemPersonBasicData

    @observable private _itemPersonBasicData: PersonBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonBasicData')
    public set itemPersonBasicData(val: PersonBasicData){
        this._itemPersonBasicData = val;
    }

    public get itemPersonBasicData(): PersonBasicData{
        return this._itemPersonBasicData;
    } 

    //#endregion itemPersonBasicData 

    //#region itemForeignCitizenBasicData

    @observable private _itemForeignCitizenBasicData: ForeignCitizenBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenBasicData')
    public set itemForeignCitizenBasicData(val: ForeignCitizenBasicData){
        this._itemForeignCitizenBasicData = val;
    }

    public get itemForeignCitizenBasicData(): ForeignCitizenBasicData{
        return this._itemForeignCitizenBasicData;
    } 

    //#endregion itemForeignCitizenBasicData 

    //#region itemElementName

    @observable private _itemElementName: ItemChoiceType = null;

    @TypeSystem.propertyDecorator(ItemChoiceType)
    public set itemElementName(val: ItemChoiceType){
        this._itemElementName = val;
    }

    public get itemElementName(): ItemChoiceType{
        return this._itemElementName;
    } 

    //#endregion itemElementName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ElectronicServiceRecipient', moduleContext.moduleName)
export class ElectronicServiceRecipient extends BaseDataModel { 

    //#region item

    @observable private _item: any = null;

    @TypeSystem.propertyDecorator('any')
    public set item(val: any){
        this._item = val;
    }

    public get item(): any{
        return this._item;
    } 

    //#endregion item 

    //#region itemPersonBasicData

    @observable private _itemPersonBasicData: PersonBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonBasicData')
    public set itemPersonBasicData(val: PersonBasicData){
        this._itemPersonBasicData = val;
    }

    public get itemPersonBasicData(): PersonBasicData{
        return this._itemPersonBasicData;
    } 

    //#endregion itemPersonBasicData 

    //#region itemForeignCitizenBasicData

    @observable private _itemForeignCitizenBasicData: ForeignCitizenBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenBasicData')
    public set itemForeignCitizenBasicData(val: ForeignCitizenBasicData){
        this._itemForeignCitizenBasicData = val;
    }

    public get itemForeignCitizenBasicData(): ForeignCitizenBasicData{
        return this._itemForeignCitizenBasicData;
    } 

    //#endregion itemForeignCitizenBasicData 

    //#region itemEntityBasicData

    @observable private _itemEntityBasicData: EntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityBasicData')
    public set itemEntityBasicData(val: EntityBasicData){
        this._itemEntityBasicData = val;
    }

    public get itemEntityBasicData(): EntityBasicData{
        return this._itemEntityBasicData;
    } 

    //#endregion itemEntityBasicData 

    //#region itemForeignEntityBasicData

    @observable private _itemForeignEntityBasicData: ForeignEntityBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignEntityBasicData')
    public set itemForeignEntityBasicData(val: ForeignEntityBasicData){
        this._itemForeignEntityBasicData = val;
    }

    public get itemForeignEntityBasicData(): ForeignEntityBasicData{
        return this._itemForeignEntityBasicData;
    } 

    //#endregion itemForeignEntityBasicData 

    //#region itemName

    @observable private _itemName: RecipientChoiceType = null;

    @TypeSystem.propertyDecorator(RecipientChoiceType)
    public set itemName(val: RecipientChoiceType){
        this._itemName = val;
    }

    public get itemName(): RecipientChoiceType{
        return this._itemName;
    } 

    //#endregion itemName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AISUserNamesVM', moduleContext.moduleName)
export class AISUserNamesVM extends BaseDataModel { 

    //#region itemPersonNames

    @observable private _itemPersonNames: PersonNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonNames')
    public set itemPersonNames(val: PersonNames){
        this._itemPersonNames = val;
    }

    public get itemPersonNames(): PersonNames{
        return this._itemPersonNames;
    } 

    //#endregion itemPersonNames 

    //#region itemForeignCitizenNames

    @observable private _itemForeignCitizenNames: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenNames')
    public set itemForeignCitizenNames(val: ForeignCitizenNames){
        this._itemForeignCitizenNames = val;
    }

    public get itemForeignCitizenNames(): ForeignCitizenNames{
        return this._itemForeignCitizenNames;
    } 

    //#endregion itemForeignCitizenNames 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonBasicData', moduleContext.moduleName)
export class PersonBasicData extends BaseDataModel { 

    //#region names

    @observable private _names: PersonNames = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonNames')
    public set names(val: PersonNames){
        this._names = val;
    }

    public get names(): PersonNames{
        return this._names;
    } 

    //#endregion names 

    //#region identifier

    @observable private _identifier: PersonIdentifier = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonIdentifier')
    public set identifier(val: PersonIdentifier){
        this._identifier = val;
    }

    public get identifier(): PersonIdentifier{
        return this._identifier;
    } 

    //#endregion identifier 

    //#region identityDocument

    @observable private _identityDocument: IdentityDocumentBasicData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IdentityDocumentBasicData')
    public set identityDocument(val: IdentityDocumentBasicData){
        this._identityDocument = val;
    }

    public get identityDocument(): IdentityDocumentBasicData{
        return this._identityDocument;
    } 

    //#endregion identityDocument 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignEntityBasicData', moduleContext.moduleName)
export class ForeignEntityBasicData extends BaseDataModel { 

    //#region foreignEntityName

    @observable private _foreignEntityName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityName(val: string){
        this._foreignEntityName = val;
    }

    public get foreignEntityName(): string{
        return this._foreignEntityName;
    } 

    //#endregion foreignEntityName 

    //#region countryISO3166TwoLetterCode

    @observable private _countryISO3166TwoLetterCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryISO3166TwoLetterCode(val: string){
        this._countryISO3166TwoLetterCode = val;
    }

    public get countryISO3166TwoLetterCode(): string{
        return this._countryISO3166TwoLetterCode;
    } 

    //#endregion countryISO3166TwoLetterCode 

    //#region countryNameCyrillic

    @observable private _countryNameCyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryNameCyrillic(val: string){
        this._countryNameCyrillic = val;
    }

    public get countryNameCyrillic(): string{
        return this._countryNameCyrillic;
    } 

    //#endregion countryNameCyrillic 

    //#region items

    @observable private _items: string[] = null;

    @TypeSystem.propertyArrayDecorator('string')
    public set items(val: string[]){
        this._items = val;
    }

    public get items(): string[]{
        return this._items;
    } 

    //#endregion items 

    //#region itemsElementName

    @observable private _itemsElementName: ForeignEntityIdentifierChoiceType[] = null;

    @TypeSystem.propertyArrayDecorator(ForeignEntityIdentifierChoiceType)
    public set itemsElementName(val: ForeignEntityIdentifierChoiceType[]){
        this._itemsElementName = val;
    }

    public get itemsElementName(): ForeignEntityIdentifierChoiceType[]{
        return this._itemsElementName;
    } 

    //#endregion itemsElementName 

    //#region foreignEntityRegister

    @observable private _foreignEntityRegister: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityRegister(val: string){
        this._foreignEntityRegister = val;
    }

    public get foreignEntityRegister(): string{
        return this._foreignEntityRegister;
    } 

    //#endregion foreignEntityRegister 

    //#region foreignEntityIdentifier

    @observable private _foreignEntityIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityIdentifier(val: string){
        this._foreignEntityIdentifier = val;
    }

    public get foreignEntityIdentifier(): string{
        return this._foreignEntityIdentifier;
    } 

    //#endregion foreignEntityIdentifier 

    //#region foreignEntityOtherData

    @observable private _foreignEntityOtherData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignEntityOtherData(val: string){
        this._foreignEntityOtherData = val;
    }

    public get foreignEntityOtherData(): string{
        return this._foreignEntityOtherData;
    } 

    //#endregion foreignEntityOtherData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentityDocumentBasicData', moduleContext.moduleName)
export class IdentityDocumentBasicData extends BaseDataModel { 

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

@TypeSystem.typeDecorator('PersonAddress', moduleContext.moduleName)
export class PersonAddress extends GRAOAddress { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('XMLDigitalSignature', moduleContext.moduleName)
export class XMLDigitalSignature extends BaseDataModel { 

    //#region signature

    @observable private _signature: any = null;

    @TypeSystem.propertyDecorator('any')
    public set signature(val: any){
        this._signature = val;
    }

    public get signature(): any{
        return this._signature;
    } 

    //#endregion signature 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UnitInfo', moduleContext.moduleName)
export class UnitInfo extends BaseDataModel { 

    //#region unitID

    @observable private _unitID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set unitID(val: number){
        this._unitID = val;
    }

    public get unitID(): number{
        return this._unitID;
    } 

    //#endregion unitID 

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

    //#region parentUnitID

    @observable private _parentUnitID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set parentUnitID(val: number){
        this._parentUnitID = val;
    }

    public get parentUnitID(): number{
        return this._parentUnitID;
    } 

    //#endregion parentUnitID 

    //#region hasChildUnits

    @observable private _hasChildUnits: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasChildUnits(val: boolean){
        this._hasChildUnits = val;
    }

    public get hasChildUnits(): boolean{
        return this._hasChildUnits;
    } 

    //#endregion hasChildUnits 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentMustServeToVM', moduleContext.moduleName)
export class DocumentMustServeToVM extends BaseDataModel { 

    //#region itemInRepublicOfBulgariaDocumentMustServeTo

    @observable private _itemInRepublicOfBulgariaDocumentMustServeTo: string = null;

    @TypeSystem.propertyDecorator('string')
    public set itemInRepublicOfBulgariaDocumentMustServeTo(val: string){
        this._itemInRepublicOfBulgariaDocumentMustServeTo = val;
    }

    public get itemInRepublicOfBulgariaDocumentMustServeTo(): string{
        return this._itemInRepublicOfBulgariaDocumentMustServeTo;
    } 

    //#endregion itemInRepublicOfBulgariaDocumentMustServeTo 

    //#region itemAbroadDocumentMustServeTo

    @observable private _itemAbroadDocumentMustServeTo: string = null;

    @TypeSystem.propertyDecorator('string')
    public set itemAbroadDocumentMustServeTo(val: string){
        this._itemAbroadDocumentMustServeTo = val;
    }

    public get itemAbroadDocumentMustServeTo(): string{
        return this._itemAbroadDocumentMustServeTo;
    } 

    //#endregion itemAbroadDocumentMustServeTo 

    //#region itemElementName

    @observable private _itemElementName: ItemChoiceType1 = null;

    @TypeSystem.propertyDecorator(ItemChoiceType1)
    public set itemElementName(val: ItemChoiceType1){
        this._itemElementName = val;
    }

    public get itemElementName(): ItemChoiceType1{
        return this._itemElementName;
    } 

    //#endregion itemElementName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CitizenshipVM', moduleContext.moduleName)
export class CitizenshipVM extends BaseDataModel { 

    //#region countryGRAOCode

    @observable private _countryGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryGRAOCode(val: string){
        this._countryGRAOCode = val;
    }

    public get countryGRAOCode(): string{
        return this._countryGRAOCode;
    } 

    //#endregion countryGRAOCode 

    //#region countryName

    @observable private _countryName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryName(val: string){
        this._countryName = val;
    }

    public get countryName(): string{
        return this._countryName;
    } 

    //#endregion countryName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonalInformationVM', moduleContext.moduleName)
export class PersonalInformationVM extends BaseDataModel { 

    //#region personAddress

    @observable private _personAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonAddress')
    public set personAddress(val: PersonAddress){
        this._personAddress = val;
    }

    public get personAddress(): PersonAddress{
        return this._personAddress;
    } 

    //#endregion personAddress 

    //#region mobilePhone

    @observable private _mobilePhone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set mobilePhone(val: string){
        this._mobilePhone = val;
    }

    public get mobilePhone(): string{
        return this._mobilePhone;
    } 

    //#endregion mobilePhone 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('EntityAddress', moduleContext.moduleName)
export class EntityAddress extends EkatteAddress { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentityDocumentForeignCitizenBasicData', moduleContext.moduleName)
export class IdentityDocumentForeignCitizenBasicData extends BaseDataModel { 

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

    //#region identitityIssueDateSpecified

    @observable private _identitityIssueDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set identitityIssueDateSpecified(val: boolean){
        this._identitityIssueDateSpecified = val;
    }

    public get identitityIssueDateSpecified(): boolean{
        return this._identitityIssueDateSpecified;
    } 

    //#endregion identitityIssueDateSpecified 

    //#region identitityExpireDate

    @observable private _identitityExpireDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set identitityExpireDate(val: moment.Moment){
        this._identitityExpireDate = val;
    }

    public get identitityExpireDate(): moment.Moment{
        return this._identitityExpireDate;
    } 

    //#endregion identitityExpireDate 

    //#region identitityExpireDateSpecified

    @observable private _identitityExpireDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set identitityExpireDateSpecified(val: boolean){
        this._identitityExpireDateSpecified = val;
    }

    public get identitityExpireDateSpecified(): boolean{
        return this._identitityExpireDateSpecified;
    } 

    //#endregion identitityExpireDateSpecified 

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

    //#region identityDocumentTypeSpecified

    @observable private _identityDocumentTypeSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set identityDocumentTypeSpecified(val: boolean){
        this._identityDocumentTypeSpecified = val;
    }

    public get identityDocumentTypeSpecified(): boolean{
        return this._identityDocumentTypeSpecified;
    } 

    //#endregion identityDocumentTypeSpecified 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('GenderDataGender', moduleContext.moduleName)
export class GenderDataGender extends BaseDataModel { 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('GenderData', moduleContext.moduleName)
export class GenderData extends BaseDataModel { 

    //#region genders

    @observable private _genders: GenderDataGender[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'GenderDataGender')
    public set genders(val: GenderDataGender[]){
        this._genders = val;
    }

    public get genders(): GenderDataGender[]{
        return this._genders;
    } 

    //#endregion genders 

    //#region versionDate

    @observable private _versionDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set versionDate(val: moment.Moment){
        this._versionDate = val;
    }

    public get versionDate(): moment.Moment{
        return this._versionDate;
    } 

    //#endregion versionDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PlaceOfBirthAbroad', moduleContext.moduleName)
export class PlaceOfBirthAbroad extends BaseDataModel { 

    //#region countryGRAOCode

    @observable private _countryGRAOCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryGRAOCode(val: string){
        this._countryGRAOCode = val;
    }

    public get countryGRAOCode(): string{
        return this._countryGRAOCode;
    } 

    //#endregion countryGRAOCode 

    //#region countryName

    @observable private _countryName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryName(val: string){
        this._countryName = val;
    }

    public get countryName(): string{
        return this._countryName;
    } 

    //#endregion countryName 

    //#region settlementAbroadName

    @observable private _settlementAbroadName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementAbroadName(val: string){
        this._settlementAbroadName = val;
    }

    public get settlementAbroadName(): string{
        return this._settlementAbroadName;
    } 

    //#endregion settlementAbroadName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceIrregularity', moduleContext.moduleName)
export class ServiceIrregularity extends BaseDataModel { 

    //#region serviceIrregularityID

    @observable private _serviceIrregularityID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceIrregularityID(val: number){
        this._serviceIrregularityID = val;
    }

    public get serviceIrregularityID(): number{
        return this._serviceIrregularityID;
    } 

    //#endregion serviceIrregularityID 

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

@TypeSystem.typeDecorator('RefusalVM', moduleContext.moduleName)
export class RefusalVM extends SigningDocumentFormVMBase<OfficialVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region refusalHeader

    @observable private _refusalHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set refusalHeader(val: string){
        this._refusalHeader = val;
    }

    public get refusalHeader(): string{
        return this._refusalHeader;
    } 

    //#endregion refusalHeader 

    //#region refusalContent

    @observable private _refusalContent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set refusalContent(val: string){
        this._refusalContent = val;
    }

    public get refusalContent(): string{
        return this._refusalContent;
    } 

    //#endregion refusalContent 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ActionsTakenMessageVM', moduleContext.moduleName)
export class ActionsTakenMessageVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AISCaseURIVM')
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceProviderBasicDataVM')
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ElectronicServiceApplicantVM')
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region administrativeBodyName

    @observable private _administrativeBodyName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set administrativeBodyName(val: string){
        this._administrativeBodyName = val;
    }

    public get administrativeBodyName(): string{
        return this._administrativeBodyName;
    } 

    //#endregion administrativeBodyName 

    //#region actionsTakenMessageHeader

    @observable private _actionsTakenMessageHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set actionsTakenMessageHeader(val: string){
        this._actionsTakenMessageHeader = val;
    }

    public get actionsTakenMessageHeader(): string{
        return this._actionsTakenMessageHeader;
    } 

    //#endregion actionsTakenMessageHeader 

    //#region actionsTakenMessageMessage

    @observable private _actionsTakenMessageMessage: string = null;

    @TypeSystem.propertyDecorator('string')
    public set actionsTakenMessageMessage(val: string){
        this._actionsTakenMessageMessage = val;
    }

    public get actionsTakenMessageMessage(): string{
        return this._actionsTakenMessageMessage;
    } 

    //#endregion actionsTakenMessageMessage 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PoliceDepartment')
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region documentReceiptOrSigningDate

    @observable private _documentReceiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set documentReceiptOrSigningDate(val: moment.Moment){
        this._documentReceiptOrSigningDate = val;
    }

    public get documentReceiptOrSigningDate(): moment.Moment{
        return this._documentReceiptOrSigningDate;
    } 

    //#endregion documentReceiptOrSigningDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 