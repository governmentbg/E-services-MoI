using AutoMapper;
using EAU.Documents.Domain.Models;
using EAU.Documents.Models;
using EAU.Documents.Models.Mapping;
using EAU.KOS.Documents.Domain.Models;
using EAU.KOS.Documents.Domain.Models.Forms;
using EAU.KOS.Documents.Models.Forms;

namespace EAU.KOS.Documents.Models.Mapping
{
    public class EAUKOSDocumentsAutoMapperProfile : Profile
    {
        public EAUKOSDocumentsAutoMapperProfile()
        {
            CreateDomainToViewModelMap();
            CreateViewToDomainModelMap();
        }

        private void CreateDomainToViewModelMap()
        {
            #region ApplicationByFormAnnex9

            CreateMap<ApplicationByFormAnnex9, ApplicationByFormAnnex9VM>()
                 .ForMember(d => d.Declarations, (config) => config.Ignore())
                 .AfterMap((s, d, ctx) =>
                 {
                     MapperHelper.MapApplicationDomainToViewModel(ctx.Mapper, s, d);

                     d.Circumstances = ctx.Mapper.Map<ApplicationByFormAnnex9DataVM>(s.ApplicationByFormAnnex9Data);
                     d.Circumstances.IssuingPoliceDepartment = s.IssuingPoliceDepartment;
                 });

            CreateMap<ApplicationByFormAnnex9Data, ApplicationByFormAnnex9DataVM>()
                .AfterMap((s, d, ctx) =>
                {
                    d.PersonalInformation = ctx.Mapper.Map<PersonalInformation, PersonalInformationVM>(s.PersonalInformation);
                    d.PersonGrantedFromIssuingDocument = ctx.Mapper.Map<PersonBasicData, PersonBasicDataVM>(s.PersonGrantedFromIssuingDocument);
                });

            #endregion

            #region ApplicationByFormAnnex10

            CreateMap<ApplicationByFormAnnex10, ApplicationByFormAnnex10VM>()
                 .ForMember(d => d.Declarations, (config) => config.Ignore())
                 .AfterMap((s, d, ctx) =>
                 {
                     MapperHelper.MapApplicationDomainToViewModel(ctx.Mapper, s, d);

                     d.Circumstances = ctx.Mapper.Map<ApplicationByFormAnnex10DataVM>(s.ApplicationByFormAnnex10Data);
                     d.Circumstances.IssuingPoliceDepartment = s.IssuingPoliceDepartment;
                 });

            CreateMap<ApplicationByFormAnnex10Data, ApplicationByFormAnnex10DataVM>()
                .AfterMap((s, d, ctx) =>
                {
                    d.PersonalInformation = ctx.Mapper.Map<PersonalInformation, PersonalInformationVM>(s.PersonalInformation);
                    d.PersonGrantedFromIssuingDocument = ctx.Mapper.Map<PersonBasicData, PersonBasicDataVM>(s.PersonGrantedFromIssuingDocument);
                });

            #endregion

            #region NotificationForNonFirearm

            CreateMap<NotificationForNonFirearm, NotificationForNonFirearmVM>()
                 .ForMember(d => d.Declarations, (config) => config.Ignore())
                 .AfterMap((s, d, ctx) =>
                 {
                     MapperHelper.MapApplicationDomainToViewModel(ctx.Mapper, s, d);

                     d.Circumstances = ctx.Mapper.Map<NotificationForNonFirearmDataVM>(s.NotificationForNonFirearmData);
                 });

            CreateMap<NotificationForNonFirearmData, NotificationForNonFirearmDataVM>()
                .AfterMap((s, d, ctx) =>
                {
                    d.ApplicantInformation = ctx.Mapper.Map<PersonalInformation, PersonalInformationVM>(s.ApplicantInformation);
                });

            #endregion

            #region NotificationForFirearm

            CreateMap<NotificationForFirearm, NotificationForFirearmVM>()
                 .ForMember(d => d.Declarations, (config) => config.Ignore())
                 .AfterMap((s, d, ctx) =>
                 {
                     MapperHelper.MapApplicationDomainToViewModel(ctx.Mapper, s, d);

                     d.Circumstances = ctx.Mapper.Map<NotificationForFirearmDataVM>(s.NotificationForFirearmData);
                 });

            CreateMap<NotificationForFirearmData, NotificationForFirearmDataVM>()
                .AfterMap((s, d, ctx) =>
                {
                    d.ApplicantInformation = ctx.Mapper.Map<PersonalInformation, PersonalInformationVM>(s.ApplicantInformation);
                });

            #endregion
        }

