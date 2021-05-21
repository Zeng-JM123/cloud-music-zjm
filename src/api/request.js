import axios from 'axios'
import QS from 'qs'
import { message } from 'antd'

// 保存环境变量
const isPrd = process.env.NODE_ENV == 'production'

const devUrl = 'http://localhost:8083'
// http://192.168.137.22:8083
// 区分开发环境还是生产环境
export const baseURL = isPrd ? 'http://172.20.10.6:8083' : devUrl

const service = axios.create({
  baseURL: baseURL,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 每次发送请求之前本地存储中是否存在token，也可以通过redux在本地拿到token
    // 如果存在，则统一在http请求中加上token
    // 即使存在token，有可能是过期的，在响应拦截器中对返回状态进行判断
    const token =
      window.localStorage.getItem('userToken') ||
      window.sessionStorage.getItem('userToken')
    config.data = Object.assign({}, config.data, {
      token: token,
    })
    // 设置请求头
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
    config.data = QS.stringify(config.data)
    return config
  },
  (err) => err
)

// 响应拦截器
service.interceptors.response.use((res) => {
  if (res.code) {
    switch (res.code) {
      case 200:
        return res.data
      case 401:
        // 未登录
        break
      case 403:
        // token过期处理
        break
      default:
        message.err(res.data.msg)
    }
  } else {
    return res
  }
})

export default service
