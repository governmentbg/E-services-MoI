using CNSys.Data;
using Microsoft.Data.SqlClient;
using System.Linq;

namespace Microsoft.Extensions.Configuration
{
    public static class ConfigurationExtensions
    {
        public static ConnectionStringSettings GetEAUDBConnectionString(this IConfiguration configuration)
        {
            string connectionString = configuration.GetEAUSection().GetValue<string>("GL_DB_CONNECTION_STRING");

            if (string.IsNullOrEmpty(connectionString))
            {
                return configuration.GetConnectionStrings().FirstOrDefault().Value;
            }
            else
            {
                var builder = new SqlConnectionStringBuilder(connectionString);
                builder.ApplicationName = System.Reflection.Assembly.GetEntryAssembly().GetName().Name;

                return new ConnectionStringSettings("default", builder.ToString(), "Microsoft.Data.SqlClient");
            }
        }

        public static ConnectionStringSettings GetDBCacheDependencyConnectionString(this IConfiguration configuration)
        {
            string connectionString = configuration.GetEAUSection().GetValue<string>("GL_DB_CONNECTION_STRING");

            if (string.IsNullOrEmpty(connectionString))
            {
                return configuration.GetConnectionString("SqlDependency", "ConnectionStrings");
            }
            else
            {
                var builder = new SqlConnectionStringBuilder(connectionString);
                builder.ApplicationName = System.Reflection.Assembly.GetEntryAssembly().GetName().Name;

                return new ConnectionStringSettings("SqlDependency", builder.ToString(), "Microsoft.Data.SqlClient");
            }
        }
    }
}
