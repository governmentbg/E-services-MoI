﻿import { ItemCacheBase } from 'cnsys-core';
import { ActionType } from '../models/ModelsAutoGenerated';
import { ActionTypesDataService } from '../services/ActionTypesDataService';

export class ActionTypesDataCache extends ItemCacheBase<ActionType[]> {

    protected generateValue(key: string): Promise<ActionType[]> {

        let dataService = new ActionTypesDataService();

        return dataService.getOjectTypes();
    }
}