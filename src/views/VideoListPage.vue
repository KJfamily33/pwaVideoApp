<template>
  <div class="video-list">
    <div class="list-item" v-for="(e, i) in five" :key="i">
      <a href="" v-if="i > 0 && i % 3 === 0">
        <ad-banner></ad-banner>
      </a>
      <video-card></video-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VideoCard from '@/components/VideoPanelCard/index.vue'
import AdBanner from "@/components/AdBanner/index.vue";
import { IVideoInfoObj } from '@/types/video'

@Component({
  components: {
    VideoCard,
    AdBanner
  },
})
export default class VideoListPage extends Vue {
  private five = [1, 2, 3, 4, 5, 6, 7]

  private doSomethingAction() {}

  private obj: IVideoInfoObj = {
    preImg: '',
    time: '99::99',
    title: '无标题',
    uploadDate: '1小时前',
    count: 0,
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
