﻿INSERT [dbo].[data_service_limits] ([service_limit_id], [service_limit_ver_id], [service_code], [service_name], [requests_interval], [requests_number], [status], [is_last], [deactivation_ver_id], [created_by], [created_on], [updated_by], [updated_on]) VALUES (1, 10811, N'BASE_DATA_SERVICE_LIMIT', N'Лимитът не се прилага самостоятелно. Прилага се заедно с всички останали лимити. Най-малко 6 заявки за 1 секунда.', CAST(N'1900-01-01T01:01:01.000' AS DateTime), 2, 1, 1, NULL, 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset), 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset))
GO

INSERT [dbo].[data_service_limits] ([service_limit_id], [service_limit_ver_id], [service_code], [service_name], [requests_interval], [requests_number], [status], [is_last], [deactivation_ver_id], [created_by], [created_on], [updated_by], [updated_on]) VALUES (2, 10811, N'PEAU_REGISTRATION_LIMIT', N'Допустим максимален брой на заявки за регистрация на потребител.', CAST(N'1900-01-01T01:01:01.000' AS DateTime), 2, 1, 1, NULL, 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset), 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset))
GO

INSERT [dbo].[data_service_limits] ([service_limit_id], [service_limit_ver_id], [service_code], [service_name], [requests_interval], [requests_number], [status], [is_last], [deactivation_ver_id], [created_by], [created_on], [updated_by], [updated_on]) VALUES (3, 10811, N'PEAU_PASS_LIMIT', N'Допустим максимален брой на опити за заявяване на изпращане на забравена парола.', CAST(N'1900-01-01T01:01:01.000' AS DateTime), 2, 1, 1, NULL, 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset), 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset))
GO

INSERT [dbo].[data_service_limits] ([service_limit_id], [service_limit_ver_id], [service_code], [service_name], [requests_interval], [requests_number], [status], [is_last], [deactivation_ver_id], [created_by], [created_on], [updated_by], [updated_on]) VALUES (4, 10811, N'PEAU_FAILED_LOGIN_LIMIT', N'Допустим максимален брой на опити за автентикация на потребител.', CAST(N'1900-01-01T01:01:01.000' AS DateTime), 2, 1, 1, NULL, 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset), 2, CAST(N'2020-06-12T15:46:33.4460000+03:00' AS DateTimeOffset))
GO

INSERT [dbo].[data_service_limits] ([service_limit_id], [service_limit_ver_id], [service_code], [service_name], [requests_interval], [requests_number], [status], [is_last], [deactivation_ver_id], [created_by], [created_on], [updated_by], [updated_on]) VALUES (5, 118323, N'NAIF_NRBLD_LIMIT', N'Брой справки към НАИФ НРБЛД', CAST(N'1900-01-05T11:12:22.000' AS DateTime), 2, 1, 1, NULL, 2, CAST(N'2020-12-04T17:23:56.6830000+00:00' AS DateTimeOffset), 2, CAST(N'2020-12-04T17:23:56.6830000+00:00' AS DateTimeOffset))
GO