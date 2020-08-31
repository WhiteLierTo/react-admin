"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use("/devApi", createProxyMiddleware({
    target: "http://www.web-jshtml.cn/api/react",
    changeOrigin: true,
    pathRewrite: {
      "^/devApi": ""
    }
  }));
};