using EAU.Documents.Models;

namespace EAU.BDS.Documents.Models
{
    public enum IssueDocumentFor
    {
        IssuedBulgarianIdentityDocumentsInPeriod = 1,

        OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments = 2
    }

    public class DocumentToBeIssuedForVM
    {
        public IssueDocumentFor ChooseIssuingDocument { get; set; }

        public IssuedBulgarianIdentityDocumentsInPeriodVM IssuedBulgarianIdentityDocumentsInPeriod { get; set; }
      
        public OtherIndormationConnectedWithIssuedBulgarianIdentityDocumentsVM OtherIndormationConnectedWithIssuedBulgarianIdentityDocuments { get; set; }
  
        public DocumentMustServeToVM DocumentMustServeTo { get; set; }
    }
}