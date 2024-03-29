import { BasePagedSearchCriteria, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import moment from 'moment';
import { moduleContext } from '../ModuleContext';
import { AuthenticationTypes, UserStatuses } from './ModelsAutoGenerated';

@TypeSystem.typeDecorator('UserSearchCriteria', moduleContext.moduleName)
export class UserSearchCriteria extends BasePagedSearchCriteria {

    //#region userIDs

    @observable private _userIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set userIDs(val: number[]) {
        this._userIDs = val;
    }

    public get userIDs(): number[] {
        return this._userIDs;
    }

    //#endregion userIDs 

    //#region cin

    @observable private _cin: number = null;

    @TypeSystem.propertyDecorator('number')
    public set cin(val: number) {
        this._cin = val;
    }

    public get cin(): number {
        return this._cin;
    }

    //#endregion cin 

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

    //#region userStatuses

    @observable private _userStatuses: UserStatuses[] = null;

    @TypeSystem.propertyArrayDecorator(UserStatuses)
    public set userStatuses(val: UserStatuses[]) {
        this._userStatuses = val;
    }

    public get userStatuses(): UserStatuses[] {
        return this._userStatuses;
    }

    //#endregion userStatuses 

    //#region dateFrom

    @observable private _dateFrom: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set dateFrom(val: moment.Moment) {
        if (moment.isMoment(val))
            this._dateFrom = val.startOf('day');
        else
            this._dateFrom = val
    }

    public get dateFrom(): moment.Moment {
        return this._dateFrom;
    }

    //#endregion dateFrom 

    //#region dateTo

    @observable private _dateTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set dateTo(val: moment.Moment) {
        if (moment.isMoment(val))
            this._dateTo = val.endOf('day');
        else
            this._dateTo = val;
    }

    public get dateTo(): moment.Moment {
        return this._dateTo;
    }

    //#endregion dateTo 

    //#region authenticationType

    @observable private _authenticationType: AuthenticationTypes = null;

    @TypeSystem.propertyDecorator(AuthenticationTypes)
    public set authenticationType(val: AuthenticationTypes) {
        this._authenticationType = val;
    }

    public get authenticationType(): AuthenticationTypes {
        return this._authenticationType;
    }

    //#endregion authenticationType 

    //#region loadUserPermissions

    @observable private _loadUserPermissions: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadUserPermissions(val: boolean) {
        this._loadUserPermissions = val;
    }

    public get loadUserPermissions(): boolean {
        return this._loadUserPermissions;
    }

    //#endregion loadUserPermissions 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 