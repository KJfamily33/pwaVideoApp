<template>
  <div class="hotbar">
    <div class="section" v-for="(type, indx) in leaderBoardList" :key="indx">
      <div class="hotlist">
        <div class="most">
          <span
            >最多人看的<span class="most-type">{{ type.typeName }}</span></span
          >
        </div>
        <div class="filter">
          <a
            href=""
            :class="changeDailyBtnColor(type)"
            @click.prevent="checkDaily(type)"
            >每日</a
          >
          <a
            href=""
            :class="changeWeeklyBtnColor(type)"
            @click.prevent="checkWeekly(type)"
            >每周</a
          >
          <a
            href=""
            :class="changeMonthlyBtnColor(type)"
            @click.prevent="checkMonthly(type)"
            >每月</a
          >
        </div>
      </div>
      <HotVideoCard :hotList="checkFilterRange(type)"></HotVideoCard>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import HotVideoCard from '@/components/HotVideoCard/index.vue'
import { LeaderBoardModule } from '@/store/modules/leaderBoard'

@Component({
  components: {
    HotVideoCard,
  },
})
export default class HotBar extends Vue {
  public leaderBoardList: any = []

  // @Watch('leaderBoardList')
  // private test() {
  //   console.log('test')
  // }

  private checkFilterRange(type) {
    const _this = this
    if (type['isDaily']) {
      return type.daily
    } else if (type['isWeekly']) {
      return type.weekly
    } else if (type['isMonthly']) {
      return type.monthly
    }
  }
  mounted() {
    const _this = this
    this.$bus.$on('leaderBoard', function() {
      _this.leaderBoardList = LeaderBoardModule.leaderBoardList
      for (let i = 0; i < _this.leaderBoardList.length; i++) {
        let list = _this.leaderBoardList[i]
        if (list['isDaily'] === undefined || list['isDaily'] === null) {
          Vue.set(list, 'isDaily', false)
        }
        if (list['isWeekly'] === undefined || list['isWeekly'] === null) {
          Vue.set(list, 'isWeekly', true)
        }
        if (list['isMonthly'] === undefined || list['isMonthly'] === null) {
          Vue.set(list, 'isMonthly', false)
        }
      }
    })
  }

  beforeDestroy() {
    const _this = this
    this.$bus.$off('leaderBoard', 0)
  }

  private changeDailyBtnColor(type: any) {
    return type.isDaily ? 'filter-btn-active' : 'filter-btn'
  }

  private changeWeeklyBtnColor(type: any) {
    return type.isWeekly ? 'filter-btn-active' : 'filter-btn'
  }

  private changeMonthlyBtnColor(type: any) {
    return type.isMonthly ? 'filter-btn-active' : 'filter-btn'
  }

  checkDaily(type: any) {
    this.$nextTick(() => {
      Vue.set(type, 'isDaily', true)
      Vue.set(type, 'isWeekly', false)
      Vue.set(type, 'isMonthly', false)
    })
  }
  checkWeekly(type: any) {
    this.$nextTick(() => {
      Vue.set(type, 'isDaily', false)
      Vue.set(type, 'isWeekly', true)
      Vue.set(type, 'isMonthly', false)
    })
  }
  checkMonthly(type: any) {
    this.$nextTick(() => {
      Vue.set(type, 'isDaily', false)
      Vue.set(type, 'isWeekly', false)
      Vue.set(type, 'isMonthly', true)
    })
  }
}
</script>

<style lang="scss" scoped>
.hotbar {
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 100px;
  .section {
    padding: 20px 7px;
    border-bottom: 3px solid #dddddd;
    .hotlist {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .most {
        .most-type {
          font-size: 20px;
          font-weight: bold;
          color: #a42d00;
          margin-left: 3px;
        }
      }
      .filter {
        .filter-btn-active {
          background-color: #ff0088;
          color: #fff;
          font-size: 20px;
          border-radius: 16px;
          padding: 5px 7px;
          margin: 0 5px;
        }
        .filter-btn {
          background-color: #aaaaaa;
          color: #fff;
          font-size: 16px;
          border-radius: 14px;
          padding: 6px 6px;
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
