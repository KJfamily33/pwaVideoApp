<template>
  <!--背景-->
  <div class="body">
    <!--遮罩-->
    <div class="cover-panel">
      <div class="text text-color-f3806f text-30-500 margin-top-56">轻松赚取V币</div>
      <div class="text text-color-ffffff text-20-500 margin-top-20">
        已推广人数：
        <span class="text-color-f3806f">1</span>
      </div>
      <!--QrCode-->
      <div class="qrcode margin-top-56">
        <div class="qrcodeContent"></div>
      </div>
      <!--按鈕-->
      <div class="row margin-top-43">
        <div class="column">
          <button class="text text-color-ffffff text-20-500">分享推广连结</button>
        </div>
        <div class="column">
          <button class="text text-color-ffffff text-20-500 alpha">复制推广码</button>
        </div>
      </div>
      <!--底部-->
      <div class="text text-color-ffffff text-17-500 margin-top-43">分享且成功注册,免费领取V币</div>
      <!--提視窗背景-->
      <div class="coverBG"></div>
      <!--提視窗分享-->
      <div class="share">
        <div class="text text-color-f3806f text-20-500 margin-top-bottom-10">我要分享</div>
        <div class="line margin-left-right-6 margin-bottom-30"></div>
        <div class="share-row">
          <div class="share-item margin-left-right-25 margin-bottom-20">123</div>
          <div class="share-item margin-left-right-25 margin-bottom-20">466</div>
          <div class="share-item margin-left-right-25 margin-bottom-20">123</div>
          <div class="share-item margin-left-right-25 margin-bottom-20">123</div>
          <div class="share-item margin-left-right-25 margin-bottom-20">466</div>
          <div class="share-item margin-left-right-25 margin-bottom-20">123</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Share extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  background-image: url("../assets/share_bg.jpg");
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
  align-items: center;
}

// 間距
.margin-top-56 {
  margin-top: 56px;
}

.margin-top-20 {
  margin-top: 20px;
}

.margin-top-56 {
  margin-top: 56;
}

.margin-top-43 {
  margin-top: 43px;
}

.margin-top-bottom-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.margin-left-right-6 {
  margin-left: 6px;
  margin-right: 6px;
}
.margin-left-right-25 {
  margin-left: 25px;
  margin-right: 25px;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

// text

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.text-color-f3806f {
  color: #f3806f;
}

.text-color-ffffff {
  color: #ffffff;
}

.text-30-500 {
  font-size: 1.875rem;
  font-weight: 500;
}

.text-20-500 {
  font-size: 1.25rem;
  font-weight: 500;
}

.text-17-500 {
  font-size: 1.0625rem;
  font-weight: 500;
}

// QrCode
.qrcode {
  width: 13.75rem;
  height: 13.75rem;
  border-radius: 1.125rem;
  background-image: linear-gradient(
    to bottom,
    rgba(250, 183, 168, 0.6),
    rgba(249, 117, 141, 0.6)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.qrcodeContent {
  width: 12.125rem;
  height: 12.125rem;
  background-color: red;
}

// 排版
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 3.75rem;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

// 按鈕
button {
  width: 10rem;
  height: 3.75rem;
  border-radius: 1.875rem;
  background-image: linear-gradient(139deg, #f3806f 27%, #f8758d 80%);
  border: 0;
  outline: none;
}

// 透明度
.alpha {
  opacity: 0.7;
}

// 提示窗遮罩
.coverBG {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.share {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 21.5625rem;
  border-radius: 0.3125rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.line {
  height: 0.0625rem;
  background-color: #f3806f;
  width: 94%
}

.share-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}

.share-item {
  width: 4.125rem;
 height: 6.25rem;
 background-color: red;
}
</style>
