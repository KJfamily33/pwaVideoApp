<template>
  <div class="appicon-size margin-bottom-10 margin-left-right-175">
    <div class="app-size"></div>
    <div class="text text-color-6a6a6a">APP</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class StoreApp extends Vue {}
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
  height: 3rem;
  width: 3rem;
  background-color: black;
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
