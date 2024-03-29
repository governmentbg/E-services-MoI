﻿import { EAUBaseDataService } from "eau-core";
import { AISKATNomenclatureItem } from "../models/AISKATNomenclatureItem";
import { AISKATHieraNomenclature } from "../models/AISKATHieraNomenclature";
import { UnitInfo } from "../models/ModelsAutoGenerated";

export class NomenclaturesDataService extends EAUBaseDataService {

    protected baseUrl(): string {

        return super.baseUrl() + "Nomenclatures";
    }

    public getDeliveryUnitsInfo(serviceID: number): Promise<UnitInfo[]> {
        return this.get<UnitInfo[]>(`DeliveryUnitsInfo/${serviceID}`, UnitInfo);
    }

    public getServingUnitsInfo(serviceID: number): Promise<UnitInfo[]> {
        return this.get<UnitInfo[]>(`ServingUnitsInfo/${serviceID}`, UnitInfo);
    }

    public getTerminationOfRegistrationOfVehicle(): Promise<AISKATNomenclatureItem[]> {
        return this.get<AISKATNomenclatureItem[]>('КАТ/TerminationOfRegistrationOfVehicle', AISKATNomenclatureItem);
    }

    public getReasonForIssuingDuplicateOfSRMPS(): Promise<AISKATNomenclatureItem[]> {
        return this.get<AISKATNomenclatureItem[]>('КАТ/ReasonForIssuingDuplicateOfSRMPS', AISKATNomenclatureItem);
    }

    public getCountries(): Promise<AISKATNomenclatureItem[]> {
        return this.get<AISKATNomenclatureItem[]>('KAT/Countries', AISKATNomenclatureItem);
    }

    public getProvinceCodes(policeDepartmentID: number, vehicleTypeCode: number): Promise<string[]> {
        return this.get<string[]>('KAT/RegistrationNumberProvinceCodes', 'string', { policeDepartmentID: policeDepartmentID, vehicleTypeCode: vehicleTypeCode });
    }

    public getVehicleBaseColors(): Promise<AISKATNomenclatureItem[]> {
        return this.get<AISKATNomenclatureItem[]>('KAT/VehicleBaseColors', AISKATNomenclatureItem);
    }
}