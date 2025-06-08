import axios from "axios"

const axiosInstance = axios.create({
  timeout: 30000
})

// 排序的请求
const queue = []
// 可以在次发请求
let canReload = true

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem("access_token")) {
    config.headers.Authorization =
      `Bearer ` + localStorage.getItem("access_token")
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    const { data, config } = error.response
    // 这是因为万一/refresh也失败了，会导致一直出发获取token
    if (data.errorCode === "401" && config.url.indexOf("refresh") === -1) {
      queue.push(config)
      if (canReload) {
        canReload = false
        const _resend = await _refreshToken()
        if (_resend?.code === "1") {
          // 塞入新的token值到localstorage中
          return queue.forEach((p) => axiosInstance(p))
        }
      }
    }
  }
)

const _refreshToken = () => {
  return new Promise((resolve) => {
    axiosInstance
      .post("/refresh", {
        params: {
          token: localStorage.getItem("refresh_token")
        }
      })
      .then((result) => resolve(result))
  })
}
