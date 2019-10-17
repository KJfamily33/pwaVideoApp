<template>
  <div class="applicationItem">
    <div class="row flex-center margin-bottom-10" style="height:100%">
      <div class="column">
        <div class="app-size"></div>
      </div>
      <div class="column" style="flex:2">
        <div class="width-100pa text-start">App</div>
        <div class="width-100pa text-start">Content</div>
      </div>
      <div class="column">
        <button class="buttom ">下载</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Example extends Vue {}
</script>
<style lang="scss" scoped>
// application
.applicationItem {
  width: 100%;
  height: 100px;
}

.app-size {
  height: 3rem;
  width: 3rem;
  background-color: red;
}

.buttom {
  width: 3rem;
  height: 1.5625rem;
  border-radius: 0.25rem;
  background-image: linear-gradient(148deg, #f3806f 21%, #f8758d 84%);
  font-family: STHeitiTC;
  font-size: 0.8125rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: 0;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6a6a6a;
}

.text-start {
  text-align: start;
}

// 排版
.width-100pa {
  width: 100%;
}


.flex-center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
