import request from '@/utils/request'
export const login = (params: any) =>
  request({
    url: '/member/login',
    method: 'post',
    params,
  })
