using CNSys;
using CNSys.Data;
using EAU.Audit.Models;
using EAU.Audit.Repositories;
using EAU.Security;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace EAU.Audit
{
    /// <summary>
    /// Интерфейс на услуга за работа с одит.
    /// </summary>
    public interface IAuditService
    {
        /// <summary>
        /// Създаване на запис в одит.
        /// </summary>
        /// <param name="logAction">Събитие за одит.</param>
        /// <param name="cancellationToken">Токлен за отказване.</param>
        /// <returns></returns>
        Task<OperationResult<LogActionResponse>> CreateLogActionAsync(LogAction logAction, CancellationToken cancellationToken);

        /// <summary>
        /// Търсене на записи в одит.
        /// </summary>
        /// <param name="logActionSearchCriteria">Критерии за търсене.</param>
        /// <param name="cancellationToken">Токен за отказване/param>
        /// <returns></returns>
        Task<IEnumerable<LogAction>> SearchLogActionsAsync(LogActionSearchCriteria logActionSearchCriteria, CancellationToken cancellationToken);

        /// <summary>
        /// Търсене на записи в одит.
        /// </summary>
        /// <param name="state">Състояние за странициране.</param>
        /// <param name="logActionSearchCriteria">Критерии за търсене.</param>
        /// <param name="cancellationToken">Токен за отказване/param>
        /// <returns></returns>
        Task<IEnumerable<LogAction>> SearchLogActionsAsync(PagedDataState state, LogActionSearchCriteria logActionSearchCriteria, CancellationToken cancellationToken);
    }

    /// <summary>
    /// Реализация на интерфейс IAuditService за работа с одит.
    /// </summary>
    public class AuditService : IAuditService
    {
        #region Private members

        private readonly ILogActionRepository _logActionRepository;
        private readonly IEAUUserAccessor _EAUUserAccessor;

        private readonly IDbContextOperationExecutor _dbContextOperationExecutor;

        #endregion

        #region Constructor

        public AuditService(ILogActionRepository logActionRepository, IEAUUserAccessor EAUUserAccessor,
            IDbContextOperationExecutor dbContextOperationExecutor)
        {
            _logActionRepository = logActionRepository ?? throw new ArgumentNullException(nameof(logActionRepository));
            _EAUUserAccessor = EAUUserAccessor;
            _dbContextOperationExecutor = dbContextOperationExecutor;
        }

        #endregion

        #region Public Interface

        public Task<OperationResult<LogActionResponse>> CreateLogActionAsync(LogAction logAction, CancellationToken cancellationToken)
        {
            return _dbContextOperationExecutor.ExecuteAsync(async (dbContext, innerToken) =>
            {
                return await CreateHelper(logAction, innerToken);
            }, cancellationToken);
        }

        public Task<IEnumerable<LogAction>> SearchLogActionsAsync(LogActionSearchCriteria logActionSearchCriteria, CancellationToken cancellationToken)
        {
            return _logActionRepository.SearchAsync(logActionSearchCriteria, cancellationToken);
        }

        public Task<IEnumerable<LogAction>> SearchLogActionsAsync(PagedDataState state, LogActionSearchCriteria logActionSearchCriteria, CancellationToken cancellationToken)
        {
            return _logActionRepository.SearchAsync(state, logActionSearchCriteria, cancellationToken);
        }

        #endregion

        #region Helpers

        private async Task<OperationResult<LogActionResponse>> CreateHelper(LogAction logAction, CancellationToken cancellationToken)
        {
            if (!logAction.ObjectType.HasValue
                    || !logAction.ActionType.HasValue
                    || !logAction.ActionType.HasValue
                    || !logAction.Functionality.HasValue)
                throw new NotSupportedException("invalid input params");

            if (!logAction.UserID.HasValue)
                logAction.UserID = _EAUUserAccessor?.User?.LocalClientID;

            if (!logAction.LoginSessionID.HasValue)
                logAction.LoginSessionID = _EAUUserAccessor?.User?.LoginSessionID;

            if (!logAction.LogActionDate.HasValue)
                logAction.LogActionDate = DateTime.Now;

            await _logActionRepository.CreateAsync(logAction, cancellationToken);

            if (!logAction.LogActionID.HasValue)
                throw new NotSupportedException("Log Action not created");

            var result = new OperationResult<LogActionResponse>(OperationResultTypes.SuccessfullyCompleted);

            result.Result = new LogActionResponse() { LogActionID = logAction.LogActionID };

            return result;
        }

        #endregion
    }

    /// <summary>
    /// Обект за отговор от работа с операция за създаване на запис в одита.
    /// </summary>
    public class LogActionResponse
    {
        /// <summary>
        /// Идентификатор на запис в одита.
        /// </summary>
        public long? LogActionID { get; set; }
    }
}
