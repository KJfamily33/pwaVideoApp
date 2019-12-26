/* eslint-disable prettier/prettier */
<template>
  <div class="video-list">
    <div class="list-item" v-for="(e, i) in resObj" :key="i">
      <a href v-if="i > 0 && i % 3 === 0">
        <ad-banner></ad-banner>
      </a>
      <video-card ref="item" :videoInfoObj="resObj[i]"></video-card>
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
  resObj = [];
  isLoading = false;
  allCount = 0;

  // 请求参数
  // AV:　AV影院／　MANGO:　芒果,所有视频,除了AV影院／　RECOMMEND:　精品推薦／　ETHICS:　三级倫理／　SPECIALS：專題／　LATEST：最新
  reqParam = {
    type: "LATEST",
    perPage: 10,
    page: 1
  };

  created() {
    this.getList();
  }

  getList() {
    videoList(this.reqParam).then(res => {
      this.resObj = res.data.data.video;
      this.allCount = res.data.data.totalColumns;
    });
  }

  loadMore() {
    videoList(this.reqParam).then(res => {
      const resdata = res.data.data.video;
      this.allCount = res.data.data.totalColumns;
      this.isLoading = false;
    });
  }

  mounted() {
    //添加滚动事件

    window.onscroll = () => {
      // 判断滑动位置
      let card = document.getElementsByClassName("list-item");
      let visibleBottom =
        window.scrollY + document.documentElement.clientHeight;
      let visibleTop = window.scrollY;
      let count = 0;
      for (let i = 0; i < card.length; i++) {
        let centerY = card[i].offsetTop + card[i].offsetHeight / 2;
        if (centerY > visibleTop && centerY < visibleBottom) {
          count += 1;

          // 加载更多
          if (i == this.resObj.length - 3) {
            this.isLoadMore();
          }

          // 第一笔可视范围播放影片
          if (count === 1) {
            this.$refs.item[i].isPlay = true;
          } else {
            this.$refs.item[i].isPlay = false;
          }
        } else {
          this.$refs.item[i].isPlay = false;
        }
      }
    };
  }
  // 加载更多
  isLoadMore() {
    const nowCount = this.resObj.length;
    if (nowCount > this.allCount) {
      return;
    }
    if (!this.isLoading) {
      this.isLoading = true;
      this.reqParam.page += 1;
      this.loadMore();
    }
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
