namespace EAU.Payments.Obligations.Models
{
    /// <summary>
    /// Критерии за търсене на задължения.
    /// </summary>
    public class ObligationChannelSearchCriteria
    {
        /// <summary>
        /// Идентифкатор за задължение.
        /// </summary>
        public string ObligationIdentifier { get; set; }

        #region AND

        /// <summary>
        /// Тип на документ
        /// </summary>
        public DocTypes? DocumentType { get; set; }

        /// <summary>
        /// Серия на документ.
        /// </summary>
        public string DocumentSeries { get; set; }

        /// <summary>
        /// Номер на документ.
        /// </summary>
        public string DocumentNumber { get; set; }

        /// <summary>
        /// Сума.
        /// </summary>
        public decimal? Amount { get; set; }

        /// <summary>
        /// Идентификатор на задължено лице.
        /// </summary>
        public string ObligedPersonIdent { get; set; }

        /// <summary>
        /// Идентификатор на свидетелство за управление на МПС.
        /// </summary>
        public string DrivingLicenceNumber { get; set; }

        #endregion

        #region Service Instance

        /// <summary>
        /// Идентификатор на инстанция на услуга.
        /// </summary>
        public long? ServiceInstanceID { get; set; }

        /// <summary>
        /// УРИ на указания за плащане във wais.
        /// </summary>
        public string PaymentInstructionURI { get; set; }

        #endregion
    }
    
    /// <summary>
    /// Видове документи: 1 = Фиш/TICKET; 2 = Акт/ACT; 3 = Наказателно постановление/PENAL_DECREE;
    /// </summary>
    public enum DocTypes
    {
        /// <summary>
        /// Фиш.
        /// </summary>
        Fish = 1,

        /// <summary>
        /// Акт.
        /// </summary>
        AUAN = 2,

        /// <summary>
        /// Наказателно постановление.
        /// </summary>
        NP = 3
    }
}