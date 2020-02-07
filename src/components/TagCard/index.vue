<template>
  <div>
    <div class="search-header">
      <!--      <input-->
      <!--        placeholder="请输入内容"-->
      <!--        v-model="searchContent"-->
      <!--        class="search-input"-->
      <!--      />-->
      <div class="go-back" v-on:click="goBack">
        <svg-icon name="ic-back" width="24" height="24" color="#FFF"></svg-icon>
      </div>
      <v-autocomplete
        :items="items"
        v-model="item"
        :get-label="getLabel"
        :component-item="template"
        @update-items="updateItems"
        @item-selected="doSearch"
        input-class="search-input"
      >
      </v-autocomplete>
    </div>
    <div
      v-for="(obj, i) in list"
      :key="i"
      class="tag-card"
      v-show="!showVideoList"
    >
      <div class="type">
        <span>{{ obj.title }}</span>
      </div>
      <div class="tag">
        <div v-for="(tag, j) in obj.tags" :key="j" class="tag-item">
          <a href="" class="tag-btn" @click.prevent="item = tag">{{ tag }}</a>
        </div>
      </div>
    </div>
    <div class="video-list">
      <transition-group name="slide-fade" v-if="showVideoList">
        <div class="list-item" v-for="(e, i) in resObj" :key="i">
          <a href v-if="i > 0 && i % 3 === 0">
            <ad-banner :adBanner="adBanner" :isFork="true"></ad-banner>
          </a>
          <video-card
            ref="item"
            :videoInfoObj="resObj[i]"
            v-on:startVideo="startVideo"
          ></video-card>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getAutoCompleteList, getSearchList } from '@/api/videoInfo'
import template from './component/template.vue'
import AdBanner from '@/components/AdBanner/index.vue'
import VideoCard from '@/components/VideoPanelCard/index.vue'

@Component({
  components: {
    VideoCard,
    AdBanner,
    template,
  },
})
export default class TagCard extends Vue {
  private resObj = []
  private showVideoList = false
  private template = template
  private searchContent = ''
  private list = [
    {
      title: '动作',
      tags: [
        '自慰',
        '打飞机',
        '后入',
        '手淫',
        '女上位',
        '口爆',
        '69',
        '无套内射',
        '颜射',
        '口交',
        '肛交',
        '乳交',
        '吹箫',
        '后入式',
      ],
    },
    {
      title: '角色',
      tags: [
        '学生',
        '妓女',
        '少妇',
        '熟女',
        '空姐',
        '人妻',
        '小姐',
        '老师',
        '护士',
        '警察',
        '女仆',
        '医生',
        '模特',
        '萝莉',
      ],
    },
    {
      title: '情景',
      tags: [
        '车震',
        '酒店',
        '按摩',
        '办公室',
        'KTV',
        '野外',
        '公交车',
        '楼梯口',
        '酒吧',
        '直播',
        '卫生间',
        '公共厕所',
        '游泳池',
      ],
    },
    {
      title: '热点',
      tags: ['自拍', '偷拍', '动漫', '丑闻', '主播'],
    },
    {
      title: '癖好',
      tags: [
        '乱伦',
        '群P',
        '捆绑',
        '足交',
        '内射',
        '双飞',
        '叫床',
        '蕾丝',
        '强奸',
        '偷窥',
        '恋足',
      ],
    },
    {
      title: '部位',
      tags: ['巨根', '白虎', '巨乳', '蝴蝶尻', '平胸'],
    },
    {
      title: '地区',
      tags: ['欧美', '亚太', '大陆', '韩国', '日本'],
    },
    {
      title: '道具',
      tags: ['丝袜', '震动棒', '眼罩', '丁字裤', '跳蛋', '假鸡巴', '面罩'],
    },
  ]
  private adBanner = 'homeApp'

  private items = []
  private item = ''
  private resObj = []

  private async doAutoComplete(text: any) {
    const requestInfo = { search: text, count: 6 }
    this.items = await getAutoCompleteList(requestInfo).then(
      res => res.data.data.result
    )
  }

  private async doSearch(text: any) {
    console.log('通过')
    this.showVideoList = !this.showVideoList

    const requestInfo = {
      search: text,
    }
    this.resObj = await getSearchList(requestInfo).then(
      res => res.data.data.video
    )
  }
  private goBack() {
    if (this.showVideoList === true) {
      this.showVideoList = false
      this.resObj = []
    } else {
      this.$router.go(-1)
    }
  }

  private getLabel() {
    return this.item !== null ? this.item : ''
  }

  private updateItems(text: any) {
    this.doAutoComplete(text)
  }

  startVideo(val) {
    let card = document.getElementsByClassName('list-item')
    for (let i = 0; i < card.length; i++) {
      if (i != val) {
        this.$refs.item[i].isPlay = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-card {
  display: flex;
  margin: 5px 0;
  background-color: #d9dbdc;
  .type {
    background-color: #ff0088;
    color: #eee;
    font-size: 18px;
    font-weight: 500;
    writing-mode: vertical-rl;
    min-width: 35px;
    max-width: 35px;
    min-height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tag {
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .tag-item {
      text-align: left;
      padding: 10px 0;
      .tag-btn {
        background-color: #666666;
        color: #fff;
        font-size: 14px;
        min-height: 40px;
        border-radius: 6px;
        padding: 8px 12px;
        margin: 0 5px;
      }
    }
  }
}

.search-header {
  padding: 8px;
  background-color: #ff0076;
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>

<style lang="scss">
.search-input {
  width: 100%;
  height: 100%;
}

.v-autocomplete,
.v-autocomplete-input-group {
  height: 100%;
  flex: 1 1 auto;
}
.go-back {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
}

.v-autocomplete-input-group input {
}

.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translate(0px, 8px);
  opacity: 0;
}

.list-item > * {
  margin: 15px 0px;
}

.list-item-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px -10px;

  .row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 120px;
    width: 100%;
    min-width: 100vw;
    max-width: 100vw;
    margin: 5px;

    .item {
      height: 100%;
      width: 45% !important;
    }
  }
}

.video-list {
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;

  /*overflow-y: auto;*/
}
</style>
