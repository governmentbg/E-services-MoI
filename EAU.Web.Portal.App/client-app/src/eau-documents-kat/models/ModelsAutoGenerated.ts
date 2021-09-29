

// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { ApplicationFormVMBase, PersonAddress, PersonNames, PersonIdentifierChoiceType, SigningDocumentFormVMBase, OfficialVM, AISCaseURIVM, ElectronicServiceProviderBasicDataVM, ElectronicServiceApplicantVM, PoliceDepartment, PersonAndEntityBasicDataVM, DigitalSignatureContainerVM, AISCaseURI, ElectronicServiceApplicant, PersonBasicData, BIDMaritalStatus, PersonIdentifier, XMLDigitalSignature, EntityAddress } from 'eau-documents'


export enum DocumentFor { 

    OwnershipOfVehicleWithRegistrationNumberAndMake = 0,

    OwnershipOfPreviousVehicle = 1,

    OwnershipOfAllVehicles = 2,

    NoDataForOwnershipOfSpecificVehicle = 3,

    NoDataForOwnershipOfVehicles = 4,

    NoDataForPreviousOwnershipOfSpecificVehicle = 5,

}
TypeSystem.registerEnumInfo(DocumentFor , 'DocumentFor' , moduleContext.moduleName)
export enum OwnershipCertificateReason { 

    Others = 0,

    InsuranceAuthorities = 1,

    ConculServices = 2,

    MinistryOfTransport = 3,

    Customs = 4,

    NotaryAuthorities = 5,

    JudicialAuthorities = 6,

    FinancialAutorities = 7,

}
TypeSystem.registerEnumInfo(OwnershipCertificateReason , 'OwnershipCertificateReason' , moduleContext.moduleName)
export enum ANDCertificateReason { 

    OfficialNotice = 0,

    StartingWork = 1,

    InsuranceAuthority = 2,

    MedicalAuthorities = 3,

    JudicalAuthorities = 4,

    ConsularDepartament = 5,

    PrivateInformation = 6,

    Retraining = 7,

}
TypeSystem.registerEnumInfo(ANDCertificateReason , 'ANDCertificateReason' , moduleContext.moduleName)
export enum RegistrationCertificateTypeNomenclature { 

    RegistrationDocument = 0,

    RegistrationCertificate = 1,

}
TypeSystem.registerEnumInfo(RegistrationCertificateTypeNomenclature , 'RegistrationCertificateTypeNomenclature' , moduleContext.moduleName)
export enum PersonEntityChoiceType { 

    Person = 0,

    Entity = 1,

}
TypeSystem.registerEnumInfo(PersonEntityChoiceType , 'PersonEntityChoiceType' , moduleContext.moduleName)
export enum CouponDuplicateIssuensReason { 

    Loss = 1,

    Theft = 2,

    Damage = 3,

    Destruction = 4,

}
TypeSystem.registerEnumInfo(CouponDuplicateIssuensReason , 'CouponDuplicateIssuensReason' , moduleContext.moduleName)
export enum VehicleOwnershipChangeType { 

    ChangeOwnership = 1,

    Barter = 2,

}
TypeSystem.registerEnumInfo(VehicleOwnershipChangeType , 'VehicleOwnershipChangeType' , moduleContext.moduleName)
export enum VehicleOwnerAdditionalCircumstances { 

    DeadPerson = 0,

    Prisoner = 1,

    ChildRepresentedByLegalRepresentative = 2,

    ChildGuardian = 3,

    ChildRepresentedByTrustee = 4,

    PersonWithRevokedResidenceStatus = 5,

    SoldBySyndic = 6,

}
TypeSystem.registerEnumInfo(VehicleOwnerAdditionalCircumstances , 'VehicleOwnerAdditionalCircumstances' , moduleContext.moduleName)
export enum PersonEntityFarmerChoiceType { 

    Person = 0,

    Entity = 1,

    Farmer = 2,

}
TypeSystem.registerEnumInfo(PersonEntityFarmerChoiceType , 'PersonEntityFarmerChoiceType' , moduleContext.moduleName)
export enum PlatesContentTypes { 

    FourDigits = 0,

