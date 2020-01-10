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
      </div>
      <div class="center">
        <div v-if="!showVideoTitle" class="logo">
          <svg-icon
            name="ic-v-2-logo"
            width="80"
            height="18"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="!showVideoTitle" class="path-name">影片列表</div>
        <div v-if="showVideoTitle" class="title">
          文字測試文字測試文字測試文字測試文字測試
        </div>
      </div>
      <div class="pull-right">
        <div v-if="showQuestionBtn" class="question">
          <svg-icon
            name="question-circle-o"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="showPromotionBtn" class="promotion">
          <svg-icon
            name="ic-promotion"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="showShareBtn" class="share">
          <svg-icon
            name="ic-share"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <div class="smallMode">
          <svg-icon
            name="th-large.svg"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
      </div>
    </div>
    <div class="nav-bar" v-if="headerNavBarVisible">
      <div
        class="nav-item"
        v-for="(obj, i) in headerNavBar"
        :key="i"
        @click="clickCategoryBtn(obj)"
      >
        {{ obj.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { debounce, throttle } from '@/utils/commons'
import { FooBarModule, ICategoryList } from '@/store/modules/footer-bar'

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
  }

  private clickCategoryBtn(categoryObj: { name: string; type: string }) {
    this.$bus.$emit('changeVideoPage', categoryObj)
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
      } else if (_this.headerVisible === true && dY < -25) {
        console.log('隐藏')

        _this.hideCtrlBar()
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
</style>
