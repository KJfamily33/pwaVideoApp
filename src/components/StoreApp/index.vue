<template>
  <div class="appicon-size margin-bottom-10 margin-left-right-175">
    <a :href="appList.iosUrl" class="app-size">
      <img src="holder.js/100px100py?auto=yes&text=1:1" alt="">
    </a>
    <div class="text text-color-6a6a6a">{{ appList.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Holder from 'holderjs'

@Component({
  components: {}
})
export default class StoreApp extends Vue {
  @Prop() private appList!: any
  mounted() {
    const img = (document.querySelectorAll(
      '.app-size img'
    ) as unknown) as HTMLElement
    Holder.run({
      images: img,
    })
  }
}
</script>

<style lang="scss" scoped>
// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.875rem ;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.text-color-6a6a6a {
  color: #6a6a6a;
}

// appIcon
.appicon-size {
  width: 3rem;
  height: auto;
}

.app-size {
  width: 48px;
  height: 48px;
  img {
    min-width: 48px;
    min-height: 48px;
    width: 100%;
    margin-bottom: 5px;
  }
}

// 排版
.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-left-right-175 {
  margin-left: 17.5px;
  margin-right: 17.5px;
}
</style>
