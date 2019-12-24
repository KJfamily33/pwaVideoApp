import Cookies from 'js-cookie'

// App
const tokenKey = 'something'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (tokenL: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
