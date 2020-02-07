import request from '@/utils/request'
import axios from 'axios'
import { UserModule } from '@/store/modules/user'

interface IGuessYouLike {
  id: string
  count: number
}

interface IVideoAccess {
  idEncrypt: string
}

interface ISearchRequest {
  search: string
  columnsPerPage?: number
  page?: number
}

interface IAutoComplete {
  search: string
  count: number
}

export const getGuessYouLikeList = (data: IGuessYouLike) =>
  request({
    url: '/solr/guess-you-like',
    method: 'post',
    data,
  })

export const getAutoCompleteList = (data: IAutoComplete) =>
  request({
    url: '/solr/auto-complete',
    method: 'post',
    data,
  })

export const getSearchList = (data: ISearchRequest) =>
  request({
    url: '/solr/search',
    method: 'post',
    data,
  })

export const getVideoAccessList = (data: IVideoAccess) =>
  request({
    url: '/video/access',
    method: 'post',
    data,
  })

export const getVideoInfo = (data: IVideoAccess) =>
  request({
    url: '/video/play',
    method: 'post',
    data,
  })

export const getOldVideoAccessList = (params: IVideoAccess) => {
  const oldService = axios.create({
    baseURL: 'http://10.99.106.100:8080/api/',
    timeout: 5000,
    headers: { Authtoken: UserModule.token },
    // withCredentials: true // send cookies when cross-domain requests
  })
  const api = 'app-use-coin-new/' + params.idEncrypt

  oldService.get(api).then(res => {
    console.log(res)
  })
}
