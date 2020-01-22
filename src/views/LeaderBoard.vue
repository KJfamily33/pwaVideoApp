<template>
  <div class="leaderBoard">
    <header-bar></header-bar>
    <HotBar></HotBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HotBar from '@/components/HotBar/index.vue'
import HeaderBar from '@/components/HeaderBar/index.vue'
import { LeaderBoardModule } from '@/store/modules/leaderBoard'

@Component({
  components: {
    HotBar,
    HeaderBar,
  },
})
export default class LeaderBoard extends Vue {
  mounted() {
    const list = LeaderBoardModule.leaderBoardList
    if (list === undefined || list.length <= 0) {
      LeaderBoardModule.DoGetLeaderBoard()
    } else {
      LeaderBoardModule.DoGetSaveList()
    }
  }
}
</script>

<style lang="scss" scoped>
.leaderBoard {
  padding-top: 34px;
  overflow-x: hidden
}
</style>
