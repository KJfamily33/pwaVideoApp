<template>
  <div class="footer">
    <div class="aspect__spacer"></div>
    <div class="control-bar">
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
          :opacity="isActiveVideo ? 1 : 0.5"
        ></svg-icon>
        <p :style="isActiveVideo ? activeStyle : defaultStyle">影片</p>
      </router-link>
      <router-link
        to="/footer"
        class="item"
        v-on:click.native="setActive('search')"
      >
        <svg-icon
          name="ic-search"
          width="24"
          height="24"
          :color="isActiveSearch ? activeColor : defaultColor"
          :opacity="isActiveSearch ? 1 : 0.5"
        ></svg-icon>
        <p :style="isActiveSearch ? activeStyle : defaultStyle">搜寻</p>
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
          :opacity="isActiveTask ? 1 : 0.5"
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
          :opacity="isActiveStore ? 1 : 0.5"
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
          :opacity="isActivePerson ? 1 : 0.5"
        ></svg-icon>
        <p :style="isActivePerson ? activeStyle : defaultStyle">个人</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { FooBarModule } from '@/store/modules/footer-bar'

@Component({
  components: {},
})
export default class FooterControlBar extends Vue {
  mounted() {
    const urlPath = location.pathname

    if (urlPath.indexOf('video') > 0) {
      this.setActive('video')
    } else if (urlPath.indexOf('search') > 0) {
      this.setActive('search')
    } else if (urlPath.indexOf('task') > 0) {
      this.setActive('task')
    } else if (urlPath.indexOf('store') > 0) {
      this.setActive('store')
    } else if (urlPath.indexOf('profile') > 0) {
      this.setActive('profile')
    }
  }

  get isActiveVideo(): boolean {
    return FooBarModule.isActiveVideo
  }
  get isActiveSearch(): boolean {
    return FooBarModule.isActiveSearch
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
}
</script>

<style scoped lang="scss">
.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100vw;

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
    margin: 4px 0px 1px 0px;
    font-size: 12px;
  }
}
</style>
