import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'

export interface IFooBarState {
  isActiveVideo: boolean
  isActiveSearch: boolean
  isActiveTask: boolean
  isActiveStore: boolean
  isActivePerson: boolean
}

@Module({ dynamic: true, store, name: 'fooBar' })
class FooterBar extends VuexModule implements IFooBarState {
  public isActiveVideo = false
  public isActiveSearch = false
  public isActiveTask = false
  public isActiveStore = false
  public isActivePerson = false

  @Mutation
  private SET_VIDEO_ACTIVE() {
    this.isActiveVideo = true
  }
  @Mutation
  private SET_SEARCH_ACTIVE() {
    this.isActiveSearch = true
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
  public RESET_STATE() {
    this.isActiveVideo = false
    this.isActiveSearch = false
    this.isActiveTask = false
    this.isActiveStore = false
    this.isActivePerson = false
  }

  @Action
  public SetActiveState(str: string){
    this.RESET_STATE()
    switch (str) {
      case 'video': {
        this.SET_VIDEO_ACTIVE()
        break;
      }
      case 'search': {
        this.SET_SEARCH_ACTIVE()
        break;
      }
      case 'task': {
        this.SET_TASK_ACTIVE()
        break;
      }
      case 'store': {
        this.SET_STORE_ACTIVE()
        break;
      }
      case 'profile': {
        this.SET_PERSON_ACTIVE()
        break;
      }
    }
  }
}

export const FooBarModule = getModule(FooterBar)
