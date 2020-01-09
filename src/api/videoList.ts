import request from '@/utils/request'

interface IVideoList {
    type: String,
    perPage: number,
    page: number

}
export const videoList = (data: IVideoList) =>
  request({
    url: '/video',
    method: 'post',
    data,
  })

export const videoCategory = () =>
  request({
      url: '/video/category',
      method: 'get'
  })
