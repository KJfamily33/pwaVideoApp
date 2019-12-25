import request from '@/utils/request'

interface ILogin {
  username: string
  password: string
}

export const login = (data: ILogin) =>
  request({
    url: '/member/login',
    method: 'post',
    data,
  })
