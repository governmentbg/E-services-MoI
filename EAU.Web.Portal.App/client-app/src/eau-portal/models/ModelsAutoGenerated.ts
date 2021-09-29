
 
// Auto Generated Object
import * as moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel, BasePagedSearchCriteria } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { RegistrationDataTypes } from 'eau-core'
import { URI } from './URI'


export enum ServiceInstanceStatuses { 

    InProcess = 1,

    Completed = 2,

    Rejected = 3,

}
TypeSystem.registerEnumInfo(ServiceInstanceStatuses , 'ServiceInstanceStatuses' , moduleContext.moduleName)
export enum ObligationSearchModes { 

    MyPayments = 1,

    AND = 2,

    ServiceInstances = 3,

}
TypeSystem.registerEnumInfo(ObligationSearchModes , 'ObligationSearchModes' , moduleContext.moduleName)
export enum ObligationTypes { 

    ServiceInstance = 1,

    AND = 2,

}
TypeSystem.registerEnumInfo(ObligationTypes , 'ObligationTypes' , moduleContext.moduleName)
export enum ObligationStatuses { 

    Pending = 0,

    InProcess = 1,

    Paid = 2,

    Processed = 3,

}
TypeSystem.registerEnumInfo(ObligationStatuses , 'ObligationStatuses' , moduleContext.moduleName)
export enum ObligedPersonIdentTypes { 

    EGN = 1,

    LNC = 2,

    BULSTAT = 3,

}
TypeSystem.registerEnumInfo(ObligedPersonIdentTypes , 'ObligedPersonIdentTypes' , moduleContext.moduleName)
export enum DocTypes { 

    Fish = 1,

    AUAN = 2,

    NP = 3,

}
TypeSystem.registerEnumInfo(DocTypes , 'DocTypes' , moduleContext.moduleName)
export enum PaymentRequestStatuses { 

    New = 1,

    Sent = 2,

    Paid = 3,

    Cancelled = 4,

    Expired = 5,

}
TypeSystem.registerEnumInfo(PaymentRequestStatuses , 'PaymentRequestStatuses' , moduleContext.moduleName)
export enum ANDObligationSearchMode { 

    ObligedPerson = 1,

    Document = 2,

}
TypeSystem.registerEnumInfo(ANDObligationSearchMode , 'ANDObligationSearchMode' , moduleContext.moduleName)
export enum ServiceInstanceStatus { 

    NotCompleted = 1,

    WaitingResponse = 2,

    Completed = 3,

    Cancelled = 4,

    CancelIssuingAdministrativeAct = 5,

    WaitCorrectionsApplication = 6,

    Termination = 7,

    OutstandingConditions = 8,

    WaitPayment = 9,

}
TypeSystem.registerEnumInfo(ServiceInstanceStatus , 'ServiceInstanceStatus' , moduleContext.moduleName)

@TypeSystem.typeDecorator('ServiceInstanceLoadOption', moduleContext.moduleName)
export class ServiceInstanceLoadOption extends BaseDataModel { 

    //#region loadWithLock

    @observable private _loadWithLock: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadWithLock(val: boolean){
        this._loadWithLock = val;
    }

    public get loadWithLock(): boolean{
        return this._loadWithLock;
    } 

    //#endregion loadWithLock 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceInstanceSearchCriteria', moduleContext.moduleName)
export class ServiceInstanceSearchCriteria extends BasePagedSearchCriteria { 

    //#region serviceInstanceIDs

    @observable private _serviceInstanceIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set serviceInstanceIDs(val: number[]){
        this._serviceInstanceIDs = val;
    }

    public get serviceInstanceIDs(): number[]{
        return this._serviceInstanceIDs;
    } 

    //#endregion serviceInstanceIDs 

    //#region status

    @observable private _status: ServiceInstanceStatuses = null;

    @TypeSystem.propertyDecorator(ServiceInstanceStatuses)
    public set status(val: ServiceInstanceStatuses){
        this._status = val;
    }

    public get status(): ServiceInstanceStatuses{
        return this._status;
    } 

    //#endregion status 

    //#region applicantID

    @observable private _applicantID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set applicantID(val: number){
        this._applicantID = val;
    }

    public get applicantID(): number{
        return this._applicantID;
    } 

    //#endregion applicantID 

