using CNSys.Caching;
using EAU.Services.Nomenclatures.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace EAU.Services.Nomenclatures.Cache
{
    public interface IDeliveryUnitsInfoCache : IDataCacheItems<CachedDataInfo<List<UnitInfo>>, int>
    {
    }

    public class DeliveryUnitsInfo : IDeliveryUnitsInfo
    {
        private readonly IDeliveryUnitsInfoCache _deliveryUnitsInfoCache;

        public DeliveryUnitsInfo(IDeliveryUnitsInfoCache deliveryUnitsInfoCache)
        {
            _deliveryUnitsInfoCache = deliveryUnitsInfoCache;
        }

        public ValueTask EnsureLoadedAsync(int serviceID, CancellationToken cancellationToken)
        {
            return _deliveryUnitsInfoCache.GetItem(serviceID).EnsureCreatedAsync(cancellationToken);
        }

        public IEnumerable<UnitInfo> Search(int serviceID, out DateTime? lastModifiedDate)
        {
            var data = _deliveryUnitsInfoCache.GetItem(serviceID).Get();

            lastModifiedDate = data.LastModifiedDate;

            return data.Value;
        }
    }
}