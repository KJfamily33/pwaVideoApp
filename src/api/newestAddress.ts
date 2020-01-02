import request from '@/utils/request'

export const newestAddress = () =>
  request({
    url: '/newest-address-pwa',
    method: 'get',
  })
