<template>
  <div class="body">
    <!--背景-->
    <!--帶入 objs[0~6] 即可建立其他背景景-->
    <ChangeVIPPicture :obj="objs[0]"></ChangeVIPPicture>
    <!--下方橫幅-->
    <div class="inLine-Content margin-bottom-10">
      <div
        class="inLine row padding-left-10 padding-right-10 flex-align-center"
      >
        <div class="column flex-3">
          <div
            class="text text-color-f3806f text-size-20 text-weight-300 text-align-start text-wrap"
          >
            <span class="text-color-ffffff">V币 : </span>
            <span class="text-weight-500">888888888888888888888</span>
          </div>
        </div>
        <div class="column flex-1 margin-left-10 margin-right-10">
          <button
            class="change text text-size-8 text-weight-300 text-color-ffffff"
          >
            无法兑换
          </button>
        </div>
        <div class="column flex-1">
          <button
            class="buy text text-size-8 text-weight-300 text-color-f3806f"
          >
            直接购买
          </button>
        </div>
      </div>
    </div>

    <!--提示窗-->
    <div class="cover coverbg"></div>
    <!--提示窗 兌換-->
    <div
      class="cover column coverContent flex-align-center flex-justify-center"
    >
      <div
        class="margin-top-26 margin-bottom-20 text text-size-25 text-weight-500 text-color-f3806f"
      >
        兑换7天VIP
      </div>
      <div class="margin-bottom-24 row flex-align-center flex-justify-center">
        <svg-icon name="ic-less" width="20" height="20"></svg-icon>
        <div
          class="margin-left-20 margin-right-6 text text-size-23 text-weight-300 text-color-f3806f"
        >
          0
        </div>
        <div
          class="margin-right-20 text text-size-28 text-weight-300 text-color-f5f5f5"
        >
          个
        </div>
        <svg-icon name="ic-add-h" width="20" height="20"></svg-icon>
      </div>
      <div class="line"></div>
      <div class="row  width-100pa">
        <div class="column flex-1 margin-bottom-15 margin-top-15">
          <div class="text text-size-20 text-weight-300 text-color-f3806f">
            取消
          </div>
        </div>
        <div class="column ">
          <div class="vline"></div>
        </div>
        <div class="column flex-1 margin-bottom-15 margin-top-15">
          <div class="text text-size-20 text-weight-500 text-color-f3806f">
            确定
          </div>
        </div>
      </div>
    </div>

    <!--提示窗 兌換成功-->
    <div
      class="cover column coverContent flex-align-center flex-justify-center"
    >
      <div
        class="text text-size-25 text-weight-500 text-color-f3806f margin-top-46 margin-bottom-46"
      >
        兑换成功
      </div>
      <div class="line"></div>
      <div
        class="margin-top-15 margin-bottom-15 text text-size-20 text-weight-500 text-color-f3806f width-100pa"
      >
        确定
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChangeVIPPicture from '@/components/ChangeVIPPicture/index.vue'
import { ChangeVIPObj } from '@/types/changeVip'

