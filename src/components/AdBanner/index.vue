<template>
  <div>
    <div class="ad-banner" :class="{'none': isHidden}">
      <div class="aspect__spacer" :class="{'none': isFork}" @click="getHidden">
        <img src="@/assets/test/ic-close.png" alt="">
      </div>
      <a :href="adBannerList[0].url" class="ad-panel">
        <img :src="adBannerList[0].imgPath" :height="height" width="100%">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AdvModule } from '@/store/modules/adv'

@Component({
  components: {},
})
export default class AdBanner extends Vue {
  @Prop() private adBanner!: string;
  @Prop() private height!: string
  @Prop() private isFork!: boolean
  private adList = AdvModule.advList
  private adBannerList = []
  private isHidden = false
  // get myComputedProp() {
  //   const _this = this
  //   return AdvModule.advList[_this.adBanner].advsData
  // }
  
  mounted() {
    const _this = this
    _this.getAdList()
  }

  getAdList() {
    const _this = this
    _this.adBannerList = _this.adList[_this.adBanner].advsData
  }

  getHidden() {
    const _this = this
    _this.isHidden = true
  }
}
</script>

<style lang="scss" scoped>
.ad-banner {
  position: relative;
  .aspect__spacer {
    position: absolute;
    top: 2%;
    right: 2%;
  }
  .ad-panel {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    // img {
    //   width: 100%;
    // }
  }
}
.none {
  display: none;
}
</style>
