<template>
  <div class="ad-banner">
    <div class="aspect__spacer"></div>
    <div class="ad-panel">
      <img src="holder.js/100px100py?auto=yes&text=5:1" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Holder from 'holderjs'

@Component({
  components: {},
})
export default class AdBanner extends Vue {
  mounted() {
    const img = (document.querySelectorAll(
      '.ad-panel img'
    ) as unknown) as HTMLElement
    Holder.run({
      images: img,
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
