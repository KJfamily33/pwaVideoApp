<template>
  <div>
    <div class="tag-card">
      <div class="type">
        <span>动作</span>
      </div>
      <div class="tag">
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">自慰</a>
          <a href="" class="tag-btn" @click.prevent="">打飞机</a>
          <a href="" class="tag-btn" @click.prevent="">后入</a>
          <a href="" class="tag-btn" @click.prevent="">手淫</a>
          <a href="" class="tag-btn" @click.prevent="">女上位</a>
        </div>
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">口爆</a>
          <a href="" class="tag-btn" @click.prevent="">69</a>
          <a href="" class="tag-btn" @click.prevent="">无套内射</a>
          <a href="" class="tag-btn" @click.prevent="">颜射</a>
          <a href="" class="tag-btn" @click.prevent="">口交</a>
        </div>
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">肛交</a>
          <a href="" class="tag-btn" @click.prevent="">乳交</a>
          <a href="" class="tag-btn" @click.prevent="">吹箫</a>
          <a href="" class="tag-btn" @click.prevent="">后入式</a>
        </div>      
      </div>
    </div>
    <div class="tag-card">
      <div class="type">
        <span>角色</span>
      </div>
      <div class="tag">
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">学生</a>
          <a href="" class="tag-btn" @click.prevent="">妓女</a>
          <a href="" class="tag-btn" @click.prevent="">少妇</a>
          <a href="" class="tag-btn" @click.prevent="">熟女</a>
          <a href="" class="tag-btn" @click.prevent="">空姐</a>
        </div>
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">人妻</a>
          <a href="" class="tag-btn" @click.prevent="">小姐</a>
          <a href="" class="tag-btn" @click.prevent="">老师</a>
          <a href="" class="tag-btn" @click.prevent="">护士</a>
          <a href="" class="tag-btn" @click.prevent="">警察</a>
        </div>
        <div class="tag-item">
          <a href="" class="tag-btn" @click.prevent="">女仆</a>
          <a href="" class="tag-btn" @click.prevent="">医生</a>
          <a href="" class="tag-btn" @click.prevent="">模特</a>
          <a href="" class="tag-btn" @click.prevent="">萝莉</a>
        </div>      
      </div>
    </div>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Example extends Vue {}
</script>

<style lang="scss" scoped>
.tag-card {
  display: flex;
  margin: 5px 0;
  background-color: #000;
  .type {
    background-color: #ff0088;
    color: #eee;
    font-size: 24px;
    writing-mode: vertical-rl;
    width: 35px;
  }
  .tag {
    margin: 10px;
    .tag-item {
      text-align: left;
      padding: 10px 0;
      .tag-btn {
        background-color: #666666;
        color: #fff;
        font-size: 16px;
        min-height: 40px;
        border-radius: 6px;
        padding: 8px;
        margin: 0 5px;
      }
    }
  }
}
</style>
