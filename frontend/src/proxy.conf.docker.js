const PROXY_CONFIG = [
  {
    context: ["/weatherforecast"],
    target: process.env.API_URL || "http://backend:80",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
