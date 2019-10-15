<template>
  <div class="body">
    <div class="title margin-top22 text-color-f3806f">
      <a class="text text-16-500 center">VIP充值</a>
      <a class="Rectangle">
        <a class="text-13-300">限时优惠中</a>
      </a>
    </div>
    <div class="text margin-top15 margin-bottom5 text-color-f3806f text-16-300">专享高速播放通道 每日激情无限看</div>
    <!--一個月-->
    <label class="opction" for="radio1">
      <input type="radio" id="radio1" name="radio" checked="checked" class="margin-left15" @click="selectedRechargeMoney('100元')"/>
      <label class="column" for="radio1">
        <div class="text-15-300 text text-color-f3806f">1个月</div>
      </label>
      <label class="column" for="radio1">
        <div></div>
      </label>
      <label class="column" for="radio1">
        <div class="text-15-300 text text-color-f3806f">100元</div>
      </label>
    </label>
    <!--三個月-->
    <label class="opction" for="radio2" >
      <input type="radio" id="radio2" name="radio" class="margin-left15" @click="selectedRechargeMoney('200元')"/>
      <label class="column" for="radio2">
        <div class="text-15-300 text text-color-f3806f">3个月</div>
      </label>
      <label class="column" for="radio2">
        <div class="text-15-300 text text-color-fa7187">多赠送10天</div>
      </label>
      <label class="column" for="radio2">
        <div class="text-15-300 text text-color-f3806f">200元</div>
      </label>
    </label>
    <!--六個月-->
    <label class="opction" for="radio3" >
      <input type="radio" id="radio3" name="radio" class="margin-left15" @click="selectedRechargeMoney('300元')"/>
      <label class="column" for="radio3">
        <div class="text-15-300 text text-color-f3806f">6个月</div>
      </label>
      <label class="column" for="radio3">
        <div class="text-15-300 text text-color-fa7187">多赠送25天</div>
      </label>
      <label class="column" for="radio3">
        <div class="text-15-300 text text-color-f3806f">300元</div>
      </label>
    </label>
    <!--十二個月-->
    <label class="opction" for="radio4" >
      <input type="radio" id="radio4" name="radio" class="margin-left15" @click="selectedRechargeMoney('500元')"/>
      <label class="column" for="radio4">
        <div class="text-15-300 text text-color-f3806f">12个月</div>
      </label>
      <label class="column" for="radio4">
        <div class="text-15-300 text text-color-fa7187">多赠送60天</div>
      </label>
      <label class="column" for="radio4">
        <div class="text-15-300 text text-color-f3806f">500元</div>
      </label>
    </label>
    <!--按鈕-->
    <div class="buttonContent">
      <button class="text" @click="gotoRecharge">立即充值</button>
    </div>
    <!--充值選擇-->
    <div class="hide coverBackground cover"></div>
    <div class="hide rechargeContent cover">
      <!--標題-->
      <div class="title" style="margin-top: 10px;">
        <div class="column">
          <a class="text text-color-f3806f text-16-300" @click="closeRecharge">取消</a>
        </div>
        <div class="column">
          <div id="money" class="text text-20-500 text-color-6a6a6a">100元</div>
        </div>
        <div class="column">
          <div class="text text-color-f3806f text-16-500" @click="closeRecharge">支付</div>
        </div>
      </div>
      <!--線-->
      <div class="line"></div>
      <!--支付方式text-->
      <div class="text text-color-f3806f text-15-500 margin-bottom10">支付方式</div>
      <div class="row-wap overflow">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Recharge extends Vue {
  // 選擇充值渠道
  gotoRecharge() {
    var elements = document.getElementsByClassName("hide") as HTMLCollectionOf<
      HTMLElement
    >;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }
  // 關閉充值渠道
  closeRecharge() {
    var elements = document.getElementsByClassName("hide") as HTMLCollectionOf<
      HTMLElement
    >;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }

  // 選擇充值金額
  selectedRechargeMoney(radioName: string) {
    var money = document.getElementById('money') as HTMLElement;
    money.innerText = radioName;
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

.margin-top22 {
  margin-top: 22px;
}

.margin-top15 {
  margin-top: 15px;
}

.margin-bottom5 {
  margin-bottom: 5px;
}

.margin-left15 {
  margin-left: 15px;
}

.margin-bottom10 {
  margin-bottom: 10px;
}

// 上方提示字
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}

.row-wap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 限時優惠圓邊背景
.Rectangle {
  color: #f9f9f9;
  border-radius: 0.6875rem;
  background-image: linear-gradient(131deg, #f3806f, #f8758d);
  padding: 4px 5px;
  margin-left: 5px;
}

// 選單列
.opction {
  height: 2.1875rem;
  background-color: #ffffff;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

// 選單
input[type="radio"] {
  outline: none;
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 0.875rem;
  height: 0.875rem;
  background-color: #d8d8d8;
  border-radius: 50%;
}

// 選單選擇後
input[type="radio"]:checked {
  background-color: #fb6f9d;
}

.text-15-300 {
  font-size: 0.9375rem;
  font-weight: 300;
}

.text-16-500 {
  font-size: 1rem;
  font-weight: 500;
}

.text-16-300 {
  font-size: 1rem;
  font-weight: 300;
}

.text-13-300 {
  font-size: 0.8125rem;
  font-weight: 300;
}

.text-20-500 {
  font-size: 1.25rem;
  font-weight: 300;
}

.text-color-fa7187 {
  color: #fa7197;
}

.text-color-6a6a6a {
  color: #6a6a6a;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.column-wap {
  flex-wrap: wap;
}

.text-color-f3806f {
  color: #f3806f;
}

.text {
  font-family: STHeitiTC;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

button {
  width: 17.5rem;
  height: 2.1875rem;
  border-radius: 17.03125rem;
  background-image: linear-gradient(111deg, #f3806f, #f8758d);
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  outline: none;
}

// 按鈕位置
.buttonContent {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0%);
}

// 充值切版
.cover {
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100%;
  left: 0;
}
// 遮罩
.coverBackground {
  top: 0;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

// 充值選單
.rechargeContent {
  bottom: 0;
  height: 15.4375rem;
  border-radius: 0.3125rem;
  background-color: #ffffff;
}
// 線
.line {
  margin: 10px 6px;
  height: 0.0625rem;
  background-color: #f3806f;
}

// 充值選單項目
.box {
  width: 9.375rem;
  height: 3.75rem;
  border-radius: 1.875rem;
  background-color: #dfdfdf;
  margin: 10px 10px;
}

// 可滑動
.overflow {
  overflow: auto;
  max-height: 10rem;
}

// 隱藏
.hide {
  display: none;
}
</style>
