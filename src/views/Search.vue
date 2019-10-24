<template>
  <div class="body">
    <!--熱門-->
    <div v-if="!isSearch" class="content">
      <SearchHotCell></SearchHotCell>
      <SearchHotCell></SearchHotCell>
    </div>

    <!--搜尋後-->
    <div v-if="isSearch" class="recommend">
      <div>gasdf</div>
      <div>dss</div>
      <div>reee</div>
      <div>sdfasdfasdfasdfa</div>
      <div>gasdf</div>
      <div>dss</div>
      <div>reee</div>
      <div>sdfasdfasdfasdfa</div>
    </div>
    <div  v-if="isSearch" class="scroll">
      <div>ad</div>
      <div class="cell" v-for="(e, i) in 12" :key="i">
        <video-card></video-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchHotCell from "@/components/SearchHotCell/index.vue";
import VideoCard from "@/components/VideoPanelCard/index.vue";
import AdBanner from "@/components/AdBanner/index.vue";

@Component({
  components: {
    SearchHotCell,
    VideoCard,
    AdBanner
  }
})
export default class Search extends Vue {
  private isSearch = false;
}
</script>
<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.content {
  margin-left: 8px;
  margin-right: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.scroll {
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.recommend div {
  margin-left: 10px;
  margin-right: 10px;
  font-family: STHeitiTC;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #595959;
}

.recommend {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.cell {
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 10px;
}

.recommend::-webkit-scrollbar {
  display: none;
}
</style>
