<template>
  <div class="picture">
    <div class="cover-panel">
      <!--輸入匡- 帳號-->
      <input
        class="margin-bottom-30 width-80pa color-f3806f text-14-300"
        type="text"
        name="account"
        id="account"
        placeholder="输入邮箱地址"
        @input="changeText"
        v-model="reqParam.email"
      />
      <!--輸入匡- 密碼-->
      <input
        class="width-80pa color-f3806f text-14-300 margin-bottom-30"
        type="password"
        name="password"
        id="password"
        placeholder="输入会员密码(最少八位数)"
        @input="changeText"
        v-model="reqParam.password"
      />
      <!--輸入匡- 再次輸入密碼-->
      <input
        class="width-80pa color-f3806f text-14-300 margin-bottom-30"
        type="password"
        name="repassword"
        id="repassword"
        placeholder="再输入一次会员密码"
        @input="changeText"
        v-model="rePassword"
      />
      <!--按鈕 登入-->
      <button
        id="login"
        class="login"
        @click="buttomAction(1)"
        disabled="disabled"
      >
        注册
      </button>
      <button
        id="register"
        class="register width-80pa"
        @click="buttomAction(2)"
      >
        已有帐号？前往登入
      </button>

      <!--提示窗-->
      <div v-if="isAlert" class="coverbg"></div>
      <div v-if="isAlert" class="coverContent">
        <div class="covertypesetting">
          <div
            class="flex-center text text-25 text-500 color-f3806f"
            style="flex:3"
          >
            {{ alertTitle }}
          </div>
          <div class="line"></div>
          <div
            class="coverbutton flex-center text text-20 text-500 color-f3806f"
            @click="alertAct"
          >
            确定
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component({
  components: {},
})
export default class Register extends Vue {
  reqParam = {
    email: '',
    password: '',
    registerFrom: 3,
    parentId: 0,
  }
  alertTitle = ''
  isAlert = false
  rePassword = ''

  // 判断email
  checkAccountEmail() {
    let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let isok = reg.test(this.reqParam.email)
    if (!isok) {
      return false
    } else {
      return true
    }
  }

  // 判断密码与再次输入
  checkPasswordisSame() {
    let isSame = false
    if (this.rePassword === this.reqParam.password) {
      isSame = true
    }
    return isSame
  }
  // 按钮触发
  buttomAction(index: number) {
    // 1: 注册 2: 登入
    switch (index) {
      case 1:
        if (!this.checkAccountEmail()) {
          this.alertTitle = '邮箱格式不符'
          this.isAlert = true
        } else if (!this.checkPasswordisSame()) {
          this.alertTitle = '密码不相同'
          this.isAlert = true
        } else {
          UserModule.Register(this.reqParam)
            .then(res => {
              this.$router.push('/videoList')
            })
            .catch(err => {
              this.alertTitle = err
              this.isAlert = true
            })
        }
        break
      case 2:
        this.$router.push('/login')
        break
      default:
        break
    }
  }

  // 提示窗確認
  alertAct() {
    this.isAlert = false
  }

  // 文字匡輸入
  changeText() {
    let acInput = document.getElementById('account') as HTMLInputElement
    let psInput = document.getElementById('password') as HTMLInputElement
    let repsInput = document.getElementById('repassword') as HTMLInputElement
    let button = document.getElementById('login') as HTMLButtonElement
    let acText = acInput.value
    let psText = psInput.value
    let repsText = repsInput.value
    // 帳號有輸入並且密碼>7位
    if (acText.length > 0 && psText.length > 7 && repsText.length > 7) {
      button.disabled = false
      button.classList.remove('login')
      button.classList.add('isLogin')
    } else {
      button.disabled = true
      button.classList.add('login')
      button.classList.remove('isLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
// 背景圖
.picture {
  height: 100%;
  background-image: url('../assets/register_bg.jpg');
  background-size: cover;
  background-position-x: center;
}
// 遮罩
.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// 排版

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}

.width-80pa {
  width: 80%;
}

.margin-top-5 {
  margin-top: 5px;
}

.margin-bottom-50 {
  margin-bottom: 50px;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

// 輸入匡
input {
  height: 1.25rem;
  width: 17.5rem;
  outline-style: none;
  border: 0px;
  border-color: linear-gradient(to left, #f38070, #fb6f9c);
  border-bottom: 0.0625rem solid;
  padding: 15px 0px;
  font-family: STHeitiTC;
  background-color: hsla(89, 43%, 51%, 0);
}

// 文字
.color-f3806f {
  color: #f3806f;
}

.text-14-300 {
  font-size: 0.875rem;
  font-weight: 300;
}

.text-12-300 {
  font-size: 0.75rem;
  font-weight: 300;
}

.text-500 {
  font-weight: 500;
}

.text-25 {
  font-size: 1.5625rem;
}

.text-20 {
  font-size: 1.25rem;
}

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

// 按鈕
button {
  outline: none;
  border: none;
}

.login {
  width: 80%;
  height: 2.1875rem;
  border-radius: 17.5px;
  background-color: rgba(216, 216, 216, 0.7);
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 10px;
}

.isLogin {
  width: 80%;
  height: 2.1875rem;
  border-radius: 17.5px;
  background-image: linear-gradient(111deg, #f3806f 37%, #f8758d 73%);
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 10px;
}

.register {
  height: 2.1875rem;
  border-radius: 17.5px;
  border-style: solid;
  border-width: 1px;
  border-color: f3806f;
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  background-color: transparent;
  color: #f3806f;
}

.coverbg {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.coverContent {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 21.25rem;
  height: 10.5625rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
}

.covertypesetting {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.coverbutton {
  height: 3.125rem;
  width: 100%;
}

.line {
  height: 0.0625rem;
  width: 100%;
  background-color: #f3806f;
}
</style>
