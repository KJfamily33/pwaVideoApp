<template>
  <div class="picture">
    <div class="cover-panel">
      <!--輸入匡- 帳號-->
      <input
        class="margin-bottom-30 width-80pa color-f3806f text-14-300"
        type="text"
        name="account"
        id="account"
        placeholder="输入会员帐号或邮箱地址"
        @input="changeText"
      />
      <!--輸入匡- 密碼-->
      <input
        class="width-80pa color-f3806f text-14-300"
        type="text"
        name="password"
        id="password"
        placeholder="输入会员密码"
        @input="changeText"
      />
      <!--輸入匡- 密碼提示字-->
      <div class="flex-start width-80pa margin-top-5 margin-bottom-50">
        <div class="text color-f3806f text-12-300">
          忘记密码？请联系客服。
          <span class="text-500">QQ:2416199918</span>
        </div>
      </div>
      <!--按鈕 登入-->
      <button id="login" class="login" @click="buttomAction(1)" disabled="disabled">登入</button>
      <button id="register" class="register width-80pa" @click="buttomAction(2)">没有帐号？前往注册</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {
  buttomAction(index: number) {
    // 1: 登入 2: 註冊
    let acInput = document.getElementById("account") as HTMLInputElement;
    alert(acInput.value);
    if (acInput.value.length > 0) {
      alert("over 0");
    }
  }

  // 文字匡輸入
  changeText() {
    let acInput = document.getElementById("account") as HTMLInputElement;
    let psInput = document.getElementById("password") as HTMLInputElement;
    let button = document.getElementById("login") as HTMLButtonElement;
    let acText = acInput.value;
    let psText = psInput.value;
    // 帳號有輸入並且密碼>7位
    if (acText.length > 0 && psText.length > 7) {
      button.disabled = false;
      button.classList.remove("login");
      button.classList.add("isLogin");
    } else {
      button.disabled = true;
      button.classList.add("login");
      button.classList.remove("isLogin");
    }
  }
}
</script>

<style lang="scss" scoped>
// 背景圖
.picture {
  height: 100%;
  background-image: url("../assets/login_bg.jpg");
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
</style>