    SixLettersOrDigits = 1,

}
TypeSystem.registerEnumInfo(PlatesContentTypes , 'PlatesContentTypes' , moduleContext.moduleName)

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentofVehicleOwnershipVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentofVehicleOwnershipVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingDocumentofVehicleOwnershipDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentofVehicleOwnershipDataVM')
    public set circumstances(val: ApplicationForIssuingDocumentofVehicleOwnershipDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingDocumentofVehicleOwnershipDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentofVehicleOwnershipDataVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentofVehicleOwnershipDataVM extends BaseDataModel { 

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region currentAddress

    @observable private _currentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set currentAddress(val: PersonAddress){
        this._currentAddress = val;
    }

    public get currentAddress(): PersonAddress{
        return this._currentAddress;
    } 

    //#endregion currentAddress 

    //#region documentFor

    @observable private _documentFor: DocumentFor = null;

    @TypeSystem.propertyDecorator(DocumentFor)
    public set documentFor(val: DocumentFor){
        this._documentFor = val;
    }

    public get documentFor(): DocumentFor{
        return this._documentFor;
    } 

    //#endregion documentFor 

    //#region registrationAndMake

    @observable private _registrationAndMake: ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM')
    public set registrationAndMake(val: ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM){
        this._registrationAndMake = val;
    }

    public get registrationAndMake(): ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM{
        return this._registrationAndMake;
    } 

    //#endregion registrationAndMake 

    //#region ownershipCertificateReason

    @observable private _ownershipCertificateReason: OwnershipCertificateReason = null;

    @TypeSystem.propertyDecorator(OwnershipCertificateReason)
    public set ownershipCertificateReason(val: OwnershipCertificateReason){
        this._ownershipCertificateReason = val;
    }

    public get ownershipCertificateReason(): OwnershipCertificateReason{
        return this._ownershipCertificateReason;
    } 

    //#endregion ownershipCertificateReason 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM extends BaseDataModel { 

    //#region registrationNumber

    @observable private _registrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationNumber(val: string){
        this._registrationNumber = val;
    }

    public get registrationNumber(): string{
        return this._registrationNumber;
    } 

    //#endregion registrationNumber 

    //#region makeModel

    @observable private _makeModel: string = null;

    @TypeSystem.propertyDecorator('string')
    public set makeModel(val: string){
        this._makeModel = val;
    }

    public get makeModel(): string{
        return this._makeModel;
    } 

    //#endregion makeModel 

    //#region areFieldsRequired

    @observable private _areFieldsRequired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set areFieldsRequired(val: boolean){
        this._areFieldsRequired = val;
    }

    public get areFieldsRequired(): boolean{
        return this._areFieldsRequired;
    } 

    //#endregion areFieldsRequired 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM extends BaseDataModel { 

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region currentAddress

    @observable private _currentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set currentAddress(val: PersonAddress){
        this._currentAddress = val;
    }

    public get currentAddress(): PersonAddress{
        return this._currentAddress;
    } 

    //#endregion currentAddress 

    //#region andCertificateReason

    @observable private _andCertificateReason: ANDCertificateReason = null;

    @TypeSystem.propertyDecorator(ANDCertificateReason)
    public set andCertificateReason(val: ANDCertificateReason){
        this._andCertificateReason = val;
    }

    public get andCertificateReason(): ANDCertificateReason{
        return this._andCertificateReason;
    } 

    //#endregion andCertificateReason 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM')
    public set circumstances(val: ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingDocumentForRightsAndImposedPenaltiesOfVehicleDriverDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RequestForDecisionForDealVM', moduleContext.moduleName)
export class RequestForDecisionForDealVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: RequestForDecisionForDealDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'RequestForDecisionForDealDataVM')
    public set circumstances(val: RequestForDecisionForDealDataVM){
        this._circumstances = val;
    }

    public get circumstances(): RequestForDecisionForDealDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RequestForDecisionForDealDataVM', moduleContext.moduleName)
export class RequestForDecisionForDealDataVM extends BaseDataModel { 

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region ownersCollection

    @observable private _ownersCollection: VehicleOwnerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerDataVM')
    public set ownersCollection(val: VehicleOwnerDataVM[]){
        this._ownersCollection = val;
    }

    public get ownersCollection(): VehicleOwnerDataVM[]{
        return this._ownersCollection;
    } 

    //#endregion ownersCollection 

    //#region buyersCollection

    @observable private _buyersCollection: VehicleBuyerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleBuyerDataVM')
    public set buyersCollection(val: VehicleBuyerDataVM[]){
        this._buyersCollection = val;
    }

    public get buyersCollection(): VehicleBuyerDataVM[]{
        return this._buyersCollection;
    } 

    //#endregion buyersCollection 

    //#region vehicleRegistrationData

    @observable private _vehicleRegistrationData: VehicleRegistrationDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationDataVM')
    public set vehicleRegistrationData(val: VehicleRegistrationDataVM){
        this._vehicleRegistrationData = val;
    }

    public get vehicleRegistrationData(): VehicleRegistrationDataVM{
        return this._vehicleRegistrationData;
    } 

    //#endregion vehicleRegistrationData 

    //#region notaryIdentityNumber

    @observable private _notaryIdentityNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set notaryIdentityNumber(val: string){
        this._notaryIdentityNumber = val;
    }

    public get notaryIdentityNumber(): string{
        return this._notaryIdentityNumber;
    } 

    //#endregion notaryIdentityNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleOwnerDataVM', moduleContext.moduleName)
export class VehicleOwnerDataVM extends BaseDataModel { 

    //#region personEntityData

    @observable private _personEntityData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set personEntityData(val: PersonEntityDataVM){
        this._personEntityData = val;
    }

    public get personEntityData(): PersonEntityDataVM{
        return this._personEntityData;
    } 

    //#endregion personEntityData 

    //#region vehicleOwnerAdditionalCircumstances

    @observable private _vehicleOwnerAdditionalCircumstances: VehicleOwnerAdditionalCircumstances = null;

    @TypeSystem.propertyDecorator(VehicleOwnerAdditionalCircumstances)
    public set vehicleOwnerAdditionalCircumstances(val: VehicleOwnerAdditionalCircumstances){
        this._vehicleOwnerAdditionalCircumstances = val;
    }

    public get vehicleOwnerAdditionalCircumstances(): VehicleOwnerAdditionalCircumstances{
        return this._vehicleOwnerAdditionalCircumstances;
    } 

    //#endregion vehicleOwnerAdditionalCircumstances 

    //#region isSoldBySyndic

    @observable private _isSoldBySyndic: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isSoldBySyndic(val: boolean){
        this._isSoldBySyndic = val;
    }

    public get isSoldBySyndic(): boolean{
        return this._isSoldBySyndic;
    } 

    //#endregion isSoldBySyndic 

    //#region successorData

    @observable private _successorData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set successorData(val: string){
        this._successorData = val;
    }

    public get successorData(): string{
        return this._successorData;
    } 

    //#endregion successorData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleBuyerDataVM', moduleContext.moduleName)
export class VehicleBuyerDataVM extends BaseDataModel { 

    //#region personEntityData

    @observable private _personEntityData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set personEntityData(val: PersonEntityDataVM){
        this._personEntityData = val;
    }

    public get personEntityData(): PersonEntityDataVM{
        return this._personEntityData;
    } 

    //#endregion personEntityData 

    //#region vehicleOwnerAdditionalCircumstances

    @observable private _vehicleOwnerAdditionalCircumstances: VehicleOwnerAdditionalCircumstances = null;

    @TypeSystem.propertyDecorator(VehicleOwnerAdditionalCircumstances)
    public set vehicleOwnerAdditionalCircumstances(val: VehicleOwnerAdditionalCircumstances){
        this._vehicleOwnerAdditionalCircumstances = val;
    }

    public get vehicleOwnerAdditionalCircumstances(): VehicleOwnerAdditionalCircumstances{
        return this._vehicleOwnerAdditionalCircumstances;
    } 

    //#endregion vehicleOwnerAdditionalCircumstances 

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

    //#region validateEmail

    @observable private _validateEmail: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set validateEmail(val: boolean){
        this._validateEmail = val;
    }

    public get validateEmail(): boolean{
        return this._validateEmail;
    } 

    //#endregion validateEmail 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonDataVM', moduleContext.moduleName)
export class PersonDataVM extends BaseDataModel { 

    //#region names

    @observable private _names: PersonNames = null;

    @TypeSystem.propertyDecorator(PersonNames)
    public set names(val: PersonNames){
        this._names = val;
    }

    public get names(): PersonNames{
        return this._names;
    } 

    //#endregion names 

    //#region identifier

    @observable private _identifier: PersonIdentifierVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonIdentifierVM')
    public set identifier(val: PersonIdentifierVM){
        this._identifier = val;
    }

    public get identifier(): PersonIdentifierVM{
        return this._identifier;
    } 

    //#endregion identifier 

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

    //#region bdsCategoryCode

    @observable private _bdsCategoryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bdsCategoryCode(val: string){
        this._bdsCategoryCode = val;
    }

    public get bdsCategoryCode(): string{
        return this._bdsCategoryCode;
    } 

    //#endregion bdsCategoryCode 

    //#region validateIdentityNumber

    @observable private _validateIdentityNumber: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set validateIdentityNumber(val: boolean){
        this._validateIdentityNumber = val;
    }

    public get validateIdentityNumber(): boolean{
        return this._validateIdentityNumber;
    } 

    //#endregion validateIdentityNumber 

    //#region personBasicData

    @observable private _personBasicData: PersonBasicData = null;

    @TypeSystem.propertyDecorator(PersonBasicData)
    public set personBasicData(val: PersonBasicData){
        this._personBasicData = val;
    }

    public get personBasicData(): PersonBasicData{
        return this._personBasicData;
    } 

    //#endregion personBasicData 

    //#region maritalStatus

    @observable private _maritalStatus: BIDMaritalStatus = null;

    @TypeSystem.propertyDecorator(BIDMaritalStatus)
    public set maritalStatus(val: BIDMaritalStatus){
        this._maritalStatus = val;
    }

    public get maritalStatus(): BIDMaritalStatus{
        return this._maritalStatus;
    } 

    //#endregion maritalStatus 

    //#region deathDate

    @observable private _deathDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set deathDate(val: moment.Moment){
        this._deathDate = val;
    }

    public get deathDate(): moment.Moment{
        return this._deathDate;
    } 

    //#endregion deathDate 

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region status

    @observable private _status: Status = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status){
        this._status = val;
    }

    public get status(): Status{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonData', moduleContext.moduleName)
export class PersonData extends BaseDataModel { 

    //#region personBasicData

    @observable private _personBasicData: PersonBasicData = null;

    @TypeSystem.propertyDecorator(PersonBasicData)
    public set personBasicData(val: PersonBasicData){
        this._personBasicData = val;
    }

    public get personBasicData(): PersonBasicData{
        return this._personBasicData;
    } 

    //#endregion personBasicData 

    //#region maritalStatus

    @observable private _maritalStatus: BIDMaritalStatus = null;

    @TypeSystem.propertyDecorator(BIDMaritalStatus)
    public set maritalStatus(val: BIDMaritalStatus){
        this._maritalStatus = val;
    }

    public get maritalStatus(): BIDMaritalStatus{
        return this._maritalStatus;
    } 

    //#endregion maritalStatus 

    //#region maritalStatusSpecified

    @observable private _maritalStatusSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set maritalStatusSpecified(val: boolean){
        this._maritalStatusSpecified = val;
    }

    public get maritalStatusSpecified(): boolean{
        return this._maritalStatusSpecified;
    } 

    //#endregion maritalStatusSpecified 

    //#region deathDate

    @observable private _deathDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set deathDate(val: moment.Moment){
        this._deathDate = val;
    }

    public get deathDate(): moment.Moment{
        return this._deathDate;
    } 

    //#endregion deathDate 

    //#region deathDateSpecified

    @observable private _deathDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set deathDateSpecified(val: boolean){
        this._deathDateSpecified = val;
    }

    public get deathDateSpecified(): boolean{
        return this._deathDateSpecified;
    } 

    //#endregion deathDateSpecified 

    //#region status

    @observable private _status: Status = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status){
        this._status = val;
    }

    public get status(): Status{
        return this._status;
    } 

    //#endregion status 

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region bdsCategoryCode

    @observable private _bdsCategoryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bdsCategoryCode(val: string){
        this._bdsCategoryCode = val;
    }

    public get bdsCategoryCode(): string{
        return this._bdsCategoryCode;
    } 

    //#endregion bdsCategoryCode 

    //#region bdsCategoryValue

    @observable private _bdsCategoryValue: string = null;

    @TypeSystem.propertyDecorator('string')
    public set bdsCategoryValue(val: string){
        this._bdsCategoryValue = val;
    }

    public get bdsCategoryValue(): string{
        return this._bdsCategoryValue;
    } 

    //#endregion bdsCategoryValue 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('EntityData', moduleContext.moduleName)
export class EntityData extends BaseDataModel { 

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

    //#region nameTrans

    @observable private _nameTrans: string = null;

    @TypeSystem.propertyDecorator('string')
    public set nameTrans(val: string){
        this._nameTrans = val;
    }

    public get nameTrans(): string{
        return this._nameTrans;
    } 

    //#endregion nameTrans 

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

    //#region identifierType

    @observable private _identifierType: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identifierType(val: string){
        this._identifierType = val;
    }

    public get identifierType(): string{
        return this._identifierType;
    } 

    //#endregion identifierType 

    //#region status

    @observable private _status: Status = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status){
        this._status = val;
    }

    public get status(): Status{
        return this._status;
    } 

    //#endregion status 

    //#region recStatus

    @observable private _recStatus: string = null;

    @TypeSystem.propertyDecorator('string')
    public set recStatus(val: string){
        this._recStatus = val;
    }

    public get recStatus(): string{
        return this._recStatus;
    } 

    //#endregion recStatus 

    //#region entityManagmentAddress

    @observable private _entityManagmentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set entityManagmentAddress(val: PersonAddress){
        this._entityManagmentAddress = val;
    }

    public get entityManagmentAddress(): PersonAddress{
        return this._entityManagmentAddress;
    } 

    //#endregion entityManagmentAddress 

    //#region legalForm

    @observable private _legalForm: string = null;

    @TypeSystem.propertyDecorator('string')
    public set legalForm(val: string){
        this._legalForm = val;
    }

    public get legalForm(): string{
        return this._legalForm;
    } 

    //#endregion legalForm 

    //#region legalFormCode

    @observable private _legalFormCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set legalFormCode(val: string){
        this._legalFormCode = val;
    }

    public get legalFormCode(): string{
        return this._legalFormCode;
    } 

    //#endregion legalFormCode 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonIdentifierVM', moduleContext.moduleName)
export class PersonIdentifierVM extends BaseDataModel { 

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

@TypeSystem.typeDecorator('VehicleRegistrationDataVM', moduleContext.moduleName)
export class VehicleRegistrationDataVM extends BaseDataModel { 

    //#region registrationNumber

    @observable private _registrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationNumber(val: string){
        this._registrationNumber = val;
    }

    public get registrationNumber(): string{
        return this._registrationNumber;
    } 

    //#endregion registrationNumber 

    //#region identificationNumber

    @observable private _identificationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationNumber(val: string){
        this._identificationNumber = val;
    }

    public get identificationNumber(): string{
        return this._identificationNumber;
    } 

    //#endregion identificationNumber 

    //#region registrationCertificateNumber

    @observable private _registrationCertificateNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationCertificateNumber(val: string){
        this._registrationCertificateNumber = val;
    }

    public get registrationCertificateNumber(): string{
        return this._registrationCertificateNumber;
    } 

    //#endregion registrationCertificateNumber 

    //#region registrationCertificateType

    @observable private _registrationCertificateType: RegistrationCertificateTypeNomenclature = null;

    @TypeSystem.propertyDecorator(RegistrationCertificateTypeNomenclature)
    public set registrationCertificateType(val: RegistrationCertificateTypeNomenclature){
        this._registrationCertificateType = val;
    }

    public get registrationCertificateType(): RegistrationCertificateTypeNomenclature{
        return this._registrationCertificateType;
    } 

    //#endregion registrationCertificateType 

    //#region availableDocumentForPaidAnnualTax

    @observable private _availableDocumentForPaidAnnualTax: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set availableDocumentForPaidAnnualTax(val: boolean){
        this._availableDocumentForPaidAnnualTax = val;
    }

    public get availableDocumentForPaidAnnualTax(): boolean{
        return this._availableDocumentForPaidAnnualTax;
    } 

    //#endregion availableDocumentForPaidAnnualTax 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonEntityDataVM', moduleContext.moduleName)
export class PersonEntityDataVM extends BaseDataModel { 

    //#region selectedChoiceType

    @observable private _selectedChoiceType: PersonEntityChoiceType = null;

    @TypeSystem.propertyDecorator(PersonEntityChoiceType)
    public set selectedChoiceType(val: PersonEntityChoiceType){
        this._selectedChoiceType = val;
    }

    public get selectedChoiceType(): PersonEntityChoiceType{
        return this._selectedChoiceType;
    } 

    //#endregion selectedChoiceType 

    //#region selectedPersonEntityFarmerChoiceType

    @observable private _selectedPersonEntityFarmerChoiceType: PersonEntityFarmerChoiceType = null;

    @TypeSystem.propertyDecorator(PersonEntityFarmerChoiceType)
    public set selectedPersonEntityFarmerChoiceType(val: PersonEntityFarmerChoiceType){
        this._selectedPersonEntityFarmerChoiceType = val;
    }

    public get selectedPersonEntityFarmerChoiceType(): PersonEntityFarmerChoiceType{
        return this._selectedPersonEntityFarmerChoiceType;
    } 

    //#endregion selectedPersonEntityFarmerChoiceType 

    //#region person

    @observable private _person: PersonDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonDataVM')
    public set person(val: PersonDataVM){
        this._person = val;
    }

    public get person(): PersonDataVM{
        return this._person;
    } 

    //#endregion person 

    //#region entity

    @observable private _entity: EntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityDataVM')
    public set entity(val: EntityDataVM){
        this._entity = val;
    }

    public get entity(): EntityDataVM{
        return this._entity;
    } 

    //#endregion entity 

    //#region isFarmer

    @observable private _isFarmer: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isFarmer(val: boolean){
        this._isFarmer = val;
    }

    public get isFarmer(): boolean{
        return this._isFarmer;
    } 

    //#endregion isFarmer 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('EntityDataVM', moduleContext.moduleName)
export class EntityDataVM extends BaseDataModel { 

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

    //#region identifierType

    @observable private _identifierType: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identifierType(val: string){
        this._identifierType = val;
    }

    public get identifierType(): string{
        return this._identifierType;
    } 

    //#endregion identifierType 

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

    //#region nameTrans

    @observable private _nameTrans: string = null;

    @TypeSystem.propertyDecorator('string')
    public set nameTrans(val: string){
        this._nameTrans = val;
    }

    public get nameTrans(): string{
        return this._nameTrans;
    } 

    //#endregion nameTrans 

    //#region recStatus

    @observable private _recStatus: string = null;

    @TypeSystem.propertyDecorator('string')
    public set recStatus(val: string){
        this._recStatus = val;
    }

    public get recStatus(): string{
        return this._recStatus;
    } 

    //#endregion recStatus 

    //#region entityManagmentAddress

    @observable private _entityManagmentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set entityManagmentAddress(val: PersonAddress){
        this._entityManagmentAddress = val;
    }

    public get entityManagmentAddress(): PersonAddress{
        return this._entityManagmentAddress;
    } 

    //#endregion entityManagmentAddress 

    //#region status

    @observable private _status: Status = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status){
        this._status = val;
    }

    public get status(): Status{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RequestForApplicationForIssuingDuplicateDrivingLicenseVM', moduleContext.moduleName)
export class RequestForApplicationForIssuingDuplicateDrivingLicenseVM extends ApplicationFormVMBase { 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CertificateOfVehicleOwnershipVM', moduleContext.moduleName)
export class CertificateOfVehicleOwnershipVM extends SigningDocumentFormVMBase<OfficialVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(AISCaseURIVM)
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

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceProviderBasicDataVM)
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicantVM)
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region certificateOfVehicleOwnershipHeader

    @observable private _certificateOfVehicleOwnershipHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateOfVehicleOwnershipHeader(val: string){
        this._certificateOfVehicleOwnershipHeader = val;
    }

    public get certificateOfVehicleOwnershipHeader(): string{
        return this._certificateOfVehicleOwnershipHeader;
    } 

    //#endregion certificateOfVehicleOwnershipHeader 

    //#region certificateNumber

    @observable private _certificateNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateNumber(val: string){
        this._certificateNumber = val;
    }

    public get certificateNumber(): string{
        return this._certificateNumber;
    } 

    //#endregion certificateNumber 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region certificateKind

    @observable private _certificateKind: DocumentFor = null;

    @TypeSystem.propertyDecorator(DocumentFor)
    public set certificateKind(val: DocumentFor){
        this._certificateKind = val;
    }

    public get certificateKind(): DocumentFor{
        return this._certificateKind;
    } 

    //#endregion certificateKind 

    //#region vehicleData

    @observable private _vehicleData: VehicleDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataVM')
    public set vehicleData(val: VehicleDataVM){
        this._vehicleData = val;
    }

    public get vehicleData(): VehicleDataVM{
        return this._vehicleData;
    } 

    //#endregion vehicleData 

    //#region vehicleOwnerInformationCollection

    @observable private _vehicleOwnerInformationCollection: VehicleOwnerInformationItemVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerInformationItemVM')
    public set vehicleOwnerInformationCollection(val: VehicleOwnerInformationItemVM[]){
        this._vehicleOwnerInformationCollection = val;
    }

    public get vehicleOwnerInformationCollection(): VehicleOwnerInformationItemVM[]{
        return this._vehicleOwnerInformationCollection;
    } 

    //#endregion vehicleOwnerInformationCollection 

    //#region katVerificationDateTime

    @observable private _katVerificationDateTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set katVerificationDateTime(val: moment.Moment){
        this._katVerificationDateTime = val;
    }

    public get katVerificationDateTime(): moment.Moment{
        return this._katVerificationDateTime;
    } 

    //#endregion katVerificationDateTime 

    //#region ownershipCertificateReason

    @observable private _ownershipCertificateReason: OwnershipCertificateReason = null;

    @TypeSystem.propertyDecorator(OwnershipCertificateReason)
    public set ownershipCertificateReason(val: OwnershipCertificateReason){
        this._ownershipCertificateReason = val;
    }

    public get ownershipCertificateReason(): OwnershipCertificateReason{
        return this._ownershipCertificateReason;
    } 

    //#endregion ownershipCertificateReason 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleDataVM', moduleContext.moduleName)
export class VehicleDataVM extends BaseDataModel { 

    //#region vehicleData

    @observable private _vehicleData: VehicleDataItemVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataItemVM')
    public set vehicleData(val: VehicleDataItemVM){
        this._vehicleData = val;
    }

    public get vehicleData(): VehicleDataItemVM{
        return this._vehicleData;
    } 

    //#endregion vehicleData 

    //#region vehicleDataCollection

    @observable private _vehicleDataCollection: VehicleDataItemVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleDataItemVM')
    public set vehicleDataCollection(val: VehicleDataItemVM[]){
        this._vehicleDataCollection = val;
    }

    public get vehicleDataCollection(): VehicleDataItemVM[]{
        return this._vehicleDataCollection;
    } 

    //#endregion vehicleDataCollection 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleDataItemVM', moduleContext.moduleName)
export class VehicleDataItemVM extends BaseDataModel { 

    //#region registrationNumber

    @observable private _registrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationNumber(val: string){
        this._registrationNumber = val;
    }

    public get registrationNumber(): string{
        return this._registrationNumber;
    } 

    //#endregion registrationNumber 

    //#region makeModel

    @observable private _makeModel: string = null;

    @TypeSystem.propertyDecorator('string')
    public set makeModel(val: string){
        this._makeModel = val;
    }

    public get makeModel(): string{
        return this._makeModel;
    } 

    //#endregion makeModel 

    //#region previousRegistrationNumber

    @observable private _previousRegistrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set previousRegistrationNumber(val: string){
        this._previousRegistrationNumber = val;
    }

    public get previousRegistrationNumber(): string{
        return this._previousRegistrationNumber;
    } 

    //#endregion previousRegistrationNumber 

    //#region identificationNumber

    @observable private _identificationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationNumber(val: string){
        this._identificationNumber = val;
    }

    public get identificationNumber(): string{
        return this._identificationNumber;
    } 

    //#endregion identificationNumber 

    //#region engineNumber

    @observable private _engineNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set engineNumber(val: string){
        this._engineNumber = val;
    }

    public get engineNumber(): string{
        return this._engineNumber;
    } 

    //#endregion engineNumber 

    //#region type

    @observable private _type: string = null;

    @TypeSystem.propertyDecorator('string')
    public set type(val: string){
        this._type = val;
    }

    public get type(): string{
        return this._type;
    } 

    //#endregion type 

    //#region vehicleFirstRegistrationDate

    @observable private _vehicleFirstRegistrationDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set vehicleFirstRegistrationDate(val: moment.Moment){
        this._vehicleFirstRegistrationDate = val;
    }

    public get vehicleFirstRegistrationDate(): moment.Moment{
        return this._vehicleFirstRegistrationDate;
    } 

    //#endregion vehicleFirstRegistrationDate 

    //#region vehicleSuspension

    @observable private _vehicleSuspension: VehicleDataItemVehicleSuspension[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleDataItemVehicleSuspension')
    public set vehicleSuspension(val: VehicleDataItemVehicleSuspension[]){
        this._vehicleSuspension = val;
    }

    public get vehicleSuspension(): VehicleDataItemVehicleSuspension[]{
        return this._vehicleSuspension;
    } 

    //#endregion vehicleSuspension 

    //#region vehicleOwnerStartDate

    @observable private _vehicleOwnerStartDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set vehicleOwnerStartDate(val: moment.Moment){
        this._vehicleOwnerStartDate = val;
    }

    public get vehicleOwnerStartDate(): moment.Moment{
        return this._vehicleOwnerStartDate;
    } 

    //#endregion vehicleOwnerStartDate 

    //#region vehicleOwnerEndDate

    @observable private _vehicleOwnerEndDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set vehicleOwnerEndDate(val: moment.Moment){
        this._vehicleOwnerEndDate = val;
    }

    public get vehicleOwnerEndDate(): moment.Moment{
        return this._vehicleOwnerEndDate;
    } 

    //#endregion vehicleOwnerEndDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleOwnerInformationItemVM', moduleContext.moduleName)
export class VehicleOwnerInformationItemVM extends BaseDataModel { 

    //#region owner

    @observable private _owner: PersonAndEntityBasicDataVM = null;

    @TypeSystem.propertyDecorator(PersonAndEntityBasicDataVM)
    public set owner(val: PersonAndEntityBasicDataVM){
        this._owner = val;
    }

    public get owner(): PersonAndEntityBasicDataVM{
        return this._owner;
    } 

    //#endregion owner 

    //#region address

    @observable private _address: VehicleOwnerAddress = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerAddress')
    public set address(val: VehicleOwnerAddress){
        this._address = val;
    }

    public get address(): VehicleOwnerAddress{
        return this._address;
    } 

    //#endregion address 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleOwnerAddress', moduleContext.moduleName)
export class VehicleOwnerAddress extends BaseDataModel { 

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

    //#region residenceCode

    @observable private _residenceCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set residenceCode(val: string){
        this._residenceCode = val;
    }

    public get residenceCode(): string{
        return this._residenceCode;
    } 

    //#endregion residenceCode 

    //#region residenceName

    @observable private _residenceName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set residenceName(val: string){
        this._residenceName = val;
    }

    public get residenceName(): string{
        return this._residenceName;
    } 

    //#endregion residenceName 

    //#region addressSupplement

    @observable private _addressSupplement: string = null;

    @TypeSystem.propertyDecorator('string')
    public set addressSupplement(val: string){
        this._addressSupplement = val;
    }

    public get addressSupplement(): string{
        return this._addressSupplement;
    } 

    //#endregion addressSupplement 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleDataItemVehicleSuspension', moduleContext.moduleName)
export class VehicleDataItemVehicleSuspension extends BaseDataModel { 

    //#region vehSuspensionDate

    @observable private _vehSuspensionDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set vehSuspensionDate(val: moment.Moment){
        this._vehSuspensionDate = val;
    }

    public get vehSuspensionDate(): moment.Moment{
        return this._vehSuspensionDate;
    } 

    //#endregion vehSuspensionDate 

    //#region vehSuspensionDateSpecified

    @observable private _vehSuspensionDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set vehSuspensionDateSpecified(val: boolean){
        this._vehSuspensionDateSpecified = val;
    }

    public get vehSuspensionDateSpecified(): boolean{
        return this._vehSuspensionDateSpecified;
    } 

    //#endregion vehSuspensionDateSpecified 

    //#region vehSuspensionReason

    @observable private _vehSuspensionReason: string = null;

    @TypeSystem.propertyDecorator('string')
    public set vehSuspensionReason(val: string){
        this._vehSuspensionReason = val;
    }

    public get vehSuspensionReason(): string{
        return this._vehSuspensionReason;
    } 

    //#endregion vehSuspensionReason 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipVM', moduleContext.moduleName)
export class ReportForChangingOwnershipVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURI = null;

    @TypeSystem.propertyDecorator(AISCaseURI)
    public set aisCaseURI(val: AISCaseURI){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURI{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicant = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicant)
    public set electronicServiceApplicant(val: ElectronicServiceApplicant){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicant{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region vehicleRegistrationData

    @observable private _vehicleRegistrationData: VehicleRegistrationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationData')
    public set vehicleRegistrationData(val: VehicleRegistrationData){
        this._vehicleRegistrationData = val;
    }

    public get vehicleRegistrationData(): VehicleRegistrationData{
        return this._vehicleRegistrationData;
    } 

    //#endregion vehicleRegistrationData 

    //#region oldOwnersData

    @observable private _oldOwnersData: ReportForChangingOwnershipOldOwnersDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipOldOwnersDataVM')
    public set oldOwnersData(val: ReportForChangingOwnershipOldOwnersDataVM){
        this._oldOwnersData = val;
    }

    public get oldOwnersData(): ReportForChangingOwnershipOldOwnersDataVM{
        return this._oldOwnersData;
    } 

    //#endregion oldOwnersData 

    //#region newOwnersData

    @observable private _newOwnersData: ReportForChangingOwnershipNewOwnersDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipNewOwnersDataVM')
    public set newOwnersData(val: ReportForChangingOwnershipNewOwnersDataVM){
        this._newOwnersData = val;
    }

    public get newOwnersData(): ReportForChangingOwnershipNewOwnersDataVM{
        return this._newOwnersData;
    } 

    //#endregion newOwnersData 

    //#region localTaxes

    @observable private _localTaxes: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set localTaxes(val: Status[]){
        this._localTaxes = val;
    }

    public get localTaxes(): Status[]{
        return this._localTaxes;
    } 

    //#endregion localTaxes 

    //#region guaranteeFund

    @observable private _guaranteeFund: ReportForChangingOwnershipGuaranteeFund = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipGuaranteeFund')
    public set guaranteeFund(val: ReportForChangingOwnershipGuaranteeFund){
        this._guaranteeFund = val;
    }

    public get guaranteeFund(): ReportForChangingOwnershipGuaranteeFund{
        return this._guaranteeFund;
    } 

    //#endregion guaranteeFund 

    //#region periodicTechnicalCheck

    @observable private _periodicTechnicalCheck: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set periodicTechnicalCheck(val: Status[]){
        this._periodicTechnicalCheck = val;
    }

    public get periodicTechnicalCheck(): Status[]{
        return this._periodicTechnicalCheck;
    } 

    //#endregion periodicTechnicalCheck 

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

@TypeSystem.typeDecorator('VehicleRegistrationData', moduleContext.moduleName)
export class VehicleRegistrationData extends BaseDataModel { 

    //#region registrationNumber

    @observable private _registrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationNumber(val: string){
        this._registrationNumber = val;
    }

    public get registrationNumber(): string{
        return this._registrationNumber;
    } 

    //#endregion registrationNumber 

    //#region identificationNumber

    @observable private _identificationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationNumber(val: string){
        this._identificationNumber = val;
    }

    public get identificationNumber(): string{
        return this._identificationNumber;
    } 

    //#endregion identificationNumber 

    //#region engineNumber

    @observable private _engineNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set engineNumber(val: string){
        this._engineNumber = val;
    }

    public get engineNumber(): string{
        return this._engineNumber;
    } 

    //#endregion engineNumber 

    //#region registrationCertificateNumber

    @observable private _registrationCertificateNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationCertificateNumber(val: string){
        this._registrationCertificateNumber = val;
    }

    public get registrationCertificateNumber(): string{
        return this._registrationCertificateNumber;
    } 

    //#endregion registrationCertificateNumber 

    //#region registrationCertificateType

    @observable private _registrationCertificateType: RegistrationCertificateTypeNomenclature = null;

    @TypeSystem.propertyDecorator(RegistrationCertificateTypeNomenclature)
    public set registrationCertificateType(val: RegistrationCertificateTypeNomenclature){
        this._registrationCertificateType = val;
    }

    public get registrationCertificateType(): RegistrationCertificateTypeNomenclature{
        return this._registrationCertificateType;
    } 

    //#endregion registrationCertificateType 

    //#region registrationCertificateTypeSpecified

    @observable private _registrationCertificateTypeSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set registrationCertificateTypeSpecified(val: boolean){
        this._registrationCertificateTypeSpecified = val;
    }

    public get registrationCertificateTypeSpecified(): boolean{
        return this._registrationCertificateTypeSpecified;
    } 

    //#endregion registrationCertificateTypeSpecified 

    //#region dateOfFirstReg

    @observable private _dateOfFirstReg: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set dateOfFirstReg(val: moment.Moment){
        this._dateOfFirstReg = val;
    }

    public get dateOfFirstReg(): moment.Moment{
        return this._dateOfFirstReg;
    } 

    //#endregion dateOfFirstReg 

    //#region dateOfFirstRegSpecified

    @observable private _dateOfFirstRegSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set dateOfFirstRegSpecified(val: boolean){
        this._dateOfFirstRegSpecified = val;
    }

    public get dateOfFirstRegSpecified(): boolean{
        return this._dateOfFirstRegSpecified;
    } 

    //#endregion dateOfFirstRegSpecified 

    //#region regAddress

    @observable private _regAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set regAddress(val: PersonAddress){
        this._regAddress = val;
    }

    public get regAddress(): PersonAddress{
        return this._regAddress;
    } 

    //#endregion regAddress 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region nextVehicleInspection

    @observable private _nextVehicleInspection: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set nextVehicleInspection(val: moment.Moment){
        this._nextVehicleInspection = val;
    }

    public get nextVehicleInspection(): moment.Moment{
        return this._nextVehicleInspection;
    } 

    //#endregion nextVehicleInspection 

    //#region nextVehicleInspectionSpecified

    @observable private _nextVehicleInspectionSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set nextVehicleInspectionSpecified(val: boolean){
        this._nextVehicleInspectionSpecified = val;
    }

    public get nextVehicleInspectionSpecified(): boolean{
        return this._nextVehicleInspectionSpecified;
    } 

    //#endregion nextVehicleInspectionSpecified 

    //#region vehicleCategory

    @observable private _vehicleCategory: VehicleCategory = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleCategory')
    public set vehicleCategory(val: VehicleCategory){
        this._vehicleCategory = val;
    }

    public get vehicleCategory(): VehicleCategory{
        return this._vehicleCategory;
    } 

    //#endregion vehicleCategory 

    //#region statuses

    @observable private _statuses: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set statuses(val: Status[]){
        this._statuses = val;
    }

    public get statuses(): Status[]{
        return this._statuses;
    } 

    //#endregion statuses 

    //#region hasActiveSeizure

    @observable private _hasActiveSeizure: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasActiveSeizure(val: boolean){
        this._hasActiveSeizure = val;
    }

    public get hasActiveSeizure(): boolean{
        return this._hasActiveSeizure;
    } 

    //#endregion hasActiveSeizure 

    //#region hasActiveSeizureSpecified

    @observable private _hasActiveSeizureSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasActiveSeizureSpecified(val: boolean){
        this._hasActiveSeizureSpecified = val;
    }

    public get hasActiveSeizureSpecified(): boolean{
        return this._hasActiveSeizureSpecified;
    } 

    //#endregion hasActiveSeizureSpecified 

    //#region hasCustomsLimitation

    @observable private _hasCustomsLimitation: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasCustomsLimitation(val: boolean){
        this._hasCustomsLimitation = val;
    }

    public get hasCustomsLimitation(): boolean{
        return this._hasCustomsLimitation;
    } 

    //#endregion hasCustomsLimitation 

    //#region hasCustomsLimitationSpecified

    @observable private _hasCustomsLimitationSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasCustomsLimitationSpecified(val: boolean){
        this._hasCustomsLimitationSpecified = val;
    }

    public get hasCustomsLimitationSpecified(): boolean{
        return this._hasCustomsLimitationSpecified;
    } 

    //#endregion hasCustomsLimitationSpecified 

    //#region makeAndModel

    @observable private _makeAndModel: string = null;

    @TypeSystem.propertyDecorator('string')
    public set makeAndModel(val: string){
        this._makeAndModel = val;
    }

    public get makeAndModel(): string{
        return this._makeAndModel;
    } 

    //#endregion makeAndModel 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipOldOwnersDataVM', moduleContext.moduleName)
export class ReportForChangingOwnershipOldOwnersDataVM extends BaseDataModel { 

    //#region oldOwners

    @observable private _oldOwners: ReportForChangingOwnershipOldOwnersDataOldOwnersVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipOldOwnersDataOldOwnersVM')
    public set oldOwners(val: ReportForChangingOwnershipOldOwnersDataOldOwnersVM[]){
        this._oldOwners = val;
    }

    public get oldOwners(): ReportForChangingOwnershipOldOwnersDataOldOwnersVM[]{
        return this._oldOwners;
    } 

    //#endregion oldOwners 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipNewOwnersDataVM', moduleContext.moduleName)
export class ReportForChangingOwnershipNewOwnersDataVM extends BaseDataModel { 

    //#region newOwners

    @observable private _newOwners: ReportForChangingOwnershipNewOwnersDataNewOwnersVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipNewOwnersDataNewOwnersVM')
    public set newOwners(val: ReportForChangingOwnershipNewOwnersDataNewOwnersVM[]){
        this._newOwners = val;
    }

    public get newOwners(): ReportForChangingOwnershipNewOwnersDataNewOwnersVM[]{
        return this._newOwners;
    } 

    //#endregion newOwners 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipGuaranteeFund', moduleContext.moduleName)
export class ReportForChangingOwnershipGuaranteeFund extends BaseDataModel { 

    //#region policyValidTo

    @observable private _policyValidTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set policyValidTo(val: moment.Moment){
        this._policyValidTo = val;
    }

    public get policyValidTo(): moment.Moment{
        return this._policyValidTo;
    } 

    //#endregion policyValidTo 

    //#region policyValidToSpecified

    @observable private _policyValidToSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set policyValidToSpecified(val: boolean){
        this._policyValidToSpecified = val;
    }

    public get policyValidToSpecified(): boolean{
        return this._policyValidToSpecified;
    } 

    //#endregion policyValidToSpecified 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Status', moduleContext.moduleName)
export class Status extends BaseDataModel { 

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

    //#region blocking

    @observable private _blocking: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set blocking(val: boolean){
        this._blocking = val;
    }

    public get blocking(): boolean{
        return this._blocking;
    } 

    //#endregion blocking 

    //#region blockingSpecified

    @observable private _blockingSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set blockingSpecified(val: boolean){
        this._blockingSpecified = val;
    }

    public get blockingSpecified(): boolean{
        return this._blockingSpecified;
    } 

    //#endregion blockingSpecified 

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

@TypeSystem.typeDecorator('ReportForChangingOwnershipOldOwnersDataOldOwnersVM', moduleContext.moduleName)
export class ReportForChangingOwnershipOldOwnersDataOldOwnersVM extends BaseDataModel { 

    //#region personEntityData

    @observable private _personEntityData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set personEntityData(val: PersonEntityDataVM){
        this._personEntityData = val;
    }

    public get personEntityData(): PersonEntityDataVM{
        return this._personEntityData;
    } 

    //#endregion personEntityData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipNewOwnersDataNewOwnersVM', moduleContext.moduleName)
export class ReportForChangingOwnershipNewOwnersDataNewOwnersVM extends BaseDataModel { 

    //#region personEntityData

    @observable private _personEntityData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set personEntityData(val: PersonEntityDataVM){
        this._personEntityData = val;
    }

    public get personEntityData(): PersonEntityDataVM{
        return this._personEntityData;
    } 

    //#endregion personEntityData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleCategory', moduleContext.moduleName)
export class VehicleCategory extends BaseDataModel { 

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

@TypeSystem.typeDecorator('CertificateAttestingToTheRightsAndPenaltiesOfVehicleDriverVM', moduleContext.moduleName)
export class CertificateAttestingToTheRightsAndPenaltiesOfVehicleDriverVM extends SigningDocumentFormVMBase<OfficialVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(AISCaseURIVM)
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

    //#region electronicServiceProviderBasicData

    @observable private _electronicServiceProviderBasicData: ElectronicServiceProviderBasicDataVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceProviderBasicDataVM)
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicantVM)
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region certificateNumber

    @observable private _certificateNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateNumber(val: string){
        this._certificateNumber = val;
    }

    public get certificateNumber(): string{
        return this._certificateNumber;
    } 

    //#endregion certificateNumber 

    //#region certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader

    @observable private _certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader(val: string){
        this._certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader = val;
    }

    public get certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader(): string{
        return this._certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader;
    } 

    //#endregion certificateAttestingToTheRightsAndPenaltiesOfVehicleDriverHeader 

    //#region certificateData

    @observable private _certificateData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateData(val: string){
        this._certificateData = val;
    }

    public get certificateData(): string{
        return this._certificateData;
    } 

    //#endregion certificateData 

    //#region certificateData1

    @observable private _certificateData1: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateData1(val: string){
        this._certificateData1 = val;
    }

    public get certificateData1(): string{
        return this._certificateData1;
    } 

    //#endregion certificateData1 

    //#region andCertificateReason

    @observable private _andCertificateReason: ANDCertificateReason = null;

    @TypeSystem.propertyDecorator(ANDCertificateReason)
    public set andCertificateReason(val: ANDCertificateReason){
        this._andCertificateReason = val;
    }

    public get andCertificateReason(): ANDCertificateReason{
        return this._andCertificateReason;
    } 

    //#endregion andCertificateReason 

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

    //#region reportDate

    @observable private _reportDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set reportDate(val: moment.Moment){
        this._reportDate = val;
    }

    public get reportDate(): moment.Moment{
        return this._reportDate;
    } 

    //#endregion reportDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DataForPrintSRMPSVM', moduleContext.moduleName)
export class DataForPrintSRMPSVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: DataForPrintSRMPSDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DataForPrintSRMPSDataVM')
    public set circumstances(val: DataForPrintSRMPSDataVM){
        this._circumstances = val;
    }

    public get circumstances(): DataForPrintSRMPSDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DataForPrintSRMPSDataVM', moduleContext.moduleName)
export class DataForPrintSRMPSDataVM extends BaseDataModel { 

    //#region holderData

    @observable private _holderData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set holderData(val: PersonEntityDataVM){
        this._holderData = val;
    }

    public get holderData(): PersonEntityDataVM{
        return this._holderData;
    } 

    //#endregion holderData 

    //#region userData

    @observable private _userData: PersonEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set userData(val: PersonEntityDataVM){
        this._userData = val;
    }

    public get userData(): PersonEntityDataVM{
        return this._userData;
    } 

    //#endregion userData 

    //#region newOwners

    @observable private _newOwners: PersonEntityDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set newOwners(val: PersonEntityDataVM[]){
        this._newOwners = val;
    }

    public get newOwners(): PersonEntityDataVM[]{
        return this._newOwners;
    } 

    //#endregion newOwners 

    //#region selectedNewOwner

    @observable private _selectedNewOwner: string = null;

    @TypeSystem.propertyDecorator('string')
    public set selectedNewOwner(val: string){
        this._selectedNewOwner = val;
    }

    public get selectedNewOwner(): string{
        return this._selectedNewOwner;
    } 

    //#endregion selectedNewOwner 

    //#region checkedHolderData

    @observable private _checkedHolderData: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set checkedHolderData(val: boolean){
        this._checkedHolderData = val;
    }

    public get checkedHolderData(): boolean{
        return this._checkedHolderData;
    } 

    //#endregion checkedHolderData 

    //#region checkedUserData

    @observable private _checkedUserData: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set checkedUserData(val: boolean){
        this._checkedUserData = val;
    }

    public get checkedUserData(): boolean{
        return this._checkedUserData;
    } 

    //#endregion checkedUserData 

    //#region holderNotSameAsUser

    @observable private _holderNotSameAsUser: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set holderNotSameAsUser(val: boolean){
        this._holderNotSameAsUser = val;
    }

    public get holderNotSameAsUser(): boolean{
        return this._holderNotSameAsUser;
    } 

    //#endregion holderNotSameAsUser 

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

    //#region possiblePoliceDepartments

    @observable private _possiblePoliceDepartments: PoliceDepartment[] = null;

    @TypeSystem.propertyArrayDecorator(PoliceDepartment)
    public set possiblePoliceDepartments(val: PoliceDepartment[]){
        this._possiblePoliceDepartments = val;
    }

    public get possiblePoliceDepartments(): PoliceDepartment[]{
        return this._possiblePoliceDepartments;
    } 

    //#endregion possiblePoliceDepartments 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponVM', moduleContext.moduleName)
export class ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM')
    public set circumstances(val: ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOfDuplicateOfDrivingLicenseControlCouponDataVM extends BaseDataModel { 

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

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region currentAddress

    @observable private _currentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set currentAddress(val: PersonAddress){
        this._currentAddress = val;
    }

    public get currentAddress(): PersonAddress{
        return this._currentAddress;
    } 

    //#endregion currentAddress 

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

    //#region couponDuplicateIssuensReason

    @observable private _couponDuplicateIssuensReason: CouponDuplicateIssuensReason = null;

    @TypeSystem.propertyDecorator(CouponDuplicateIssuensReason)
    public set couponDuplicateIssuensReason(val: CouponDuplicateIssuensReason){
        this._couponDuplicateIssuensReason = val;
    }

    public get couponDuplicateIssuensReason(): CouponDuplicateIssuensReason{
        return this._couponDuplicateIssuensReason;
    } 

    //#endregion couponDuplicateIssuensReason 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesVM', moduleContext.moduleName)
export class ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM')
    public set circumstances(val: ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOfControlCouponForDriverWithNoPenaltiesDataVM extends BaseDataModel { 

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

    //#region permanentAddress

    @observable private _permanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set permanentAddress(val: PersonAddress){
        this._permanentAddress = val;
    }

    public get permanentAddress(): PersonAddress{
        return this._permanentAddress;
    } 

    //#endregion permanentAddress 

    //#region currentAddress

    @observable private _currentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set currentAddress(val: PersonAddress){
        this._currentAddress = val;
    }

    public get currentAddress(): PersonAddress{
        return this._currentAddress;
    } 

    //#endregion currentAddress 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForTerminationOfVehicleRegistrationVM', moduleContext.moduleName)
export class ApplicationForTerminationOfVehicleRegistrationVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: VehicleDataRequestVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataRequestVM')
    public set circumstances(val: VehicleDataRequestVM){
        this._circumstances = val;
    }

    public get circumstances(): VehicleDataRequestVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfDuplicateOfVehicleRegistrationCertificateVM', moduleContext.moduleName)
export class ApplicationForIssuingOfDuplicateOfVehicleRegistrationCertificateVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: VehicleDataRequestVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataRequestVM')
    public set circumstances(val: VehicleDataRequestVM){
        this._circumstances = val;
    }

    public get circumstances(): VehicleDataRequestVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleDataRequestVM', moduleContext.moduleName)
export class VehicleDataRequestVM extends BaseDataModel { 

    //#region registrationData

    @observable private _registrationData: VehicleRegistrationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationData')
    public set registrationData(val: VehicleRegistrationData){
        this._registrationData = val;
    }

    public get registrationData(): VehicleRegistrationData{
        return this._registrationData;
    } 

    //#endregion registrationData 

    //#region ownersCollection

    @observable private _ownersCollection: OwnersCollectionVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'OwnersCollectionVM')
    public set ownersCollection(val: OwnersCollectionVM){
        this._ownersCollection = val;
    }

    public get ownersCollection(): OwnersCollectionVM{
        return this._ownersCollection;
    } 

    //#endregion ownersCollection 

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

    //#region reasons

    @observable private _reasons: AISKATReason[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'AISKATReason')
    public set reasons(val: AISKATReason[]){
        this._reasons = val;
    }

    public get reasons(): AISKATReason[]{
        return this._reasons;
    } 

    //#endregion reasons 

    //#region phone

    @observable private _phone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phone(val: string){
        this._phone = val;
    }

    public get phone(): string{
        return this._phone;
    } 

    //#endregion phone 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AISKATReason', moduleContext.moduleName)
export class AISKATReason extends BaseDataModel { 

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

@TypeSystem.typeDecorator('OwnersCollectionVM', moduleContext.moduleName)
export class OwnersCollectionVM extends BaseDataModel { 

    //#region owners

    @observable private _owners: OwnerVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'OwnerVM')
    public set owners(val: OwnerVM[]){
        this._owners = val;
    }

    public get owners(): OwnerVM[]{
        return this._owners;
    } 

    //#endregion owners 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('OwnerVM', moduleContext.moduleName)
export class OwnerVM extends BaseDataModel { 

    //#region type

    @observable private _type: PersonEntityChoiceType = null;

    @TypeSystem.propertyDecorator(PersonEntityChoiceType)
    public set type(val: PersonEntityChoiceType){
        this._type = val;
    }

    public get type(): PersonEntityChoiceType{
        return this._type;
    } 

    //#endregion type 

    //#region personIdentifier

    @observable private _personIdentifier: PersonIdentifier = null;

    @TypeSystem.propertyDecorator(PersonIdentifier)
    public set personIdentifier(val: PersonIdentifier){
        this._personIdentifier = val;
    }

    public get personIdentifier(): PersonIdentifier{
        return this._personIdentifier;
    } 

    //#endregion personIdentifier 

    //#region entityIdentifier

    @observable private _entityIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set entityIdentifier(val: string){
        this._entityIdentifier = val;
    }

    public get entityIdentifier(): string{
        return this._entityIdentifier;
    } 

    //#endregion entityIdentifier 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingTempraryTraficPermitForVehicleVM', moduleContext.moduleName)
export class ApplicationForIssuingTempraryTraficPermitForVehicleVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: VehicleDataRequestVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataRequestVM')
    public set circumstances(val: VehicleDataRequestVM){
        this._circumstances = val;
    }

    public get circumstances(): VehicleDataRequestVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForTemporaryTakingOffRoadOfVehicleVM', moduleContext.moduleName)
export class ApplicationForTemporaryTakingOffRoadOfVehicleVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: VehicleDataRequestVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataRequestVM')
    public set circumstances(val: VehicleDataRequestVM){
        this._circumstances = val;
    }

    public get circumstances(): VehicleDataRequestVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForCommissioningTemporarilySuspendedVehicleVM', moduleContext.moduleName)
export class ApplicationForCommissioningTemporarilySuspendedVehicleVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: VehicleDataRequestVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleDataRequestVM')
    public set circumstances(val: VehicleDataRequestVM){
        this._circumstances = val;
    }

    public get circumstances(): VehicleDataRequestVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleVM', moduleContext.moduleName)
export class ReportForVehicleVM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURI = null;

    @TypeSystem.propertyDecorator(AISCaseURI)
    public set aisCaseURI(val: AISCaseURI){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURI{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicant = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicant)
    public set electronicServiceApplicant(val: ElectronicServiceApplicant){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicant{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region rpssVehicleData

    @observable private _rpssVehicleData: ReportForVehicleRPSSVehicleDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForVehicleRPSSVehicleDataVM')
    public set rpssVehicleData(val: ReportForVehicleRPSSVehicleDataVM){
        this._rpssVehicleData = val;
    }

    public get rpssVehicleData(): ReportForVehicleRPSSVehicleDataVM{
        return this._rpssVehicleData;
    } 

    //#endregion rpssVehicleData 

    //#region eucarisData

    @observable private _eucarisData: ReportForVehicleEUCARISData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForVehicleEUCARISData')
    public set eucarisData(val: ReportForVehicleEUCARISData){
        this._eucarisData = val;
    }

    public get eucarisData(): ReportForVehicleEUCARISData{
        return this._eucarisData;
    } 

    //#endregion eucarisData 

    //#region owners

    @observable private _owners: ReportForVehicleOwnersVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForVehicleOwnersVM')
    public set owners(val: ReportForVehicleOwnersVM){
        this._owners = val;
    }

    public get owners(): ReportForVehicleOwnersVM{
        return this._owners;
    } 

    //#endregion owners 

    //#region guaranteeFund

    @observable private _guaranteeFund: ReportForVehicleGuaranteeFund = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForVehicleGuaranteeFund')
    public set guaranteeFund(val: ReportForVehicleGuaranteeFund){
        this._guaranteeFund = val;
    }

    public get guaranteeFund(): ReportForVehicleGuaranteeFund{
        return this._guaranteeFund;
    } 

    //#endregion guaranteeFund 

    //#region periodicTechnicalCheck

    @observable private _periodicTechnicalCheck: ReportForVehiclePeriodicTechnicalCheck = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForVehiclePeriodicTechnicalCheck')
    public set periodicTechnicalCheck(val: ReportForVehiclePeriodicTechnicalCheck){
        this._periodicTechnicalCheck = val;
    }

    public get periodicTechnicalCheck(): ReportForVehiclePeriodicTechnicalCheck{
        return this._periodicTechnicalCheck;
    } 

    //#endregion periodicTechnicalCheck 

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

    //#region xmlDigitalSignature

    @observable private _xmlDigitalSignature: XMLDigitalSignature = null;

    @TypeSystem.propertyDecorator(XMLDigitalSignature)
    public set xmlDigitalSignature(val: XMLDigitalSignature){
        this._xmlDigitalSignature = val;
    }

    public get xmlDigitalSignature(): XMLDigitalSignature{
        return this._xmlDigitalSignature;
    } 

    //#endregion xmlDigitalSignature 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleRPSSVehicleDataVM', moduleContext.moduleName)
export class ReportForVehicleRPSSVehicleDataVM extends BaseDataModel { 

    //#region vehicleRegistrationData

    @observable private _vehicleRegistrationData: VehicleRegistrationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationData')
    public set vehicleRegistrationData(val: VehicleRegistrationData){
        this._vehicleRegistrationData = val;
    }

    public get vehicleRegistrationData(): VehicleRegistrationData{
        return this._vehicleRegistrationData;
    } 

    //#endregion vehicleRegistrationData 

    //#region owners

    @observable private _owners: ReportForVehicleRPSSVehicleDataOwnersVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ReportForVehicleRPSSVehicleDataOwnersVM')
    public set owners(val: ReportForVehicleRPSSVehicleDataOwnersVM[]){
        this._owners = val;
    }

    public get owners(): ReportForVehicleRPSSVehicleDataOwnersVM[]{
        return this._owners;
    } 

    //#endregion owners 

    //#region statuses

    @observable private _statuses: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set statuses(val: Status[]){
        this._statuses = val;
    }

    public get statuses(): Status[]{
        return this._statuses;
    } 

    //#endregion statuses 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleRPSSVehicleDataOwnersVM', moduleContext.moduleName)
export class ReportForVehicleRPSSVehicleDataOwnersVM extends BaseDataModel { 

    //#region entityData

    @observable private _entityData: EntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'EntityDataVM')
    public set entityData(val: EntityDataVM){
        this._entityData = val;
    }

    public get entityData(): EntityDataVM{
        return this._entityData;
    } 

    //#endregion entityData 

    //#region personData

    @observable private _personData: PersonDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonDataVM')
    public set personData(val: PersonDataVM){
        this._personData = val;
    }

    public get personData(): PersonDataVM{
        return this._personData;
    } 

    //#endregion personData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleOwnersVM', moduleContext.moduleName)
export class ReportForVehicleOwnersVM extends BaseDataModel { 

    //#region entityDataItems

    @observable private _entityDataItems: EntityData[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'EntityData')
    public set entityDataItems(val: EntityData[]){
        this._entityDataItems = val;
    }

    public get entityDataItems(): EntityData[]{
        return this._entityDataItems;
    } 

    //#endregion entityDataItems 

    //#region personDataItems

    @observable private _personDataItems: PersonData[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonData')
    public set personDataItems(val: PersonData[]){
        this._personDataItems = val;
    }

    public get personDataItems(): PersonData[]{
        return this._personDataItems;
    } 

    //#endregion personDataItems 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehiclePeriodicTechnicalCheck', moduleContext.moduleName)
export class ReportForVehiclePeriodicTechnicalCheck extends BaseDataModel { 

    //#region nextInspectionDate

    @observable private _nextInspectionDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set nextInspectionDate(val: moment.Moment){
        this._nextInspectionDate = val;
    }

    public get nextInspectionDate(): moment.Moment{
        return this._nextInspectionDate;
    } 

    //#endregion nextInspectionDate 

    //#region nextInspectionDateSpecified

    @observable private _nextInspectionDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set nextInspectionDateSpecified(val: boolean){
        this._nextInspectionDateSpecified = val;
    }

    public get nextInspectionDateSpecified(): boolean{
        return this._nextInspectionDateSpecified;
    } 

    //#endregion nextInspectionDateSpecified 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleGuaranteeFund', moduleContext.moduleName)
export class ReportForVehicleGuaranteeFund extends BaseDataModel { 

    //#region policyValidTo

    @observable private _policyValidTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set policyValidTo(val: moment.Moment){
        this._policyValidTo = val;
    }

    public get policyValidTo(): moment.Moment{
        return this._policyValidTo;
    } 

    //#endregion policyValidTo 

    //#region policyValidToSpecified

    @observable private _policyValidToSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set policyValidToSpecified(val: boolean){
        this._policyValidToSpecified = val;
    }

    public get policyValidToSpecified(): boolean{
        return this._policyValidToSpecified;
    } 

    //#endregion policyValidToSpecified 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForVehicleRPSSVehicleDataOwners', moduleContext.moduleName)
export class ReportForVehicleRPSSVehicleDataOwners extends BaseDataModel { 

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

@TypeSystem.typeDecorator('ReportForVehicleEUCARISData', moduleContext.moduleName)
export class ReportForVehicleEUCARISData extends BaseDataModel { 

    //#region canUseCertificateForRegistration

    @observable private _canUseCertificateForRegistration: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set canUseCertificateForRegistration(val: boolean){
        this._canUseCertificateForRegistration = val;
    }

    public get canUseCertificateForRegistration(): boolean{
        return this._canUseCertificateForRegistration;
    } 

    //#endregion canUseCertificateForRegistration 

    //#region canUseCertificateForRegistrationSpecified

    @observable private _canUseCertificateForRegistrationSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set canUseCertificateForRegistrationSpecified(val: boolean){
        this._canUseCertificateForRegistrationSpecified = val;
    }

    public get canUseCertificateForRegistrationSpecified(): boolean{
        return this._canUseCertificateForRegistrationSpecified;
    } 

    //#endregion canUseCertificateForRegistrationSpecified 

    //#region statuses

    @observable private _statuses: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set statuses(val: Status[]){
        this._statuses = val;
    }

    public get statuses(): Status[]{
        return this._statuses;
    } 

    //#endregion statuses 

    //#region colorCode

    @observable private _colorCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set colorCode(val: string){
        this._colorCode = val;
    }

    public get colorCode(): string{
        return this._colorCode;
    } 

    //#endregion colorCode 

    //#region colorName

    @observable private _colorName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set colorName(val: string){
        this._colorName = val;
    }

    public get colorName(): string{
        return this._colorName;
    } 

    //#endregion colorName 

    //#region additionalInfo

    @observable private _additionalInfo: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalInfo(val: string){
        this._additionalInfo = val;
    }

    public get additionalInfo(): string{
        return this._additionalInfo;
    } 

    //#endregion additionalInfo 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeclarationForLostSRPPSVM', moduleContext.moduleName)
export class DeclarationForLostSRPPSVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: DeclarationForLostSRPPSData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DeclarationForLostSRPPSData')
    public set circumstances(val: DeclarationForLostSRPPSData){
        this._circumstances = val;
    }

    public get circumstances(): DeclarationForLostSRPPSData{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DeclarationForLostSRPPSData', moduleContext.moduleName)
export class DeclarationForLostSRPPSData extends BaseDataModel { 

    //#region declaration

    @observable private _declaration: string = null;

    @TypeSystem.propertyDecorator('string')
    public set declaration(val: string){
        this._declaration = val;
    }

    public get declaration(): string{
        return this._declaration;
    } 

    //#endregion declaration 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesVM', moduleContext.moduleName)
export class ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM')
    public set circumstances(val: ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM', moduleContext.moduleName)
export class ApplicationForMountingOfRegistrationPlatesAndOrIdentificationOfVehiclesDataVM extends BaseDataModel { 

    //#region policeDepartment

    @observable private _policeDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set policeDepartment(val: PoliceDepartment){
        this._policeDepartment = val;
    }

    public get policeDepartment(): PoliceDepartment{
        return this._policeDepartment;
    } 

    //#endregion policeDepartment 

    //#region applicationText

    @observable private _applicationText: string = null;

    @TypeSystem.propertyDecorator('string')
    public set applicationText(val: string){
        this._applicationText = val;
    }

    public get applicationText(): string{
        return this._applicationText;
    } 

    //#endregion applicationText 

    //#region phone

    @observable private _phone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phone(val: string){
        this._phone = val;
    }

    public get phone(): string{
        return this._phone;
    } 

    //#endregion phone 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM', moduleContext.moduleName)
export class ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM')
    public set circumstances(val: ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    //#region merchantData

    @observable private _merchantData: MerchantData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'MerchantData')
    public set merchantData(val: MerchantData){
        this._merchantData = val;
    }

    public get merchantData(): MerchantData{
        return this._merchantData;
    } 

    //#endregion merchantData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVM extends BaseDataModel { 

    //#region temporaryPlatesCount

    @observable private _temporaryPlatesCount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set temporaryPlatesCount(val: number){
        this._temporaryPlatesCount = val;
    }

    public get temporaryPlatesCount(): number{
        return this._temporaryPlatesCount;
    } 

    //#endregion temporaryPlatesCount 

    //#region operationalNewVehicleMakes

    @observable private _operationalNewVehicleMakes: string = null;

    @TypeSystem.propertyDecorator('string')
    public set operationalNewVehicleMakes(val: string){
        this._operationalNewVehicleMakes = val;
    }

    public get operationalNewVehicleMakes(): string{
        return this._operationalNewVehicleMakes;
    } 

    //#endregion operationalNewVehicleMakes 

    //#region operationalSecondHandVehicleMakes

    @observable private _operationalSecondHandVehicleMakes: string = null;

    @TypeSystem.propertyDecorator('string')
    public set operationalSecondHandVehicleMakes(val: string){
        this._operationalSecondHandVehicleMakes = val;
    }

    public get operationalSecondHandVehicleMakes(): string{
        return this._operationalSecondHandVehicleMakes;
    } 

    //#endregion operationalSecondHandVehicleMakes 

    //#region vehicleDealershipAddress

    @observable private _vehicleDealershipAddress: EntityAddress = null;

    @TypeSystem.propertyDecorator(EntityAddress)
    public set vehicleDealershipAddress(val: EntityAddress){
        this._vehicleDealershipAddress = val;
    }

    public get vehicleDealershipAddress(): EntityAddress{
        return this._vehicleDealershipAddress;
    } 

    //#endregion vehicleDealershipAddress 

    //#region authorizedPersons

    @observable private _authorizedPersons: AuthorizedPersonCollectionVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AuthorizedPersonCollectionVM')
    public set authorizedPersons(val: AuthorizedPersonCollectionVM){
        this._authorizedPersons = val;
    }

    public get authorizedPersons(): AuthorizedPersonCollectionVM{
        return this._authorizedPersons;
    } 

    //#endregion authorizedPersons 

    //#region phone

    @observable private _phone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phone(val: string){
        this._phone = val;
    }

    public get phone(): string{
        return this._phone;
    } 

    //#endregion phone 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AuthorizedPersonCollectionVM', moduleContext.moduleName)
export class AuthorizedPersonCollectionVM extends BaseDataModel { 

    //#region items

    @observable private _items: ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons')
    public set items(val: ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons[]){
        this._items = val;
    }

    public get items(): ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons[]{
        return this._items;
    } 

    //#endregion items 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons', moduleContext.moduleName)
export class ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataAuthorizedPersons extends BaseDataModel { 

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

    //#region identifier

    @observable private _identifier: PersonIdentifier = null;

    @TypeSystem.propertyDecorator(PersonIdentifier)
    public set identifier(val: PersonIdentifier){
        this._identifier = val;
    }

    public get identifier(): PersonIdentifier{
        return this._identifier;
    } 

    //#endregion identifier 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('MerchantData', moduleContext.moduleName)
export class MerchantData extends BaseDataModel { 

    //#region companyCase

    @observable private _companyCase: MerchantDataCompanyCase = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'MerchantDataCompanyCase')
    public set companyCase(val: MerchantDataCompanyCase){
        this._companyCase = val;
    }

    public get companyCase(): MerchantDataCompanyCase{
        return this._companyCase;
    } 

    //#endregion companyCase 

    //#region entityManagementAddress

    @observable private _entityManagementAddress: EntityAddress = null;

    @TypeSystem.propertyDecorator(EntityAddress)
    public set entityManagementAddress(val: EntityAddress){
        this._entityManagementAddress = val;
    }

    public get entityManagementAddress(): EntityAddress{
        return this._entityManagementAddress;
    } 

    //#endregion entityManagementAddress 

    //#region correspondingAddress

    @observable private _correspondingAddress: EntityAddress = null;

    @TypeSystem.propertyDecorator(EntityAddress)
    public set correspondingAddress(val: EntityAddress){
        this._correspondingAddress = val;
    }

    public get correspondingAddress(): EntityAddress{
        return this._correspondingAddress;
    } 

    //#endregion correspondingAddress 

    //#region phone

    @observable private _phone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phone(val: string){
        this._phone = val;
    }

    public get phone(): string{
        return this._phone;
    } 

    //#endregion phone 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('MerchantDataCompanyCase', moduleContext.moduleName)
export class MerchantDataCompanyCase extends BaseDataModel { 

    //#region number

    @observable private _number: string = null;

    @TypeSystem.propertyDecorator('string')
    public set number(val: string){
        this._number = val;
    }

    public get number(): string{
        return this._number;
    } 

    //#endregion number 

    //#region courtName

    @observable private _courtName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set courtName(val: string){
        this._courtName = val;
    }

    public get courtName(): string{
        return this._courtName;
    } 

    //#endregion courtName 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForChangeRegistrationOfVehiclesVM', moduleContext.moduleName)
export class ApplicationForChangeRegistrationOfVehiclesVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForChangeRegistrationOfVehiclesDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForChangeRegistrationOfVehiclesDataVM')
    public set circumstances(val: ApplicationForChangeRegistrationOfVehiclesDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForChangeRegistrationOfVehiclesDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForChangeRegistrationOfVehiclesDataVM', moduleContext.moduleName)
export class ApplicationForChangeRegistrationOfVehiclesDataVM extends BaseDataModel { 

    //#region vehicleOwnershipChangeType

    @observable private _vehicleOwnershipChangeType: VehicleOwnershipChangeType = null;

    @TypeSystem.propertyDecorator(VehicleOwnershipChangeType)
    public set vehicleOwnershipChangeType(val: VehicleOwnershipChangeType){
        this._vehicleOwnershipChangeType = val;
    }

    public get vehicleOwnershipChangeType(): VehicleOwnershipChangeType{
        return this._vehicleOwnershipChangeType;
    } 

    //#endregion vehicleOwnershipChangeType 

    //#region changeRegistrationWithBarterVM

    @observable private _changeRegistrationWithBarterVM: VehicleRegistrationChangeWithBarterVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationChangeWithBarterVM')
    public set changeRegistrationWithBarterVM(val: VehicleRegistrationChangeWithBarterVM){
        this._changeRegistrationWithBarterVM = val;
    }

    public get changeRegistrationWithBarterVM(): VehicleRegistrationChangeWithBarterVM{
        return this._changeRegistrationWithBarterVM;
    } 

    //#endregion changeRegistrationWithBarterVM 

    //#region changeRegistrationWithPersonOrEntity

    @observable private _changeRegistrationWithPersonOrEntity: VehicleRegistrationChangeVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationChangeVM')
    public set changeRegistrationWithPersonOrEntity(val: VehicleRegistrationChangeVM){
        this._changeRegistrationWithPersonOrEntity = val;
    }

    public get changeRegistrationWithPersonOrEntity(): VehicleRegistrationChangeVM{
        return this._changeRegistrationWithPersonOrEntity;
    } 

    //#endregion changeRegistrationWithPersonOrEntity 

    //#region notaryIdentityNumber

    @observable private _notaryIdentityNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set notaryIdentityNumber(val: string){
        this._notaryIdentityNumber = val;
    }

    public get notaryIdentityNumber(): string{
        return this._notaryIdentityNumber;
    } 

    //#endregion notaryIdentityNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleRegistrationChangeWithBarterVM', moduleContext.moduleName)
export class VehicleRegistrationChangeWithBarterVM extends BaseDataModel { 

    //#region firstVehicleData

    @observable private _firstVehicleData: VehicleRegistrationDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationDataVM')
    public set firstVehicleData(val: VehicleRegistrationDataVM){
        this._firstVehicleData = val;
    }

    public get firstVehicleData(): VehicleRegistrationDataVM{
        return this._firstVehicleData;
    } 

    //#endregion firstVehicleData 

    //#region secondVehicleData

    @observable private _secondVehicleData: VehicleRegistrationDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationDataVM')
    public set secondVehicleData(val: VehicleRegistrationDataVM){
        this._secondVehicleData = val;
    }

    public get secondVehicleData(): VehicleRegistrationDataVM{
        return this._secondVehicleData;
    } 

    //#endregion secondVehicleData 

    //#region firstVehicleOwners

    @observable private _firstVehicleOwners: VehicleOwnerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerDataVM')
    public set firstVehicleOwners(val: VehicleOwnerDataVM[]){
        this._firstVehicleOwners = val;
    }

    public get firstVehicleOwners(): VehicleOwnerDataVM[]{
        return this._firstVehicleOwners;
    } 

    //#endregion firstVehicleOwners 

    //#region secondVehicleOwners

    @observable private _secondVehicleOwners: VehicleOwnerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerDataVM')
    public set secondVehicleOwners(val: VehicleOwnerDataVM[]){
        this._secondVehicleOwners = val;
    }

    public get secondVehicleOwners(): VehicleOwnerDataVM[]{
        return this._secondVehicleOwners;
    } 

    //#endregion secondVehicleOwners 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('VehicleRegistrationChangeVM', moduleContext.moduleName)
export class VehicleRegistrationChangeVM extends BaseDataModel { 

    //#region vehicleRegistrationData

    @observable private _vehicleRegistrationData: VehicleRegistrationDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationDataVM')
    public set vehicleRegistrationData(val: VehicleRegistrationDataVM[]){
        this._vehicleRegistrationData = val;
    }

    public get vehicleRegistrationData(): VehicleRegistrationDataVM[]{
        return this._vehicleRegistrationData;
    } 

    //#endregion vehicleRegistrationData 

    //#region currentOwners

    @observable private _currentOwners: VehicleOwnerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleOwnerDataVM')
    public set currentOwners(val: VehicleOwnerDataVM[]){
        this._currentOwners = val;
    }

    public get currentOwners(): VehicleOwnerDataVM[]{
        return this._currentOwners;
    } 

    //#endregion currentOwners 

    //#region newOwners

    @observable private _newOwners: VehicleBuyerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'VehicleBuyerDataVM')
    public set newOwners(val: VehicleBuyerDataVM[]){
        this._newOwners = val;
    }

    public get newOwners(): VehicleBuyerDataVM[]{
        return this._newOwners;
    } 

    //#endregion newOwners 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForInitialVehicleRegistrationVM', moduleContext.moduleName)
export class ApplicationForInitialVehicleRegistrationVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForInitialVehicleRegistrationDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForInitialVehicleRegistrationDataVM')
    public set circumstances(val: ApplicationForInitialVehicleRegistrationDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForInitialVehicleRegistrationDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForInitialVehicleRegistrationDataVM', moduleContext.moduleName)
export class ApplicationForInitialVehicleRegistrationDataVM extends BaseDataModel { 

    //#region vehicleIdentificationData

    @observable private _vehicleIdentificationData: ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData')
    public set vehicleIdentificationData(val: ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData){
        this._vehicleIdentificationData = val;
    }

    public get vehicleIdentificationData(): ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData{
        return this._vehicleIdentificationData;
    } 

    //#endregion vehicleIdentificationData 

    //#region ownersCollection

    @observable private _ownersCollection: ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM')
    public set ownersCollection(val: ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM){
        this._ownersCollection = val;
    }

    public get ownersCollection(): ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM{
        return this._ownersCollection;
    } 

    //#endregion ownersCollection 

    //#region ownerOfRegistrationCoupon

    @observable private _ownerOfRegistrationCoupon: InitialVehicleRegistrationUserOrOwnerOfSRMPSVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'InitialVehicleRegistrationUserOrOwnerOfSRMPSVM')
    public set ownerOfRegistrationCoupon(val: InitialVehicleRegistrationUserOrOwnerOfSRMPSVM){
        this._ownerOfRegistrationCoupon = val;
    }

    public get ownerOfRegistrationCoupon(): InitialVehicleRegistrationUserOrOwnerOfSRMPSVM{
        return this._ownerOfRegistrationCoupon;
    } 

    //#endregion ownerOfRegistrationCoupon 

    //#region otherUserVehicleRepresentative

    @observable private _otherUserVehicleRepresentative: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set otherUserVehicleRepresentative(val: boolean){
        this._otherUserVehicleRepresentative = val;
    }

    public get otherUserVehicleRepresentative(): boolean{
        return this._otherUserVehicleRepresentative;
    } 

    //#endregion otherUserVehicleRepresentative 

    //#region vehicleUserData

    @observable private _vehicleUserData: InitialVehicleRegistrationUserOrOwnerOfSRMPSVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'InitialVehicleRegistrationUserOrOwnerOfSRMPSVM')
    public set vehicleUserData(val: InitialVehicleRegistrationUserOrOwnerOfSRMPSVM){
        this._vehicleUserData = val;
    }

    public get vehicleUserData(): InitialVehicleRegistrationUserOrOwnerOfSRMPSVM{
        return this._vehicleUserData;
    } 

    //#endregion vehicleUserData 

    //#region phone

    @observable private _phone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phone(val: string){
        this._phone = val;
    }

    public get phone(): string{
        return this._phone;
    } 

    //#endregion phone 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData', moduleContext.moduleName)
export class ApplicationForInitialVehicleRegistrationDataVehicleIdentificationData extends BaseDataModel { 

    //#region identificationNumber

    @observable private _identificationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationNumber(val: string){
        this._identificationNumber = val;
    }

    public get identificationNumber(): string{
        return this._identificationNumber;
    } 

    //#endregion identificationNumber 

    //#region approvalCountryCode

    @observable private _approvalCountryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set approvalCountryCode(val: string){
        this._approvalCountryCode = val;
    }

    public get approvalCountryCode(): string{
        return this._approvalCountryCode;
    } 

    //#endregion approvalCountryCode 

    //#region importCountryCode

    @observable private _importCountryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set importCountryCode(val: string){
        this._importCountryCode = val;
    }

    public get importCountryCode(): string{
        return this._importCountryCode;
    } 

    //#endregion importCountryCode 

    //#region importCountryName

    @observable private _importCountryName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set importCountryName(val: string){
        this._importCountryName = val;
    }

    public get importCountryName(): string{
        return this._importCountryName;
    } 

    //#endregion importCountryName 

    //#region colorCode

    @observable private _colorCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set colorCode(val: string){
        this._colorCode = val;
    }

    public get colorCode(): string{
        return this._colorCode;
    } 

    //#endregion colorCode 

    //#region colorName

    @observable private _colorName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set colorName(val: string){
        this._colorName = val;
    }

    public get colorName(): string{
        return this._colorName;
    } 

    //#endregion colorName 

    //#region additionalInfo

    @observable private _additionalInfo: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalInfo(val: string){
        this._additionalInfo = val;
    }

    public get additionalInfo(): string{
        return this._additionalInfo;
    } 

    //#endregion additionalInfo 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM', moduleContext.moduleName)
export class ApplicationForInitialVehicleRegistrationDataOwnersCollectionVM extends BaseDataModel { 

    //#region items

    @observable private _items: InitialVehicleRegistrationOwnerDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'InitialVehicleRegistrationOwnerDataVM')
    public set items(val: InitialVehicleRegistrationOwnerDataVM[]){
        this._items = val;
    }

    public get items(): InitialVehicleRegistrationOwnerDataVM[]{
        return this._items;
    } 

    //#endregion items 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('InitialVehicleRegistrationUserOrOwnerOfSRMPSVM', moduleContext.moduleName)
export class InitialVehicleRegistrationUserOrOwnerOfSRMPSVM extends OwnerVM { 

    //#region isVehicleRepresentative

    @observable private _isVehicleRepresentative: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isVehicleRepresentative(val: boolean){
        this._isVehicleRepresentative = val;
    }

    public get isVehicleRepresentative(): boolean{
        return this._isVehicleRepresentative;
    } 

    //#endregion isVehicleRepresentative 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('InitialVehicleRegistrationOwnerDataVM', moduleContext.moduleName)
export class InitialVehicleRegistrationOwnerDataVM extends InitialVehicleRegistrationUserOrOwnerOfSRMPSVM { 

    //#region isOwnerOfVehicleRegistrationCoupon

    @observable private _isOwnerOfVehicleRegistrationCoupon: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isOwnerOfVehicleRegistrationCoupon(val: boolean){
        this._isOwnerOfVehicleRegistrationCoupon = val;
    }

    public get isOwnerOfVehicleRegistrationCoupon(): boolean{
        return this._isOwnerOfVehicleRegistrationCoupon;
    } 

    //#endregion isOwnerOfVehicleRegistrationCoupon 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsVM', moduleContext.moduleName)
export class ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM')
    public set circumstances(val: ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM', moduleContext.moduleName)
export class ApplicationForIssuingVehicleRegistrationNumberWithCombinationSixLettersOrDigitsDataVM extends BaseDataModel { 

    //#region authorPoliceDepartment

    @observable private _authorPoliceDepartment: PoliceDepartment = null;

    @TypeSystem.propertyDecorator(PoliceDepartment)
    public set authorPoliceDepartment(val: PoliceDepartment){
        this._authorPoliceDepartment = val;
    }

    public get authorPoliceDepartment(): PoliceDepartment{
        return this._authorPoliceDepartment;
    } 

    //#endregion authorPoliceDepartment 

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

    //#region platesTypeCode

    @observable private _platesTypeCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set platesTypeCode(val: string){
        this._platesTypeCode = val;
    }

    public get platesTypeCode(): string{
        return this._platesTypeCode;
    } 

    //#endregion platesTypeCode 

    //#region platesTypeName

    @observable private _platesTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set platesTypeName(val: string){
        this._platesTypeName = val;
    }

    public get platesTypeName(): string{
        return this._platesTypeName;
    } 

    //#endregion platesTypeName 

    //#region platesContentType

    @observable private _platesContentType: PlatesContentTypes = null;

    @TypeSystem.propertyDecorator(PlatesContentTypes)
    public set platesContentType(val: PlatesContentTypes){
        this._platesContentType = val;
    }

    public get platesContentType(): PlatesContentTypes{
        return this._platesContentType;
    } 

    //#endregion platesContentType 

    //#region aiskatVehicleTypeCode

    @observable private _aiskatVehicleTypeCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set aiskatVehicleTypeCode(val: string){
        this._aiskatVehicleTypeCode = val;
    }

    public get aiskatVehicleTypeCode(): string{
        return this._aiskatVehicleTypeCode;
    } 

    //#endregion aiskatVehicleTypeCode 

    //#region aiskatVehicleTypeName

    @observable private _aiskatVehicleTypeName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set aiskatVehicleTypeName(val: string){
        this._aiskatVehicleTypeName = val;
    }

    public get aiskatVehicleTypeName(): string{
        return this._aiskatVehicleTypeName;
    } 

    //#endregion aiskatVehicleTypeName 

    //#region rectangularPlatesCount

    @observable private _rectangularPlatesCount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set rectangularPlatesCount(val: number){
        this._rectangularPlatesCount = val;
    }

    public get rectangularPlatesCount(): number{
        return this._rectangularPlatesCount;
    } 

    //#endregion rectangularPlatesCount 

    //#region squarePlatesCount

    @observable private _squarePlatesCount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set squarePlatesCount(val: number){
        this._squarePlatesCount = val;
    }

    public get squarePlatesCount(): number{
        return this._squarePlatesCount;
    } 

    //#endregion squarePlatesCount 

    //#region provinceCode

    @observable private _provinceCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set provinceCode(val: string){
        this._provinceCode = val;
    }

    public get provinceCode(): string{
        return this._provinceCode;
    } 

    //#endregion provinceCode 

    //#region wishedRegistrationNumber

    @observable private _wishedRegistrationNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set wishedRegistrationNumber(val: string){
        this._wishedRegistrationNumber = val;
    }

    public get wishedRegistrationNumber(): string{
        return this._wishedRegistrationNumber;
    } 

    //#endregion wishedRegistrationNumber 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('NotificationForTemporaryRegistrationPlatesVM', moduleContext.moduleName)
export class NotificationForTemporaryRegistrationPlatesVM extends SigningDocumentFormVMBase<OfficialVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(AISCaseURIVM)
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

    @TypeSystem.propertyDecorator(ElectronicServiceProviderBasicDataVM)
    public set electronicServiceProviderBasicData(val: ElectronicServiceProviderBasicDataVM){
        this._electronicServiceProviderBasicData = val;
    }

    public get electronicServiceProviderBasicData(): ElectronicServiceProviderBasicDataVM{
        return this._electronicServiceProviderBasicData;
    } 

    //#endregion electronicServiceProviderBasicData 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicantVM)
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region entityManagementAddress

    @observable private _entityManagementAddress: EntityAddress = null;

    @TypeSystem.propertyDecorator(EntityAddress)
    public set entityManagementAddress(val: EntityAddress){
        this._entityManagementAddress = val;
    }

    public get entityManagementAddress(): EntityAddress{
        return this._entityManagementAddress;
    } 

    //#endregion entityManagementAddress 

    //#region countOfSetsOfTemporaryPlates

    @observable private _countOfSetsOfTemporaryPlates: number = null;

    @TypeSystem.propertyDecorator('number')
    public set countOfSetsOfTemporaryPlates(val: number){
        this._countOfSetsOfTemporaryPlates = val;
    }

    public get countOfSetsOfTemporaryPlates(): number{
        return this._countOfSetsOfTemporaryPlates;
    } 

    //#endregion countOfSetsOfTemporaryPlates 

    //#region countOfSetsOfTemporaryPlatesText

    @observable private _countOfSetsOfTemporaryPlatesText: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countOfSetsOfTemporaryPlatesText(val: string){
        this._countOfSetsOfTemporaryPlatesText = val;
    }

    public get countOfSetsOfTemporaryPlatesText(): string{
        return this._countOfSetsOfTemporaryPlatesText;
    } 

    //#endregion countOfSetsOfTemporaryPlatesText 

    //#region registrationNumbersForEachSet

    @observable private _registrationNumbersForEachSet: string = null;

    @TypeSystem.propertyDecorator('string')
    public set registrationNumbersForEachSet(val: string){
        this._registrationNumbersForEachSet = val;
    }

    public get registrationNumbersForEachSet(): string{
        return this._registrationNumbersForEachSet;
    } 

    //#endregion registrationNumbersForEachSet 

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

    //#region xmlDigitalSignature

    @observable private _xmlDigitalSignature: XMLDigitalSignature = null;

    @TypeSystem.propertyDecorator(XMLDigitalSignature)
    public set xmlDigitalSignature(val: XMLDigitalSignature){
        this._xmlDigitalSignature = val;
    }

    public get xmlDigitalSignature(): XMLDigitalSignature{
        return this._xmlDigitalSignature;
    } 

    //#endregion xmlDigitalSignature 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2VM', moduleContext.moduleName)
export class ReportForChangingOwnershipV2VM extends SigningDocumentFormVMBase<DigitalSignatureContainerVM> { 

    //#region aisCaseURI

    @observable private _aisCaseURI: AISCaseURIVM = null;

    @TypeSystem.propertyDecorator(AISCaseURIVM)
    public set aisCaseURI(val: AISCaseURIVM){
        this._aisCaseURI = val;
    }

    public get aisCaseURI(): AISCaseURIVM{
        return this._aisCaseURI;
    } 

    //#endregion aisCaseURI 

    //#region electronicServiceApplicant

    @observable private _electronicServiceApplicant: ElectronicServiceApplicantVM = null;

    @TypeSystem.propertyDecorator(ElectronicServiceApplicantVM)
    public set electronicServiceApplicant(val: ElectronicServiceApplicantVM){
        this._electronicServiceApplicant = val;
    }

    public get electronicServiceApplicant(): ElectronicServiceApplicantVM{
        return this._electronicServiceApplicant;
    } 

    //#endregion electronicServiceApplicant 

    //#region vehicleRegistrationChangeWithBarter

    @observable private _vehicleRegistrationChangeWithBarter: ReportForChangingOwnershipV2ChangeWithBarterVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2ChangeWithBarterVM')
    public set vehicleRegistrationChangeWithBarter(val: ReportForChangingOwnershipV2ChangeWithBarterVM){
        this._vehicleRegistrationChangeWithBarter = val;
    }

    public get vehicleRegistrationChangeWithBarter(): ReportForChangingOwnershipV2ChangeWithBarterVM{
        return this._vehicleRegistrationChangeWithBarter;
    } 

    //#endregion vehicleRegistrationChangeWithBarter 

    //#region vehicleRegistrationChange

    @observable private _vehicleRegistrationChange: ReportForChangingOwnershipV2ChangeVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2ChangeVM')
    public set vehicleRegistrationChange(val: ReportForChangingOwnershipV2ChangeVM[]){
        this._vehicleRegistrationChange = val;
    }

    public get vehicleRegistrationChange(): ReportForChangingOwnershipV2ChangeVM[]{
        return this._vehicleRegistrationChange;
    } 

    //#endregion vehicleRegistrationChange 

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

    //#region xmlDigitalSignature

    @observable private _xmlDigitalSignature: XMLDigitalSignature = null;

    @TypeSystem.propertyDecorator(XMLDigitalSignature)
    public set xmlDigitalSignature(val: XMLDigitalSignature){
        this._xmlDigitalSignature = val;
    }

    public get xmlDigitalSignature(): XMLDigitalSignature{
        return this._xmlDigitalSignature;
    } 

    //#endregion xmlDigitalSignature 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2ChangeWithBarterVM', moduleContext.moduleName)
export class ReportForChangingOwnershipV2ChangeWithBarterVM extends BaseDataModel { 

    //#region firstVehicleData

    @observable private _firstVehicleData: ReportForChangingOwnershipV2VehicleDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2VehicleDataVM')
    public set firstVehicleData(val: ReportForChangingOwnershipV2VehicleDataVM){
        this._firstVehicleData = val;
    }

    public get firstVehicleData(): ReportForChangingOwnershipV2VehicleDataVM{
        return this._firstVehicleData;
    } 

    //#endregion firstVehicleData 

    //#region secondVehicleData

    @observable private _secondVehicleData: ReportForChangingOwnershipV2VehicleDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2VehicleDataVM')
    public set secondVehicleData(val: ReportForChangingOwnershipV2VehicleDataVM){
        this._secondVehicleData = val;
    }

    public get secondVehicleData(): ReportForChangingOwnershipV2VehicleDataVM{
        return this._secondVehicleData;
    } 

    //#endregion secondVehicleData 

    //#region firstVehicleOwners

    @observable private _firstVehicleOwners: PersonEntityDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set firstVehicleOwners(val: PersonEntityDataVM[]){
        this._firstVehicleOwners = val;
    }

    public get firstVehicleOwners(): PersonEntityDataVM[]{
        return this._firstVehicleOwners;
    } 

    //#endregion firstVehicleOwners 

    //#region secondVehicleOwners

    @observable private _secondVehicleOwners: PersonEntityDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set secondVehicleOwners(val: PersonEntityDataVM[]){
        this._secondVehicleOwners = val;
    }

    public get secondVehicleOwners(): PersonEntityDataVM[]{
        return this._secondVehicleOwners;
    } 

    //#endregion secondVehicleOwners 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2ChangeVM', moduleContext.moduleName)
export class ReportForChangingOwnershipV2ChangeVM extends BaseDataModel { 

    //#region vehicleRegistrationData

    @observable private _vehicleRegistrationData: ReportForChangingOwnershipV2VehicleDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2VehicleDataVM')
    public set vehicleRegistrationData(val: ReportForChangingOwnershipV2VehicleDataVM){
        this._vehicleRegistrationData = val;
    }

    public get vehicleRegistrationData(): ReportForChangingOwnershipV2VehicleDataVM{
        return this._vehicleRegistrationData;
    } 

    //#endregion vehicleRegistrationData 

    //#region currentOwners

    @observable private _currentOwners: PersonEntityDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set currentOwners(val: PersonEntityDataVM[]){
        this._currentOwners = val;
    }

    public get currentOwners(): PersonEntityDataVM[]{
        return this._currentOwners;
    } 

    //#endregion currentOwners 

    //#region newOwners

    @observable private _newOwners: PersonEntityDataVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PersonEntityDataVM')
    public set newOwners(val: PersonEntityDataVM[]){
        this._newOwners = val;
    }

    public get newOwners(): PersonEntityDataVM[]{
        return this._newOwners;
    } 

    //#endregion newOwners 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck', moduleContext.moduleName)
export class ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck extends BaseDataModel { 

    //#region nextInspectionDate

    @observable private _nextInspectionDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set nextInspectionDate(val: moment.Moment){
        this._nextInspectionDate = val;
    }

    public get nextInspectionDate(): moment.Moment{
        return this._nextInspectionDate;
    } 

    //#endregion nextInspectionDate 

    //#region nextInspectionDateSpecified

    @observable private _nextInspectionDateSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set nextInspectionDateSpecified(val: boolean){
        this._nextInspectionDateSpecified = val;
    }

    public get nextInspectionDateSpecified(): boolean{
        return this._nextInspectionDateSpecified;
    } 

    //#endregion nextInspectionDateSpecified 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2VehicleDataGuaranteeFund', moduleContext.moduleName)
export class ReportForChangingOwnershipV2VehicleDataGuaranteeFund extends BaseDataModel { 

    //#region policyValidTo

    @observable private _policyValidTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set policyValidTo(val: moment.Moment){
        this._policyValidTo = val;
    }

    public get policyValidTo(): moment.Moment{
        return this._policyValidTo;
    } 

    //#endregion policyValidTo 

    //#region policyValidToSpecified

    @observable private _policyValidToSpecified: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set policyValidToSpecified(val: boolean){
        this._policyValidToSpecified = val;
    }

    public get policyValidToSpecified(): boolean{
        return this._policyValidToSpecified;
    } 

    //#endregion policyValidToSpecified 

    //#region status

    @observable private _status: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set status(val: Status[]){
        this._status = val;
    }

    public get status(): Status[]{
        return this._status;
    } 

    //#endregion status 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ReportForChangingOwnershipV2VehicleDataVM', moduleContext.moduleName)
export class ReportForChangingOwnershipV2VehicleDataVM extends BaseDataModel { 

    //#region registrationData

    @observable private _registrationData: VehicleRegistrationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'VehicleRegistrationData')
    public set registrationData(val: VehicleRegistrationData){
        this._registrationData = val;
    }

    public get registrationData(): VehicleRegistrationData{
        return this._registrationData;
    } 

    //#endregion registrationData 

    //#region localTaxes

    @observable private _localTaxes: Status[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Status')
    public set localTaxes(val: Status[]){
        this._localTaxes = val;
    }

    public get localTaxes(): Status[]{
        return this._localTaxes;
    } 

    //#endregion localTaxes 

    //#region periodicTechnicalCheck

    @observable private _periodicTechnicalCheck: ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck')
    public set periodicTechnicalCheck(val: ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck){
        this._periodicTechnicalCheck = val;
    }

    public get periodicTechnicalCheck(): ReportForChangingOwnershipV2VehicleDataPeriodicTechnicalCheck{
        return this._periodicTechnicalCheck;
    } 

    //#endregion periodicTechnicalCheck 

    //#region guaranteeFund

    @observable private _guaranteeFund: ReportForChangingOwnershipV2VehicleDataGuaranteeFund = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ReportForChangingOwnershipV2VehicleDataGuaranteeFund')
    public set guaranteeFund(val: ReportForChangingOwnershipV2VehicleDataGuaranteeFund){
        this._guaranteeFund = val;
    }

    public get guaranteeFund(): ReportForChangingOwnershipV2VehicleDataGuaranteeFund{
        return this._guaranteeFund;
    } 

    //#endregion guaranteeFund 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 
