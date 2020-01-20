import { UserModule } from '@/store/modules/user'

const WSS_URL = process.env.VUE_APP_WEBSOCKET_URL

// @ts-ignore
let setIntervalWebsocketPush = null
let Socket: any
export function createSocket() {
  Socket = new WebSocket(WSS_URL)
  Socket.onerror = onerrorWS
  Socket.onclose = oncloseWS

  Socket.binaryType = 'blob'
  return Socket
}

export function onerrorWS() {
  // @ts-ignore
  clearInterval(setIntervalWebSocketPush)
  Socket.close()
  createSocket()
}

export function oncloseWS() {
  // @ts-ignore
  clearInterval(setIntervalWebsocketPush)
  console.log('已斷開')
}