import request from '@/utils/request'

interface lRegister {
  email: String,
  password: String,
  registerFrom: Number,
  mobileCode: String,
  parentId: Number
}

export const register = (params: lRegister) =>
  request({
    url: '/member/register',
    method: 'post',
    params
  })


