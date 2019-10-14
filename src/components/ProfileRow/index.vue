<template>
  <div class="size">
    <div class="column">
      <svg-icon name="ic-acount" width="22" height="22" style=""></svg-icon>
        <div class="text" style="margin-left:15px">
          Test
        </div>
        <div class="text" style="margin-left:5px">
          9487@google.com
        </div>
        <svg-icon name="ic-forward" width="6" height="10" class="rightarrow" ></svg-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IProfileInfoObj } from '@/types/profile'

@Component
export default class ProfileRow extends Vue {
  @Prop() private ProfileInfoObj!: IProfileInfoObj

}
</script>
<style scoped lang="scss">
.size {
  width: 100%;
  height: 35px;
  background-color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;

}

.column {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;

}

.text {
  font-family: STHeitiTC;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}
.rightarrow {
  position: absolute;
  right: 15px;
}
</style>
