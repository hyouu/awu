import axios from 'axios'
import qs from 'qs'
import { getToken, removeToken } from './auth'

let baseURL = 'http://47.115.176.3:4000'

// 环境切换
if (process.env.NODE_ENV === 'development') {
  // baseURL = 'http://localhost:4000'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://47.115.176.3:4000'
}
// 请求超时时间
// axios.defaults.timeout = 15000;

const service = axios.create({
  baseURL: baseURL, // api的baseUrl
  timeout: 15000
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.url !== '/api/post/upload') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    if (config.url === '/api/post/upload') {
      config.headers['Content-Type'] = 'multipart/form-data'
    }

    const token = getToken()
    if (token) {
      config.headers['X-Token'] = token
    }
    return config
  }, error => {
    console.log(error)
    Promise.reject(error)
  })

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 10010) {
      // 未登录
      // toLogin()
    } else if (res.code === 10011) {
      // showToast('登录过期，请重新登录')
      console.log('11111')
      removeToken()
      this.$router.push('/login')
    } else if (res.code !== 0) {
      // showToast(res.msg)
    }

    return response.data
  }, error => {
    return Promise.reject(error)
  }
)

// const showToast = msg => {
//   Toast.info(msg, 1);
// }

// const toLogin = () => {
//   this.$router.push('/login')
// }

export default service
