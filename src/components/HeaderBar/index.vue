<template>
  <div class="header animated" id="headerBar">
    <div class="header-control-bar">
      <div class="pull-left">
        <div v-if="showBackBtn" class="go-back">
          <svg-icon
            name="ic-back"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <a :href="webLink + '?tk=' + token + '&uid=' + uid">
          <img src="@/assets/ic_vip_not_get.png" alt="" style="height: 24px;" />
        </a>
      </div>
      <div class="center">
        <div v-if="!showVideoTitle" class="logo">
          <!--          <svg-icon-->
          <!--            name="ic-v-2-logo"-->
          <!--            width="80"-->
          <!--            height="18"-->
          <!--            color="#FFF"-->
          <!--          ></svg-icon>-->
        </div>
        <router-link to="/TagPage" class="search-icon">
          <div class="">
            <svg-icon name="ic-search" height="24" class="icon"></svg-icon>
            <div style="font-size: 14px;">视频热搜</div>
          </div>
        </router-link>

        <div v-if="!showVideoTitle" class="path-name"></div>
        <div v-if="showVideoTitle" class="title">
          文字測試文字測試文字測試文字測試文字測試
        </div>
      </div>
      <div class="pull-right">
        <!--        <div class="question">-->
        <!--          <svg-icon-->
        <!--            name="question-circle-o"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            color="#FFF"-->
        <!--          ></svg-icon>-->
        <!--        </div>-->

        <router-link to="/share" class="item">
          <div class="promotion">
            <svg-icon
              name="ic-promotion"
              width="24"
              height="24"
              color="#FFF"
            ></svg-icon>
          </div>
        </router-link>

        <!--        <div class="smallMode">-->
        <!--          <svg-icon-->
        <!--            name="th-large.svg"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            color="#FFF"-->
        <!--          ></svg-icon>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="nav-bar" v-if="headerNavBarVisible">
      <div style="display: flex; flex-direction: column; height: 100%">
        <div style="display: flex; flex: 1 1 auto">
          <div
            class="nav-item"
            v-for="(obj, i) in headerNavBar"
            :key="i"
            @click="clickCategoryBtn(obj)"
          >
            {{ obj.name }}
          </div>
        </div>
        <div class="slider-bar">
          <div class="slider-tabs">
            <div class="slider-active"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { debounce, throttle } from '@/utils/commons'
import { FooBarModule, ICategoryList } from '@/store/modules/footer-bar'
import { HeaderModule } from '@/store/modules/header-bar'
import { getPayCenter } from '@/api/webview'
import { UserModule } from '@/store/modules/user'

@Component({
  components: {},
})
export default class HeaderBar extends Vue {
  private showVideoTitle = false
  private showBackBtn = false
  private showShareBtn = false
  private showQuestionBtn = false
  private showPromotionBtn = false
  private headerVisible = true
  private headerNavBarVisible = false
  private headerNavBar: ICategoryList[] = []
  private webLink = ''
  private token = UserModule.token
  private uid = UserModule.userId

  created() {
    const _this = this
    const path = location.pathname
    if (path === '/videoList') {
      this.headerNavBarVisible = true
      const list = FooBarModule.videoCategoryList
      if (list.length < 1) {
        this.$bus.$on('setCategoryList', function() {
          Vue.set(_this, 'headerNavBar', FooBarModule.videoCategoryList)
        })
      } else {
        Vue.set(_this, 'headerNavBar', FooBarModule.videoCategoryList)
      }
    } else {
      this.headerNavBarVisible = false
    }
  }

  beforeDestroy() {
    const _this = this
    this.$bus.$off('setCategoryList', 0)
  }

  mounted() {
    const _this = this
    function headerFold() {
      _this.headerVisible = true
    }
    const throttleHeaderFold = throttle(headerFold, 1500)

    // window.addEventListener('scroll', function(e) {
    //   if (_this.headerVisible === true) {
    //     throttleHeaderFold(e)
    //   }
    // })

    this.wetherScroll()
    this.getWebView()
  }

  private clickCategoryBtn(categoryObj: { name: string; type: string }) {
    const headerObj = this.headerNavBar
    const lastIndex = HeaderModule.categoryIndex

    const index = headerObj.indexOf(categoryObj)
    HeaderModule.setSelectedTabIndex(index)
    lastIndex < index
      ? turnRightForHeaderSlider(index)
      : turnLeftForHeaderSlider(index)

    this.$bus.$emit('changeVideoPage', categoryObj)

    function turnRightForHeaderSlider(index: number) {
      console.log('向右翻')
      const vmValue = index * 27
      const sliderBar = document.getElementsByClassName('slider-tabs')[0]
      sliderBar.setAttribute('style', `left:${vmValue}vw;`)
    }

    function turnLeftForHeaderSlider(index: number) {
      console.log('向左翻', index)
      const vmValue = index === 0 ? 0 : index * 27
      const sliderBar = document.getElementsByClassName('slider-tabs')[0]
      sliderBar.setAttribute('style', `left:${vmValue}vw;`)
    }
  }

