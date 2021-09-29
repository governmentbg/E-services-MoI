

// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { ApplicationFormVMBase, GenderData, PlaceOfBirthAbroad, ForeignCitizenNames, PersonNames, DocumentMustServeToVM, PersonalInformationVM, CitizenshipVM, BIDPersonalIdentificationDocumentReceivePlace, IdentityDocumentType, PersonAddress, IdentityDocumentForeignCitizenBasicData, PoliceDepartment, BIDMaritalStatus, PersonIdentifier, SigningDocumentFormVMBase, OfficialVM,  DocumentURI, AISCaseURIVM, ElectronicServiceProviderBasicDataVM, ElectronicServiceApplicantVM} from 'eau-documents'
import { TravelDocumentVM } from './TravelDocumentVM' 


export enum AddressForIssuing { 

    PermanentAddress = 0,

    CurrentAddress = 1,

}
TypeSystem.registerEnumInfo(AddressForIssuing , 'AddressForIssuing' , moduleContext.moduleName)
export enum IssueDocumentFor { 

    IssuedBulgarianIdentityDocumentsInPeriod = 1,

    OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments = 2,

}
TypeSystem.registerEnumInfo(IssueDocumentFor , 'IssueDocumentFor' , moduleContext.moduleName)
export enum BIDEyesColor { 

    Brown = 0,

    Colorful = 1,

    Blue = 2,

    Gray = 3,

    Green = 4,

