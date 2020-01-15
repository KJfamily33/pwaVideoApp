import request from '@/utils/request'

interface IQrcode {
  userId: number
}

export const getDomain = (params: IQrcode) =>
  request({
    url: '/share/getDomain/' + params.userId,
    method: 'get',
  })