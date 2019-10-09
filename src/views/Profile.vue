<template>
  <div class="body">
    <div class="info">
      <div class="cover-panel colum">
        <div style="margin-left:40px;">
          <div class="picture"></div>
          <div class="text white-color">9487</div>
        </div>
        <div class="debug">
          <div class="colum colum-align-star">
            <div class="row">
              <svg-icon name="ic-vcoin" width="15" height="15"></svg-icon>
            <span class="text margin-left-5">999,999,999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProfileRow from "@/components/ProfileRow/index.vue";
import HeaderBar from "../components/HeaderBar/index.vue";
import { IProfileInfoObj } from "@/types/profile";

@Component({
  components: {
    ProfileRow
  }
})
export default class Profile extends Vue {}
</script>

<style scoped lang="scss">
.body {
  height: 100%;
  background-color: #f9f9f9;
}

.info {
  height: 6.125rem;
  width: 100%;
  max-height: 6.125rem;
  background-image: url("../assets/bg-profile.jpg");
  background-size: 100% 6.125rem;
  background-position-x: center;
}

.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.colum {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.colum-align-star{
  align-items: flex-start;
}

.debug {
  background-color: white;
  height: 100%;
  width: 100%;
}
.refresh {
  height: 100%;
}

.picture {
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
  border-radius: 50%;
}

.margin-left-5 {
  margin-left: 5px;
}

.row {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
}
.white-color {
  color: #ffffff;
}

.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f3806f;
}
</style>
