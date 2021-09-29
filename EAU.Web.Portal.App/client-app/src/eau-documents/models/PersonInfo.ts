import { BaseDataModel, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

@TypeSystem.typeDecorator('CyrilicLatinName', moduleContext.moduleName)
export class CyrilicLatinName extends BaseDataModel {

    //#region cyrillic

    @observable private _cyrillic: string = null;

    @TypeSystem.propertyDecorator('string')
    public set cyrillic(val: string) {
        this._cyrillic = val;
    }

    public get cyrillic(): string {
        return this._cyrillic;
    }

    //#endregion cyrillic

    //#region latin

    @observable private _latin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set latin(val: string) {
        this._latin = val;
    }

    public get latin(): string {
        return this._latin;
    }

    //#endregion latin

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('PersonInfo', moduleContext.moduleName)
export class PersonInfo extends BaseDataModel {

    //#region pin

    @observable private _pin: string = null;

    @TypeSystem.propertyDecorator('string')
    public set pin(val: string) {
        this._pin = val;
    }

    public get pin(): string {
        return this._pin;
    }

    //#endregion pin

    //#region firstName

    @observable private _firstName: CyrilicLatinName = null;

    @TypeSystem.propertyDecorator(CyrilicLatinName)
    public set firstName(val: CyrilicLatinName) {
        this._firstName = val;
    }

    public get firstName(): CyrilicLatinName {
        return this._firstName;
    }

    //#endregion firstName

    //#region surname

    @observable private _surname: CyrilicLatinName = null;

    @TypeSystem.propertyDecorator(CyrilicLatinName)
    public set surname(val: CyrilicLatinName) {
        this._surname = val;
    }

    public get surname(): CyrilicLatinName {
        return this._surname;
    }

    //#endregion surname

    //#region family

    @observable private _family: CyrilicLatinName = null;

    @TypeSystem.propertyDecorator(CyrilicLatinName)
    public set family(val: CyrilicLatinName) {
        this._family = val;
    }

    public get family(): CyrilicLatinName {
        return this._family;
    }

    //#endregion family

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 
