<template>
  <div class="body">
    <ChangeVIPPicture :obj="objs[1]"></ChangeVIPPicture>
    <div class="inLine-Content margin-bottom-10">
      <div class="inLine row padding-left-10 padding-right-10 flex-align-center">
        <div class="column flex-3">
          <div
            class="text text-color-f3806f text-size-20 text-weight-300 text-align-start text-wrap"
          >
            <span class="text-color-ffffff">V币 :</span>
            <span class="text-weight-500">888888888888888888888</span>
          </div>
        </div>
        <div class="column flex-1 margin-left-10 margin-right-10">
          <button class="change text text-size-8 text-weight-300 text-color-ffffff">无法兑换</button>
        </div>
        <div class="column flex-1">
          <button class="buy text text-size-8 text-weight-300 text-color-f3806f">直接购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChangeVIPPicture from "@/components/ChangeVIPPicture/index.vue";
import { ChangeVIPObj } from "@/types/changeVip";

@Component({
  components: {
    ChangeVIPPicture
  }
})
export default class ChangeVIP extends Vue {
  private objs: Array<ChangeVIPObj> = [
    {
      icon: "",
      firstText: "每3500V币",
      secText: "可兑换为7天VIP",
      thirdText: "",
      index: 1,
      bgLink: "changeVip1"
    },
    {
      icon: "ic-noad",
      firstText: "屏蔽广告",
      secText: "无广告,观看无干扰",
      thirdText: "畅快享受视频冲击, 不再被广告中断视频",
      index: 2,
      bgLink: "changeVip2"
    },
    {
      icon: "ic-speedplay",
      firstText: "极速拨放",
      secText: "观看更快,体验更爽",
      thirdText: "为您特别打造通道, 不被抢网速观看视频不卡顿",
      index: 3,
      bgLink: "changeVip3"
    },
    {
      icon: "ic-download",
      firstText: "无限下载",
      secText: "免费下载,保存到本地",
      thirdText: "容量多大就存多少视频,免费收藏视频, 无需担心片源消失。",
      index: 2,
      bgLink: "changeVip4"
    },
    {
      icon: "ic-fullhd",
      firstText: "清晰无码",
      secText: "海量视频,全部无码",
      thirdText: "原始承现视频内容, 看到喊不要",
      index: 3,
      bgLink: "changeVip5"
    },
    {
      icon: "ic-allscreen",
      firstText: "多屏共享",
      secText: "移动PC端会员权益",
      thirdText: "单一帐号，各平台权益共享",
      index: 2,
      bgLink: "changeVip6"
    },
    {
      icon: "ic-vipstemp",
      firstText: "尊贵徽章",
      secText: "尊贵身份,如影随形",
      thirdText: "高上大象徵，受人景仰",
      index: 3,
      bgLink: "changeVip7"
    }
  ];
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

.margin-bottom-10 {
  margin-bottom: 10px;
}

.padding-left-10 {
  padding-left: 10px;
}

.padding-right-10 {
  padding-right: 10px;
}

.margin-left-10 {
  margin-left: 10px;
}

.margin-right-10 {
  margin-right: 10px;
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

.text-size-20 {
  font-size: 1.25rem;
}

.text-size-8 {
  font-size: 0.5rem;
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
</style>
