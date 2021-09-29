using EAU.Payments.Obligations.Models;
using EAU.Payments.RegistrationsData.Models;

namespace EAU.Payments.PaymentRequests.Models
{
    public class StartPaymentRequest
    {
        /// <summary>
        /// Име на задължено лице.
        /// </summary>
        public string ObligedPersonName { get; set; }

        /// <summary>
        /// Идентификатор на задължено лице.
        /// </summary>
        public string ObligedPersonIdent { get; set; }

        /// <summary>
        /// Идентификатор на задължено лице.
        /// </summary>
        public ObligedPersonIdentTypes? ObligedPersonIdentType { get; set; }

        /// <summary>
        /// Сума.
        /// </summary>
        public decimal? Amount { get; set; }

        /// <summary>
        /// Тип на регистрационните данни.
        /// </summary>
        public RegistrationDataTypes? RegistrationDataType { get; set; }

        /// <summary>
        /// Адрес за пренасочване след плащане през ПЕП
        /// </summary>
        public string OkCancelUrl { get; set; }
    }
}
