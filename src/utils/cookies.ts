import Cookies from 'js-cookie'

// App
const tokenKey = 'login_token'
const userIdKey = 'user_Id'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
export const getUserId = () => Cookies.get(userIdKey)
export const setUserId = (userId: string) => Cookies.set(userIdKey, userId)
export const removeUserId = () => Cookies.remove(userIdKey)