    //#region serviceInstanceDateFrom

    @observable private _serviceInstanceDateFrom: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set serviceInstanceDateFrom(val: moment.Moment){
        this._serviceInstanceDateFrom = val;
    }

    public get serviceInstanceDateFrom(): moment.Moment{
        return this._serviceInstanceDateFrom;
    } 

    //#endregion serviceInstanceDateFrom 

    //#region serviceInstanceDateTo

    @observable private _serviceInstanceDateTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set serviceInstanceDateTo(val: moment.Moment){
        this._serviceInstanceDateTo = val;
    }

    public get serviceInstanceDateTo(): moment.Moment{
        return this._serviceInstanceDateTo;
    } 

    //#endregion serviceInstanceDateTo 

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

    //#region loadOption

    @observable private _loadOption: ServiceInstanceLoadOption = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ServiceInstanceLoadOption')
    public set loadOption(val: ServiceInstanceLoadOption){
        this._loadOption = val;
    }

    public get loadOption(): ServiceInstanceLoadOption{
        return this._loadOption;
    } 

    //#endregion loadOption 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UserAuthenticationInfo', moduleContext.moduleName)
export class UserAuthenticationInfo extends BaseDataModel { 

    //#region userAuthenticationId

    @observable private _userAuthenticationId: number = null;

    @TypeSystem.propertyDecorator('number')
    public set userAuthenticationId(val: number){
        this._userAuthenticationId = val;
    }

    public get userAuthenticationId(): number{
        return this._userAuthenticationId;
    } 

    //#endregion userAuthenticationId 

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

@TypeSystem.typeDecorator('MyPaymentsObligationSearchCriteria', moduleContext.moduleName)
export class MyPaymentsObligationSearchCriteria extends BasePagedSearchCriteria { 

    //#region serviceInstanceID

    @observable private _serviceInstanceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceInstanceID(val: number){
        this._serviceInstanceID = val;
    }

    public get serviceInstanceID(): number{
        return this._serviceInstanceID;
    } 

    //#endregion serviceInstanceID 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ANDObligationSearchCriteria', moduleContext.moduleName)
export class ANDObligationSearchCriteria extends BaseDataModel { 

    //#region mode

    @observable private _mode: ANDObligationSearchMode = null;

    @TypeSystem.propertyDecorator(ANDObligationSearchMode)
    public set mode(val: ANDObligationSearchMode){
        this._mode = val;
    }

    public get mode(): ANDObligationSearchMode{
        return this._mode;
    } 

    //#endregion mode 

    //#region documentType

    @observable private _documentType: DocTypes = null;

    @TypeSystem.propertyDecorator(DocTypes)
    public set documentType(val: DocTypes){
        this._documentType = val;
    }

    public get documentType(): DocTypes{
        return this._documentType;
    } 

    //#endregion documentType 

    //#region documentSeries

    @observable private _documentSeries: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentSeries(val: string){
        this._documentSeries = val;
    }

    public get documentSeries(): string{
        return this._documentSeries;
    } 

    //#endregion documentSeries 

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

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region drivingLicenceNumber

    @observable private _drivingLicenceNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set drivingLicenceNumber(val: string){
        this._drivingLicenceNumber = val;
    }

    public get drivingLicenceNumber(): string{
        return this._drivingLicenceNumber;
    } 

    //#endregion drivingLicenceNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('SIObligationSearchCriteria', moduleContext.moduleName)
export class SIObligationSearchCriteria extends BaseDataModel { 

    //#region serviceInstanceID

    @observable private _serviceInstanceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceInstanceID(val: number){
        this._serviceInstanceID = val;
    }

    public get serviceInstanceID(): number{
        return this._serviceInstanceID;
    } 

    //#endregion serviceInstanceID 

    //#region paymentInstructionURI

    @observable private _paymentInstructionURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set paymentInstructionURI(val: string){
        this._paymentInstructionURI = val;
    }

    public get paymentInstructionURI(): string{
        return this._paymentInstructionURI;
    } 

    //#endregion paymentInstructionURI 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ANDObligationSearchResponse', moduleContext.moduleName)
export class ANDObligationSearchResponse extends BaseDataModel { 

    //#region obligations

