import request from '@/utils/request'

export const getGetall = () =>
  request({
    url: '/apps/getAll',
    method: 'get'
  })