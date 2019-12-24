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
    config.headers['Authtoken'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzcxNzczOTAsIm5iZiI6MTU3NzE3NzM5MCwiZXhwIjoxNTc3MTg0NTkwLCJkYXRhIjp7InVzZXJJZCI6NDYxfX0.mxGQYmq-ELdSaMc0NWl3IGD2quR_wVt5d1T3zBOkeKc'

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
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
