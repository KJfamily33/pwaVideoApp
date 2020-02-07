import request from '@/utils/request'

interface ILogin {
  username: string
  password: string
}

interface IFastLogin {
  registerFrom: number
  parentId: number
}

export const login = (data: ILogin) =>
  request({
    url: '/member/login',
    method: 'post',
    data,
  })

export const fastLogin = (data: IFastLogin) =>
  request({
    url: '/member/guest-register',
    method: 'post',
    data,
  })
