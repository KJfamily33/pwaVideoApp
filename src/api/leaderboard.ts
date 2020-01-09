import request from '@/utils/request'

export const getLeaderBoard = () =>
  request({
    url: '/leaderboard/all',
    method: 'get',
  })