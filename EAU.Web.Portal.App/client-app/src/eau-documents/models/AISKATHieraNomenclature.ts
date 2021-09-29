import { TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import { moduleContext } from '../ModuleContext';
import { AISKATNomenclatureItem } from './AISKATNomenclatureItem';

@TypeSystem.typeDecorator('AISKATHieraNomenclature', moduleContext.moduleName)
export class AISKATHieraNomenclature extends AISKATNomenclatureItem {
    @observable private _inner: AISKATNomenclatureItem[] = null;

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'AISKATNomenclatureItem')
    public set inner(val: AISKATNomenclatureItem[]) {
        this._inner = val;
    }

    public get inner(): AISKATNomenclatureItem[] {
        return this._inner;
    }
}
