import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import moment from 'moment';
import { moduleContext } from '../ModuleContext';
import { UserPermission, UserStatuses } from './ModelsAutoGenerated';

@TypeSystem.typeDecorator('UserVM', moduleContext.moduleName)
export class UserVM extends BaseDataModel {

    //#region userID

    @observable private _userID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set userID(val: number) {
        this._userID = val;
    }

    public get userID(): number {
        return this._userID;
    }

    //#endregion userID 

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

    //#region username

    @observable private _username: string = null;

    @TypeSystem.propertyDecorator('string')
    public set username(val: string) {
        this._username = val;
    }

    public get username(): string {
        return this._username;
    }

    //#endregion username

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment) {
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment {
        return this._updatedOn;
    }

    //#endregion valueDateTime 

    //#region cIN

    @observable private _cin: number = null;

    @TypeSystem.propertyDecorator('number')
    public set cin(val: number) {
        this._cin = val;
    }

    public get cin(): number {
        return this._cin;
    }

    //#endregion cIN 

    //#region status

    @observable private _status: UserStatuses = null;

    @TypeSystem.propertyDecorator(UserStatuses)
    public set status(val: UserStatuses) {
        this._status = val;
    }

    public get status(): UserStatuses {
        return this._status;
    }

    //#endregion status 

    //#region userPermissions

    @observable private _userPermissions: UserPermission[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'UserPermission')
    public set userPermissions(val: UserPermission[]) {
        this._userPermissions = val;
    }

    public get userPermissions(): UserPermission[] {
        return this._userPermissions;
    }

    //#endregion userPermissions 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 