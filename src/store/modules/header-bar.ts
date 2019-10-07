import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import request from '@/utils/request'

export interface IHeaderBarState {
}

@Module({ dynamic: true, store, name: 'headerBar' })
class HeaderBar extends VuexModule implements IHeaderBarState {
  private pathName = ''
  private videoTitle = ''

  private showVideoTitle = false
  private showBackBtn = false
  private showShareBtn = false
  private showQuestionBtn = false
  private showPromotionBtn = false

  private navBarList:any[] = []

  @Mutation
  private SET_NAV_BAR_LIST(data:any[]) {
    this.navBarList = data
  }

  @Action
  public changeToVideoPage(params: any) {
    request({
      url:'/login',
      method:'get',
      params
    })
  }
}

export const HeaderModule = getModule(HeaderBar)
