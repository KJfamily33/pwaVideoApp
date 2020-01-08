import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import { getToken, setToken, getUserId, setUserId } from '@/utils/cookies'
import { login } from '@/api/login'
import { register } from '@/api/register'

export interface IVideoState {
  videoList: any[]
}

@Module({ dynamic: true, store, name: 'video' })
class Video extends VuexModule implements IVideoState {
  // @ts-ignore
  public videoList: any[] | undefined

  @Mutation
  private SET_VIDEO_LIST(videoList: any[]) {
    this.videoList = videoList
  }

  @Action({ rawError: true })
  public async Login() {}
}

export const VideoModule = getModule(Video)
