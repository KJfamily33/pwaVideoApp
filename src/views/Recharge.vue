<template>
  <div class="body">
    <div class="title margin-top22 text-color">
      <a class="text center">VIP充值</a>
      <a class="Rectangle">
        <a class="Re-Content">限时优惠中</a>
      </a>
    </div>
    <div
      class="text margin-top15 margin-bottom5 text-color"
      style="font-weight: 300;"
    >专享高速播放通道 每日激情无限看</div>
    <!--一個月-->
    <div class="opction">
      <div class="check margin-left15"></div>
      <div class="column">
        <div class="day-text text">1个月</div>
      </div>
      <div class="column">
        <div></div>
      </div>
      <div class="column">
        <div class="text day-text">100元</div>
      </div>
    </div>
    <!--三個月-->
    <div class="opction">
      <div class="check margin-left15"></div>
      <div class="column">
        <div class="day-text text">3个月</div>
      </div>
      <div class="column">
        <div class="text day-text middle-text-color">多赠送10天</div>
      </div>
      <div class="column">
        <div class="text day-text">200元</div>
      </div>
    </div>
    <!--六個月-->
    <div class="opction">
      <div class="check margin-left15"></div>
      <div class="column">
        <div class="day-text text">6个月</div>
      </div>
      <div class="column">
        <div class="text day-text middle-text-color">多赠送25天</div>
      </div>
      <div class="column">
        <div class="text day-text">300元</div>
      </div>
    </div>
    <!--十二個月-->
    <div class="opction">
      <div class="check margin-left15"></div>
      <div class="column">
        <div class="day-text text">12个月</div>
      </div>
      <div class="column">
        <div class="text day-text middle-text-color">多赠送60天</div>
      </div>
      <div class="column">
        <div class="text day-text">500元</div>
      </div>
    </div>
    <!--按鈕-->
    <div class="buttonContent">
      <button>立即充值</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Example extends Vue {}
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

// 上方提示字
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 限時優惠中圓邊背景
.Rectangle {
  color: #f9f9f9;
  border-radius: 0.6875rem;
  background-image: linear-gradient(131deg, #f3806f, #f8758d);
  padding: 4px 5px;
  margin-left: 5px;
}
// 現實優惠中文字
.Re-Content {
  font-size: 0.8125rem;
  font-weight: 300;
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

.check {
  width: 0.875rem;
  height: 0.875rem;
  background-color: #d8d8d8;
  border-radius: 50%;
}

.day-text {
  font-size: 0.9375rem;
  font-weight: 300;
  color: #f3806f;
}

.middle-text-color {
  color: #fa7197;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.text-color {
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
  font-family: STHeitiTC;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  outline: none;
}

// 按鈕位置
.buttonContent {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
