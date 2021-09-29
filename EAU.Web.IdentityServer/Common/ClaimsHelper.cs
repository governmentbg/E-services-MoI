namespace EAU.Web.IdentityServer.Common
{
    internal static class ClaimsHelper
    {
        public static string BuildSubClaimValueForCIN(int cin) => $"cin:{cin}";
    }
}
