import { observable } from 'mobx';
import { TypeSystem, BaseDataModel } from 'cnsys-core';
import { moduleContext } from '../ModuleContext';

export enum VehicleTypeCode {
    /** ����������� �������������� ������ */
    _8403 = 8403,
    /** ���������/���������� �������������� ������ */
    _8404 = 8404,
    /**  ������������ �������������� ������ */
    _8405 = 8405,
    /**��������� �������������� ������ */
    _8406 = 8406,
    /**  ����������� ������ �� ������������ �� */
    _21770 = 21770,
    /** ������������ ������ �� ������������ �� */
    _21771 = 21771,
    /** ��������� ������ �� ������������ �� */
    _21772 = 21772
}
TypeSystem.registerEnumInfo(VehicleTypeCode, 'VehicleTypeCode', moduleContext.moduleName);

export enum NumberFormat {
    /**  ��������� (abba) */
    abba = 1,
    /** ������ (aaaa) */
    aaaa = 2,
    /** ������� (abab, aabb) */
    abab_aabb = 3,
    /** ������� (abcd) */
    abcd = 4
}
TypeSystem.registerEnumInfo(NumberFormat, 'NumberFormat', moduleContext.moduleName);

export enum PlateStatus {
    /** �������� */
    Available = 0,
    /** ������ */
    Requested = 1,
    /** ������� */
    Reserved = 2,
    _3 = 3,
    _4 = 4
}
TypeSystem.registerEnumInfo(PlateStatus, 'PlateStatus', moduleContext.moduleName);

export enum FourDigitSearchTypes {
    /** �� �������� */
    ByRegNumber = 0,
    /** �� ����� */
    ByInterval = 1
}
TypeSystem.registerEnumInfo(FourDigitSearchTypes, 'FourDigitSearchTypes', moduleContext.moduleName);


@TypeSystem.typeDecorator('FourDigitSearchCriteria', moduleContext.moduleName)
export class FourDigitSearchCriteria extends BaseDataModel {
    @observable private _policeDepartment: number = null;
    @observable private _vehicleTypeCode: VehicleTypeCode = null;
    @observable private _type1PlatesCount: number = null;
    @observable private _type2PlatesCount: number = null;
    @observable private _fourDigitSearchType: FourDigitSearchTypes = null;
    @observable private _numberFormat: NumberFormat = null;
    @observable private _plateStatus: PlateStatus = null;
    @observable private _fromRegNumber: string = null;
    @observable private _toRegNumber: string = null;
    @observable private _specificRegNumber: string = null;

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }

    @TypeSystem.propertyDecorator('number')
    public set policeDepartment(val: number) {
        this._policeDepartment = val;
    }

    public get policeDepartment(): number {
        return this._policeDepartment;
    }

    @TypeSystem.propertyDecorator(VehicleTypeCode ? VehicleTypeCode : moduleContext.moduleName + '.' + 'VehicleTypeCode')
    public set vehicleTypeCode(val: VehicleTypeCode) {
        this._vehicleTypeCode = val;
    }

    public get vehicleTypeCode(): VehicleTypeCode {
        return this._vehicleTypeCode;
    }

    @TypeSystem.propertyDecorator('number')
    public set type1PlatesCount(val: number) {
        this._type1PlatesCount = val;
    }

    public get type1PlatesCount(): number {
        return this._type1PlatesCount;
    }

    @TypeSystem.propertyDecorator('number')
    public set type2PlatesCount(val: number) {
        this._type2PlatesCount = val;
    }

    public get type2PlatesCount(): number {
        return this._type2PlatesCount;
    }

    @TypeSystem.propertyDecorator(FourDigitSearchTypes ? FourDigitSearchTypes : moduleContext.moduleName + '.' + 'FourDigitSearchTypes')
    public set fourDigitSearchType(val: FourDigitSearchTypes) {
        this._fourDigitSearchType = val;
    }

    public get fourDigitSearchType(): FourDigitSearchTypes {
        return this._fourDigitSearchType;
    }

    @TypeSystem.propertyDecorator(NumberFormat ? NumberFormat : moduleContext.moduleName + '.' + 'NumberFormat')
    public set numberFormat(val: NumberFormat) {
        this._numberFormat = val;
    }

    public get numberFormat(): NumberFormat {
        return this._numberFormat;
    }

    @TypeSystem.propertyDecorator('string')
    public set fromRegNumber(val: string) {
        this._fromRegNumber = val;
    }

    public get fromRegNumber(): string {
        return this._fromRegNumber;
    }

    @TypeSystem.propertyDecorator('string')
    public set toRegNumber(val: string) {
        this._toRegNumber = val;
    }

    public get toRegNumber(): string {
        return this._toRegNumber;
    }

    @TypeSystem.propertyDecorator(PlateStatus ? PlateStatus : moduleContext.moduleName + '.' + 'PlateStatus')
    public set plateStatus(val: PlateStatus) {
        this._plateStatus = val;
    }

    public get plateStatus(): PlateStatus {
        return this._plateStatus;
    }

    @TypeSystem.propertyDecorator('string')
    public set specificRegNumber(val: string) {
        this._specificRegNumber = val;
    }

    public get specificRegNumber(): string {
        return this._specificRegNumber;
    }
}

export interface IFourDigitsSearchResult {
    exceedResultLimiteWarnning: string;
    result: IPlateStatusResult[];
}

export interface IPlateStatusResult {
    number: string;
    plateStatus?: number;
}