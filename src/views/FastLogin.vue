<template>
  <div class="black-cover">
    <div class="panel">
      <div class="panel-row-text">
        点击快速登录，立即免费看片
      </div>
      <div class="panel-row">
        <div class="fast-login-btn" v-on:click="doLoginAction">
          <img src="@/assets/ic_fastlogin.png" alt="" />
          快速登录
        </div>
      </div>
      <div class="panel-row">
        <router-link to="/login" class="other-btn">
          <img src="@/assets/ic_login.png" alt="" />
          登录
        </router-link>

        <router-link to="/register" class="other-btn">
          <img src="@/assets/ic_register.png" alt="" />
          注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { WebSocketModule } from '@/store/modules/webScoket'

@Component({
  components: {},
})
export default class FastLogin extends Vue {
  private userAccount: string = ''
  private userPassword: string = ''

  private doLoginAction() {
    UserModule.FastLogin().then(info => {
      const { username, password } = info

      UserModule.Login({
        username: username,
        password: password,
      }).then(res => {
        const { status, message, data } = res.data
        if (status !== 200) {
          let cover = document.getElementsByClassName(
            'cover'
          ) as HTMLCollectionOf<HTMLDivElement>
          for (let i = 0; i < cover.length; i++) {
            cover[i].style.display = 'block'
          }
        } else {
          WebSocketModule.setUserId(data.userId)
          const ws = WebSocketModule.webSocket
          const requestInfo = {
            type: 'signIn',
            data: {
              key: 'PWA-KEY',
              user_id: data.userId,
            },
          }
          ws.send(JSON.stringify(requestInfo))
          this.$router.push({ name: 'videoList' })
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.black-cover {
  background-color: rgba(28, 28, 28, 0.8) !important;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  top: 0;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 50%;

    .panel-row {
      margin-top: 15px;
      display: flex;
      justify-content: space-between !important;
      align-items: center;
      flex-direction: row;
      width: 100%;

      .other-btn {
        flex: 0 0 45%;

        background-color: rgba(51, 51, 51, 0.75);
        padding: 8px 15px;
        font-size: 16px;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 24px;
          margin-right: 12px;
        }
      }

      .fast-login-btn {
        width: 100%;
        padding: 12px 25px;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../assets/btu_fastlogin.png');
        background-size: contain;
        background-repeat: no-repeat;

        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 36px;
          margin-right: 6px;
        }
      }
    }

    .panel-row-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
}
</style>
