import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

@TypeSystem.typeDecorator('UserInputModel', moduleContext.moduleName)
export class UserInputModel extends BaseDataModel {

    //#region email

    @observable private _email: string = null;

    @TypeSystem.propertyDecorator('string')
    public set email(val: string) {
        this._email = val;
    }

    public get email(): string {
        return this._email;
    }

    //#endregion email

    //#region currentPassword

    @observable private _currentPassword: string = null;

    @TypeSystem.propertyDecorator('string')
    public set currentPassword(val: string) {
        this._currentPassword = val;
    }

    public get currentPassword(): string {
        return this._currentPassword;
    }

    //#endregion currentPassword

    //#region password

    @observable private _password: string = null;

    @TypeSystem.propertyDecorator('string')
    public set password(val: string) {
        this._password = val;
    }

    public get password(): string {
        return this._password;
    }

    //#endregion password

    //#region confirmPassword

    @observable private _confirmPassword: string = null;

    @TypeSystem.propertyDecorator('string')
    public set confirmPassword(val: string) {
        this._confirmPassword = val;
    }

    public get confirmPassword(): string {
        return this._confirmPassword;
    }

    //#endregion confirmPassword

    //#region acceptedTerms

    @observable private _acceptedTerms: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set acceptedTerms(val: boolean) {
        this._acceptedTerms = val;
    }

    public get acceptedTerms(): boolean {
        return this._acceptedTerms;
    }

    //#endregion acceptedTerms

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UserRegistrationResult', moduleContext.moduleName)
export class UserRegistrationResult extends BaseDataModel {

    //#region emailAlreadyExists

    @observable private _emailAlreadyExists: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set emailAlreadyExists(val: boolean) {
        this._emailAlreadyExists = val;
    }

    public get emailAlreadyExists(): boolean {
        return this._emailAlreadyExists;
    }

    //#endregion emailAlreadyExists

    //#region emailUserStillNotActivated

    @observable private _emailUserStillNotActivated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set emailUserStillNotActivated(val: boolean) {
        this._emailUserStillNotActivated = val;
    }

    public get emailUserStillNotActivated(): boolean {
        return this._emailUserStillNotActivated;
    }

    //#endregion emailUserStillNotActivated

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('UserConfirmRegistrationResult', moduleContext.moduleName)
export class UserConfirmRegistrationResult extends BaseDataModel {

    //#region isProcessExpired

    @observable private _isProcessExpired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isProcessExpired(val: boolean) {
        this._isProcessExpired = val;
    }

    public get isProcessExpired(): boolean {
        return this._isProcessExpired;
    }

    //#endregion isProcessExpired

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('CompleteForgottenPasswordModel', moduleContext.moduleName)
export class CompleteForgottenPasswordModel extends BaseDataModel {

    //#region processId

    @observable private _processId: string = null;

    @TypeSystem.propertyDecorator('string')
    public set processId(val: string) {
        this._processId = val;
    }

    public get processId(): string {
        return this._processId;
    }

    //#endregion processId

    //#region newPassword

    @observable private _newPassword: string = null;

    @TypeSystem.propertyDecorator('string')
    public set newPassword(val: string) {
        this._newPassword = val;
    }

    public get newPassword(): string {
        return this._newPassword;
    }

    //#endregion newPassword

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 