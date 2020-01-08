import request from '@/utils/request'

interface IAdv {
  method: String
}
export const getAllAdvs = () =>
  request({
    url: '/adv',
    method: 'get',
  })

export const getSpecificAdvs = (params: IAdv) =>
  request({
    url: '/adv' + params.method,
    method: 'get'
  })
