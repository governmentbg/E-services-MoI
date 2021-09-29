﻿import { ArrayHelper } from "cnsys-core";
import { EAUBaseValidator, ResourceHelpers } from "eau-core";
import { ApplicationFormVMBase, DocumentFormValidationContext, ElectronicServiceAuthorQualityType, ErrMsgCodesConstants, IApplicationFormManager, isApplicationFormManager, PersonIdentifierChoiceType } from "eau-documents";
import { action } from "mobx";
import { OwnersCollectionVM, PersonEntityChoiceType } from "../models/ModelsAutoGenerated";
import { VehicleOwnersValidator } from "./VehicleOwnersValidator";

export class VehicleOwnersCollectionValidator extends EAUBaseValidator<OwnersCollectionVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.owners).notEmpty()
            .withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.DefaultNotEmptyErrorMessage, new OwnersCollectionVM(), 'owners'));
        this.ruleFor(m => m.owners).setCollectionValidator(new VehicleOwnersValidator());
    }

    @action validate(obj: OwnersCollectionVM): boolean {
        let result = super.validate(obj);

        let ctx = this.getValidationContext();

        if (ctx.documentFormManager && isApplicationFormManager(ctx.documentFormManager) && obj.owners.length > 0) {
            let manager = ctx.documentFormManager as IApplicationFormManager;
            let app = manager.documentForm as ApplicationFormVMBase;
            let author = app.electronicServiceApplicant.recipientGroup.authorWithQuality.author

            if (manager.getSelectedAuthorQuality == ElectronicServiceAuthorQualityType.Personal
                && ArrayHelper.queryable.from(obj.owners).count(el =>
                    el.type == PersonEntityChoiceType.Person
                    && el.personIdentifier
                    && el.personIdentifier.itemElementName == author.itemPersonBasicData.identifier.itemElementName
                    && el.personIdentifier.item === author.itemPersonBasicData.identifier.item) == 0) {
                obj.addError(ResourceHelpers.formatErrorMessage('DOC_KAT_00002_E', obj, 'owners'));
                result = false;
            }

            if ((manager.getSelectedAuthorQuality == ElectronicServiceAuthorQualityType.Representative
                || manager.getSelectedAuthorQuality == ElectronicServiceAuthorQualityType.LegalRepresentative)
                && ArrayHelper.queryable.from(obj.owners).count(el =>
                    el.type == PersonEntityChoiceType.Person
                    && el.personIdentifier
                    && el.personIdentifier.itemElementName == author.itemPersonBasicData.identifier.itemElementName
                    && el.personIdentifier.item === author.itemPersonBasicData.identifier.item) > 0) {
                //Когато не подавате заявлението в лично качество, в полето "<Field>" не трябва да присъства заявителя. 
                //В случай че сте един от собствениците на ППС, моля, изберете да подадете заявлението по услугата в "лично качество“.
                obj.addError(ResourceHelpers.formatErrorMessage('DOC_KAT_00004_E', obj, 'owners'));
                result = false;
            }

            if (manager.getSelectedAuthorQuality == ElectronicServiceAuthorQualityType.LegalRepresentative
                && ArrayHelper.queryable.from(obj.owners).count(el => el.type == PersonEntityChoiceType.Entity) == 0) {
                //Като заявител на услугата в качеството на законен представител на юридическото лице, в полето "<Field>" трябва да въведете поне един собственик-юридическо лице/земеделски производител.
                obj.addError(ResourceHelpers.formatErrorMessage('DOC_KAT_00003_E', obj, 'owners'));
                result = false;
            }

            if (ArrayHelper.hasDuplicatedElements(obj.owners, (elA, elB) => {
                if (!elA || !elB || elA.type != elB.type) return false;

                if (elA.personIdentifier && elB.personIdentifier) {
                    return (elA.personIdentifier.item && elA.personIdentifier.item === elB.personIdentifier.item && elA.personIdentifier.itemElementName === elB.personIdentifier.itemElementName);
                } else {
                    return elA.entityIdentifier && elA.entityIdentifier === elB.entityIdentifier;
                }
            })) {
                obj.addError(ResourceHelpers.formatErrorMessage('DOC_GL_DuplicateElementsInCollection_E', obj, 'owners'));
                result = false;
            }
        }

        return result;
    }
}