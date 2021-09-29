import * as moment from 'moment'
import { observable } from 'mobx'
import { TypeSystem, BaseDataModel } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'

@TypeSystem.typeDecorator('URI', moduleContext.moduleName)
export class URI extends BaseDataModel {

    //#region registerIndex

    @observable private _registerIndex: number = null;

    @TypeSystem.propertyDecorator('number')
    public set registerIndex(val: number) {
        this._registerIndex = val;
    }

    public get registerIndex(): number {
        return this._registerIndex;
    }

    //#endregion registerIndex 

    //#region sequenceNumber

    @observable private _sequenceNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set sequenceNumber(val: number) {
        this._sequenceNumber = val;
    }

    public get sequenceNumber(): number {
        return this._sequenceNumber;
    }

    //#endregion sequenceNumber 

    //#region receiptOrSigningDate

    @observable private _receiptOrSigningDate: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set receiptOrSigningDate(val: moment.Moment) {
        this._receiptOrSigningDate = val;
    }

    public get receiptOrSigningDate(): moment.Moment {
        return this._receiptOrSigningDate;
    }

    //#endregion receiptOrSigningDate 

    public toString() {
        return `${this.registerIndex}-${this.sequenceNumber}-${this.receiptOrSigningDate.format('dd.MM.yyyy')}`
    }

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 