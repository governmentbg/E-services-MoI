﻿using CNSys.Xml.Schema;
using EAU.Documents.Domain.Validations.XSDSchemas;
using System;
using System.Collections.Generic;
using System.Text;

namespace EAU.Migr.Documents.Domain.Validations.XSDSchemas
{
    public class EAUMigrDocumentsSchemaStore : CompositeXmlSchemaStoreBase
    {
        private bool _getWeakenedSchemasChanges;

        #region Constructors

        public EAUMigrDocumentsSchemaStore(bool getWeakenedSchemasChanges)
        {
            _getWeakenedSchemasChanges = getWeakenedSchemasChanges;
        }

        #endregion

        protected override IEnumerable<IXmlSchemaStore> GetStores()
        {
            yield return new EAUDocumentsSchemaStore(_getWeakenedSchemasChanges);
            yield return new SchemasEmbededResourceFileSchemaStore(_getWeakenedSchemasChanges);
        }

        #region Internal Types

        /// <summary>
        /// Load all schemas from the dll. 
        /// Prohibit all external resources from the schemas. 
        /// </summary>
        private class SchemasEmbededResourceFileSchemaStore : EmbededResourceFileSchemaStore
        {
            #region Constructors

            public SchemasEmbededResourceFileSchemaStore(bool getWeakenedSchemasChanges)
                : base(getWeakenedSchemasChanges)
            {
            }

            #endregion

            protected override string SchemasRegex
            {
                get { return "EAU.Migr.Documents.Domain.Validations.XSDSchemas.Schemas.(.*).xsd"; }
            }

            protected override string WeakenedSchemasRegex
            {
                get { return "EAU.Migr.Documents.Domain.Validations.XSDSchemas.WeakenedSchemas.(.*).xsd"; }
            }
        }

        #endregion
    }
}
