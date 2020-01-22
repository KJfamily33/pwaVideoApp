<template>
<div>
  <div v-show="isShow" class="full-image" :class="{'safari': isSafari}" @touchmove.prevent>
    <a>
      <div class="full-img">
        <AdBanner :adBanner="adFull" :height="800" :isFork="true"></AdBanner>
      </div>
    </a>
    <a href="" @click.prevent="getClose" class="full-btn">关闭</a>
  </div>
  <div @touchmove.prevent>
    <AlertBanner :adBanner="adWindow" :height="400" :isFork="false"></AlertBanner>
  </div>
  <div class="mb-50">
    <AdBanner :adBanner="adbottom" :isFork="false"></AdBanner>
  </div>
  <div class="footer" id="footer">
    <div class="aspect__spacer"></div>
    <div class="control-bar">
      <router-link
        to="/leaderBoard"
        class="item"
        v-on:click.native="setActive('leaderBoard')"
      >
        <svg-icon
          name="trophy"
          width="24"
          height="24"
          :color="isActiveLeaderBoard ? activeColor : defaultColor"
          :opacity="isActiveLeaderBoard ? 1 : 0.7"
        ></svg-icon>
        <p :style="isActiveLeaderBoard ? activeStyle : defaultStyle">排行榜</p>
      </router-link>
      <router-link
        to="/videoList"
        class="item"
        v-on:click.native="setActive('video')"
      >
        <svg-icon
          name="ic-video"
          width="24"
          height="24"
          :color="isActiveVideo ? activeColor : defaultColor"
          :opacity="isActiveVideo ? 1 : 0.7"
        ></svg-icon>
        <p :style="isActiveVideo ? activeStyle : defaultStyle">影片</p>
      </router-link>
      <router-link
        to="/currentTask"
        class="item"
        v-on:click.native="setActive('task')"
      >
        <svg-icon
          name="ic-task"
          width="24"
          height="24"
          :color="isActiveTask ? activeColor : defaultColor"
          :opacity="isActiveTask ? 1 : 0.7"
        ></svg-icon>
        <p :style="isActiveTask ? activeStyle : defaultStyle">任务中心</p>
      </router-link>
      <router-link
        to="/store"
        class="item"
        v-on:click.native="setActive('store')"
      >
        <svg-icon
          name="ic-appmenu"
          width="24"
          height="24"
          :color="isActiveStore ? activeColor : defaultColor"
          :opacity="isActiveStore ? 1 : 0.7"
        ></svg-icon>
        <p :style="isActiveStore ? activeStyle : defaultStyle">应用中心</p>
      </router-link>
      <router-link
        to="/profile"
        class="item"
        v-on:click.native="setActive('profile')"
      >
        <svg-icon
          name="ic-person"
          width="24"
          height="24"
          :color="isActivePerson ? activeColor : defaultColor"
          :opacity="isActivePerson ? 1 : 0.7"
        ></svg-icon>
        <p :style="isActivePerson ? activeStyle : defaultStyle">个人</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getStartId, setSartId } from '@/utils/cookies'
import { FooBarModule } from '@/store/modules/footer-bar'
import AdBanner from '@/components/AdBanner/index.vue'
import AlertBanner from '@/components/AlertBanner/index.vue'
import { AdvModule } from '@/store/modules/adv'

@Component({
  components: {
    AdBanner,
    AlertBanner
  },
})
export default class FooterControlBar extends Vue {
  private adbottom = 'bottomSuspension'
  private adFull = 'startupApp'
  private adWindow = 'mobileAppVCoinLog'
  private isFork = Boolean
  private isShow = true
  private isSafari = false

  mounted() {
    const _this = this
    //判斷是否顯示進來頁面
    _this.checkStartBanner()
    //判斷是否用Safari
    _this.checkSafari()

    const urlPath = location.pathname

    if (urlPath.indexOf('video') > 0) {
      this.setActive('video')
    } else if (urlPath.indexOf('leaderBoard') > 0) {
      this.setActive('leaderBoard')
    } else if (urlPath.indexOf('task') > 0) {
      this.setActive('task')
    } else if (urlPath.indexOf('store') > 0) {
      this.setActive('store')
    } else if (urlPath.indexOf('profile') > 0) {
      this.setActive('profile')
    }

    const isIPhonex = () => {
      if (typeof window !== 'undefined' && window) {
        return (
          /iphone/gi.test(window.navigator.userAgent) &&
          window.screen.height >= 812
        )
      }
      return false
    }

    if (isIPhonex()) {
      let footer = document.getElementById('footer')
      if (footer) {
        footer.style.paddingBottom = '17px'
      }

      let btnList = document.getElementsByClassName('control-bar')
      btnList[0].setAttribute('style', 'height:calc(100% - 17px)')
    }
  }

  private isIPhonex() {
    if (typeof window !== 'undefined' && window) {
      return (
        /iphone/gi.test(window.navigator.userAgent) &&
        window.screen.height >= 812
      )
    }
    return false
  }

  get isActiveVideo(): boolean {
    return FooBarModule.isActiveVideo
  }
  get isActiveLeaderBoard(): boolean {
    return FooBarModule.isActiveLeaderBoard
  }
  get isActiveTask(): boolean {
    return FooBarModule.isActiveTask
  }
  get isActiveStore(): boolean {
    return FooBarModule.isActiveStore
  }
  get isActivePerson(): boolean {
    return FooBarModule.isActivePerson
  }

  private defaultColor = '#F4AEA3'
  private activeColor = '#F3806F'

  private activeStyle = {
    color: '#F3806F',
    opacity: 1,
  }

  private defaultStyle = {
    color: '#F4AEA3',
    opacity: 0.5,
  }

  private setActive(str: string) {
    FooBarModule.SetActiveState(str)
  }

  getClose() {
    const _this = this
    _this.isShow = false
  }

  checkSafari() {
    const _this = this
    let issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    if(issafariBrowser == true) {
      _this.isSafari = true
    }
  }

  checkStartBanner() {
    const _this = this
    const isStart = getStartId()
    if (isStart == undefined) {
      _this.isShow = true
      setSartId('start')
    } else {
      _this.isShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.full-image {
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 300;
  width: 100vw;
  height: 100vh;
  .full-img {
    position: fixed;
    width: 100%;
    height: 100vh;
  }
  .full-btn {
    background-color: #aaaaaa;
    color: #fff;
    font-size: 20px;
    border-radius: 14px;
    padding: 5px 20px;
    margin: 20px 5px 10px 5px;
    position: fixed;
    z-index: 300;
    right: 0;
  }
}

.safari {
  height: calc(100vh - 52px - 48px)!important; // 假設 header高度52px，footer 高度48px
}

.close {
  display: none;
}

.mb-50 {
  margin-bottom: 50px;
}

.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 200;

  -webkit-backdrop-filter: blur(9.6px);
  backdrop-filter: blur(9.6px);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(248, 248, 248, 0.8);

  .aspect__spacer {
    padding-bottom: 14.28%;
  }

  .control-bar {
    top: 0;
    left: 0;
    position: absolute;

    height: 100%;
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;

    .item {
      flex: 1 1 20%;

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  p {
    margin: 2px 0px 1px 0px;
    font-size: 12px;
  }
}
</style>
