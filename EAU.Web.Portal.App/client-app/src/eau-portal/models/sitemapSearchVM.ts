import { observable } from "mobx";
import { TypeSystem, BaseDataModel } from 'cnsys-core';
import { moduleContext } from '../ModuleContext'

@TypeSystem.typeDecorator('SitemapSearchVM', moduleContext.moduleName)
export class SitemapSearchVM extends BaseDataModel {

    //#region searchFor

    @observable private _searchFor: string = null;

    @TypeSystem.propertyDecorator('string')
    public set searchFor(val: string) {
        this._searchFor = val;
    }

    public get searchFor(): string {
        return this._searchFor;
    }

    //#endregion searchFor

    //#region currentPage

    @observable private _currentPage: number = null;

    @TypeSystem.propertyDecorator('number')
    public set currentPage(val: number) {
        this._currentPage = val;
    }

    public get currentPage(): number {
        return this._currentPage;
    }

    //#endregion currentPage

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}