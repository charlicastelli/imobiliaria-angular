const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://127.0.0.1:8000/",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
