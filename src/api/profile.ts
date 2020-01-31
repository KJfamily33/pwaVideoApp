import request from '@/utils/request'

interface IProfile {
  userId: number
}

export const getMember = (params: IProfile) =>
  request({
    url: '/member/' + params.userId,
    method: 'get',
  })