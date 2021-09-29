﻿using CNSys.Data;
using Dapper;
using EAU.Nomenclatures.Models;
using EAU.Utilities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EAU.Nomenclatures.Repositories
{
    /// <summary>
    /// Клас, капсулиращ работата по извикването на процедурите от базата данни, свързани с видове документи
    /// </summary>
    internal class ServiceDeclarationDataContext : BaseDataContext
    {
        public ServiceDeclarationDataContext(IDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<(IEnumerable<ServiceDeclaration> reader, int? count)> SearchAsync(
          string p_service_ids,
          int? p_delcaration_id,
          int? p_start_index,
          int? p_page_size,
          bool? p_calculate_count,
          CancellationToken cancellationToken)
        {
            var parameters = new DynamicParameters();

            parameters.Add("p_service_ids", p_service_ids);
            parameters.Add("p_delcaration_id", p_delcaration_id);
            parameters.Add("p_start_index", p_start_index);
            parameters.Add("p_page_size", p_page_size);
            parameters.Add("p_calculate_count", p_calculate_count);

            parameters.Add("p_count", dbType: DbType.Int32, direction:ParameterDirection.Output);

            var res = await _dbContext.SPQueryAsync<ServiceDeclaration>("[nom].[p_n_d_service_declarations_search]", parameters, cancellationToken);

            int? count = parameters.Get<int?>("p_count");

            return (res, count);
        }

        public async Task CreateAsync(
            int? p_service_id,
            int? p_delcaration_id,
            CancellationToken cancellationToken)
        {

            var parameters = new DynamicParameters();
            parameters.Add("p_service_id", p_service_id);
            parameters.Add("p_delcaration_id", p_delcaration_id);

            await _dbContext.SPExecuteAsync("[nom].[p_n_d_service_declarations_create]", parameters, cancellationToken);
        }

        public async Task DeleteAsync(
            int? p_service_id,
            int? p_delcaration_id,
            CancellationToken cancellationToken)
        {

            var parameters = new DynamicParameters();
            parameters.Add("p_service_id", p_service_id);
            parameters.Add("p_delcaration_id", p_delcaration_id);

            await _dbContext.SPExecuteAsync("[nom].[p_n_d_service_declarations_delete]", parameters, cancellationToken);
        }
    }
}
