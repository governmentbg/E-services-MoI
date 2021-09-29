import { TypeSystem } from 'cnsys-core'
import { moduleContext } from '../ModuleContext'

export enum DocumentModes {

    NewApplication = 1,

    RemovingIrregularitiesApplication = 2,

    EditDocument = 3,

    SignDocument = 4,

    EditAndSignDocument = 5,

    ViewDocument = 6,

    AdditionalApplication = 7
}
TypeSystem.registerEnumInfo(DocumentModes, 'DocumentModes', moduleContext.moduleName)