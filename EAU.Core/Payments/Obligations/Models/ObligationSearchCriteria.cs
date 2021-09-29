using EAU.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EAU.Payments.Obligations.Models
{
    /// <summary>
    /// Критерии за търсене на задължения.
    /// </summary>
    public class ObligationSearchCriteria : BasePagedSearchCriteria
    {
        /// <summary>
        /// Режими за търсене на задължения;
        /// </summary>
        public ObligationSearchModes? Mode { get; set; }

        /// <summary>
        /// Идентифкатор за задължение.
        /// </summary>
        public string ObligationIdentifier { get; set; }

        /// <summary>
        /// Видове задължения.
        /// </summary>
        public ObligationTypes? Type { get; set; }

        /// <summary>
        /// Статуси
        /// </summary>
        public List<ObligationStatuses> Statuses { get; set; }

        /// <summary>
        /// Идентификатор на заявител.
        /// </summary>
        public int? ApplicantID { get; set; }

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
}