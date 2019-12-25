<template>
  <div class="background">
    <div class="cover-panel">
      <div class="content">
        <p class="text title" style="color: #f3806f;font-weight: 500;">
          用户最新地址
        </p>
        <div class="row">
          <div class="colum">
            <NewAddressBtn></NewAddressBtn>
            <NewAddressBtn></NewAddressBtn>
            <NewAddressBtn></NewAddressBtn>
            <NewAddressBtn></NewAddressBtn>
            <NewAddressBtn></NewAddressBtn>
            <NewAddressBtn></NewAddressBtn>
          </div>
        </div>
        <div class="isandroid">
          <div class="android">
            <svg-icon name="ic-applogo" width="60" height="60"></svg-icon>
            <span
              class="text"
              style="font-size: 0.875rem;
  font-weight: 300;"
              >V2视频</span
            >
            <span
              class="text"
              style="font-size: 1rem;
  font-weight: 500;"
              >安卓最佳体验</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewAddressBtn from '@/components/NewAddressBtn/index.vue'

@Component({
  components: {
    NewAddressBtn,
  },
})
export default class NewAddress extends Vue {}
</script>

<style scoped lang="scss">
.background {
  height: 100%;
  background-image: url('../assets/bg-new_address.jpg');
  background-size: cover;
  background-position-x: center;
}

.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.content {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin-top: 11.0625rem;
  padding-bottom: 0.4375rem;
  margin-right: 0.375rem;
  margin-left: 0.375rem;
  border-bottom: 1px solid #f3806f;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
.text {
  font-family: STHeitiTC;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.isandroid {
  position: absolute;
  bottom: 1.875rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.android {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
}

.isandroid svg {
  margin-bottom: 0.625rem;
}
</style>
