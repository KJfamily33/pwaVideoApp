<template>
  <div class="body">
    <div class="pictrue"></div>
    <div class="text" style="margin-top:16.7px">请输入兑换码兑换VIP</div>
    <div>
      <input type="text" placeholder="请输入兑换码" />
    </div>
    <div>
      <button>点击兑换</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ChangeCode extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.pictrue {
  height: 16.875rem;
  width: 100%;
  background-color: red;
}

input {
  height: 1.25rem;
  width: 17.5rem;
  margin-top: 38px;
  outline-style: none;
  border: 0px;
  border-color: linear-gradient(to left, #f38070, #fb6f9c);
  border-bottom: 0.0625rem solid;
  padding: 15px 0px;
  font-family: STHeitiTC;
  font-size: 1rem;
  font-weight: 500;
  background-color: hsla(89, 43%, 51%, 0);
  color: #f3806f;
}

button {
  margin-top: 28px;
  width: 17.5rem;
  height: 2.1875rem;
  border-radius: 17.3125rem;
  background-color: #d8d8d8;
  color: #ffffff;
  border: none;
  font-family: STHeitiTC;
  font-size: 0.875rem;
  font-weight: 300;
  outline:none;
}



.text {
  font-family: STHeitiTC;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}
</style>
