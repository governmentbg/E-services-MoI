

// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import {ApplicationFormVMBase, PoliceDepartment, EntityAddress, PersonAddress, DocumentMustServeToVM,  ElectronicServiceApplicantVM, OfficialVM, DocumentURI, AISCaseURIVM, SigningDocumentFormVMBase, ElectronicServiceProviderBasicDataVM } from 'eau-documents'


export enum EntityOrPerson { 

    Entity = 0,

    Person = 1,

}
TypeSystem.registerEnumInfo(EntityOrPerson , 'EntityOrPerson' , moduleContext.moduleName)
export enum CertificateType { 

    Issuing = 0,

    Renewing = 1,

}
TypeSystem.registerEnumInfo(CertificateType , 'CertificateType' , moduleContext.moduleName)

@TypeSystem.typeDecorator('ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesVM', moduleContext.moduleName)
export class ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM')
    public set circumstances(val: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesDataVM extends BaseDataModel { 

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

    //#region entityOrPerson

    @observable private _entityOrPerson: EntityOrPerson = null;

    @TypeSystem.propertyDecorator(EntityOrPerson)
    public set entityOrPerson(val: EntityOrPerson){
        this._entityOrPerson = val;
    }

    public get entityOrPerson(): EntityOrPerson{
        return this._entityOrPerson;
    } 

    //#endregion entityOrPerson 

    //#region applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData

    @observable private _applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM')
    public set applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData(val: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM){
        this._applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData = val;
    }

    public get applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData(): ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM{
        return this._applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData;
    } 

    //#endregion applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityData 

    //#region applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData

    @observable private _applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM')
    public set applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData(val: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM){
        this._applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData = val;
    }

    public get applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData(): ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM{
        return this._applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData;
    } 

    //#endregion applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonData 

    //#region workPhone

    @observable private _workPhone: string = null;

    @TypeSystem.propertyDecorator('string')
    public set workPhone(val: string){
        this._workPhone = val;
    }

    public get workPhone(): string{
        return this._workPhone;
    } 

    //#endregion workPhone 

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

    //#region personDataPermanentAddress

    @observable private _personDataPermanentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set personDataPermanentAddress(val: PersonAddress){
        this._personDataPermanentAddress = val;
    }

    public get personDataPermanentAddress(): PersonAddress{
        return this._personDataPermanentAddress;
    } 

    //#endregion personDataPermanentAddress 

    //#region personDataCurrentAddress

    @observable private _personDataCurrentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set personDataCurrentAddress(val: PersonAddress){
        this._personDataCurrentAddress = val;
    }

    public get personDataCurrentAddress(): PersonAddress{
        return this._personDataCurrentAddress;
    } 

    //#endregion personDataCurrentAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM extends BaseDataModel { 

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

    //#region certificateType

    @observable private _certificateType: CertificateType = null;

    @TypeSystem.propertyDecorator(CertificateType)
    public set certificateType(val: CertificateType){
        this._certificateType = val;
    }

    public get certificateType(): CertificateType{
        return this._certificateType;
    } 

    //#endregion certificateType 

    //#region diplomaNumber

    @observable private _diplomaNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set diplomaNumber(val: string){
        this._diplomaNumber = val;
    }

    public get diplomaNumber(): string{
        return this._diplomaNumber;
    } 

    //#endregion diplomaNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM', moduleContext.moduleName)
export class ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM extends BaseDataModel { 

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

    //#region declaredScopeOfCertification

    @observable private _declaredScopeOfCertification: string = null;

    @TypeSystem.propertyDecorator('string')
    public set declaredScopeOfCertification(val: string){
        this._declaredScopeOfCertification = val;
    }

    public get declaredScopeOfCertification(): string{
        return this._declaredScopeOfCertification;
    } 

    //#endregion declaredScopeOfCertification 

    //#region availableCertifiedPersonnel

    @observable private _availableCertifiedPersonnel: CertifiedPersonelVM[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'CertifiedPersonelVM')
    public set availableCertifiedPersonnel(val: CertifiedPersonelVM[]){
        this._availableCertifiedPersonnel = val;
    }

    public get availableCertifiedPersonnel(): CertifiedPersonelVM[]{
        return this._availableCertifiedPersonnel;
    } 

    //#endregion availableCertifiedPersonnel 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CertifiedPersonelVM', moduleContext.moduleName)
export class CertifiedPersonelVM extends BaseDataModel { 

    //#region personFirstName

    @observable private _personFirstName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set personFirstName(val: string){
        this._personFirstName = val;
    }

    public get personFirstName(): string{
        return this._personFirstName;
    } 

    //#endregion personFirstName 

    //#region personLastName

    @observable private _personLastName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set personLastName(val: string){
        this._personLastName = val;
    }

    public get personLastName(): string{
        return this._personLastName;
    } 

    //#endregion personLastName 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM')
    public set circumstances(val: ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentsOfIncurredAndOtherAccidentsAndProvideInformationOnTheActivityCarriedOutDataVM extends BaseDataModel { 

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

    //#region corespondingAddress

    @observable private _corespondingAddress: EntityAddress = null;

    @TypeSystem.propertyDecorator(EntityAddress)
    public set corespondingAddress(val: EntityAddress){
        this._corespondingAddress = val;
    }

    public get corespondingAddress(): EntityAddress{
        return this._corespondingAddress;
    } 

    //#endregion corespondingAddress 

    //#region phoneNumber

    @observable private _phoneNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set phoneNumber(val: string){
        this._phoneNumber = val;
    }

    public get phoneNumber(): string{
        return this._phoneNumber;
    } 

    //#endregion phoneNumber 

    //#region documentCertifyingTheAccidentOccurredOrOtherInformation

    @observable private _documentCertifyingTheAccidentOccurredOrOtherInformation: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentCertifyingTheAccidentOccurredOrOtherInformation(val: string){
        this._documentCertifyingTheAccidentOccurredOrOtherInformation = val;
    }

    public get documentCertifyingTheAccidentOccurredOrOtherInformation(): string{
        return this._documentCertifyingTheAccidentOccurredOrOtherInformation;
    } 

    //#endregion documentCertifyingTheAccidentOccurredOrOtherInformation 

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

    //#region documentMustServeTo

    @observable private _documentMustServeTo: DocumentMustServeToVM = null;

    @TypeSystem.propertyDecorator(DocumentMustServeToVM)
    public set documentMustServeTo(val: DocumentMustServeToVM){
        this._documentMustServeTo = val;
    }

    public get documentMustServeTo(): DocumentMustServeToVM{
        return this._documentMustServeTo;
    } 

    //#endregion documentMustServeTo 

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

    //#region includeInformation107

    @observable private _includeInformation107: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set includeInformation107(val: boolean){
        this._includeInformation107 = val;
    }

    public get includeInformation107(): boolean{
        return this._includeInformation107;
    } 

    //#endregion includeInformation107 

    //#region includeInformation133

    @observable private _includeInformation133: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set includeInformation133(val: boolean){
        this._includeInformation133 = val;
    }

    public get includeInformation133(): boolean{
        return this._includeInformation133;
    } 

    //#endregion includeInformation133 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CertificateForAccidentVM', moduleContext.moduleName)
export class CertificateForAccidentVM extends SigningDocumentFormVMBase<OfficialVM> { 

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

    //#region certificateForAccidentHeader

    @observable private _certificateForAccidentHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateForAccidentHeader(val: string){
        this._certificateForAccidentHeader = val;
    }

    public get certificateForAccidentHeader(): string{
        return this._certificateForAccidentHeader;
    } 

    //#endregion certificateForAccidentHeader 

    //#region certificateForAccidentData

    @observable private _certificateForAccidentData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateForAccidentData(val: string){
        this._certificateForAccidentData = val;
    }

    public get certificateForAccidentData(): string{
        return this._certificateForAccidentData;
    } 

    //#endregion certificateForAccidentData 

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

    //#region documentMustServeTo

    @observable private _documentMustServeTo: DocumentMustServeToVM = null;

    @TypeSystem.propertyDecorator(DocumentMustServeToVM)
    public set documentMustServeTo(val: DocumentMustServeToVM){
        this._documentMustServeTo = val;
    }

    public get documentMustServeTo(): DocumentMustServeToVM{
        return this._documentMustServeTo;
    } 

    //#endregion documentMustServeTo 

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

@TypeSystem.typeDecorator('CertificateToWorkWithFluorinatedGreenhouseGassesVM', moduleContext.moduleName)
export class CertificateToWorkWithFluorinatedGreenhouseGassesVM extends SigningDocumentFormVMBase<OfficialVM> { 

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

    //#region certificateToWorkWithFluorinatedGreenhouseGassesHeader

    @observable private _certificateToWorkWithFluorinatedGreenhouseGassesHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateToWorkWithFluorinatedGreenhouseGassesHeader(val: string){
        this._certificateToWorkWithFluorinatedGreenhouseGassesHeader = val;
    }

    public get certificateToWorkWithFluorinatedGreenhouseGassesHeader(): string{
        return this._certificateToWorkWithFluorinatedGreenhouseGassesHeader;
    } 

    //#endregion certificateToWorkWithFluorinatedGreenhouseGassesHeader 

    //#region certificateValidity

    @observable private _certificateValidity: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateValidity(val: string){
        this._certificateValidity = val;
    }

    public get certificateValidity(): string{
        return this._certificateValidity;
    } 

    //#endregion certificateValidity 

    //#region certificateToWorkWithFluorinatedGreenhouseGassesGround

    @observable private _certificateToWorkWithFluorinatedGreenhouseGassesGround: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateToWorkWithFluorinatedGreenhouseGassesGround(val: string){
        this._certificateToWorkWithFluorinatedGreenhouseGassesGround = val;
    }

    public get certificateToWorkWithFluorinatedGreenhouseGassesGround(): string{
        return this._certificateToWorkWithFluorinatedGreenhouseGassesGround;
    } 

    //#endregion certificateToWorkWithFluorinatedGreenhouseGassesGround 

    //#region certificateToWorkWithFluorinatedGreenhouseGassesActivities

    @observable private _certificateToWorkWithFluorinatedGreenhouseGassesActivities: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateToWorkWithFluorinatedGreenhouseGassesActivities(val: string){
        this._certificateToWorkWithFluorinatedGreenhouseGassesActivities = val;
    }

    public get certificateToWorkWithFluorinatedGreenhouseGassesActivities(): string{
        return this._certificateToWorkWithFluorinatedGreenhouseGassesActivities;
    } 

    //#endregion certificateToWorkWithFluorinatedGreenhouseGassesActivities 

    //#region entityData

    @observable private _entityData: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM')
    public set entityData(val: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM){
        this._entityData = val;
    }

    public get entityData(): ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesEntityDataVM{
        return this._entityData;
    } 

    //#endregion entityData 

    //#region personData

    @observable private _personData: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM')
    public set personData(val: ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM){
        this._personData = val;
    }

    public get personData(): ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesPersonDataVM{
        return this._personData;
    } 

    //#endregion personData 

    //#region certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround

    @observable private _certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround(val: string){
        this._certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround = val;
    }

    public get certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround(): string{
        return this._certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround;
    } 

    //#endregion certificateToWorkWithFluorinatedGreenhouseGassesPersonsGround 

    //#region identificationPhoto

    @observable private _identificationPhoto: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationPhoto(val: string){
        this._identificationPhoto = val;
    }

    public get identificationPhoto(): string{
        return this._identificationPhoto;
    } 

    //#endregion identificationPhoto 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 