    Black = 5,

}
TypeSystem.registerEnumInfo(BIDEyesColor , 'BIDEyesColor' , moduleContext.moduleName)

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingDocumentDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentDataVM')
    public set circumstances(val: ApplicationForIssuingDocumentDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingDocumentDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentDataVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentDataVM extends BaseDataModel { 

    //#region documentToBeIssuedFor

    @observable private _documentToBeIssuedFor: DocumentToBeIssuedForVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'DocumentToBeIssuedForVM')
    public set documentToBeIssuedFor(val: DocumentToBeIssuedForVM){
        this._documentToBeIssuedFor = val;
    }

    public get documentToBeIssuedFor(): DocumentToBeIssuedForVM{
        return this._documentToBeIssuedFor;
    } 

    //#endregion documentToBeIssuedFor 

    //#region addressForIssuing

    @observable private _addressForIssuing: AddressForIssuing = null;

    @TypeSystem.propertyDecorator(AddressForIssuing)
    public set addressForIssuing(val: AddressForIssuing){
        this._addressForIssuing = val;
    }

    public get addressForIssuing(): AddressForIssuing{
        return this._addressForIssuing;
    } 

    //#endregion addressForIssuing 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentificationPhotoAndSignatureVM', moduleContext.moduleName)
export class IdentificationPhotoAndSignatureVM extends BaseDataModel { 

    //#region identificationSignature

    @observable private _identificationSignature: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identificationSignature(val: string){
        this._identificationSignature = val;
    }

    public get identificationSignature(): string{
        return this._identificationSignature;
    } 

    //#endregion identificationSignature 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignIdentityBasicDataVM', moduleContext.moduleName)
export class ForeignIdentityBasicDataVM extends BaseDataModel { 

    //#region foreignCitizenData

    @observable private _foreignCitizenData: ForeignCitizenDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignCitizenDataVM')
    public set foreignCitizenData(val: ForeignCitizenDataVM){
        this._foreignCitizenData = val;
    }

    public get foreignCitizenData(): ForeignCitizenDataVM{
        return this._foreignCitizenData;
    } 

    //#endregion foreignCitizenData 

    //#region egn

    @observable private _egn: string = null;

    @TypeSystem.propertyDecorator('string')
    public set egn(val: string){
        this._egn = val;
    }

    public get egn(): string{
        return this._egn;
    } 

    //#endregion egn 

    //#region lnCh

    @observable private _lnCh: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lnCh(val: string){
        this._lnCh = val;
    }

    public get lnCh(): string{
        return this._lnCh;
    } 

    //#endregion lnCh 

    //#region eyesColor

    @observable private _eyesColor: BIDEyesColor = null;

    @TypeSystem.propertyDecorator(BIDEyesColor)
    public set eyesColor(val: BIDEyesColor){
        this._eyesColor = val;
    }

    public get eyesColor(): BIDEyesColor{
        return this._eyesColor;
    } 

    //#endregion eyesColor 

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

    //#region height

    @observable private _height: number = null;

    @TypeSystem.propertyDecorator('number')
    public set height(val: number){
        this._height = val;
    }

    public get height(): number{
        return this._height;
    } 

    //#endregion height 

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

@TypeSystem.typeDecorator('ForeignerParentDataVM', moduleContext.moduleName)
export class ForeignerParentDataVM extends BaseDataModel { 

    //#region unknownParent

    @observable private _unknownParent: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set unknownParent(val: boolean){
        this._unknownParent = val;
    }

    public get unknownParent(): boolean{
        return this._unknownParent;
    } 

    //#endregion unknownParent 

    //#region names

    @observable private _names: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(ForeignCitizenNames)
    public set names(val: ForeignCitizenNames){
        this._names = val;
    }

    public get names(): ForeignCitizenNames{
        return this._names;
    } 

    //#endregion names 

    //#region birthDate

    @observable private _birthDate: string = null;

    @TypeSystem.propertyDecorator('string')
    public set birthDate(val: string){
        this._birthDate = val;
    }

    public get birthDate(): string{
        return this._birthDate;
    } 

    //#endregion birthDate 

    //#region egn

    @observable private _egn: string = null;

    @TypeSystem.propertyDecorator('string')
    public set egn(val: string){
        this._egn = val;
    }

    public get egn(): string{
        return this._egn;
    } 

    //#endregion egn 

    //#region lnCh

    @observable private _lnCh: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lnCh(val: string){
        this._lnCh = val;
    }

    public get lnCh(): string{
        return this._lnCh;
    } 

    //#endregion lnCh 

    //#region citizenship

    @observable private _citizenship: CitizenshipVM = null;

    @TypeSystem.propertyDecorator(CitizenshipVM)
    public set citizenship(val: CitizenshipVM){
        this._citizenship = val;
    }

    public get citizenship(): CitizenshipVM{
        return this._citizenship;
    } 

    //#endregion citizenship 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignerSpouseDataVM', moduleContext.moduleName)
export class ForeignerSpouseDataVM extends BaseDataModel { 

    //#region names

    @observable private _names: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(ForeignCitizenNames)
    public set names(val: ForeignCitizenNames){
        this._names = val;
    }

    public get names(): ForeignCitizenNames{
        return this._names;
    } 

    //#endregion names 

    //#region birthDate

    @observable private _birthDate: string = null;

    @TypeSystem.propertyDecorator('string')
    public set birthDate(val: string){
        this._birthDate = val;
    }

    public get birthDate(): string{
        return this._birthDate;
    } 

    //#endregion birthDate 

    //#region egn

    @observable private _egn: string = null;

    @TypeSystem.propertyDecorator('string')
    public set egn(val: string){
        this._egn = val;
    }

    public get egn(): string{
        return this._egn;
    } 

    //#endregion egn 

    //#region lnCh

    @observable private _lnCh: string = null;

    @TypeSystem.propertyDecorator('string')
    public set lnCh(val: string){
        this._lnCh = val;
    }

    public get lnCh(): string{
        return this._lnCh;
    } 

    //#endregion lnCh 

    //#region citizenship

    @observable private _citizenship: CitizenshipVM = null;

    @TypeSystem.propertyDecorator(CitizenshipVM)
    public set citizenship(val: CitizenshipVM){
        this._citizenship = val;
    }

    public get citizenship(): CitizenshipVM{
        return this._citizenship;
    } 

    //#endregion citizenship 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonDataVM', moduleContext.moduleName)
export class PersonDataVM extends BaseDataModel { 

    //#region identificationDocuments

    @observable private _identificationDocuments: IdentityDocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(IdentityDocumentType)
    public set identificationDocuments(val: IdentityDocumentType[]){
        this._identificationDocuments = val;
    }

    public get identificationDocuments(): IdentityDocumentType[]{
        return this._identificationDocuments;
    } 

    //#endregion identificationDocuments 

    //#region personIdentification

    @observable private _personIdentification: PersonIdentificationData = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonIdentificationData')
    public set personIdentification(val: PersonIdentificationData){
        this._personIdentification = val;
    }

    public get personIdentification(): PersonIdentificationData{
        return this._personIdentification;
    } 

    //#endregion personIdentification 

    //#region placeOfBirth

    @observable private _placeOfBirth: string = null;

    @TypeSystem.propertyDecorator('string')
    public set placeOfBirth(val: string){
        this._placeOfBirth = val;
    }

    public get placeOfBirth(): string{
        return this._placeOfBirth;
    } 

    //#endregion placeOfBirth 

    //#region eyesColor

    @observable private _eyesColor: BIDEyesColor = null;

    @TypeSystem.propertyDecorator(BIDEyesColor)
    public set eyesColor(val: BIDEyesColor){
        this._eyesColor = val;
    }

    public get eyesColor(): BIDEyesColor{
        return this._eyesColor;
    } 

    //#endregion eyesColor 

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

    //#region height

    @observable private _height: number = null;

    @TypeSystem.propertyDecorator('number')
    public set height(val: number){
        this._height = val;
    }

    public get height(): number{
        return this._height;
    } 

    //#endregion height 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ParentDataVM', moduleContext.moduleName)
export class ParentDataVM extends BaseDataModel { 

    //#region unknownParent

    @observable private _unknownParent: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set unknownParent(val: boolean){
        this._unknownParent = val;
    }

    public get unknownParent(): boolean{
        return this._unknownParent;
    } 

    //#endregion unknownParent 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('SpouseDataVM', moduleContext.moduleName)
export class SpouseDataVM extends BaseDataModel { 

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

    //#region pid

    @observable private _pid: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pid(val: string){
        this._pid = val;
    }

    public get pid(): string{
        return this._pid;
    } 

    //#endregion pid 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaVM', moduleContext.moduleName)
export class ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaVM extends ApplicationFormVMBase { 

    //#region identificationPhotoAndSignature

    @observable private _identificationPhotoAndSignature: IdentificationPhotoAndSignatureVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IdentificationPhotoAndSignatureVM')
    public set identificationPhotoAndSignature(val: IdentificationPhotoAndSignatureVM){
        this._identificationPhotoAndSignature = val;
    }

    public get identificationPhotoAndSignature(): IdentificationPhotoAndSignatureVM{
        return this._identificationPhotoAndSignature;
    } 

    //#endregion identificationPhotoAndSignature 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM')
    public set circumstances(val: ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM', moduleContext.moduleName)
export class ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM extends BaseDataModel { 

    //#region identityDocumentsType

    @observable private _identityDocumentsType: IdentityDocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(IdentityDocumentType)
    public set identityDocumentsType(val: IdentityDocumentType[]){
        this._identityDocumentsType = val;
    }

    public get identityDocumentsType(): IdentityDocumentType[]{
        return this._identityDocumentsType;
    } 

    //#endregion identityDocumentsType 

    //#region foreignIdentityBasicData

    @observable private _foreignIdentityBasicData: ForeignIdentityBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignIdentityBasicDataVM')
    public set foreignIdentityBasicData(val: ForeignIdentityBasicDataVM){
        this._foreignIdentityBasicData = val;
    }

    public get foreignIdentityBasicData(): ForeignIdentityBasicDataVM{
        return this._foreignIdentityBasicData;
    } 

    //#endregion foreignIdentityBasicData 

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

    //#region presentAddress

    @observable private _presentAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set presentAddress(val: PersonAddress){
        this._presentAddress = val;
    }

    public get presentAddress(): PersonAddress{
        return this._presentAddress;
    } 

    //#endregion presentAddress 

    //#region previousIdentityDocument

    @observable private _previousIdentityDocument: IdentityDocumentForeignCitizenBasicData = null;

    @TypeSystem.propertyDecorator(IdentityDocumentForeignCitizenBasicData)
    public set previousIdentityDocument(val: IdentityDocumentForeignCitizenBasicData){
        this._previousIdentityDocument = val;
    }

    public get previousIdentityDocument(): IdentityDocumentForeignCitizenBasicData{
        return this._previousIdentityDocument;
    } 

    //#endregion previousIdentityDocument 

    //#region travelDocument

    @observable private _travelDocument: TravelDocumentVM = null;

    @TypeSystem.propertyDecorator(TravelDocumentVM)
    public set travelDocument(val: TravelDocumentVM){
        this._travelDocument = val;
    }

    public get travelDocument(): TravelDocumentVM{
        return this._travelDocument;
    } 

    //#endregion travelDocument 

    //#region newTravelDocument

    @observable private _newTravelDocument: TravelDocumentVM = null;

    @TypeSystem.propertyDecorator(TravelDocumentVM)
    public set newTravelDocument(val: TravelDocumentVM){
        this._newTravelDocument = val;
    }

    public get newTravelDocument(): TravelDocumentVM{
        return this._newTravelDocument;
    } 

    //#endregion newTravelDocument 

    //#region abroadAddress

    @observable private _abroadAddress: string = null;

    @TypeSystem.propertyDecorator('string')
    public set abroadAddress(val: string){
        this._abroadAddress = val;
    }

    public get abroadAddress(): string{
        return this._abroadAddress;
    } 

    //#endregion abroadAddress 

    //#region motherData

    @observable private _motherData: ForeignerParentDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignerParentDataVM')
    public set motherData(val: ForeignerParentDataVM){
        this._motherData = val;
    }

    public get motherData(): ForeignerParentDataVM{
        return this._motherData;
    } 

    //#endregion motherData 

    //#region fatherData

    @observable private _fatherData: ForeignerParentDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignerParentDataVM')
    public set fatherData(val: ForeignerParentDataVM){
        this._fatherData = val;
    }

    public get fatherData(): ForeignerParentDataVM{
        return this._fatherData;
    } 

    //#endregion fatherData 

    //#region spouseData

    @observable private _spouseData: ForeignerSpouseDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignerSpouseDataVM')
    public set spouseData(val: ForeignerSpouseDataVM){
        this._spouseData = val;
    }

    public get spouseData(): ForeignerSpouseDataVM{
        return this._spouseData;
    } 

    //#endregion spouseData 

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

    //#region hasDocumentForDisabilities

    @observable private _hasDocumentForDisabilities: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasDocumentForDisabilities(val: boolean){
        this._hasDocumentForDisabilities = val;
    }

    public get hasDocumentForDisabilities(): boolean{
        return this._hasDocumentForDisabilities;
    } 

    //#endregion hasDocumentForDisabilities 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensVM', moduleContext.moduleName)
export class ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensVM extends ApplicationFormVMBase { 

    //#region identificationPhotoAndSignature

    @observable private _identificationPhotoAndSignature: IdentificationPhotoAndSignatureVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IdentificationPhotoAndSignatureVM')
    public set identificationPhotoAndSignature(val: IdentificationPhotoAndSignatureVM){
        this._identificationPhotoAndSignature = val;
    }

    public get identificationPhotoAndSignature(): IdentificationPhotoAndSignatureVM{
        return this._identificationPhotoAndSignature;
    } 

    //#endregion identificationPhotoAndSignature 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM')
    public set circumstances(val: ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM', moduleContext.moduleName)
export class ApplicationForIssuanceOfPersonalDocumentsOfBulgarianCitizensDataVM extends BaseDataModel { 

    //#region identificationDocuments

    @observable private _identificationDocuments: IdentityDocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(IdentityDocumentType)
    public set identificationDocuments(val: IdentityDocumentType[]){
        this._identificationDocuments = val;
    }

    public get identificationDocuments(): IdentityDocumentType[]{
        return this._identificationDocuments;
    } 

    //#endregion identificationDocuments 

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

    //#region receivePlace

    @observable private _receivePlace: BIDPersonalIdentificationDocumentReceivePlace = null;

    @TypeSystem.propertyDecorator(BIDPersonalIdentificationDocumentReceivePlace)
    public set receivePlace(val: BIDPersonalIdentificationDocumentReceivePlace){
        this._receivePlace = val;
    }

    public get receivePlace(): BIDPersonalIdentificationDocumentReceivePlace{
        return this._receivePlace;
    } 

    //#endregion receivePlace 

    //#region motherData

    @observable private _motherData: ParentDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ParentDataVM')
    public set motherData(val: ParentDataVM){
        this._motherData = val;
    }

    public get motherData(): ParentDataVM{
        return this._motherData;
    } 

    //#endregion motherData 

    //#region fatherData

    @observable private _fatherData: ParentDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ParentDataVM')
    public set fatherData(val: ParentDataVM){
        this._fatherData = val;
    }

    public get fatherData(): ParentDataVM{
        return this._fatherData;
    } 

    //#endregion fatherData 

    //#region spouseData

    @observable private _spouseData: SpouseDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'SpouseDataVM')
    public set spouseData(val: SpouseDataVM){
        this._spouseData = val;
    }

    public get spouseData(): SpouseDataVM{
        return this._spouseData;
    } 

    //#endregion spouseData 

    //#region abroadAddress

    @observable private _abroadAddress: string = null;

    @TypeSystem.propertyDecorator('string')
    public set abroadAddress(val: string){
        this._abroadAddress = val;
    }

    public get abroadAddress(): string{
        return this._abroadAddress;
    } 

    //#endregion abroadAddress 

    //#region hasDocumentForDisabilities

    @observable private _hasDocumentForDisabilities: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasDocumentForDisabilities(val: boolean){
        this._hasDocumentForDisabilities = val;
    }

    public get hasDocumentForDisabilities(): boolean{
        return this._hasDocumentForDisabilities;
    } 

    //#endregion hasDocumentForDisabilities 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensVM', moduleContext.moduleName)
export class ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM')
    public set circumstances(val: ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    //#region identificationPhotoAndSignature

    @observable private _identificationPhotoAndSignature: IdentificationPhotoAndSignatureVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IdentificationPhotoAndSignatureVM')
    public set identificationPhotoAndSignature(val: IdentificationPhotoAndSignatureVM){
        this._identificationPhotoAndSignature = val;
    }

    public get identificationPhotoAndSignature(): IdentificationPhotoAndSignatureVM{
        return this._identificationPhotoAndSignature;
    } 

    //#endregion identificationPhotoAndSignature 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM', moduleContext.moduleName)
export class ApplicationForIssuingResidencePermitAndDrivingLicenseForEuropeanCitizensDataVM extends BaseDataModel { 

    //#region identityDocumentsType

    @observable private _identityDocumentsType: IdentityDocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(IdentityDocumentType)
    public set identityDocumentsType(val: IdentityDocumentType[]){
        this._identityDocumentsType = val;
    }

    public get identityDocumentsType(): IdentityDocumentType[]{
        return this._identityDocumentsType;
    } 

    //#endregion identityDocumentsType 

    //#region foreignIdentityBasicData

    @observable private _foreignIdentityBasicData: ForeignIdentityBasicDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ForeignIdentityBasicDataVM')
    public set foreignIdentityBasicData(val: ForeignIdentityBasicDataVM){
        this._foreignIdentityBasicData = val;
    }

    public get foreignIdentityBasicData(): ForeignIdentityBasicDataVM{
        return this._foreignIdentityBasicData;
    } 

    //#endregion foreignIdentityBasicData 

    //#region address

    @observable private _address: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set address(val: PersonAddress){
        this._address = val;
    }

    public get address(): PersonAddress{
        return this._address;
    } 

    //#endregion address 

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

    //#region travelDocument

    @observable private _travelDocument: TravelDocumentVM = null;

    @TypeSystem.propertyDecorator(TravelDocumentVM)
    public set travelDocument(val: TravelDocumentVM){
        this._travelDocument = val;
    }

    public get travelDocument(): TravelDocumentVM{
        return this._travelDocument;
    } 

    //#endregion travelDocument 

    //#region newTravelDocument

    @observable private _newTravelDocument: TravelDocumentVM = null;

    @TypeSystem.propertyDecorator(TravelDocumentVM)
    public set newTravelDocument(val: TravelDocumentVM){
        this._newTravelDocument = val;
    }

    public get newTravelDocument(): TravelDocumentVM{
        return this._newTravelDocument;
    } 

    //#endregion newTravelDocument 

    //#region otherCitizenship

    @observable private _otherCitizenship: CitizenshipVM = null;

    @TypeSystem.propertyDecorator(CitizenshipVM)
    public set otherCitizenship(val: CitizenshipVM){
        this._otherCitizenship = val;
    }

    public get otherCitizenship(): CitizenshipVM{
        return this._otherCitizenship;
    } 

    //#endregion otherCitizenship 

    //#region hasDocumentForDisabilities

    @observable private _hasDocumentForDisabilities: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasDocumentForDisabilities(val: boolean){
        this._hasDocumentForDisabilities = val;
    }

    public get hasDocumentForDisabilities(): boolean{
        return this._hasDocumentForDisabilities;
    } 

    //#endregion hasDocumentForDisabilities 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportVM', moduleContext.moduleName)
export class RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM')
    public set circumstances(val: RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM){
        this._circumstances = val;
    }

    public get circumstances(): RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM', moduleContext.moduleName)
export class RequestForApplyingForServiceForIssuingOfBCICardOrPassportDataVM extends BaseDataModel { 

    //#region identificationDocuments

    @observable private _identificationDocuments: IdentityDocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(IdentityDocumentType)
    public set identificationDocuments(val: IdentityDocumentType[]){
        this._identificationDocuments = val;
    }

    public get identificationDocuments(): IdentityDocumentType[]{
        return this._identificationDocuments;
    } 

    //#endregion identificationDocuments 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentToBeIssuedForVM', moduleContext.moduleName)
export class DocumentToBeIssuedForVM extends BaseDataModel { 

    //#region chooseIssuingDocument

    @observable private _chooseIssuingDocument: IssueDocumentFor = null;

    @TypeSystem.propertyDecorator(IssueDocumentFor)
    public set chooseIssuingDocument(val: IssueDocumentFor){
        this._chooseIssuingDocument = val;
    }

    public get chooseIssuingDocument(): IssueDocumentFor{
        return this._chooseIssuingDocument;
    } 

    //#endregion chooseIssuingDocument 

    //#region issuedBulgarianIdentityDocumentsInPeriod

    @observable private _issuedBulgarianIdentityDocumentsInPeriod: IssuedBulgarianIdentityDocumentsInPeriodVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'IssuedBulgarianIdentityDocumentsInPeriodVM')
    public set issuedBulgarianIdentityDocumentsInPeriod(val: IssuedBulgarianIdentityDocumentsInPeriodVM){
        this._issuedBulgarianIdentityDocumentsInPeriod = val;
    }

    public get issuedBulgarianIdentityDocumentsInPeriod(): IssuedBulgarianIdentityDocumentsInPeriodVM{
        return this._issuedBulgarianIdentityDocumentsInPeriod;
    } 

    //#endregion issuedBulgarianIdentityDocumentsInPeriod 

    //#region otherIndormationConnectedWithIssuedBulgarianIdentityDocuments

    @observable private _otherIndormationConnectedWithIssuedBulgarianIdentityDocuments: OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM')
    public set otherIndormationConnectedWithIssuedBulgarianIdentityDocuments(val: OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM){
        this._otherIndormationConnectedWithIssuedBulgarianIdentityDocuments = val;
    }

    public get otherIndormationConnectedWithIssuedBulgarianIdentityDocuments(): OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM{
        return this._otherIndormationConnectedWithIssuedBulgarianIdentityDocuments;
    } 

    //#endregion otherIndormationConnectedWithIssuedBulgarianIdentityDocuments 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IssuedBulgarianIdentityDocumentsInPeriodVM', moduleContext.moduleName)
export class IssuedBulgarianIdentityDocumentsInPeriodVM extends BaseDataModel { 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM', moduleContext.moduleName)
export class OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM extends BaseDataModel { 

    //#region nessesaryInformation

    @observable private _nessesaryInformation: string = null;

    @TypeSystem.propertyDecorator('string')
    public set nessesaryInformation(val: string){
        this._nessesaryInformation = val;
    }

    public get nessesaryInformation(): string{
        return this._nessesaryInformation;
    } 

    //#endregion nessesaryInformation 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ForeignCitizenDataVM', moduleContext.moduleName)
export class ForeignCitizenDataVM extends BaseDataModel { 

    //#region foreignCitizenNames

    @observable private _foreignCitizenNames: ForeignCitizenNames = null;

    @TypeSystem.propertyDecorator(ForeignCitizenNames)
    public set foreignCitizenNames(val: ForeignCitizenNames){
        this._foreignCitizenNames = val;
    }

    public get foreignCitizenNames(): ForeignCitizenNames{
        return this._foreignCitizenNames;
    } 

    //#endregion foreignCitizenNames 

    //#region genderName

    @observable private _genderName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set genderName(val: string){
        this._genderName = val;
    }

    public get genderName(): string{
        return this._genderName;
    } 

    //#endregion genderName 

    //#region genderCode

    @observable private _genderCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set genderCode(val: string){
        this._genderCode = val;
    }

    public get genderCode(): string{
        return this._genderCode;
    } 

    //#endregion genderCode 

    //#region birthDate

    @observable private _birthDate: string = null;

    @TypeSystem.propertyDecorator('string')
    public set birthDate(val: string){
        this._birthDate = val;
    }

    public get birthDate(): string{
        return this._birthDate;
    } 

    //#endregion birthDate 

    //#region placeOfBirthAbroad

    @observable private _placeOfBirthAbroad: PlaceOfBirthAbroad = null;

    @TypeSystem.propertyDecorator(PlaceOfBirthAbroad)
    public set placeOfBirthAbroad(val: PlaceOfBirthAbroad){
        this._placeOfBirthAbroad = val;
    }

    public get placeOfBirthAbroad(): PlaceOfBirthAbroad{
        return this._placeOfBirthAbroad;
    } 

    //#endregion placeOfBirthAbroad 

    //#region citizenship

    @observable private _citizenship: CitizenshipVM = null;

    @TypeSystem.propertyDecorator(CitizenshipVM)
    public set citizenship(val: CitizenshipVM){
        this._citizenship = val;
    }

    public get citizenship(): CitizenshipVM{
        return this._citizenship;
    } 

    //#endregion citizenship 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IssuerCountryVM', moduleContext.moduleName)
export class IssuerCountryVM extends BaseDataModel { 

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

@TypeSystem.typeDecorator('PersonIdentificationData', moduleContext.moduleName)
export class PersonIdentificationData extends BaseDataModel { 

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

    //#region namesLatin

    @observable private _namesLatin: PersonNamesLatin = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'PersonNamesLatin')
    public set namesLatin(val: PersonNamesLatin){
        this._namesLatin = val;
    }

    public get namesLatin(): PersonNamesLatin{
        return this._namesLatin;
    } 

    //#endregion namesLatin 

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

    //#region gender

    @observable private _gender: GenderData = null;

    @TypeSystem.propertyDecorator(GenderData)
    public set gender(val: GenderData){
        this._gender = val;
    }

    public get gender(): GenderData{
        return this._gender;
    } 

    //#endregion gender 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonNamesLatin', moduleContext.moduleName)
export class PersonNamesLatin extends BaseDataModel { 

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

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CertificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDVM', moduleContext.moduleName)
export class CertificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDVM extends SigningDocumentFormVMBase<OfficialVM> { 

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

    //#region certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader

    @observable private _certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader(val: string){
        this._certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader = val;
    }

    public get certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader(): string{
        return this._certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader;
    } 

    //#endregion certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDHeader 

    //#region certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData

    @observable private _certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData(val: string){
        this._certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData = val;
    }

    public get certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData(): string{
        return this._certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData;
    } 

    //#endregion certificateAttestingToEventsAndFactsRelatedToTheIssuanceOfIdentityDocumentsInZBLDData 

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

    //#region identityDocuments

    @observable private _identityDocuments: IdentityDocumentData[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'IdentityDocumentData')
    public set identityDocuments(val: IdentityDocumentData[]){
        this._identityDocuments = val;
    }

    public get identityDocuments(): IdentityDocumentData[]{
        return this._identityDocuments;
    } 

    //#endregion identityDocuments 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('IdentityDocumentData', moduleContext.moduleName)
export class IdentityDocumentData extends BaseDataModel { 

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

    //#region identityDocumentStatus

    @observable private _identityDocumentStatus: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identityDocumentStatus(val: string){
        this._identityDocumentStatus = val;
    }

    public get identityDocumentStatus(): string{
        return this._identityDocumentStatus;
    } 

    //#endregion identityDocumentStatus 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 


