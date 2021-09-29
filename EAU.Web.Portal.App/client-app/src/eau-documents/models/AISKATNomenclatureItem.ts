import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

@TypeSystem.typeDecorator('AISKATNomenclatureItem', moduleContext.moduleName)
export class AISKATNomenclatureItem extends BaseDataModel {

    //#region code

    @observable private _code: number = null;

    @TypeSystem.propertyDecorator('number')
    public set code(val: number) {
        this._code = val;
    }

    public get code(): number {
        return this._code;
    }

    //#endregion code

    //#region nam

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string) {
        this._name = val;
    }

    public get name(): string {
        return this._name;
    }

    //#endregion nam

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}
