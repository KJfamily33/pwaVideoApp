<template>
   <div class="shareItem column flex-center margin-bottom-20">
      <div class="shartIcon"></div>
      <div class="text text-color-6a6a6a text-16-300">123</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ShareItem extends Vue {}
</script>

<style lang="scss" scoped>
.shareItem {
  width: 33.3%;
  height: 5.625rem;
}

.shartIcon {
  height: 66px;
  width: 66px;
  background-color: black;
}

.text-16-300 {
  font-size: 1rem;
  font-weight: 300;
}

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  line-height: 24px;
}

.text-color-6a6a6a {
  color: #6a6a6a;
}

.column {
  display: flex;
  flex-direction: column;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}


.row {
  display: flex;
  flex-direction: row;
}

.flex-start-center {
  display: flex;
  align-items: center;

}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
