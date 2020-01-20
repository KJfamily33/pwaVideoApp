<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link>|-->
    <!--      <router-link to="/about">About</router-link>|-->
    <!--      <router-link to="/newaddress">NewAddress</router-link>|-->
    <!--      <router-link to="/profile">profile</router-link>|-->
    <!--      <router-link to="/Recharge">Recharge</router-link>|-->
    <!--      <router-link to="/share">Share</router-link>|-->
    <!--      <router-link to="/vip-description">vip-Description</router-link>|-->
    <!--      <router-link to="/v-coin-description">v-coin-Description</router-link>|-->
    <!--      <router-link to="/ChangeCode">ChangeCode</router-link>|-->
    <!--      <router-link to="/store">Store</router-link>|-->
    <!--      <router-link to="/register">Register</router-link>|-->
    <!--      <router-link to="/login">Login</router-link>|-->
    <!--      <router-link to="/video-info">Video-Info</router-link>|-->
    <!--      <router-link to="/currentTask">CurrentTask</router-link>|-->
    <!--      <router-link to="/changeVip">ChangeVIP</router-link>|-->
    <!--      <router-link to="/vHistory">vHistory</router-link>|-->
    <!--      <router-link to="/search">Search</router-link>|-->
    <!--      <router-link to="/videoList">VideoList</router-link>-->
    <!--      <router-link to="/leaderBoard">leaderBoard</router-link>-->

    <!--    </div>-->
    <!-- <router-view class="flex header" name="header" /> -->
    <router-view class="flex content-body" />
    <router-view class="flex footer" name="footer" />
  </div>
</template>

<script>
import { createSocket } from '@/utils/websocket'
import { WebSocketModule } from '@/store/modules/webScoket'
import { UserModule } from '@/store/modules/user'
import { AdvModule } from '@/store/modules/adv'

const list = AdvModule.advList
if (list.length === 0) {
  AdvModule.DoGetAdvList()
}

let ws = createSocket()
WebSocketModule.setWebSocket(ws)
ws.binaryType = 'blob'
ws.onopen = function() {
  const requestInfo = {
    type: 'authPWA',
    data: {
      key: 'PWA-KEY',
      authToken: UserModule.token,
    },
  }
  ws.send(JSON.stringify(requestInfo))

  sendPing()
}

function sendPing() {
  ws.send('ping')
  setInterval(() => {
    ws.send('ping')
  }, 5000)
}
</script>
<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft YaHei',
    'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-height: 100%;
  display: flex;
  flex-direction: column;

  .flex {
  }

  .content-body {
    flex: 1;
    background-color: #e8eaeb;
  }

  .footer {
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
  overflow-x: hidden;
  /*overflow: hidden;*/
}
</style>
