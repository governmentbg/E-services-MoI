﻿using EAU.Documents.Domain.Models;
using EAU.Documents.Domain.Models.Forms;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace EAU.KOS.Documents.Domain.Models.Forms
{
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.18020")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://ereg.egov.bg/segment/R-3113")]
	[System.Xml.Serialization.XmlRootAttribute(Namespace = "http://ereg.egov.bg/segment/R-3113", IsNullable = false)]
	public partial class ApplicationByFormAnnex10 : IApplicationForm
	{
		private ElectronicAdministrativeServiceHeader electronicAdministrativeServiceHeaderField;
		private ServiceTermType? serviceTermTypeField;
		private ServiceApplicantReceiptData serviceApplicantReceiptDataField;
		private ApplicationByFormAnnex10Data applicationByFormAnnex10DataField;
		private PoliceDepartment issuingPoliceDepartmentField;
		private List<Declaration> declarationsField;
		private List<AttachedDocument> attachedDocumentsField;
		private ElectronicAdministrativeServiceFooter electronicAdministrativeServiceFooterField;

		public ElectronicAdministrativeServiceHeader ElectronicAdministrativeServiceHeader
		{
			get
			{
				return this.electronicAdministrativeServiceHeaderField;
			}
			set
			{
				this.electronicAdministrativeServiceHeaderField = value;
			}
		}

		public ServiceTermType? ServiceTermType
		{
			get
			{
				return this.serviceTermTypeField;
			}
			set
			{
				this.serviceTermTypeField = value;
			}
		}

		[XmlIgnoreAttribute()]
		public bool ServiceTermTypeSpecified
		{
			get
			{
				return ServiceTermType.HasValue;
			}
		}

		public ServiceApplicantReceiptData ServiceApplicantReceiptData
		{
			get
			{
				return this.serviceApplicantReceiptDataField;
			}
			set
			{
				this.serviceApplicantReceiptDataField = value;
			}
		}

		public ApplicationByFormAnnex10Data ApplicationByFormAnnex10Data
		{
			get
			{
				return this.applicationByFormAnnex10DataField;
			}
			set
			{
				this.applicationByFormAnnex10DataField = value;
			}
		}

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

		[XmlArrayItemAttribute(IsNullable = false)]
		public List<Declaration> Declarations
		{
			get
			{
				return this.declarationsField;
			}
			set
			{
				this.declarationsField = value;
			}
		}

		[XmlArrayItemAttribute(IsNullable = false)]
		public List<AttachedDocument> AttachedDocuments
		{
			get
			{
				return this.attachedDocumentsField;
			}
			set
			{
				this.attachedDocumentsField = value;
			}
		}

		public ElectronicAdministrativeServiceFooter ElectronicAdministrativeServiceFooter
		{
			get
			{
				return this.electronicAdministrativeServiceFooterField;
			}
			set
			{
				this.electronicAdministrativeServiceFooterField = value;
			}
		}
	}
}