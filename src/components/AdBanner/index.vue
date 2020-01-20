<template>
  <div>
    <div class="ad-banner" :class="{'none': isHidden}">
      <div class="aspect__spacer" :class="{'none': isFork}" @click="getHidden">
        <img src="@/assets/test/ic-close.png" alt="">
      </div>
      <a :href="adBannerList[0].url" class="ad-panel">
        <img :src="adBannerList[0].imgPath" alt="">
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
  @Prop() private isFork!: boolean
  private adList = AdvModule.advList
  private adBannerList = []
  private isHidden = false
  
  mounted() {
    this.$nextTick(() => {
      console.log('innnnnn2222',this.adBanner)
      Vue.set(this, 'adBannerList', this.adList[this.adBanner].advsData)
    })
  }

  getAdList() {
    this.adBannerList = this.adList[this.adBanner].advsData
  }

  getHidden() {
    this.isHidden = true
  }
}
</script>

<style lang="scss" scoped>
.ad-banner {
  position: relative;
  border-radius: 0.28571429rem;

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

    img {
      max-height: 200px;
      width: 100%;
    }
  }
}
.none {
  display: none;
}
</style>
