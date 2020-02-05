import axios from 'axios'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    config.headers['Authtoken'] = UserModule.token
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  response => {
    // if (response.data.data.code === 'offline') {
    //   return response
    // } else {
    //
    // }

    const res = response.data
    if (res.status !== 200) {
      if (res.status === 103) {
        alert(res.message)
        return response
      } else if (res.status === 126) {
        return response
      } else if (res.status === 127) {
        return response
      } else if (res.status === 128) {
        return response
      } else if (res.status === 129) {
        return response
      } else if (res.status === 130) {
        return response
      } else {
        return Promise.reject(new Error(res.message || 'Error'))
      }
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
