using EAU.Common;
using EAU.Net.Http.Authentication;
using EAU.Security;
using EAU.Web.Http;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Org.BouncyCastle.Utilities.IO.Pem;
using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Logging;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddHttpContextEAUUserAccessor(this IServiceCollection services)
        {
            services.TryAddSingleton<EAUHttpContextUserAccessor>();
            services.TryAddSingleton<IEAUUserAccessor>((sp) => { return sp.GetRequiredService<EAUHttpContextUserAccessor>(); });
            services.TryAddSingleton<IClaimsPrincipalAccessor>((sp) => { return sp.GetRequiredService<EAUHttpContextUserAccessor>(); });
            services.TryAddSingleton<IEAUUserImpersonation>((sp) => { return sp.GetRequiredService<EAUHttpContextUserAccessor>(); });

            return services;
        }

        public static IServiceCollection AddEAUPrincipalTransformation(this IServiceCollection services)
        {
            // това е AddSingleton, а не TryAddSingleton, защото има default-на имплементация на IClaimsTransformation и трябва да се замести!
            services.AddSingleton(typeof(IClaimsTransformation), typeof(EAUPrincipalTranformation));

            return services;
        }

        /// <summary>
        /// Добавя автернтификация с cookie и OpenIdConnect
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <param name="configureCookieOptions"></param>
        /// <param name="configureOpenIdConnectOptions"></param>
        /// <returns></returns>
        public static AuthenticationBuilder AddCookieAuthenticationWithOpenIdConnectChallenge(this IServiceCollection services, IConfiguration configuration,
            Action<CookieAuthenticationOptions> configureCookieOptions = null, Action<OpenIdConnectOptions> configureOpenIdConnectOptions = null)
        {
            // изчистваме inbound claim type map, която е по подразбиране, 
            // защото иначе клеймовете ще се създават с claimtype , който е дефиниран от microsoft 
            System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            var ret = services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            })
                .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
                {
                    options.Cookie.HttpOnly = true;
                    //Конфигурираме продължителността на сесията като към потребителската сесия добавим допълнително време.
                    options.ExpireTimeSpan = TimeSpan.FromMilliseconds(configuration.GetEAUSection().Get<GlobalOptions>().GL_EAU_USR_SESSION_INACTIVITY_INTERVAL.TotalMilliseconds + 20000);
                    options.SlidingExpiration = true;
                    configureCookieOptions?.Invoke(options);
                    configuration.GetEAUSection().GetSection("CookieAuthentication").Bind(options);
                })
                .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, openIdConnectSetup =>
                {
                    openIdConnectSetup.Authority = configuration.GetEAUSection().Get<GlobalOptions>().GL_IDSRV_URL;
                    openIdConnectSetup.ResponseType = "code";
                    openIdConnectSetup.UsePkce = true;
                    openIdConnectSetup.GetClaimsFromUserInfoEndpoint = true;
                    openIdConnectSetup.SaveTokens = true;
                    openIdConnectSetup.RequireHttpsMetadata = true;

                    // default mappings for user info claims
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.CIN, EAUClaimTypes.CIN);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.UserIdentifiable, EAUClaimTypes.UserIdentifiable);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.LoginSessionID, EAUClaimTypes.LoginSessionID);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.PersonIdentifier, EAUClaimTypes.PersonIdentifier);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.PersonIdentifierType, EAUClaimTypes.PersonIdentifierType);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.PersonNames, EAUClaimTypes.PersonNames);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(EAUClaimTypes.UIC, EAUClaimTypes.UIC);
                    openIdConnectSetup.ClaimActions.MapUniqueJsonKey(ClaimTypes.WindowsAccountName, ClaimTypes.WindowsAccountName);
                    openIdConnectSetup.ClaimActions.Add(new AspNetCore.Authentication.OAuth.Claims.JsonKeyClaimAction("role", null, "role"));

                    // default handling
                    // ако заявката е AJAX - връщане на 401 Unauthorized
                    // ако заявката е стандарна - само се подсигурява, че Referer е от същия домейн, т.е от приложението.
                    openIdConnectSetup.Events.OnRedirectToIdentityProvider = e =>
                    {
                        bool isAjaxCall = e.Request.Headers != null && e.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
                        var cookieName = configuration.GetEAUSection().GetSection("CookieAuthentication").GetSection("Cookie").GetValue<string>("Name");

                        if (isAjaxCall)
                        {
                            if (e.Request.Cookies.ContainsKey(cookieName))
                                e.Response.Headers.Add("Session-Expired", "Session-Expired");

                            e.Response.Headers.Remove("Set-Cookie");
                            e.Response.StatusCode = StatusCodes.Status401Unauthorized;
                            e.HandleResponse();

                            return System.Threading.Tasks.Task.CompletedTask;
                        }

                        var preventRedirectToReferer = configuration.GetEAUSection().GetSection("OpenIdConnectAuthentication").GetValue<bool?>("PreventRedirectToReferer");
                        bool preventSettingRedirectUri = preventRedirectToReferer != null && preventRedirectToReferer.Value;

                        if (preventSettingRedirectUri == false && !string.IsNullOrWhiteSpace(e.Request.Headers["Referer"]))
                        {
                            var referer = e.Request.Headers["Referer"];
                            var refUri = new Uri(referer);

                            e.ProtocolMessage.UiLocales = e.Request.Cookies["currentLang"];

                            if (string.Compare(refUri.Host, e.Request.Host.Host, true) == 0)
                                e.Properties.RedirectUri = referer;
                        }

                        return System.Threading.Tasks.Task.CompletedTask;
                    };

                    openIdConnectSetup.Events.OnRedirectToIdentityProviderForSignOut = e =>
                    {
                        ////При изтичане на сесията на потребителя си сетваме id_token-а, който предварително сме си запазили, 
                        ////сетваме флага за редиректване към зададено от нас uri на true
                        if (e.Properties.Parameters.ContainsKey("postlogoutregirect"))
                            e.ProtocolMessage.SetParameter("postlogoutregirect", "true");

                        return System.Threading.Tasks.Task.CompletedTask;
                    };

                    // handle на отказ на потребителя от вход - просто връщаме където
                    // е бил преди редиректа към IdentityProvider-а
                    openIdConnectSetup.Events.OnAccessDenied = ctx =>
                    {
                        if (false == string.IsNullOrWhiteSpace(ctx.ReturnUrl))
                        {
                            var retUri = new Uri(ctx.ReturnUrl);

                            if (string.Compare(retUri.Host, ctx.Request.Host.Host, true) == 0)
                            {
                                ctx.Response.Redirect(ctx.ReturnUrl);
                                ctx.HandleResponse();
                            }
                        }

                        return System.Threading.Tasks.Task.CompletedTask;
                    };

                    // тук в този хендлър е мястото където може да се прихваща тази грешка, която се получава
                    // ако дадеш back в браузъра отново към IS, след като си се логнал вече например.
                    openIdConnectSetup.Events.OnRemoteFailure = ctx =>
                    {
                        if (ctx.Failure?.Message == "Correlation failed."
                                && !string.IsNullOrEmpty(ctx.Properties.RedirectUri))
                        {
                            var l = ctx.HttpContext.RequestServices.GetRequiredService<Logging.ILogger<OpenIdConnectHandler>>();
                            l.LogWarning($"Correlation failed in OnRemoteFailure: will redirect to {ctx.Properties.RedirectUri}");

                            ctx.Response.Redirect(ctx.Properties.RedirectUri);
                            ctx.HandleResponse();
                        }
                        return System.Threading.Tasks.Task.CompletedTask;
                    };

                    configureOpenIdConnectOptions?.Invoke(openIdConnectSetup);

                    configuration.GetEAUSection().GetSection("OpenIdConnectAuthentication").Bind(openIdConnectSetup);
                });

            services.AddEAUPrincipalTransformation();

            return ret;
        }

        /// <summary>
        /// Конфигурира подадените опции. Делегата се вика за всяко отделно име !
        /// </summary>
        /// <typeparam name="TOptions"></typeparam>
        /// <param name="services"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static IServiceCollection Configure<TOptions>(this IServiceCollection services, Action<string, TOptions> action) where TOptions : class
        {
            services.AddSingleton<IConfigureOptions<TOptions>>((sp) => { return new CommonOptionsConfiguration<TOptions>(action); });
            services.AddSingleton<IConfigureNamedOptions<TOptions>>((sp) => { return new CommonOptionsConfiguration<TOptions>(action); });

            return services;
        }

        /// <summary>
        /// Конфигурира ForwardingMiddleware - а ако е разрешен през конфигурацията от секция ForwardedHeaders
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <returns></returns>
        public static IServiceCollection ConfigureForwardedHeadersIfEnabled(this IServiceCollection services, IConfiguration configuration)
        {
            if (string.Equals("true", configuration["ForwardedHeaders_Enabled"], StringComparison.OrdinalIgnoreCase))
            {
                services.Configure<ForwardedHeadersOptions>(options =>
                {
                    var forwarderHeadersConfig = configuration.GetSection("ForwardedHeaders");

                    forwarderHeadersConfig.Bind(options);

                    var knownNetworks = forwarderHeadersConfig.GetSection("KnownNetworks").Get<string[]>();

                    if (knownNetworks != null)
                    {
                        options.KnownNetworks.Clear();

                        foreach (var networkCIDR in knownNetworks)
                        {
                            var network = IPNetwork.Parse(networkCIDR);

                            options.KnownNetworks.Add(new AspNetCore.HttpOverrides.IPNetwork(network.Network, network.Cidr));
                        }
                    }

                    var knownProxies = forwarderHeadersConfig.GetSection("KnownProxies").Get<string[]>();

                    if (knownProxies != null)
                    {
                        options.KnownProxies.Clear();

                        foreach (var proxy in knownProxies)
                            options.KnownProxies.Add(IPAddress.Parse(proxy));
                    }
                });
            }

            return services;
        }

        /// <summary>
        /// Add CertificateForwarding if ASPNETCORE_FORWARDEDCERTIFICATE_ENABLED = true
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <returns></returns>
        public static IServiceCollection AddCertificateForwardingIfEnabled(this IServiceCollection services, IConfiguration configuration)
        {
            if (string.Equals("true", configuration["ForwardedCertificate_Enabled"], StringComparison.OrdinalIgnoreCase))
            {
                services.AddCertificateForwarding(options =>
                {
                    options.CertificateHeader = "X-ClientCert";
                    options.HeaderConverter = (string headerValue) =>
                    {
                        using (var textReader = new StringReader(Uri.UnescapeDataString(headerValue)))
                        {
                            PemReader pem = new PemReader(textReader);
                            var pemObject = pem.ReadPemObject();
                            return new X509Certificate2(pemObject.Content);
                        }
                    };
                });
            }

            return services;
        }
    }
}
