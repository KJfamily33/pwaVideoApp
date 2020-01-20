import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'

export interface IWebSocketState {
  webSocket: any
}

@Module({ dynamic: true, store, name: 'video' })
class WebSocket extends VuexModule implements IWebSocketState {
  // @ts-ignore
  public webSocket: any = {}
  public userId: string = ''

  @Mutation
  private SET_WEBSOCKET(ws: any) {
    this.webSocket = ws
  }

  @Mutation
  private SET_USER_ID(userId: string) {
    this.userId = userId
  }

  @Action({ rawError: true })
  public setWebSocket(ws: any) {
    this.SET_WEBSOCKET(ws)
  }

  @Action({ rawError: true })
  public setUserId(userId: string) {
    this.SET_USER_ID(userId)
  }
}

export const WebSocketModule = getModule(WebSocket)
