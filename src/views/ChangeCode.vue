<template>
  <div class="body">
    <!--圖片-->
    <div class="pictrue"></div>
    <div class="text text-16-500" style="margin-top:16.7px">
      请输入兑换码兑换VIP
    </div>
    <!--輸入匡-->
    <div>
      <input
        id="text"
        @input="changeText()"
        type="text"
        placeholder="请输入兑换码"
      />
    </div>
    <!--按鈕-->
    <div>
      <button id="button" class="unChange" disabled="disabled" @click="change">
        点击兑换
      </button>
    </div>
    <!--提示窗-->
    <div class="cover coverBackground"></div>
    <div class="cover coverContent row">
      <div class="text text-25-500 margin-all-auto">获得7天VIP</div>
      <div class="line"></div>
      <div class="text text-20-500 margin-top-bottom-15" @click="alertSure">
        确定
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ChangeCode extends Vue {
  // 提視窗事件
  alertSure() {
    // 清空資料
    let input = document.getElementById('text') as HTMLInputElement
    input.value = ''
    // 按鈕enable
    let button = document.getElementById('button') as HTMLButtonElement
    button.disabled = true
    button.classList.add('unChange')
    button.classList.remove('change')
    // 關閉提示窗
    let inAlert = document.getElementsByClassName('cover')
    for (let i = 0; i < inAlert.length; i++) {
      let alert = inAlert[i] as HTMLElement
      alert.style.visibility = 'hidden'
    }
  }
  // 按鈕事件
  change() {
    let input = document.getElementById('text') as HTMLInputElement
    const text = input.value
    // TODO: 用 text 帶入 API
    let inAlert = document.getElementsByClassName('cover')
    for (let i = 0; i < inAlert.length; i++) {
      let alert = inAlert[i] as HTMLElement
      alert.style.visibility = 'visible'
    }
  }

  // 文字匡輸入
  changeText() {
    let input = document.getElementById('text') as HTMLInputElement
    let button = document.getElementById('button') as HTMLButtonElement
    let text = input.value
    // 位數大於等於16 才可點擊
    if (text.length >= 16) {
      button.disabled = false
      button.classList.remove('unChange')
      button.classList.add('change')
    } else {
      button.disabled = true
      button.classList.add('unChange')
      button.classList.remove('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.pictrue {
  height: 16.875rem;
  max-height: 16.875rem;
  width: 100%;
  background-image: url('../assets/change_code.jpg');
  background-size: cover;
  background-position-x: center;
}

input {
  height: 1.25rem;
  width: 17.5rem;
  margin-top: 38px;
  outline-style: none;
  border: 0px;
  border-color: linear-gradient(to left, #f38070, #fb6f9c);
  border-bottom: 0.0625rem solid;
  padding: 15px 0px;
  font-family: STHeitiTC;
  font-size: 1rem;
  font-weight: 500;
  background-color: hsla(89, 43%, 51%, 0);
  color: #f3806f;
}

button {
  margin-top: 28px;
  width: 17.5rem;
  height: 2.1875rem;
  border-radius: 17.3125rem;
  color: #ffffff;
  border: none;
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 300;
  outline: none;
}

// 按鈕可以兌換
.change {
  background-image: linear-gradient(111deg, #f3806f, #f8758d);
}
// 按鈕不可兌換
.unChange {
  background-color: #d8d8d8;
}

.margin-all-auto {
  margin: auto;
}

.margin-top-bottom-15 {
  margin-top: 15px;
  margin-bottom: 15px;
}

.text {
  font-family: STHeitiTC;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.text-16-500 {
  font-size: 1rem;
  font-weight: 500;
}

.text-25-500 {
  font-size: 1.5625rem;
  font-weight: 500;
}

.text-20-500 {
  font-size: 1.25rem;
  font-weight: 500;
}

// 提示窗遮罩
.coverBackground {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

// 提視窗切版
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

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// 線
.line {
  width: 100%;
  height: 0.0625rem;
  background-color: #f3806f;
}

// 提示窗
.cover {
  visibility: hidden;
}
</style>
