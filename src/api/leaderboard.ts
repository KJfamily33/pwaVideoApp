import request from '@/utils/request'

export const getLeaderboard = () =>
  request({
    url: '/leaderboard/all',
    method: 'get',
  })