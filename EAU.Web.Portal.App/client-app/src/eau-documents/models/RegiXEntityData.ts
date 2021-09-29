import { BaseDataModel, TypeSystem, ObjectHelper } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';

export enum RegiXEntityDataIdentifierTypes {

    UIC = 1,

    Bulstat = 2,

}
TypeSystem.registerEnumInfo(RegiXEntityDataIdentifierTypes, 'RegiXEntityDataIdentifierTypes', moduleContext.moduleName)

@TypeSystem.typeDecorator('RegiXEntityData', moduleContext.moduleName)
export class RegiXEntityData extends BaseDataModel {

    //#region identifier

    @observable private _identifier: string = null;

    @TypeSystem.propertyDecorator('string')
    public set identifier(val: string) {
        this._identifier = val;
    }

    public get identifier(): string {
        return this._identifier;
    }

    //#endregion identifier 

    //#region identifierType

    @observable private _identifierType: RegiXEntityDataIdentifierTypes = null;

    @TypeSystem.propertyDecorator(RegiXEntityDataIdentifierTypes)
    public set identifierType(val: RegiXEntityDataIdentifierTypes) {
        this._identifierType = val;
    }

    public get identifierType(): RegiXEntityDataIdentifierTypes {
        return this._identifierType;
    }

    //#endregion identifierType 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string) {
        this._name = val;
    }

    public get name(): string {
        return this._name;
    }

    //#endregion name 

    //#region shortName

    @observable private _shortName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set shortName(val: string) {
        this._shortName = val;
    }

    public get shortName(): string {
        return this._shortName;
    }

    //#endregion shortName 

    //#region latinName

    @observable private _latinName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set latinName(val: string) {
        this._latinName = val;
    }

    public get latinName(): string {
        return this._latinName;
    }

    //#endregion latinName 

    //#region type

    @observable private _type: string = null;

    @TypeSystem.propertyDecorator('string')
    public set type(val: string) {
        this._type = val;
    }

    public get type(): string {
        return this._type;
    }

    //#endregion type 

    //#region typeCode

    @observable private _typeCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set typeCode(val: string) {
        this._typeCode = val;
    }

    public get typeCode(): string {
        return this._typeCode;
    }

    //#endregion typeCode 

    //#region status

    @observable private _status: string = null;

    @TypeSystem.propertyDecorator('string')
    public set status(val: string) {
        this._status = val;
    }

    public get status(): string {
        return this._status;
    }

    //#endregion status 

    //#region address

    @observable private _address: AddressType = null;

    @TypeSystem.propertyDecorator(moduleContext.moduleName + '.' + 'AddressType')
    public set address(val: AddressType) {
        this._address = val;
    }

    public get address(): AddressType {
        return this._address;
    }

    //#endregion address 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 

@TypeSystem.typeDecorator('AddressType', moduleContext.moduleName)
export class AddressType extends BaseDataModel {

    //#region countryCode

    @observable private _countryCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set countryCode(val: string) {
        this._countryCode = val;
    }

    public get countryCode(): string {

        if (ObjectHelper.isStringNullOrEmpty(this._countryCode))
            return null

        return this._countryCode;
    }

    //#endregion countryCode 

    //#region country

    @observable private _country: string = null;

    @TypeSystem.propertyDecorator('string')
    public set country(val: string) {
        this._country = val;
    }

