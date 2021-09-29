using System;

namespace EAU.BDS.Documents.Models
{
    public class TravelDocumentVM
    {
        public string IdentityNumber { get; set; }
      
        public DateTime? IdentitityIssueDate { get; set; }
    
        public DateTime? IdentitityExpireDate { get; set; }
        
        public IssuerCountryVM IdentityIssuer { get; set; }
        
        public string IdentityDocumentSeries { get; set; }
    }
}