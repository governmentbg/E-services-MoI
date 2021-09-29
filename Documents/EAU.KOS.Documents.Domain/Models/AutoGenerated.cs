using EAU.Documents.Domain.Models;
using System.Collections.Generic;

namespace EAU.KOS.Documents.Domain.Models
{
	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3042")]
	public partial class ApplicationByFormAnnex9Data
	{
		private PersonalInformation personalInformationField;
		private string issuingDocumentField;
		private PersonBasicData personGrantedFromIssuingDocumentField;
		private string specificDataForIssuingDocumentsForKOSField;
		private bool? agreementToReceiveERefusalField;
		public PersonalInformation PersonalInformation
		{
			get
			{
				return this.personalInformationField;
			}
			set
			{
				this.personalInformationField = value;
			}
		}
		public string IssuingDocument
		{
			get
			{
				return this.issuingDocumentField;
			}
			set
			{
				this.issuingDocumentField = value;
			}
		}
		public PersonBasicData PersonGrantedFromIssuingDocument
		{
			get
			{
				return this.personGrantedFromIssuingDocumentField;
			}
			set
			{
				this.personGrantedFromIssuingDocumentField = value;
			}
		}
		public string SpecificDataForIssuingDocumentsForKOS
		{
			get
			{
				return this.specificDataForIssuingDocumentsForKOSField;
			}
			set
			{
				this.specificDataForIssuingDocumentsForKOSField = value;
			}
		}
		public bool? AgreementToReceiveERefusal
		{
			get
			{
				return this.agreementToReceiveERefusalField;
			}
			set
			{
				this.agreementToReceiveERefusalField = value;
			}
		}
		[System.Xml.Serialization.XmlIgnoreAttribute()]
		public bool AgreementToReceiveERefusalSpecified
		{
			get
			{
				return AgreementToReceiveERefusal.HasValue;
			}
		}
	}

	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3114")]
	public partial class ApplicationByFormAnnex10Data
	{
		private PersonalInformation personalInformationField;
		private string issuingDocumentField;
		private PersonBasicData personGrantedFromIssuingDocumentField;
		private string specificDataForIssuingDocumentsForKOSField;
		private bool? agreementToReceiveERefusalField;
		public PersonalInformation PersonalInformation
		{
			get
			{
				return this.personalInformationField;
			}
			set
			{
				this.personalInformationField = value;
			}
		}
		public string IssuingDocument
		{
			get
			{
				return this.issuingDocumentField;
			}
			set
			{
				this.issuingDocumentField = value;
			}
		}
		public PersonBasicData PersonGrantedFromIssuingDocument
		{
			get
			{
				return this.personGrantedFromIssuingDocumentField;
			}
			set
			{
				this.personGrantedFromIssuingDocumentField = value;
			}
		}
		public string SpecificDataForIssuingDocumentsForKOS
		{
			get
			{
				return this.specificDataForIssuingDocumentsForKOSField;
			}
			set
			{
				this.specificDataForIssuingDocumentsForKOSField = value;
			}
		}
		public bool? AgreementToReceiveERefusal
		{
			get
			{
				return this.agreementToReceiveERefusalField;
			}
			set
			{
				this.agreementToReceiveERefusalField = value;
			}
		}
		[System.Xml.Serialization.XmlIgnoreAttribute()]
		public bool AgreementToReceiveERefusalSpecified
		{
			get
			{
				return AgreementToReceiveERefusal.HasValue;
			}
		}
	}

	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3053")]
	public partial class NotificationForFirearmData
	{
		private PoliceDepartment issuingPoliceDepartmentField;
		private PersonalInformation applicantInformationField;
		private string purchaserUICField;
		private bool? agreementToReceiveERefusalField;
		private List<TechnicalSpecificationOfWeapon> technicalSpecificationsOfWeaponsField;
		public PoliceDepartment IssuingPoliceDepartment
		{
			get
			{
				return this.issuingPoliceDepartmentField;
			}
			set
			{
				this.issuingPoliceDepartmentField = value;
			}
		}
		public PersonalInformation ApplicantInformation
		{
			get
			{
				return this.applicantInformationField;
			}
			set
			{
				this.applicantInformationField = value;
			}
		}
		public string PurchaserUIC
		{
			get
			{
				return this.purchaserUICField;
			}
			set
			{
				this.purchaserUICField = value;
			}
		}
		public bool? AgreementToReceiveERefusal
		{
			get
			{
				return this.agreementToReceiveERefusalField;
			}
			set
			{
				this.agreementToReceiveERefusalField = value;
			}
		}
		[System.Xml.Serialization.XmlIgnoreAttribute()]
		public bool AgreementToReceiveERefusalSpecified
		{
			get
			{
				return AgreementToReceiveERefusal.HasValue;
			}
		}
		[System.Xml.Serialization.XmlArrayItemAttribute(IsNullable = false)]
		public List<TechnicalSpecificationOfWeapon> TechnicalSpecificationsOfWeapons
		{
			get
			{
				return this.technicalSpecificationsOfWeaponsField;
			}
			set
			{
				this.technicalSpecificationsOfWeaponsField = value;
			}
		}
	}

	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3054")]
	public partial class TechnicalSpecificationOfWeapon
	{
		private string weaponTypeCodeField;
		private string weaponTypeNameField;
		private string weaponPurposeCodeField;
		private string weaponPurposeNameField;
		private string makeField;
		private string modelField;
		private string caliberField;
		private string weaponNumberField;
		public string WeaponTypeCode
		{
			get
			{
				return this.weaponTypeCodeField;
			}
			set
			{
				this.weaponTypeCodeField = value;
			}
		}
		public string WeaponTypeName
		{
			get
			{
				return this.weaponTypeNameField;
			}
			set
			{
				this.weaponTypeNameField = value;
			}
		}
		public string WeaponPurposeCode
		{
			get
			{
				return this.weaponPurposeCodeField;
			}
			set
			{
				this.weaponPurposeCodeField = value;
			}
		}
		public string WeaponPurposeName
		{
			get
			{
				return this.weaponPurposeNameField;
			}
			set
			{
				this.weaponPurposeNameField = value;
			}
		}
		public string Make
		{
			get
			{
				return this.makeField;
			}
			set
			{
				this.makeField = value;
			}
		}
		public string Model
		{
			get
			{
				return this.modelField;
			}
			set
			{
				this.modelField = value;
			}
		}
		public string Caliber
		{
			get
			{
				return this.caliberField;
			}
			set
			{
				this.caliberField = value;
			}
		}
		public string WeaponNumber
		{
			get
			{
				return this.weaponNumberField;
			}
			set
			{
				this.weaponNumberField = value;
			}
		}
	}

	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3051")]
	public partial class NotificationForNonFirearmData
	{
		private PoliceDepartment issuingPoliceDepartmentField;
		private WeaponNoticeType weaponNoticeTypeField;
		private PersonalInformation applicantInformationField;
		private string purchaserInformationField;
		private List<TechnicalSpecificationOfWeapon> technicalSpecificationsOfWeaponsField;
		public PoliceDepartment IssuingPoliceDepartment
		{
			get
			{
				return this.issuingPoliceDepartmentField;
			}
			set
			{
				this.issuingPoliceDepartmentField = value;
			}
		}
		public WeaponNoticeType WeaponNoticeType
		{
			get
			{
				return this.weaponNoticeTypeField;
			}
			set
			{
				this.weaponNoticeTypeField = value;
			}
		}
		public PersonalInformation ApplicantInformation
		{
			get
			{
				return this.applicantInformationField;
			}
			set
			{
				this.applicantInformationField = value;
			}
		}
		public string PurchaserInformation
		{
			get
			{
				return this.purchaserInformationField;
			}
			set
			{
				this.purchaserInformationField = value;
			}
		}
		[System.Xml.Serialization.XmlArrayItemAttribute(IsNullable = false)]
		public List<TechnicalSpecificationOfWeapon> TechnicalSpecificationsOfWeapons
		{
			get
			{
				return this.technicalSpecificationsOfWeaponsField;
			}
			set
			{
				this.technicalSpecificationsOfWeaponsField = value;
			}
		}
	}
}