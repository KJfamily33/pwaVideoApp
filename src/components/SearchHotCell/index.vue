<template>
  <div class="body">
    <table>
      <tr>
        <th rowspan="2" colspan="2">
          <div class="header">
            <div class="text">123</div>
          </div>
        </th>
        <th>第一行.3</th>
      </tr>
      <tr>
        <th>第二行.3</th>
      </tr>
      <tr>
        <th>第三行.1</th>
        <th>第三行.2</th>
        <th>第三行.3</th>
      </tr>
    </table>
    <div class="line"></div>
    <table>
      <tr>
        <th>第一行.1</th>
        <th>第一行.2</th>
        <th>第一行.3</th>
      </tr>
      <tr>
        <th>第二行.1</th>
        <th rowspan="2" colspan="2">
           <div class="header">
            <div class="text">123</div>
          </div>
        </th>
      </tr>
      <tr>
        <th>第三行.1</th>
      </tr>
    </table>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SearchHotCell extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

table {
  width: 100%;
  border-spacing: 10px;
  table-layout:fixed;
}

td {
  word-wrap: break-word;
}

th {
  height: 100px;
  background-color: red;

}

.line {
  height: 1px;
  width: 100%;
  background-color: #f3806f;
}

.header {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  display: flex;
}

.header .text {
  font-family: STHeitiTC;
  font-size: 1.375rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f3806f;
  word-wrap:break-word;
  word-break:break-all;
}
</style>
