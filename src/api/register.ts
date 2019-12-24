import request from '@/utils/request'

interface IRegister {
  email: String,
  password: String,
  registerFrom: number,
  parentId: number
}

export const register = (data: IRegister) =>
  request({
    url: '/member/register',
    method: 'post',
    data
  })


