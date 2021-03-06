import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import {
  getToken,
  setToken,
  getUserId,
  setUserId,
  removeToken,
  removeUserId,
} from '@/utils/cookies'
import { fastLogin, login } from '@/api/login'
import { register } from '@/api/register'

export interface IUserState {
  userId: number
  token: string
}

@Module({ dynamic: true, store, name: 'login' })
class User extends VuexModule implements IUserState {
  public userId: number = Number.parseInt(getUserId() || '0')
  public token: string = getToken() || ''

  @Mutation
  private SET_USER_ID(userId: number) {
    this.userId = userId
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action({ rawError: true })
  public async Logout() {
    removeToken()
    removeUserId()
    this.$router.push('/fast-login')
  }

  @Action({ rawError: true })
  public async Login(userInfo: {
    username: string
    password: string | number
  }) {
    let { username, password } = userInfo
    username = username.trim()
    if (typeof password === 'number') {
      password = password.toString()
    }
    const res = await login({ username, password })

    // 储存token
    const headers = res.headers
    setToken(headers.authtoken)
    this.SET_TOKEN(headers.authtoken)

    // 储存userId
    const info = res.data.data
    const userId = info.userId.toString()
    setUserId(userId)
    this.SET_USER_ID(userId)
    return res
  }

  @Action({ rawError: true })
  public async FastLogin() {
    const res = await fastLogin({ registerFrom: 3, parentId: 0 })
    const username = res.data.data.name
    const password = res.data.data.password

    return { username, password }
  }

  @Action({ rawError: true })
  public async Register(data: {
    email: String
    password: String
    registerFrom: number
    parentId: number
  }) {
    const res = await register(data)
    // 储存token
    const headers = res.headers
    setToken(headers.authtoken)
    this.SET_TOKEN(headers.authtoken)
    // 储存userId
    const info = res.data.data
    const userId = info.userId.toString()
    setUserId(userId)
    this.SET_USER_ID(userId)
    return res
  }
}

export const UserModule = getModule(User)
