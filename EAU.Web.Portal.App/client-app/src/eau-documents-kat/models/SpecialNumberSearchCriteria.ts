import { observable } from 'mobx';
import { TypeSystem, BaseDataModel } from 'cnsys-core';
import { moduleContext } from '../ModuleContext';
import { VehicleTypeCode } from './FourDigitSearchCriteria';

@TypeSystem.typeDecorator('SpecialNumberSearchCriteria', moduleContext.moduleName)
export class SpecialNumberSearchCriteria extends BaseDataModel {
    @observable private _vehicleTypeCode: VehicleTypeCode = null;
    @observable private _provinceCode: string = null;
    @observable private _number: string = null;

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }

    @TypeSystem.propertyDecorator(VehicleTypeCode ? VehicleTypeCode : moduleContext.moduleName + '.' + 'VehicleTypeCode')
    public set vehicleTypeCode(val: VehicleTypeCode) {
        this._vehicleTypeCode = val;
    }

    public get vehicleTypeCode(): VehicleTypeCode {
        return this._vehicleTypeCode;
    }

    @TypeSystem.propertyDecorator('string')
    public set provinceCode(val: string) {
        this._provinceCode = val;
    }

    public get provinceCode(): string {
        return this._provinceCode;
    }

    @TypeSystem.propertyDecorator('string')
    public set number(val: string) {
        this._number = val;
    }

    public get number(): string {
        return this._number;
    }
}