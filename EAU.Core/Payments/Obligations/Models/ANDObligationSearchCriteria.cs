using EAU.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EAU.Payments.Obligations.Models
{
    /// <summary>
    /// Критерии за търсене на задължения към АНД.
    /// </summary>
    public class ANDObligationSearchCriteria
    {
        /// <summary>
        /// Режим за търсене на задължения към АНД: 1 = По задължено лице; 2 = По задължение;
        /// </summary>
        public ANDObligationSearchMode? Mode { get; set; }

        /// <summary>
        /// Тип на документ.
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
    }

    /// <summary>
    /// Режим за търсене на задължения към АНД: 1 = По задължено лице; 2 = По задължение;
    /// </summary>
    public enum ANDObligationSearchMode
    {
        /// <summary>
        /// По задължено лице;
        /// </summary>
        ObligedPerson = 1,

        /// <summary>
        /// По задължение;
        /// </summary>
        Document = 2,
    }
}