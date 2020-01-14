/* eslint-disable prettier/prettier */
<template>
  <div class="video-list">
    <header-bar></header-bar>
    <transition-group name="slide-fade">
      <div class="list-item" v-for="(e, i) in resObj" :key="i">
        <a href v-if="i > 0 && i % 3 === 0">
          <ad-banner></ad-banner>
        </a>
        <video-card
          ref="item"
          :videoInfoObj="resObj[i]"
          v-on:startVideo="startVideo"
        ></video-card>
      </div>
    </transition-group>

    <!--    <div class="list-item-wrap">-->
    <!--      <div v-for="(e, i) in resObj" :key="i">-->
    <!--        <div class="row" v-if="i > 0 && (i + 1) % 2 === 0">-->
    <!--          <VideoSmallCard-->
    <!--            :videoInfoObj="resObj[i - 1]"-->
    <!--            class="item"-->
    <!--          ></VideoSmallCard>-->
    <!--          <VideoSmallCard-->
    <!--            :videoInfoObj="resObj[i]"-->
    <!--            class="item"-->
    <!--          ></VideoSmallCard>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VideoCard from '@/components/VideoPanelCard/index.vue'
import VideoSmallCard from '@/components/VideoSmallPanelCard/index.vue'
import AdBanner from '@/components/AdBanner/index.vue'
import { videoList } from '@/api/videoList'
import HeaderBar from '@/components/HeaderBar/index.vue'

@Component({
  components: {
    VideoSmallCard,
    VideoCard,
    AdBanner,
    HeaderBar,
  },
})
export default class VideoListPage extends Vue {
  private five = [1, 2, 3, 4, 5, 6, 7]

  private isSmallPanelMode = false
  private doSomethingAction() {}
  resObj = []
  isLoading = false
  allCount = 0

  // 请求参数
  // AV:　AV影院／　MANGO:　芒果,所有视频,除了AV影院／　RECOMMEND:　精品推薦／　ETHICS:　三级倫理／　SPECIALS：專題／　LATEST：最新
  reqParam = {
    type: 'LATEST',
    perPage: 10,
    page: 1,
  }

  created() {
    const _this = this
    this.getList()

    this.$bus.$on('changeVideoPage', function(categoryObj: {
      name: string
      type: string
    }) {
      _this.reqParam.type = categoryObj.type
      _this.getList()
    })
  }

  beforeDestroy() {
    this.$bus.$off('changeVideoPage', 0)
  }

  getList() {
    videoList(this.reqParam)
      .then(res => {
        this.resObj.splice(0, this.resObj.length)
        return res
      })
      .then(res => {
        this.resObj = res.data.data.video

        this.resObj.forEach((el, index) => {
          el.itemIndex = index
        })
        this.allCount = res.data.data.totalColumns
      })
  }

  loadMore() {
    videoList(this.reqParam).then(res => {
      const resdata = res.data.data.video
      resdata.forEach((el, index) => {
        el.itemIndex = this.resObj.length + index
        this.resObj.push(el)
      })
      this.allCount = res.data.data.totalColumns
      this.isLoading = false
    })
  }

  mounted() {
    //添加滚动事件
    const _this = this
    window.onscroll = () => {
      if (_this.isSmallPanelMode) {
        // 判断滑动位置
        let smallCard = document.getElementsByClassName('list-item-wrap')
        let smallVisibleBottom =
          window.scrollY + document.documentElement.clientHeight
        let smallVisibleTop = window.scrollY

        for (let i = 0; i < smallCard.length / 2; i++) {
          let centerY = smallCard[i].offsetTop + smallCard[i].offsetHeight / 2
          if (centerY > smallVisibleTop && centerY < smallVisibleBottom) {
            // 加载更多
            if (i == this.resObj.length - 3) {
              this.isLoadMore()
            }
          }
        }
      } else {
        // 判断滑动位置
        let card = document.getElementsByClassName('list-item')
        let visibleBottom =
          window.scrollY + document.documentElement.clientHeight
        let visibleTop = window.scrollY

        for (let i = 0; i < card.length; i++) {
          let centerY = card[i].offsetTop + card[i].offsetHeight / 2
          if (centerY > visibleTop && centerY < visibleBottom) {
            // 加载更多
            if (i == this.resObj.length - 3) {
              this.isLoadMore()
            }
          }
        }
      }
    }
  }
  // 加载更多
  isLoadMore() {
    const nowCount = this.resObj.length
    if (nowCount > this.allCount) {
      return
    }
    if (!this.isLoading) {
      this.isLoading = true
      this.reqParam.page += 1
      this.loadMore()
    }
  }

  startVideo(val) {
    let card = document.getElementsByClassName('list-item')
    for (let i = 0; i < card.length; i++) {
      if (i != val) {
        this.$refs.item[i].isPlay = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item > * {
  margin: 15px 0px;
}

.list-item-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px -10px;
  .row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 120px;
    width: 100%;
    min-width: 100vw;
    max-width: 100vw;
    margin: 5px;
    .item {
      height: 100%;
      width: 45% !important;
    }
  }
}

.video-list {
  padding-top: 80px;
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;

  /*overflow-y: auto;*/
}
</style>
<style scoped>
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translate(0px, 8px);
  opacity: 0;
}
</style>
