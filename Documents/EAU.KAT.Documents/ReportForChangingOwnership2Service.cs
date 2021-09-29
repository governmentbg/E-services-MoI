using EAU.Documents;
using EAU.KAT.Documents.Domain;
using EAU.KAT.Documents.Domain.Models.Forms;
using EAU.KAT.Documents.Models.Forms;
using EAU.KAT.Documents.XSLT;
using System;
using System.Collections.Generic;

namespace EAU.KAT.Documents
{
    public class ReportForChangingOwnershipV2Service : DocumentFormServiceBase<ReportForChangingOwnershipV2, ReportForChangingOwnershipV2VM>
    {
        public ReportForChangingOwnershipV2Service(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        protected override string DocumentTypeUri => DocumentTypeUrisKAT.ReportForChangingOwnershipV2;

        protected override PrintPreviewData PrintPreviewData
        {
            get
            {
                return new PrintPreviewData()
                {
                    Xslt = "R-3341_ReportForChangingOwnershipV2.xslt",
                    Resolver = new KATEmbeddedXmlResourceResolver()
                };
            }
        }

        public override string SignatureXpath
        {
            get
            {
                return "rpfo:ReportForChangingOwnershipV2/rpfo:XMLDigitalSignature";
            }
        }

        public override Dictionary<string, string> SignatureXPathNamespaces
        {
            get
            {
                return new Dictionary<string, string>()
                {
                    {"rpfo", "http://ereg.egov.bg/segment/R-3341"}
                };
            }
        }
    }
}