using EAU.Documents;
using EAU.PBZN.Documents.Domain;
using EAU.PBZN.Documents.Domain.Models.Forms;
using EAU.PBZN.Documents.Models.Forms;
using EAU.PBZN.Documents.XSLT;
using System;
using System.Collections.Generic;

namespace EAU.PBZN.Documents
{
    public class CertificateForAccidentService : DocumentFormServiceBase<CertificateForAccident, CertificateForAccidentVM>
    {
        public CertificateForAccidentService(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        protected override string DocumentTypeUri => DocumentTypeUrisPBZN.CertificateForAccident;

        protected override PrintPreviewData PrintPreviewData
        {
            get
            {
                return new PrintPreviewData()
                {
                    Xslt = "R-3143_CertificateForAccident.xslt",
                    Resolver = new PBZNEmbeddedXmlResourceResolver()
                };
            }
        }

        public override string SignatureXpath
        {
            get
            {
                return "cfa:CertificateForAccident/cfa:XMLDigitalSignature";
            }
        }

        public override Dictionary<string, string> SignatureXPathNamespaces
        {
            get
            {
                return new Dictionary<string, string>()
                {
                    {"cfa", "http://ereg.egov.bg/segment/R-3143"}
                };
            }
        }
    }
}