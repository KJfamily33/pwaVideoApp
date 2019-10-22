<template>
  <div class="column">
    <div class="row flex-center-center margin-bottom-5 margin-left-6 margin-right-6">
      <svg-icon name="ic-tadk" width="22" height="22"></svg-icon>
      <div class="margin-left-5 text text-color-f3806f text-size-16 text-weight-500">帶入值</div>
    </div>
    <div class="line margin-bottom-5 margin-left-6 margin-right-6"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class IconTextWithLine extends Vue {}
</script>
<style lang="scss" scoped>

.column {
  display: flex;
  flex-direction: column;
}

.line {
  height: 0.0625rem;
  background-color: #f3806f;
}

.text-weight-500 {
  font-weight: 500;
}

.text-size-16 {
  font-size: 1rem;
}

.text-color-f3806f {
  color: #f3806f;
}

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-right-6 {
  margin-right: 6px;
}

.margin-left-6 {
  margin-left: 6px;
}
.margin-bottom-5 {
  margin-bottom: 5px;
}

.row {
  display: flex;
  flex-direction: row;
}

.flex-center-center {
  flex-direction: center;
  align-items: center;
}
</style>
