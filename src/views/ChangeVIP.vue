<template>
  <div >
    <div v-for="(e, i) in 7" :key="i">
      <ChangeVIPPicture :obj = obj[i]></ChangeVIPPicture>
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
  private obj: Array<ChangeVIPObj> = [
    {
      icon: "",
      firstText: "每3500V币",
      secText: "可兑换为7天VIP",
      thirdText: "",
      index: 1
    },
    {
      icon: "ic-noad",
      firstText: "屏蔽广告",
      secText: "无广告,观看无干扰",
      thirdText: "畅快享受视频冲击, 不再被广告中断视频",
      index: 2
    },
    {
      icon: "ic-speedplay",
      firstText: "极速拨放",
      secText: "观看更快,体验更爽",
      thirdText: "为您特别打造通道, 不被抢网速观看视频不卡顿",
      index: 3
    },
    {
      icon: "ic-download",
      firstText: "无限下载",
      secText: "免费下载,保存到本地",
      thirdText: "容量多大就存多少视频,免费收藏视频, 无需担心片源消失。",
      index: 2
    },
    {
      icon: "ic-fullhd",
      firstText: "清晰无码",
      secText: "海量视频,全部无码",
      thirdText: "原始承现视频内容, 看到喊不要",
      index: 3
    },
    {
      icon: "ic-allscreen",
      firstText: "多屏共享",
      secText: "移动\PC端会员权益",
      thirdText: "单一帐号，各平台权益共享",
      index: 2
    },
    {
      icon: "ic-vipstemp",
      firstText: "尊贵徽章",
      secText: "尊贵身份,如影随形",
      thirdText: "高上大象徵，受人景仰",
      index: 3
    },
  ];
}
</script>
<style lang="scss" scoped>
</style>
