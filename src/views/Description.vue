<template>
  <div class="body">
    <!--廣告-->
    <div class="ad margin-top-bottom-10"></div>
    <descriptioncell></descriptioncell>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DescriptionCell from '@/components/DescriptionCell/index.vue';
import { IDescriptionObj } from '@/types/description';


@Component({
  components: {}
})
export default class Description extends Vue {
  private obj: IDescriptionObj = {
    title: '无标题',
    content: 'asdf',
    link:'',
  }
}
</script>


<style lang="scss" scoped>
.body {
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

// 廣告
.ad {
  width: 95%;
  height: 3.625rem;
  border-radius: 0.25rem;
  background-color: red;
}

// 標題
.title {
  width: 95%;
  height: 2.1875rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

// 等分
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.column-flex-4 {
  flex: 4;
}

// 位置
.flex-align-start {
  align-items: flex-start;
}

// 間距
.margin-top-bottom-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.margin-top-5 {
  margin-top: 5px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-5 {
  margin-bottom: 5px;
}

.margin-left-15 {
  margin-bottom: 15px;
}

// 展開項目
.one {
  display: none;
  width: 80%;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
// 上下箭頭
.upicon {
  display: none;
}

.downicon {
  display: inline-block;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.text-content {
  font-family: STHeitiTC;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #a5a5a5;
  text-align: left;
}
</style>
