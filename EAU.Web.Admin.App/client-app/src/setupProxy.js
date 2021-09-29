const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    //TODO TMP FIX 
    if (process.env.REACT_APP_USE_LOCAL) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: process.env.REACT_APP_API_URL,
                changeOrigin: true,
                secure: false
            })
        );
    } else {

        app.use(
            '/api',
            createProxyMiddleware({
                target: process.env.REACT_APP_API_URL,
                xfwd: true,
                secure: false
            })
        );

        app.use(
            '/eau-admin/signin-oidc',
            createProxyMiddleware({
                target: process.env.REACT_APP_API_URL,
                xfwd: true,
                pathRewrite: {
                    '^/eau-admin/signin-oidc': '/signin-oidc', // remove base path
                },
                secure: false
            })
        );
    }
};