    public get country(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._country))
            return null

        return this._country;
    }

    //#endregion country 

    //#region isForeign

    @observable private _isForeign: string = null;

    @TypeSystem.propertyDecorator('string')
    public set isForeign(val: string) {
        this._isForeign = val;
    }

    public get isForeign(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._isForeign))
            return null

        return this._isForeign;
    }

    //#endregion isForeign 

    //#region districtEkatte

    @observable private _districtEkatte: string = null;

    @TypeSystem.propertyDecorator('string')
    public set districtEkatte(val: string) {
        this._districtEkatte = val;
    }

    public get districtEkatte(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._districtEkatte))
            return null

        return this._districtEkatte;
    }

    //#endregion districtEkatte 

    //#region district

    @observable private _district: string = null;

    @TypeSystem.propertyDecorator('string')
    public set district(val: string) {
        this._district = val;
    }

    public get district(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._district))
            return null

        return this._district;
    }

    //#endregion district 

    //#region municipalityEkatte

    @observable private _municipalityEkatte: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipalityEkatte(val: string) {
        this._municipalityEkatte = val;
    }

    public get municipalityEkatte(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._municipalityEkatte))
            return null

        return this._municipalityEkatte;
    }

    //#endregion municipalityEkatte 

    //#region municipality

    @observable private _municipality: string = null;

    @TypeSystem.propertyDecorator('string')
    public set municipality(val: string) {
        this._municipality = val;
    }

    public get municipality(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._municipality))
            return null

        return this._municipality;
    }

    //#endregion municipality 

    //#region settlementEKATTE

    @observable private _settlementEKATTE: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlementEKATTE(val: string) {
        this._settlementEKATTE = val;
    }

    public get settlementEKATTE(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._settlementEKATTE))
            return null

        return this._settlementEKATTE;
    }

    //#endregion settlementEKATTE 

    //#region settlement

    @observable private _settlement: string = null;

    @TypeSystem.propertyDecorator('string')
    public set settlement(val: string) {
        this._settlement = val;
    }

    public get settlement(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._settlement))
            return null

        return this._settlement;
    }

    //#endregion settlement 

    //#region area

    @observable private _area: string = null;

    @TypeSystem.propertyDecorator('string')
    public set area(val: string) {
        this._area = val;
    }

    public get area(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._area))
            return null

        return this._area;
    }

    //#endregion area 

    //#region areaEkatte

    @observable private _areaEkatte: string = null;

    @TypeSystem.propertyDecorator('string')
    public set areaEkatte(val: string) {
        this._areaEkatte = val;
    }

    public get areaEkatte(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._areaEkatte))
            return null

        return this._areaEkatte;
    }

    //#endregion areaEkatte 

    //#region postCode

    @observable private _postCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set postCode(val: string) {
        this._postCode = val;
    }

    public get postCode(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._postCode))
            return null

        return this._postCode;
    }

    //#endregion postCode 

    //#region foreignPlace

    @observable private _foreignPlace: string = null;

    @TypeSystem.propertyDecorator('string')
    public set foreignPlace(val: string) {
        this._foreignPlace = val;
    }

    public get foreignPlace(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._foreignPlace))
            return null

        return this._foreignPlace;
    }

    //#endregion foreignPlace 

    //#region housingEstate

    @observable private _housingEstate: string = null;

    @TypeSystem.propertyDecorator('string')
    public set housingEstate(val: string) {
        this._housingEstate = val;
    }

    public get housingEstate(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._housingEstate))
            return null

        return this._housingEstate;
    }

    //#endregion housingEstate 

    //#region street

    @observable private _street: string = null;

    @TypeSystem.propertyDecorator('string')
    public set street(val: string) {
        this._street = val;
    }

    public get street(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._street))
            return null

        return this._street;
    }

    //#endregion street 

    //#region streetNumber

    @observable private _streetNumber: string = null;

    @TypeSystem.propertyDecorator('string')
    public set streetNumber(val: string) {
        this._streetNumber = val;
    }

    public get streetNumber(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._streetNumber))
            return null

        return this._streetNumber;
    }

    //#endregion streetNumber 

    //#region block

    @observable private _block: string = null;

    @TypeSystem.propertyDecorator('string')
    public set block(val: string) {
        this._block = val;
    }

    public get block(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._block))
            return null

        return this._block;
    }

    //#endregion block 

    //#region entrance

    @observable private _entrance: string = null;

    @TypeSystem.propertyDecorator('string')
    public set entrance(val: string) {
        this._entrance = val;
    }

    public get entrance(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._entrance))
            return null

        return this._entrance;
    }

    //#endregion entrance 

    //#region floor

    @observable private _floor: string = null;

    @TypeSystem.propertyDecorator('string')
    public set floor(val: string) {
        this._floor = val;
    }

    public get floor(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._floor))
            return null

        return this._floor;
    }

    //#endregion floor 

    //#region apartment

    @observable private _apartment: string = null;

    @TypeSystem.propertyDecorator('string')
    public set apartment(val: string) {
        this._apartment = val;
    }

    public get apartment(): string {
        if (ObjectHelper.isStringNullOrEmpty(this._apartment))
            return null

        return this._apartment;
    }

    //#endregion apartment 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
} 
