import request from '@/utils/request'

interface IWebView {
  type: number
}

export const getPayCenter = (data: IWebView) =>
  request({
    url: '/pay-center/list',
    method: 'post',
    data
  })