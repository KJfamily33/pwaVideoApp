<template>
  <div class="ad-full" :class="{'hidden': isHidden, 'safari': isSafari}">
    <div class="ad-cover">
      <div class="ad-banner" :class="{'hidden': isHidden}">
        <div class="aspect__spacer" :class="{'hidden': isFork}" @click="getHidden">
          <img src="@/assets/test/ic-close.png" alt="">
        </div>
        <a :href="adBannerList[0].url" class="ad-panel">
          <img :src="adBannerList[0].imgPath" :height="height" width="100%" alt="">
        </a>
      </div>
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
  private isSafari = false
  
  mounted() {
    const _this = this
    _this.getAdList()
    _this.checkSafari()
  }

  getAdList() {
    const _this = this
    _this.adBannerList = this.adList[this.adBanner].advsData
  }

  getHidden() {
    const _this = this
    _this.isHidden = true
  }

  checkSafari() {
    const _this = this
    let issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    if(issafariBrowser == true) {
      _this.isSafari = true
    }
  }  
}
</script>

<style lang="scss" scoped>
.ad-full {
  // background-color: #000;
  position: fixed;
  z-index: 250;
  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;
  .ad-cover {
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
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
        img {
          width: 100%;
        }
      }
    }    
  }
}
.hidden {
  display: none;
}
</style>
