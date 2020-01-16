<template>
  <div>
    <div class="ad-banner">
      <div class="aspect__spacer"></div>
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
  @Prop() private adTitle!: string;
  private adList = AdvModule.advList
  private adBannerList = []
  
  mounted() {
    this.$nextTick(() => {
      console.log('innnnnn2222',this.adTitle)
      Vue.set(this, 'adBannerList', this.adList[this.adTitle].advsData)
    })
  }

  getAdList() {
    this.$nextTick(() => {
      this.adBannerList = this.adList[this.adTitle].advsData
    })
  }
}
</script>

<style lang="scss" scoped>
.ad-banner {
  position: relative;
  border-radius: 0.28571429rem;

  .aspect__spacer {
    padding-bottom: 20%;
  }
  .ad-panel {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
