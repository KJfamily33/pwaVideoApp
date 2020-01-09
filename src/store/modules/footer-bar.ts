import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import { videoCategory } from '@/api/videoList'
import { Vue } from 'vue-property-decorator'
import {HeaderModule} from "@/store/modules/header-bar"

export interface IFooBarState {
  isActiveVideo: boolean
  isActiveLeaderBoard: boolean
  isActiveTask: boolean
  isActiveStore: boolean
  isActivePerson: boolean
}

export interface ICategoryList {
  name: string
  type: string
}

@Module({ dynamic: true, store, name: 'fooBar' })
class FooterBar extends VuexModule implements IFooBarState {
  public isActiveVideo = false
  public isActiveLeaderBoard = false
  public isActiveTask = false
  public isActiveStore = false
  public isActivePerson = false
  public videoCategoryList: ICategoryList[] = []

  @Mutation
  private SET_VIDEO_ACTIVE() {
    this.isActiveVideo = true
  }
  @Mutation
  private SET_LEADER_BOARD_ACTIVE() {
    this.isActiveLeaderBoard = true
  }
  @Mutation
  private SET_TASK_ACTIVE() {
    this.isActiveTask = true
  }
  @Mutation
  private SET_STORE_ACTIVE() {
    this.isActiveStore = true
  }
  @Mutation
  private SET_PERSON_ACTIVE() {
    this.isActivePerson = true
  }

  @Mutation
  private SET_CATEGORY_LIST(categoryList: ICategoryList[]) {
    this.videoCategoryList = categoryList
  }

  @Mutation
  public RESET_STATE() {
    this.isActiveVideo = false
    this.isActiveLeaderBoard = false
    this.isActiveTask = false
    this.isActiveStore = false
    this.isActivePerson = false
  }

  @Action
  public async SetActiveState(str: string) {
    this.RESET_STATE()
    switch (str) {
      case 'video': {
        const vw = new Vue()
        this.SET_VIDEO_ACTIVE()
        if (
          this.videoCategoryList === undefined ||
          this.videoCategoryList.length <= 0
        ) {
          const res = await videoCategory()
          if (res.status === 200) {
            let category = res.data.data.category
            HeaderModule.setCategoryList(category)
            vw.$bus.$emit('setCategoryList')
          }
        }

        break
      }
      case 'leaderBoard': {
        this.SET_LEADER_BOARD_ACTIVE()
        break
      }
      case 'task': {
        this.SET_TASK_ACTIVE()
        break
      }
      case 'store': {
        this.SET_STORE_ACTIVE()
        break
      }
      case 'profile': {
        this.SET_PERSON_ACTIVE()
        break
      }
    }
  }
}

export const FooBarModule = getModule(FooterBar)
