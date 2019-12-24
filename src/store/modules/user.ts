import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import {getToken, setToken} from '@/utils/cookies'
import {login} from "@/api/login"

export interface IUserState {
  userId: number
  token: string
}


@Module({ dynamic: true, store, name: 'login' })
class User extends VuexModule implements IUserState {
  public userId: number = 0
  public token: string = getToken() || ''

  @Mutation
  private SET_USER_ID(userId: number) {
    this.userId = userId
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action
  public async Login(userInfo: { username: string; password: number }) {
    let {username, password} = userInfo
    username = username.trim()
    const {data} = await login({username, password})
    setToken(data.accessToken)
  }
}

export const UserModule = getModule(User)
