<template>
  <!--背景-->
  <div class="body">
    <!--遮罩-->
    <div class="cover-panel">
      <div class="text text-color-f3806f text-30-500 margin-top-56">
        轻松赚取V币
      </div>
      <!-- <div class="text text-color-ffffff text-20-500 margin-top-20">
        已推广人数：
        <span class="text-color-f3806f">1</span>
      </div> -->
      <!--QrCode-->
      <div class="qrcode margin-top-56">
        <div class="qrcodeContent">
          <vue-qr :text="qrcode" :size="200"></vue-qr>
        </div>
      </div>
      <!--按鈕-->
      <div class="row margin-top-43">
        <div class="column">
          <button
            class="text text-color-ffffff text-20-500"
            @click.prevent="shareAlert(1)"
          >
            分享推广连结
          </button>
        </div>
        <div class="column">
          <button
            class="text text-color-ffffff text-20-500"
            @click="getLink()"
          >
            复制推广码
          </button>
        </div>
      </div>
      <!--底部-->
      <div class="text text-color-ffffff text-17-500 margin-top-43">
        分享且成功注册,免费领取V币
      </div>
      <!--提視窗背景-->
      <div id="coverbg" class="coverBG"></div>
      <!--提視窗分享-->
      <div id="share" class="share">
        <div class="text text-color-f3806f text-20-500 margin-top-bottom-10">
          我要分享
        </div>
        <div class="line margin-left-right-6 margin-bottom-30"></div>
        <div class="share-row">
          <!--QQ-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(1)"
          >
            <div class="share-app">
              <svg-icon name="ic-qq" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">QQ</div>
          </div>
          <!--微信-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(2)"
          >
            <div class="share-app">
              <svg-icon name="ic-wechat" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">微信</div>
          </div>
          <!--腾讯微博-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(3)"
          >
            <div class="share-app">
              <svg-icon name="ic-weibo" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">腾讯微博</div>
          </div>
          <!--新浪微博-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(4)"
          >
            <div class="share-app">
              <svg-icon name="ic-sina" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">新浪微博</div>
          </div>
          <!--网易-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(5)"
          >
            <div class="share-app">
              <svg-icon name="ic-nets" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">网易</div>
          </div>
          <!--飞秋-->
          <div
            class="share-item margin-left-right-25 margin-bottom-20"
            @click="shareSelected(6)"
          >
            <div class="share-app">
              <svg-icon name="ic-feiq" width="66" height="66"></svg-icon>
            </div>
            <div class="text text-color-6a6a6a text-16-300">飞秋</div>
          </div>
          <!--取消-->
          <div
            id="shareSeleted"
            class="text text-color-f3806f text-20-300 padding-top-bottom-15 cancel-bg"
            @click="shareSelected(0)"
          >
            取消
          </div>
        </div>
      </div>
      <!--提示窗已複製-->
      <div id="copy" class="copy">
        <div class="height-118 flex-center">
          <div class="text text-25-500 text-color-f3806f">已复制链接</div>
        </div>
        <div class="line"></div>
        <div class="height-50 flex-center" @click="shareSelected(0)">
          <div class="text text-20-500 text-color-f3806f">确定</div>
        </div>
      </div>
      <input type="text" readonly="value" id="copyLink" v-model="copyLink" style="position: absolute; top: -10%;">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getDomain } from '@/api/qrcode'
import { UserModule } from '@/store/modules/user'
import VueQr from 'vue-qr'

@Component({
  components: {
    VueQr
  },
})
export default class Share extends Vue {
  private qrcode = ''
  private copyLink = ''

  mounted() {
    const _this = this
    _this.getQrcode()
  }  

  // 分享選項
  shareSelected(index: number) {
    // 0: 取消 1: QQ 2: 微信 3: 騰訊微博 4: 新浪微博 5: 網易 6: 非秋
    let coverbg = document.getElementById('coverbg') as HTMLDivElement
    let share = document.getElementById('share') as HTMLDivElement
    let copy = document.getElementById('copy') as HTMLDivElement
    coverbg.style.display = 'none'
    share.style.display = 'none'
    copy.style.display = 'none'
  }
  // 分享連結
  shareAlert(index: number) {
    // 1: share 2: copy
    let coverbg = document.getElementById('coverbg') as HTMLDivElement
    let share = document.getElementById('share') as HTMLDivElement
    let copy = document.getElementById('copy') as HTMLDivElement
    coverbg.style.display = 'block'
    if (index === 1) {
      share.style.display = 'flex'
    } else {
      copy.style.display = 'flex'
    }
  }

  getQrcode() {
    const _this = this
    let params = {
      userId: UserModule.userId,
    }
    getDomain(params).then(res => {
      _this.qrcode = res.data.data.url
      _this.copyLink = res.data.data.url
    }).catch(e=>{
      console.log(e)
    })
  }

  getLink() {
    let copy = document.getElementById('copy') as HTMLDivElement
    let Url = document.getElementById("copyLink") as HTMLInputElement
    Url.select()
    document.execCommand("Copy")
    copy.style.display = 'flex'
  }
}
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  background-image: url('../assets/share_bg.jpg');
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

.padding-top-bottom-15 {
  padding-top: 15px;
  padding-bottom: 15px;
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

.text-color-6a6a6a {
  color: 6a6a6a;
}

.text-30-500 {
  font-size: 1.875rem;
  font-weight: 500;
}

.text-20-500 {
  font-size: 1.25rem;
  font-weight: 500;
}

.text-20-300 {
  font-size: 1.25rem;
  font-weight: 300;
}

.text-25-500 {
  font-size: 1.5625rem;
  font-weight: 500;
}

.text-17-500 {
  font-size: 1.0625rem;
  font-weight: 500;
}

.text-16-300 {
  font-size: 1rem;
  font-weight: 300;
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
  img {
    width: 100%;
  }
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

// 提示窗遮罩
.coverBG {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  display: none;
}

.share {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  border-radius: 0.3125rem;
  background-color: #ffffff;
  display: none;
  flex-direction: column;
}

.smallMode {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  border-radius: 0.3125rem;
  background-color: #ffffff;
  display: none;
  flex-direction: column;
}

.line {
  height: 0.0625rem;
  background-color: #f3806f;
  width: 94%;
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
}

.share-app {
  width: 4.125rem;
  height: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel-bg {
  width: 100%;
  background-color: #f9f9f9;
}

.copy {
  width: 21.25rem;
  height: auto;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.height-118 {
  height: 7.375rem;
  width: 100%;
}

.height-50 {
  height: 3.125rem;
  width: 100%;
}
</style>
