const { createProxyMiddleware } = require("http-proxy-middleware")
const setting = require("./set.json")

const proxyEnum = {
  "/cm": "http://localhost:8000",
  "/sku": "http://localhost:8001",
  "/stock": "http://localhost:8002"
}

module.exports = function (app) {
  console.log("===>>>>", process.env.PORT, typeof process.env.PORT)
  const _target =
    process.env.PORT === "3000"
      ? "http://localhost:8000"
      : "http://localhost:8001"
  app.use(
    `/api`,
    createProxyMiddleware({
      target: _target,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      },
      router(req) {
        console.log("动态url地址", app.get("route-target"), app.get("aaa-bbb"))
        const _url = app.get("route-target") || "http://localhost:8000"

        return _url
      }
    })
  )
  app.get("/auto/login1", function (req, resp) {
    console.log("qingqiy111111")
    if (setting.target1) {
      app.set("route-target", setting.target1)
      app.set("aaa-bbb", "=---------------------")
    }
    resp.json({ success: false, cookie: "自动登录成功" })
  })
}