@Component({
  components: {
    ChangeVIPPicture,
  },
})
export default class ChangeVIP extends Vue {
  private objs: Array<ChangeVIPObj> = [
    {
      icon: '',
      firstText: '每3500V币',
      secText: '可兑换为7天VIP',
      thirdText: '',
      index: 1,
      bgLink: 'changeVip1',
    },
    {
      icon: 'ic-noad',
      firstText: '屏蔽广告',
      secText: '无广告,观看无干扰',
      thirdText: '畅快享受视频冲击, 不再被广告中断视频',
      index: 2,
      bgLink: 'changeVip2',
    },
    {
      icon: 'ic-speedplay',
      firstText: '极速拨放',
      secText: '观看更快,体验更爽',
      thirdText: '为您特别打造通道, 不被抢网速观看视频不卡顿',
      index: 3,
      bgLink: 'changeVip3',
    },
    {
      icon: 'ic-download',
      firstText: '无限下载',
      secText: '免费下载,保存到本地',
      thirdText: '容量多大就存多少视频,免费收藏视频, 无需担心片源消失。',
      index: 2,
      bgLink: 'changeVip4',
    },
    {
      icon: 'ic-fullhd',
      firstText: '清晰无码',
      secText: '海量视频,全部无码',
      thirdText: '原始承现视频内容, 看到喊不要',
      index: 3,
      bgLink: 'changeVip5',
    },
    {
      icon: 'ic-allscreen',
      firstText: '多屏共享',
      secText: '移动PC端会员权益',
      thirdText: '单一帐号，各平台权益共享',
      index: 2,
      bgLink: 'changeVip6',
    },
    {
      icon: 'ic-vipstemp',
      firstText: '尊贵徽章',
      secText: '尊贵身份,如影随形',
      thirdText: '高上大象徵，受人景仰',
      index: 3,
      bgLink: 'changeVip7',
    },
  ]
}
</script>
<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.inLine-Content {
  position: fixed;
  width: auto;
  bottom: 0;
  left: 7px;
  right: 7px;
  height: 2.8125rem;
  border-radius: 22.03125rem;
  background-color: rgba(0, 0, 0, 0.6);
}

.inLine {
  height: 100%;
}

// 排版

.width-100pa {
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.flex-3 {
  flex: 3;
}

.flex-align-center {
  align-items: center;
}

.flex-justify-center {
  justify-content: center;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-15 {
  margin-bottom: 15px;
}

.margin-top-15 {
  margin-top: 15px;
}

.margin-top-46 {
  margin-top: 46px;
}

.margin-bottom-46 {
  margin-bottom: 46px;
}

.margin-left-10 {
  margin-left: 10px;
}

.margin-left-20 {
  margin-left: 20px;
}

.margin-right-20 {
  margin-right: 20px;
}

.margin-right-10 {
  margin-right: 10px;
}

.margin-right-6 {
  margin-right: 6px;
}

.margin-top-26 {
  margin-top: 26px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.margin-bottom-24 {
  margin-bottom: 24px;
}

.padding-left-10 {
  padding-left: 10px;
}

.padding-right-10 {
  padding-right: 10px;
}

// 文字

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.text-align-start {
  text-align: start;
}

.text-color-f3806f {
  color: #f3806f;
}

.text-color-ffffff {
  color: #ffffff;
}

.text-color-a5a5a5 {
  color: #a5a5a5;
}

.text-size-20 {
  font-size: 1.25rem;
}

.text-size-8 {
  font-size: 0.5rem;
}

.text-size-25 {
  font-size: 1.5625rem;
}

.text-size-23 {
  font-size: 1.4375rem;
}

.text-size-18 {
  font-size: 1.125rem;
}

.text-weight-300 {
  font-weight: 300;
}

.text-weight-500 {
  font-weight: 500;
}

.text-wrap {
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.change {
  height: auto;
  border-radius: 0.6875rem;
  background-color: #bdbdbd;
  outline: none;
  border: 0;
}

.ischange {
  height: auto;
  border-radius: 0.6875rem;
  background-color: #fb6f9b;
  outline: none;
  border: 0;
}

.buy {
  height: 100%;
  width: 100%;
  border-radius: 0.6875rem;
  -webkit-border-radius: 0.6875rem;
  -moz-border-radius: 0.6875rem;
  border-collapse: separate;
  border-style: solid;
  border-width: 0.0625rem;
  border-color: #fb6f9b;
  outline: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
}

// 提示窗
.coverbg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.coverContent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21.25rem;
  height: auto;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
}

.line {
  height: 0.0625rem;
  width: 100%;
  background-color: #f3806f;
}

.vline {
  width: 0.0625rem;
  height: 100%;
  background-color: #f3806f;
}

.cover {
  display: none;
}
</style>
