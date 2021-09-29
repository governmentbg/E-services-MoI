namespace EAU.BDS.Documents.Domain.Models
{
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
    [System.SerializableAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/nomenclature/R-1006")]
    public enum AddressForIssuing
    {
        /// <summary>
        /// Постоянен адрес
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("1")]
        PermanentAddress,

        /// <summary>
        /// Настоящ адрес
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("2")]
        CurrentAddress,
    }

    /// <summary>
    /// Цвят на очите
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
    [System.SerializableAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/nomenclature/R-1001")]
    public enum BIDEyesColor
    {
        /// <summary>
        /// КАФЯВИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("1288")]
        Brown,

        /// <summary>
        /// ПЪСТРИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("2472")]
        Colorful,

        /// <summary>
        /// СИНИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("2698")]
        Blue,

        /// <summary>
        /// СИВИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("2704")]
        Gray,

        /// <summary>
        /// ЗЕЛЕНИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("3227")]
        Green,

        /// <summary>
        /// ЧЕРНИ
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("3292")]
        Black,
    }

    /// <summary>
    /// Виза тип
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
    [System.SerializableAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/nomenclature/R-1005")]
    public enum VisaTypes
    {
        /// <summary>
        /// С виза/летищен трансфер
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("1")]
        VisaAirportTransfer,

        /// <summary>
        /// Краткосрочна
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("2")]
        ShortTerm,

        /// <summary>
        /// Транзитна
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("3")]
        Transit,

        /// <summary>
        /// Дългосрочна
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("4")]
        LongTerm,

        /// <summary>
        /// Без Виза
        /// </summary>
        [System.Xml.Serialization.XmlEnumAttribute("5")]
        None,
    }
}