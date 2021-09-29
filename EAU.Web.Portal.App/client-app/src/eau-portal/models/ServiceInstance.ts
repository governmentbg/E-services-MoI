﻿import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import * as moment from 'moment';
import { moduleContext } from '../ModuleContext';
import { ServiceInstanceStatuses } from './ModelsAutoGenerated';

@TypeSystem.typeDecorator('ServiceInstanceVM', moduleContext.moduleName)
export class ServiceInstance extends BaseDataModel {

    //#region serviceInstanceID

    @observable private _serviceInstanceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceInstanceID(val: number) {
        this._serviceInstanceID = val;
    }

    public get serviceInstanceID(): number {
        return this._serviceInstanceID;
    }

    //#endregion serviceInstanceID 

    //#region status

    @observable private _status: ServiceInstanceStatuses = null;

    @TypeSystem.propertyDecorator(ServiceInstanceStatuses)
    public set status(val: ServiceInstanceStatuses) {
        this._status = val;
    }

    public get status(): ServiceInstanceStatuses {
        return this._status;
    }

    //#endregion status 

    //#region serviceInstanceDate

    @observable private _serviceInstanceDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set serviceInstanceDate(val: moment.Moment) {
        this._serviceInstanceDate = val;
    }

    public get serviceInstanceDate(): moment.Moment {
        return this._serviceInstanceDate;
    }

    //#endregion serviceInstanceDate 

    //#region serviceID

    @observable private _serviceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceID(val: number) {
        this._serviceID = val;
    }

    public get serviceID(): number {
        return this._serviceID;
    }

    //#endregion serviceID 

    //#region service

    @observable private _service: string = null;

    @TypeSystem.propertyDecorator('string')
    public set service(val: string) {
        this._service = val;
    }

    public get service(): string {
        return this._service;
    }

    //#endregion service 

    //#region caseFileURI

    @observable private _caseFileURI: string = null;

    @TypeSystem.propertyDecorator('string')
    public set caseFileURI(val: string) {
        this._caseFileURI = val;
    }

    public get caseFileURI(): string {
        return this._caseFileURI;
    }

    //#endregion caseFileUri 

    //#region additionalData

    @observable private _additionalData: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalData(val: any) {
        this._additionalData = val;
    }

    public get additionalData(): any {
        return this._additionalData;
    }

    //#endregion additionalData

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment) {
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment {
        return this._updatedOn;
    }

    //#endregion 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 