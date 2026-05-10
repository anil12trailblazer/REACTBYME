// server.js (CommonJS)
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require('cors');
const app = express();
app.use(cors());

/*app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    secure: true,
    pathRewrite: { "^/api": "" }, // /api/dapi/... -> /dapi/...
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      Accept: "application/json, text/plain, **",
    },
  })
);

app.use(
  "/img",
  createProxyMiddleware({
    target: "https://media-assets.swiggy.com",
    changeOrigin: true,
    secure: true,
    pathRewrite: { "^/img": "" }, // /img/<path> -> /<path>
    headers: {
      Accept: "image/*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    },
    onError(err, req, res) {
      console.error("Media proxy error:", err?.message || err);
      if (!res.headersSent) res.writeHead(502);
      res.end("Bad Gateway (media upstream)");
    },
  })
);*/

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    secure: false,
    pathRewrite: { "^/api": "" },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      Accept: "application/json, text/plain, **",
    },
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy running on http://localhost:${PORT}`);
});
