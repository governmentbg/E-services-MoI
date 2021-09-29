

// Auto Generated Object
import moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'
import { ApplicationFormVMBase, PersonAddress, CitizenshipVM, DocumentMustServeToVM} from 'eau-documents'



@TypeSystem.typeDecorator('ApplicationForIssuingDocumentForForeignersVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentForForeignersVM extends ApplicationFormVMBase { 

    //#region circumstances

    @observable private _circumstances: ApplicationForIssuingDocumentForForeignersDataVM = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'ApplicationForIssuingDocumentForForeignersDataVM')
    public set circumstances(val: ApplicationForIssuingDocumentForForeignersDataVM){
        this._circumstances = val;
    }

    public get circumstances(): ApplicationForIssuingDocumentForForeignersDataVM{
        return this._circumstances;
    } 

    //#endregion circumstances 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('ApplicationForIssuingDocumentForForeignersDataVM', moduleContext.moduleName)
export class ApplicationForIssuingDocumentForForeignersDataVM extends BaseDataModel { 

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

    //#region certificateFor

    @observable private _certificateFor: string = null;

    @TypeSystem.propertyDecorator('string')
    public set certificateFor(val: string){
        this._certificateFor = val;
    }

    public get certificateFor(): string{
        return this._certificateFor;
    } 

    //#endregion certificateFor 

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

    //#region persistedAddress

    @observable private _persistedAddress: PersonAddress = null;

    @TypeSystem.propertyDecorator(PersonAddress)
    public set persistedAddress(val: PersonAddress){
        this._persistedAddress = val;
    }

    public get persistedAddress(): PersonAddress{
        return this._persistedAddress;
    } 

    //#endregion persistedAddress 

    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
} 

 

