import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

export enum NomenclatureType {
    Irregularity = 1
}
TypeSystem.registerEnumInfo(NomenclatureType, 'NomenclatureType', moduleContext.moduleName)

@TypeSystem.typeDecorator('NomenclatureItem', moduleContext.moduleName)
export class NomenclatureItem extends BaseDataModel {

    @observable private _itemID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set itemID(val: number) {
        this._itemID = val;
    }

    public get itemID(): number {
        return this._itemID;
    }

    @observable private _type: NomenclatureType = null;

    @TypeSystem.propertyDecorator(NomenclatureType)
    public set type(val: NomenclatureType) {
        this._type = val;
    }

    public get type(): NomenclatureType {
        return this._type;
    } 

    @observable private _value: string = null;

    @TypeSystem.propertyDecorator('string')
    public set value(val: string) {
        this._value = val;
    }

    public get value(): string {
        return this._value;
    }

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string) {
        this._description = val;
    }

    public get description(): string {
        return this._description;
    }

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 