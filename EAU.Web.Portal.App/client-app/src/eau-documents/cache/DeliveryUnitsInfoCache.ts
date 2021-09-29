﻿import { ItemCacheBase } from "cnsys-core";
import { UnitInfo } from "../models/ModelsAutoGenerated";
import { NomenclaturesDataService } from "../services/NomenclaturesDataService";

export class DeliveryUnitsInfoCache extends ItemCacheBase<UnitInfo[]> {

    protected generateValue(key: string): Promise<UnitInfo[]> {
        let nomenclaturesDataService = new NomenclaturesDataService();

        return nomenclaturesDataService.getDeliveryUnitsInfo(Number(key));
    }
}