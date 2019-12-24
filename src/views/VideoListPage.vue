<template>
  <div class="video-list">
    <div class="list-item" v-for="(e, i) in resObj" :key="i">
      <a href v-if="i > 0 && i % 3 === 0">
        <ad-banner></ad-banner>
      </a>
      <video-card :videoInfoObj="resObj[i]"></video-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VideoCard from "@/components/VideoPanelCard/index.vue";
import AdBanner from "@/components/AdBanner/index.vue";
import { videoList } from "@/api/videoList";

@Component({
  components: {
    VideoCard,
    AdBanner
  }
})
export default class VideoListPage extends Vue {
  private five = [1, 2, 3, 4, 5, 6, 7];

  private doSomethingAction() {}
  resObj = []
  // AV:　AV影院／　MANGO:　芒果,所有视频,除了AV影院／　RECOMMEND:　精品推薦／　ETHICS:　三级倫理／　SPECIALS：專題／　LATEST：最新
  reqParam = {
    type: 'LATEST',
    perPage: 10,
    page: 1,
  }
  created() {

    videoList(this.reqParam).then(res => {
      window.console.log('videoList res',res)
      this.resObj = res.data.video
    })
  }
}
</script>

<style lang="scss" scoped>
.list-item > * {
  margin: 10px 0px;
}

.video-list {
  margin: 8px;
}
</style>
