<template>
  <div class="body">
    <!--廣告-->
    <div class="ad margin-top-bottom-10"></div>
    <!--第一列-->
    <div id="onetitle" class="title margin-bottom-5" @click="show('one')">
      <div class="column">
        <svg-icon name="ic-like" width="22" height="22"></svg-icon>
      </div>
      <div class="column column-flex-4 flex-align-start">
        <div class="text">什么是VIP</div>
      </div>
      <div class="column">
        <svg-icon
          id="oneDown"
          name="ic-down"
          width="10"
          height="6"
          class="downicon"
        ></svg-icon>
        <svg-icon
          id="oneUp"
          name="ic-up"
          width="10"
          height="6"
          class="upicon"
        ></svg-icon>
      </div>
    </div>
    <div
      id="one"
      class="one padding-top-5 margin-bottom-5 text-content padding-left-right-20 padding-top-bottom-10"
    >
      VIP的有效期内，可无限观看，无限下载包括AV影院在内的 全部视频！
      <br />
      <br />适用于V2视频相关平台，后续将扩大至其他平台
      <br />（后续将再行公布）。
    </div>
    <!--第二列-->
    <div id="twotitle" class="title margin-bottom-5" @click="show('two')">
      <div class="column">
        <svg-icon name="ic-like" width="22" height="22"></svg-icon>
      </div>
      <div class="column column-flex-4 flex-align-start">
        <div class="text">如何获得VIP</div>
      </div>
      <div class="column">
        <svg-icon
          id="twoDown"
          name="ic-down"
          width="10"
          height="6"
          class="downicon"
        ></svg-icon>
        <svg-icon
          id="twoUp"
          name="ic-up"
          width="10"
          height="6"
          class="upicon"
        ></svg-icon>
      </div>
    </div>
    <div
      id="two"
      class="one padding-top-5 margin-bottom-5 text-content padding-left-right-20 padding-top-bottom-10"
    >
      登入后至『个人』-> 『充值』。
      <br />
      <button class="gotobuy margin-top-5">前往购买</button>
    </div>
    <!--第三列-->
    <div id="thirdtitle" class="title margin-bottom-5" @click="show('third')">
      <div class="column">
        <svg-icon name="ic-like" width="22" height="22"></svg-icon>
      </div>
      <div class="column column-flex-4 flex-align-start">
        <div class="text">如何查询VIP</div>
      </div>
      <div class="column">
        <svg-icon
          id="thirdDown"
          name="ic-down"
          width="10"
          height="6"
          class="downicon"
        ></svg-icon>
        <svg-icon
          id="thirdUp"
          name="ic-up"
          width="10"
          height="6"
          class="upicon"
        ></svg-icon>
      </div>
    </div>
    <div
      id="third"
      class="one padding-top-5 margin-bottom-5 text-content padding-left-right-20 padding-top-bottom-10"
    >
      登入后至『个人』, 即可得知VIP到期日期。
    </div>
    <!--第四列-->
    <div id="fourtitle" class="title margin-bottom-5" @click="show('four')">
      <div class="column">
        <svg-icon name="ic-like" width="22" height="22"></svg-icon>
      </div>
      <div class="column column-flex-4 flex-align-start">
        <div class="text">VIP使用期限</div>
      </div>
      <div class="column">
        <svg-icon
          id="fourDown"
          name="ic-down"
          width="10"
          height="6"
          class="downicon"
        ></svg-icon>
        <svg-icon
          id="fourUp"
          name="ic-up"
          width="10"
          height="6"
          class="upicon"
        ></svg-icon>
      </div>
    </div>
    <div
      id="four"
      class="one padding-top-5 margin-bottom-5 text-content padding-left-right-20 padding-top-bottom-10"
    >
      VIP分为月度、季度、半年度以及年度VIP四种类别。
      <br />VIP到期后，再次续费，将有折扣哦！
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Description extends Vue {
  show(id: string) {
    var content = document.getElementById(id) as HTMLDivElement
    var iconDown = document.getElementById(id + 'Down') as HTMLElement
    var iconUp = document.getElementById(id + 'Up') as HTMLElement
    var title = document.getElementById(id + 'title') as HTMLDivElement

    if (content.style.display === 'none') {
      // 顯示內容
      content.style.display = 'block'
      // 更改icon
      iconDown.style.display = 'none'
      iconUp.style.display = 'inline-block'
      // 更改title間距
      title.style.marginBottom = '0px'
    } else {
      // 隱藏內容
      content.style.display = 'none'
      // 更改icon
      iconDown.style.display = 'inline-block'
      iconUp.style.display = 'none'
      // 更改title間距
      title.style.marginBottom = '5px'
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

// 廣告
.ad {
  width: 95%;
  height: 3.625rem;
  border-radius: 0.25rem;
  background-color: red;
}

// 標題
.title {
  width: 95%;
  height: 2.1875rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

// 等分
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.column-flex-4 {
  flex: 4;
}

// 位置
.flex-align-start {
  align-items: flex-start;
}

// 間距
.margin-top-bottom-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.padding-top-5 {
  padding-top: 5px;
}

.padding-top-bottom-10 {
  padding-bottom: 10px;
  padding-top: 10px;
}

.padding-left-right-20 {
  padding-left: 20px;
  padding-right: 20px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-5 {
  margin-bottom: 5px;
}

.margin-left-15 {
  margin-bottom: 15px;
}

.margin-top-5 {
  margin-top: 5px;
}

// 展開項目
.one {
  display: none;
  width: 100%;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  background-color: #f1f1f1;
}

.oneBackGroud {
  background-color: #f1f1f1;
  width: 100%;
  height: auto;
}
// 上下箭頭
.upicon {
  display: none;
}

.downicon {
  display: inline-block;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.text-content {
  font-family: STHeitiTC;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #a5a5a5;
  text-align: left;
}

// 按鈕
.gotobuy {
  width: 4.6875rem;
  height: 1.3125rem;
  border-radius: 0.6875rem;
  background-image: linear-gradient(131deg, #f3806f 31%, #f8758d 77%);
  font-family: STHeitiTC;
  font-size: 0.8125rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  border: 0;
  outline: none;
}
</style>
