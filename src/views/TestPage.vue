<template>
  <div class="test">
    <HotBar :typeList="leaderboardList"></HotBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HotBar from '@/components/HotBar/index.vue'
import { getLeaderboard } from '@/api/leaderboard'


@Component({
  components: {
    HotBar
  },
})
export default class TestPage extends Vue {
  private leaderboardList = []
  mounted() {
    const vm = this
    vm.getLeaderboard()
  }
  getLeaderboard() {
    const vm = this
    getLeaderboard().then(res => {
      if (res.status === 200) {
        vm.leaderboardList = res.data.data.leaderboard
        console.log(vm.leaderboardList)
      }
    }).catch(e=>{
      console.log(e)
    })
  }  
}
</script>

<style lang="scss" scoped>

</style>