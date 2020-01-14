import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import request from '@/utils/request'
import { ICategoryList } from '@/store/modules/footer-bar'

export interface IHeaderBarState {}

@Module({ dynamic: true, store, name: 'headerBar' })
class HeaderBar extends VuexModule implements IHeaderBarState {
  private pathName = ''
  private videoTitle = ''

  private showVideoTitle = false
  private showBackBtn = false
  private showShareBtn = false
  private showQuestionBtn = false
  private showPromotionBtn = false

  private videoCategoryList: ICategoryList[] = []
    public categoryIndex: number = 0


  @Mutation
  private SET_CATEGORY_LIST(categoryList: ICategoryList[]) {
    this.videoCategoryList = categoryList
  }

  @Mutation
  private SET_CATEGORY_INDEX(index: number) {
    this.categoryIndex = index
  }

  @Action
  public setCategoryList(categoryList: ICategoryList[]) {
    this.SET_CATEGORY_LIST(categoryList)
  }

  @Action
  public setSelectedTabIndex(index: number) {
    this.SET_CATEGORY_INDEX(index)
  }

  @Action
  public changeToVideoPage(params: any) {
    request({
      url: '/login',
      method: 'get',
      params,
    })
  }
}

export const HeaderModule = getModule(HeaderBar)