  private wetherScroll() {
    const _this = this
    let startX: number = 0,
      startY: number = 0,
      endX: number = 0,
      endY: number = 0
    let body = document.getElementsByTagName('body')[0]
    body.addEventListener('touchstart', function(event) {
      let touch = event.targetTouches[0]
      //滑动起点的坐标
      startX = touch.pageX
      startY = touch.pageY
      // console.log('startX:' + startX + ',' + 'startY:' + startY)
    })
    body.addEventListener('touchmove', function(event) {
      let touch = event.targetTouches[0]
      //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
      endX = touch.pageX
      endY = touch.pageY
      // console.log('endX:' + endX + ',' + 'endY:' + endY)

      let dX = endX - startX
      let dY = endY - startY
      if (_this.headerVisible === false && dY > 5) {
        console.log('显示')
        _this.showCtrlBar()
      } else if (_this.headerVisible === true && dY < -35) {
        console.log('隐藏')
        if (window.scrollY !== 0) {
          _this.hideCtrlBar()
        }
      }
    })
    body.addEventListener('touchend', function(event) {
      let distanceX = endX - startX,
        distanceY = endY - startY
      // console.log('distanceX:' + distanceX + ',' + 'distanceY:' + distanceY)
      //移动端设备的屏幕宽度
      let clientHeight = document.documentElement.clientHeight
      // console.log(clientHeight;*0.2);
      //判断是否滑动了，而不是屏幕上单击了
      if (startY != Math.abs(distanceY)) {
        //在滑动的距离超过屏幕高度的20%时，做某种操作
        if (Math.abs(distanceY) > clientHeight * 0.2) {
          //向下滑实行函数someAction1，向上滑实行函数someAction2
          // distanceY <0 ? someAction1():someAction2();
        }
      }
      startX = startY = endX = endY = 0
    })
  }

  private hideCtrlBar() {
    const headerBar = document.getElementById('headerBar')

    if (headerBar) {
      headerBar.classList.add('slideOutUp')
      setTimeout(function() {
        headerBar.classList.add('outView')
      }, 400)

      headerBar.classList.remove('slideInDown')
      headerBar.classList.remove('inView')
    }
    this.headerVisible = false
  }
  private showCtrlBar() {
    const headerBar = document.getElementById('headerBar')

    if (headerBar) {
      headerBar.classList.add('slideInDown')
      headerBar.classList.add('inView')

      headerBar.classList.remove('slideOutUp')
      headerBar.classList.remove('outView')
    }

    this.headerVisible = true
  }

  private getWebView() {
    const _this = this
    let requestInfo = {
      type: 0,
    }
    getPayCenter(requestInfo)
      .then(res => {
        _this.webLink = res.data.data.url
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100vw;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);
  background-color: rgb(255, 0, 118);
  opacity: 0.9;

  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  backdrop-filter: blur(9.6px);

  .header-control-bar {
    width: 100%;
    min-height: 45px;
    background-color: #ff0076;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .center {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 0 0 60%;
      padding: 0 0.5rem;
      overflow: hidden;

      .path-name {
        color: white;
        font-size: 15px;
        padding: 0 0.5rem;
      }
      .title {
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: white;
      }
    }
    .pull-left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex: 0 0 20%;
      padding-left: 1rem;
      overflow: hidden;
    }
    .pull-right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      flex: 0 0 20%;
      padding-right: 1rem;
      overflow: hidden;

      > div {
        padding-left: 0.3rem;
      }
    }
  }

  .nav-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #ff0076;
    overflow-x: scroll;
    min-height: 35px;
    height: 35px;
    z-index: 200;
    width: 100vw;

    .nav-item {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27vw;
      height: 100%;
    }

    .slider-bar {
      position: relative;
      display: flex;
      height: 2px;
      -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
      transition: -webkit-transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
      transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
      transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1),
        -webkit-transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);

      .slider-tabs {
        position: absolute;
        width: 27vw;
        height: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0vw;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

        .slider-active {
          width: 80%;
          height: 100%;
          background-color: rgb(31, 253, 250);
          border-color: rgb(31, 253, 250);
        }
      }
    }
  }

  .nav-bar::-webkit-scrollbar {
    display: none;
  }
}

.slideOutUp.outView {
  top: -4.25rem;
  animation-duration: 1s !important; //动画持续时间
  animation-delay: 0s !important; //动画延迟时间
  animation-iteration-count: 1 !important; //动画执行次数

  -webkit-animation-duration: 1s !important; //动画持续时间
  -webkit-animation-delay: 0s !important; //动画延迟时间
  -webkit-animation-iteration-count: 1 !important; //动画执行次数
}

.slideInDown.inView {
  top: 0px;
  animation-duration: 0.3s !important; //动画持续时间
  animation-delay: 0s !important; //动画延迟时间
  animation-iteration-count: 1 !important; //动画执行次数

  -webkit-animation-duration: 0.3s !important; //动画持续时间
  -webkit-animation-delay: 0s !important; //动画延迟时间
  -webkit-animation-iteration-count: 1 !important; //动画执行次数
}

.search-icon {
  background-color: white;
  border-radius: 15px;
  flex: 1 1 auto;
  height: 24px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    position: absolute;
    text-align: center;
    left: 15px;
    top: 0px;
    height: 25px;
  }
}
</style>
