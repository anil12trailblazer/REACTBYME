const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    secure: false,
    pathRewrite: { "^/api": "" },
    // headers: {
    //   "User-Agent":
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    //   Accept: "application/json",
    // },
    headers: {
  "User-Agent": "Mozilla/5.0",
  "Accept": "application/json",
  "Referer": "https://www.swiggy.com/"
}
  })
);

// GET endpoint
// app.get("/api/menu", async (req, res) => {
//   try {
//     const url =
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6448&lng=77.216721&restaurantId=229";

//     const response = await fetch(url);

//     const text = await response.text();

//     // Safety check (IMPORTANT) 9005257725
//     if (!text) {
//       return res.status(500).json({ error: "Empty response from API" });
//     }

//     const data = JSON.parse(text);

//     res.json(data);
//   } catch (error) {
//     console.log("Backend error:", error.message);
//     res.status(500).json({ error: "Failed to fetch menu" });
//   }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Proxy running on http://localhost:${PORT}`);
});