        private void CreateViewToDomainModelMap()
        {
            #region ApplicationByFormAnnex9

            CreateMap<ApplicationByFormAnnex9VM, ApplicationByFormAnnex9>()
                .ForMember(d => d.Declarations, (config) => config.Ignore())
                .AfterMap((s, d, ctx) =>
                 {
                     MapperHelper.MapApplicationViewModelToDomain(ctx.Mapper, s, d);

                     if (s.Circumstances != null)
                     {
                         d.ApplicationByFormAnnex9Data = ctx.Mapper.Map<ApplicationByFormAnnex9Data>(s.Circumstances);
                         d.IssuingPoliceDepartment = s.Circumstances.IssuingPoliceDepartment;
                     }
                 });

            CreateMap<ApplicationByFormAnnex9DataVM, ApplicationByFormAnnex9Data>()
                .AfterMap((s, d, ctx) =>
                {
                    d.PersonalInformation = ctx.Mapper.Map<PersonalInformationVM, PersonalInformation>(s.PersonalInformation);
                    d.PersonGrantedFromIssuingDocument = ctx.Mapper.Map<PersonBasicDataVM, PersonBasicData>(s.PersonGrantedFromIssuingDocument);
                });

            #endregion

            #region ApplicationByFormAnnex10

            CreateMap<ApplicationByFormAnnex10VM, ApplicationByFormAnnex10>()
                .ForMember(d => d.Declarations, (config) => config.Ignore())
                .AfterMap((s, d, ctx) =>
                {
                    MapperHelper.MapApplicationViewModelToDomain(ctx.Mapper, s, d);

                    if (s.Circumstances != null)
                    {
                        d.ApplicationByFormAnnex10Data = ctx.Mapper.Map<ApplicationByFormAnnex10Data>(s.Circumstances);
                        d.IssuingPoliceDepartment = s.Circumstances.IssuingPoliceDepartment;
                    }
                });

            CreateMap<ApplicationByFormAnnex10DataVM, ApplicationByFormAnnex10Data>()
                .AfterMap((s, d, ctx) =>
                {
                    d.PersonalInformation = ctx.Mapper.Map<PersonalInformationVM, PersonalInformation>(s.PersonalInformation);
                    d.PersonGrantedFromIssuingDocument = ctx.Mapper.Map<PersonBasicDataVM, PersonBasicData>(s.PersonGrantedFromIssuingDocument);
                });

            #endregion

            #region NotificationForNonFirearm

            CreateMap<NotificationForNonFirearmVM, NotificationForNonFirearm>()
                .ForMember(d => d.Declarations, (config) => config.Ignore())
                .AfterMap((s, d, ctx) =>
                {
                    MapperHelper.MapApplicationViewModelToDomain(ctx.Mapper, s, d);

                    if (s.Circumstances != null)
                    {
                        d.NotificationForNonFirearmData = ctx.Mapper.Map<NotificationForNonFirearmData>(s.Circumstances);
                    }
                });

            CreateMap<NotificationForNonFirearmDataVM, NotificationForNonFirearmData>()
                .AfterMap((s, d, ctx) =>
                {
                    d.ApplicantInformation = ctx.Mapper.Map<PersonalInformationVM, PersonalInformation>(s.ApplicantInformation);
                });

            #endregion

            #region NotificationForFirearmVM

            CreateMap<NotificationForFirearmVM, NotificationForFirearm>()
                .ForMember(d => d.Declarations, (config) => config.Ignore())
                .AfterMap((s, d, ctx) =>
                {
                    MapperHelper.MapApplicationViewModelToDomain(ctx.Mapper, s, d);

                    if (s.Circumstances != null)
                    {
                        d.NotificationForFirearmData = ctx.Mapper.Map<NotificationForFirearmData>(s.Circumstances);
                    }
                });

            CreateMap<NotificationForFirearmDataVM, NotificationForFirearmData>()
                .AfterMap((s, d, ctx) =>
                {
                    d.ApplicantInformation = ctx.Mapper.Map<PersonalInformationVM, PersonalInformation>(s.ApplicantInformation);
                });

            #endregion
        }
    }
}