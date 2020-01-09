import request from '@/utils/request'

interface IExchangeCode {
  webTypeId: number,
  webId: number,
  userId: number,
  exchangeCode: string
}

export const getExchangeCode = (data: IExchangeCode) =>
  request({
    url: '/payment/exchange-code',
    method: 'post',
    data,
  })

