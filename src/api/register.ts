import request from '@/utils/request'

interface IRegister {
  email: String,
  password: String,
  registerFrom: number,
  mobileCode: String,
  parentId: number
}

export const register = (params: IRegister) =>
  request({
    url: '/member/register',
    method: 'post',
    params
  })


