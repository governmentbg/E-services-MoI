﻿import { runInAction } from "mobx";
import { ResourceHelpers } from 'eau-core';
import { ApplicationFormManagerBase, DocumentFormValidationContext, Section, EntityBasicData, RegiXDataService, EntityAddress } from 'eau-documents';
import { ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM } from '../models/ModelsAutoGenerated';
import { ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataUI } from '../ui/section-forms/ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataUI';
import { MerchantDataUI } from '../ui/section-forms/MerchantDataUI';
import { ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVMValidator } from '../validations/ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVMValidator';
import { MerchantDataValidator } from '../validations/MerchantDataValidator';

export class ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsManager extends ApplicationFormManagerBase<ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM>{

    //#region ApplicationFormManagerBase

    createDocument(obj: any): ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM {
        return new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsVM(obj);
    }

    //#endregion

    protected initDocumentForm() {
        super.initDocumentForm();

        this.additionalData.showWarningForNonPaidSlip = true;
    }

    protected createSections(validationContext: DocumentFormValidationContext): Section[] {
        var sections = super.createSections(validationContext);

        //Данни за търговеца
        var merchantData = new Section();
        merchantData.code = "merchantData";
        merchantData.title = ResourceHelpers.getResourceByProperty(m => m.merchantData, this.documentForm);
        merchantData.form = this.documentForm.merchantData;
        merchantData.formUICmp = MerchantDataUI;
        merchantData.validator = new MerchantDataValidator();;
        merchantData.validator.setValidationContext(validationContext);
        merchantData.validate = () => this.validateSection(merchantData);

        sections.splice(1, 0, merchantData);

        //Обстоятелства
        var circumstances = new Section();
        circumstances.code = "circumstances";
        circumstances.title = ResourceHelpers.getResourceByProperty(m => m.circumstances, this.documentForm);
        circumstances.form = this.documentForm.circumstances;
        circumstances.formUICmp = ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataUI;
        circumstances.validator = new ApplicationForIssuingOfTemporaryRegistrationPlatesToMerchantsDataVMValidator();
        circumstances.validator.setValidationContext(validationContext);
        circumstances.validate = () => this.validateSection(circumstances);

        sections.splice(2, 0, circumstances);

        return sections;
    }

    public loadRegiXEnityData(uic: string, entityBasicData: EntityBasicData): Promise<void> {
        let that = this;

        return new RegiXDataService().getEntityData(uic).then((entityData) => {
            if (entityData) {
                runInAction(() => {
                    entityBasicData.clearErrors(true);
                    entityBasicData.name = entityData.name;
                    entityBasicData.identifier = entityData.identifier;

                    if (entityData.address) {
                        that.documentForm.merchantData.entityManagementAddress = new EntityAddress();

                        that.documentForm.merchantData.entityManagementAddress.settlementName = entityData.address.settlement;
                        that.documentForm.merchantData.entityManagementAddress.settlementCode = entityData.address.settlementEKATTE;

                        that.documentForm.merchantData.entityManagementAddress.municipalityName = entityData.address.municipality;
                        that.documentForm.merchantData.entityManagementAddress.municipalityCode = entityData.address.municipalityEkatte;

                        that.documentForm.merchantData.entityManagementAddress.districtName = entityData.address.district;
                        that.documentForm.merchantData.entityManagementAddress.districtCode = entityData.address.districtEkatte;

                        that.documentForm.merchantData.entityManagementAddress.areaName = entityData.address.area;
                        that.documentForm.merchantData.entityManagementAddress.areaCode = entityData.address.areaEkatte;

                        that.documentForm.merchantData.entityManagementAddress.postCode = entityData.address.postCode;
                        that.documentForm.merchantData.entityManagementAddress.street = entityData.address.street;
                        that.documentForm.merchantData.entityManagementAddress.streetNumber = entityData.address.streetNumber;
                        that.documentForm.merchantData.entityManagementAddress.block = entityData.address.block;
                        that.documentForm.merchantData.entityManagementAddress.housingEstate = entityData.address.housingEstate;
                        that.documentForm.merchantData.entityManagementAddress.entrance = entityData.address.entrance;
                        that.documentForm.merchantData.entityManagementAddress.floor = entityData.address.floor;
                        that.documentForm.merchantData.entityManagementAddress.apartment = entityData.address.apartment;
                    }

                    return Promise.resolve();
                })
            } else {
                entityBasicData.name = null;
            }

            return Promise.resolve();
        });
    }
}