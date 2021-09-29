﻿import { ItemCacheBase } from 'cnsys-core';
import { DocumentTemplateField } from "../models/ModelsAutoGenerated";
import { NomenclaturesDataService } from '../services/NomenclaturesDataService';

export class DocumentTemplateFieldsCache extends ItemCacheBase<DocumentTemplateField[]> {

    protected generateValue(key: string): Promise<DocumentTemplateField[]> {

        let nomenclaturesDataService = new NomenclaturesDataService();

        return nomenclaturesDataService.getDocumentTemplateFields();
    }
}