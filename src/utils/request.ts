import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    config.headers['Authtoken'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzY0Njc4NzgsIm5iZiI6MTU3NjQ2Nzg3OCwiZXhwIjoxNTc2NDc1MDc4LCJkYXRhIjp7InVzZXJJZCI6MzU5fX0.lFrgjVGIs9Fz9rQtrqlm7sB8BPrbUUpTJAF1xIIP0lg'

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  response => {

    const res = response.data
    if (res.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {

      if (response.config.url.indexOf('register') != -1) {
      //TODO: 储存token
      let token = response.headers.authtoken

      }
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