    @observable private _obligations: Obligation[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Obligation')
    public set obligations(val: Obligation[]){
        this._obligations = val;
    }

    public get obligations(): Obligation[]{
        return this._obligations;
    } 

    //#endregion obligations 

    //#region hasNonHandedSlip

    @observable private _hasNonHandedSlip: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set hasNonHandedSlip(val: boolean){
        this._hasNonHandedSlip = val;
    }

    public get hasNonHandedSlip(): boolean{
        return this._hasNonHandedSlip;
    } 

    //#endregion hasNonHandedSlip 

    //#region errorOnHasNonHandedSlip

    @observable private _errorOnHasNonHandedSlip: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set errorOnHasNonHandedSlip(val: boolean){
        this._errorOnHasNonHandedSlip = val;
    }

    public get errorOnHasNonHandedSlip(): boolean{
        return this._errorOnHasNonHandedSlip;
    } 

    //#endregion errorOnHasNonHandedSlip 

    //#region errorNoDataFound

    @observable private _errorNoDataFound: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set errorNoDataFound(val: boolean){
        this._errorNoDataFound = val;
    }

    public get errorNoDataFound(): boolean{
        return this._errorNoDataFound;
    } 

    //#endregion errorNoDataFound 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('Obligation', moduleContext.moduleName)
export class Obligation extends BaseDataModel { 

    //#region obligationID

    @observable private _obligationID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set obligationID(val: number){
        this._obligationID = val;
    }

    public get obligationID(): number{
        return this._obligationID;
    } 

    //#endregion obligationID 

    //#region status

    @observable private _status: ObligationStatuses = null;

    @TypeSystem.propertyDecorator(ObligationStatuses)
    public set status(val: ObligationStatuses){
        this._status = val;
    }

    public get status(): ObligationStatuses{
        return this._status;
    } 

    //#endregion status 

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

    //#region discountAmount

    @observable private _discountAmount: number = null;

    @TypeSystem.propertyDecorator('number')
    public set discountAmount(val: number){
        this._discountAmount = val;
    }

    public get discountAmount(): number{
        return this._discountAmount;
    } 

    //#endregion discountAmount 

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

    //#region expirationDate

    @observable private _expirationDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set expirationDate(val: moment.Moment){
        this._expirationDate = val;
    }

    public get expirationDate(): moment.Moment{
        return this._expirationDate;
    } 

    //#endregion expirationDate 

    //#region applicantID

    @observable private _applicantID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set applicantID(val: number){
        this._applicantID = val;
    }

    public get applicantID(): number{
        return this._applicantID;
    } 

    //#endregion applicantID 

    //#region obligedPersonName

    @observable private _obligedPersonName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonName(val: string){
        this._obligedPersonName = val;
    }

    public get obligedPersonName(): string{
        return this._obligedPersonName;
    } 

    //#endregion obligedPersonName 

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region obligedPersonIdentType

    @observable private _obligedPersonIdentType: ObligedPersonIdentTypes = null;

    @TypeSystem.propertyDecorator(ObligedPersonIdentTypes)
    public set obligedPersonIdentType(val: ObligedPersonIdentTypes){
        this._obligedPersonIdentType = val;
    }

    public get obligedPersonIdentType(): ObligedPersonIdentTypes{
        return this._obligedPersonIdentType;
    } 

    //#endregion obligedPersonIdentType 

    //#region obligationDate

    @observable private _obligationDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set obligationDate(val: moment.Moment){
        this._obligationDate = val;
    }

    public get obligationDate(): moment.Moment{
        return this._obligationDate;
    } 

    //#endregion obligationDate 

    //#region obligationIdentifier

    @observable private _obligationIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligationIdentifier(val: string){
        this._obligationIdentifier = val;
    }

    public get obligationIdentifier(): string{
        return this._obligationIdentifier;
    } 

    //#endregion obligationIdentifier 

    //#region type

    @observable private _type: ObligationTypes = null;

    @TypeSystem.propertyDecorator(ObligationTypes)
    public set type(val: ObligationTypes){
        this._type = val;
    }

    public get type(): ObligationTypes{
        return this._type;
    } 

    //#endregion type 

    //#region serviceInstanceID

    @observable private _serviceInstanceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceInstanceID(val: number){
        this._serviceInstanceID = val;
    }

    public get serviceInstanceID(): number{
        return this._serviceInstanceID;
    } 

    //#endregion serviceInstanceID 

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

    //#region additionalData

    @observable private _additionalData: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalData(val: any){
        this._additionalData = val;
    }

    public get additionalData(): any{
        return this._additionalData;
    } 

    //#endregion additionalData 

    //#region paymentRequests

    @observable private _paymentRequests: PaymentRequest[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'PaymentRequest')
    public set paymentRequests(val: PaymentRequest[]){
        this._paymentRequests = val;
    }

    public get paymentRequests(): PaymentRequest[]{
        return this._paymentRequests;
    } 

    //#endregion paymentRequests 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ObligationRequest', moduleContext.moduleName)
export class ObligationRequest extends BaseDataModel { 

    //#region type

    @observable private _type: ObligationTypes = null;

    @TypeSystem.propertyDecorator(ObligationTypes)
    public set type(val: ObligationTypes){
        this._type = val;
    }

    public get type(): ObligationTypes{
        return this._type;
    } 

    //#endregion type 

    //#region applicantID

    @observable private _applicantID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set applicantID(val: number){
        this._applicantID = val;
    }

    public get applicantID(): number{
        return this._applicantID;
    } 

    //#endregion applicantID 

    //#region obligationIdentifier

    @observable private _obligationIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligationIdentifier(val: string){
        this._obligationIdentifier = val;
    }

    public get obligationIdentifier(): string{
        return this._obligationIdentifier;
    } 

    //#endregion obligationIdentifier 

    //#region obligationDate

    @observable private _obligationDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set obligationDate(val: moment.Moment){
        this._obligationDate = val;
    }

    public get obligationDate(): moment.Moment{
        return this._obligationDate;
    } 

    //#endregion obligationDate 

    //#region obligedPersonName

    @observable private _obligedPersonName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonName(val: string){
        this._obligedPersonName = val;
    }

    public get obligedPersonName(): string{
        return this._obligedPersonName;
    } 

    //#endregion obligedPersonName 

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region obligedPersonIdentType

    @observable private _obligedPersonIdentType: ObligedPersonIdentTypes = null;

    @TypeSystem.propertyDecorator(ObligedPersonIdentTypes)
    public set obligedPersonIdentType(val: ObligedPersonIdentTypes){
        this._obligedPersonIdentType = val;
    }

    public get obligedPersonIdentType(): ObligedPersonIdentTypes{
        return this._obligedPersonIdentType;
    } 

    //#endregion obligedPersonIdentType 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ObligationSearchCriteria', moduleContext.moduleName)
export class ObligationSearchCriteria extends BasePagedSearchCriteria { 

    //#region mode

    @observable private _mode: ObligationSearchModes = null;

    @TypeSystem.propertyDecorator(ObligationSearchModes)
    public set mode(val: ObligationSearchModes){
        this._mode = val;
    }

    public get mode(): ObligationSearchModes{
        return this._mode;
    } 

    //#endregion mode 

    //#region obligationIdentifier

    @observable private _obligationIdentifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligationIdentifier(val: string){
        this._obligationIdentifier = val;
    }

    public get obligationIdentifier(): string{
        return this._obligationIdentifier;
    } 

    //#endregion obligationIdentifier 

    //#region type

    @observable private _type: ObligationTypes = null;

    @TypeSystem.propertyDecorator(ObligationTypes)
    public set type(val: ObligationTypes){
        this._type = val;
    }

    public get type(): ObligationTypes{
        return this._type;
    } 

    //#endregion type 

    //#region statuses

    @observable private _statuses: ObligationStatuses[] = null;

    @TypeSystem.propertyArrayDecorator(ObligationStatuses)
    public set statuses(val: ObligationStatuses[]){
        this._statuses = val;
    }

    public get statuses(): ObligationStatuses[]{
        return this._statuses;
    } 

    //#endregion statuses 

    //#region applicantID

    @observable private _applicantID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set applicantID(val: number){
        this._applicantID = val;
    }

    public get applicantID(): number{
        return this._applicantID;
    } 

    //#endregion applicantID 

    //#region documentType

    @observable private _documentType: DocTypes = null;

    @TypeSystem.propertyDecorator(DocTypes)
    public set documentType(val: DocTypes){
        this._documentType = val;
    }

    public get documentType(): DocTypes{
        return this._documentType;
    } 

    //#endregion documentType 

    //#region documentSeries

    @observable private _documentSeries: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentSeries(val: string){
        this._documentSeries = val;
    }

    public get documentSeries(): string{
        return this._documentSeries;
    } 

    //#endregion documentSeries 

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

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region drivingLicenceNumber

    @observable private _drivingLicenceNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set drivingLicenceNumber(val: string){
        this._drivingLicenceNumber = val;
    }

    public get drivingLicenceNumber(): string{
        return this._drivingLicenceNumber;
    } 

    //#endregion drivingLicenceNumber 

    //#region serviceInstanceID

    @observable private _serviceInstanceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceInstanceID(val: number){
        this._serviceInstanceID = val;
    }

    public get serviceInstanceID(): number{
        return this._serviceInstanceID;
    } 

    //#endregion serviceInstanceID 

    //#region paymentInstructionURI

    @observable private _paymentInstructionURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set paymentInstructionURI(val: string){
        this._paymentInstructionURI = val;
    }

    public get paymentInstructionURI(): string{
        return this._paymentInstructionURI;
    } 

    //#endregion paymentInstructionURI 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PaymentRequest', moduleContext.moduleName)
export class PaymentRequest extends BaseDataModel { 

    //#region paymentRequestID

    @observable private _paymentRequestID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set paymentRequestID(val: number){
        this._paymentRequestID = val;
    }

    public get paymentRequestID(): number{
        return this._paymentRequestID;
    } 

    //#endregion paymentRequestID 

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

    //#region registrationDataType

    @observable private _registrationDataType: RegistrationDataTypes = null;

    @TypeSystem.propertyDecorator(RegistrationDataTypes)
    public set registrationDataType(val: RegistrationDataTypes){
        this._registrationDataType = val;
    }

    public get registrationDataType(): RegistrationDataTypes{
        return this._registrationDataType;
    } 

    //#endregion registrationDataType 

    //#region status

    @observable private _status: PaymentRequestStatuses = null;

    @TypeSystem.propertyDecorator(PaymentRequestStatuses)
    public set status(val: PaymentRequestStatuses){
        this._status = val;
    }

    public get status(): PaymentRequestStatuses{
        return this._status;
    } 

    //#endregion status 

    //#region obligationID

    @observable private _obligationID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set obligationID(val: number){
        this._obligationID = val;
    }

    public get obligationID(): number{
        return this._obligationID;
    } 

    //#endregion obligationID 

    //#region obligedPersonName

    @observable private _obligedPersonName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonName(val: string){
        this._obligedPersonName = val;
    }

    public get obligedPersonName(): string{
        return this._obligedPersonName;
    } 

    //#endregion obligedPersonName 

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region obligedPersonIdentType

    @observable private _obligedPersonIdentType: ObligedPersonIdentTypes = null;

    @TypeSystem.propertyDecorator(ObligedPersonIdentTypes)
    public set obligedPersonIdentType(val: ObligedPersonIdentTypes){
        this._obligedPersonIdentType = val;
    }

    public get obligedPersonIdentType(): ObligedPersonIdentTypes{
        return this._obligedPersonIdentType;
    } 

    //#endregion obligedPersonIdentType 

    //#region sendDate

    @observable private _sendDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set sendDate(val: moment.Moment){
        this._sendDate = val;
    }

    public get sendDate(): moment.Moment{
        return this._sendDate;
    } 

    //#endregion sendDate 

    //#region payDate

    @observable private _payDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set payDate(val: moment.Moment){
        this._payDate = val;
    }

    public get payDate(): moment.Moment{
        return this._payDate;
    } 

    //#endregion payDate 

    //#region externalPortalPaymentNumber

    @observable private _externalPortalPaymentNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set externalPortalPaymentNumber(val: string){
        this._externalPortalPaymentNumber = val;
    }

    public get externalPortalPaymentNumber(): string{
        return this._externalPortalPaymentNumber;
    } 

    //#endregion externalPortalPaymentNumber 

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

    //#region additionalData

    @observable private _additionalData: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalData(val: any){
        this._additionalData = val;
    }

    public get additionalData(): any{
        return this._additionalData;
    } 

    //#endregion additionalData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PaymentRequestSearchCriteria', moduleContext.moduleName)
export class PaymentRequestSearchCriteria extends BasePagedSearchCriteria { 

    //#region paymentRequestIDs

    @observable private _paymentRequestIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set paymentRequestIDs(val: number[]){
        this._paymentRequestIDs = val;
    }

    public get paymentRequestIDs(): number[]{
        return this._paymentRequestIDs;
    } 

    //#endregion paymentRequestIDs 

    //#region obligationIDs

    @observable private _obligationIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set obligationIDs(val: number[]){
        this._obligationIDs = val;
    }

    public get obligationIDs(): number[]{
        return this._obligationIDs;
    } 

    //#endregion obligationIDs 

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

    //#region externalPortalNumber

    @observable private _externalPortalNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set externalPortalNumber(val: string){
        this._externalPortalNumber = val;
    }

    public get externalPortalNumber(): string{
        return this._externalPortalNumber;
    } 

    //#endregion externalPortalNumber 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('StartPaymentRequest', moduleContext.moduleName)
export class StartPaymentRequest extends BaseDataModel { 

    //#region obligedPersonName

    @observable private _obligedPersonName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonName(val: string){
        this._obligedPersonName = val;
    }

    public get obligedPersonName(): string{
        return this._obligedPersonName;
    } 

    //#endregion obligedPersonName 

    //#region obligedPersonIdent

    @observable private _obligedPersonIdent: string = null;

    @TypeSystem.propertyDecorator('string')
    public set obligedPersonIdent(val: string){
        this._obligedPersonIdent = val;
    }

    public get obligedPersonIdent(): string{
        return this._obligedPersonIdent;
    } 

    //#endregion obligedPersonIdent 

    //#region obligedPersonIdentType

    @observable private _obligedPersonIdentType: ObligedPersonIdentTypes = null;

    @TypeSystem.propertyDecorator(ObligedPersonIdentTypes)
    public set obligedPersonIdentType(val: ObligedPersonIdentTypes){
        this._obligedPersonIdentType = val;
    }

    public get obligedPersonIdentType(): ObligedPersonIdentTypes{
        return this._obligedPersonIdentType;
    } 

    //#endregion obligedPersonIdentType 

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

    //#region registrationDataType

    @observable private _registrationDataType: RegistrationDataTypes = null;

    @TypeSystem.propertyDecorator(RegistrationDataTypes)
    public set registrationDataType(val: RegistrationDataTypes){
        this._registrationDataType = val;
    }

    public get registrationDataType(): RegistrationDataTypes{
        return this._registrationDataType;
    } 

    //#endregion registrationDataType 

    //#region okCancelUrl

    @observable private _okCancelUrl: string = null;

    @TypeSystem.propertyDecorator('string')
    public set okCancelUrl(val: string){
        this._okCancelUrl = val;
    }

    public get okCancelUrl(): string{
        return this._okCancelUrl;
    } 

    //#endregion okCancelUrl 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CaseFileInfo', moduleContext.moduleName)
export class CaseFileInfo extends BaseDataModel { 

    //#region caseFileURI

    @observable private _caseFileURI: URI = null;

    @TypeSystem.propertyDecorator(URI)
    public set caseFileURI(val: URI){
        this._caseFileURI = val;
    }

    public get caseFileURI(): URI{
        return this._caseFileURI;
    } 

    //#endregion caseFileURI 

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

    //#region documents

    @observable private _documents: DocumentInfo[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DocumentInfo')
    public set documents(val: DocumentInfo[]){
        this._documents = val;
    }

    public get documents(): DocumentInfo[]{
        return this._documents;
    } 

    //#endregion documents 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('DocumentInfo', moduleContext.moduleName)
export class DocumentInfo extends BaseDataModel { 

    //#region documentURI

    @observable private _documentURI: URI = null;

    @TypeSystem.propertyDecorator(URI)
    public set documentURI(val: URI){
        this._documentURI = val;
    }

    public get documentURI(): URI{
        return this._documentURI;
    } 

    //#endregion documentURI 

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

    @observable private _documentTypeURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set documentTypeURI(val: string){
        this._documentTypeURI = val;
    }

    public get documentTypeURI(): string{
        return this._documentTypeURI;
    } 

    //#endregion documentTypeURI 

    //#region registrationTime

    @observable private _registrationTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set registrationTime(val: moment.Moment){
        this._registrationTime = val;
    }

    public get registrationTime(): moment.Moment{
        return this._registrationTime;
    } 

    //#endregion registrationTime 

    //#region creationTime

    @observable private _creationTime: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set creationTime(val: moment.Moment){
        this._creationTime = val;
    }

    public get creationTime(): moment.Moment{
        return this._creationTime;
    } 

    //#endregion creationTime 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ServiceInstanceInfo', moduleContext.moduleName)
export class ServiceInstanceInfo extends BaseDataModel { 

    //#region caseFileURI

    @observable private _caseFileURI: URI = null;

    @TypeSystem.propertyDecorator(URI)
    public set caseFileURI(val: URI){
        this._caseFileURI = val;
    }

    public get caseFileURI(): URI{
        return this._caseFileURI;
    } 

    //#endregion caseFileURI 

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

    //#region serviceDescription

    @observable private _serviceDescription: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceDescription(val: string){
        this._serviceDescription = val;
    }

    public get serviceDescription(): string{
        return this._serviceDescription;
    } 

    //#endregion serviceDescription 

    //#region status

    @observable private _status: ServiceInstanceStatus = null;

    @TypeSystem.propertyDecorator(ServiceInstanceStatus)
    public set status(val: ServiceInstanceStatus){
        this._status = val;
    }

    public get status(): ServiceInstanceStatus{
        return this._status;
    } 

    //#endregion status 

    //#region initiatingDocumentURI

    @observable private _initiatingDocumentURI: URI = null;

    @TypeSystem.propertyDecorator(URI)
    public set initiatingDocumentURI(val: URI){
        this._initiatingDocumentURI = val;
    }

    public get initiatingDocumentURI(): URI{
        return this._initiatingDocumentURI;
    } 

    //#endregion initiatingDocumentURI 

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

    //#region executedStages

    @observable private _executedStages: StageInstanceInfo[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'StageInstanceInfo')
    public set executedStages(val: StageInstanceInfo[]){
        this._executedStages = val;
    }

    public get executedStages(): StageInstanceInfo[]{
        return this._executedStages;
    } 

    //#endregion executedStages 

    //#region unexecutedStages

    @observable private _unexecutedStages: StageInstanceInfo[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'StageInstanceInfo')
    public set unexecutedStages(val: StageInstanceInfo[]){
        this._unexecutedStages = val;
    }

    public get unexecutedStages(): StageInstanceInfo[]{
        return this._unexecutedStages;
    } 

    //#endregion unexecutedStages 

    //#region cancelledStages

    @observable private _cancelledStages: StageInstanceInfo[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'StageInstanceInfo')
    public set cancelledStages(val: StageInstanceInfo[]){
        this._cancelledStages = val;
    }

    public get cancelledStages(): StageInstanceInfo[]{
        return this._cancelledStages;
    } 

    //#endregion cancelledStages 

    //#region caseFile

    @observable private _caseFile: CaseFileInfo = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'CaseFileInfo')
    public set caseFile(val: CaseFileInfo){
        this._caseFile = val;
    }

    public get caseFile(): CaseFileInfo{
        return this._caseFile;
    } 

    //#endregion caseFile 

    //#region reportData

    @observable private _reportData: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set reportData(val: moment.Moment){
        this._reportData = val;
    }

    public get reportData(): moment.Moment{
        return this._reportData;
    } 

    //#endregion reportData 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('StageInstanceInfo', moduleContext.moduleName)
export class StageInstanceInfo extends BaseDataModel { 

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

    //#region executedByNames

    @observable private _executedByNames: string = null;

    @TypeSystem.propertyDecorator('string')
    public set executedByNames(val: string){
        this._executedByNames = val;
    }

    public get executedByNames(): string{
        return this._executedByNames;
    } 

    //#endregion executedByNames 

    //#region actualStartDate

    @observable private _actualStartDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set actualStartDate(val: moment.Moment){
        this._actualStartDate = val;
    }

    public get actualStartDate(): moment.Moment{
        return this._actualStartDate;
    } 

    //#endregion actualStartDate 

    //#region actualCompletionDate

    @observable private _actualCompletionDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set actualCompletionDate(val: moment.Moment){
        this._actualCompletionDate = val;
    }

    public get actualCompletionDate(): moment.Moment{
        return this._actualCompletionDate;
    } 

    //#endregion actualCompletionDate 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 
