import axios from "axios"

// 实现当多个请求401，只请求一次刷新token的

let needSend = true
let needArr = []
const myAxios = axios.create({
  timeout: 50000,
  baseURL: "/api"
})

myAxios.interceptors.request.use((config) => {
  config.headers.accessToken = localStorage.getItem("accessToken") || ""

  return config
})

myAxios.interceptors.response.use(
  function (data) {
    return Promise.resolve(data.data)
  },
  (err) => {
    // 这是如果
    const { config = {}, status } = err.response
    if (status === 401) {
      if (!needSend) {
        // 如果不返回Promise，会导致最后只能拿到第一个返回的数据，如果返回Promise，但是没有resolve地方调用它，会导致一直处于pending状态
        // 不会走then, catch, finally,
        return new Promise((resolve) => {
          needArr.push({
            config,
            resolve
          })
        })
      }
      needSend = false

      return new Promise((resolve) => {
        // 需要发送别的请求
        myAxios.post("http://localhost:9999/login1").then((res) => {
          const { accessToken } = res
          if (needArr.length > 0) {
            needArr.forEach((p) => {
              p.resolve(myAxios(p.config))
            })
          }
          localStorage.setItem("accessToken", accessToken)
          resolve(myAxios(config))
          needSend = true
          needArr = []
        })
      })
    }
  }
)

export default myAxios
