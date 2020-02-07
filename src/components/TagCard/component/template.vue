<template>
  <div class="list">
    <span>{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true },
  },
}
</script>

<style lang="scss" scoped>
/*.list {*/
/*  background-color: white;*/
/*  min-height: 30px;*/
/*  text-align: left;*/
/*  width: 100vw;*/
/*  left: 0;*/
/*  margin-left: 0;*/
/*  line-height: 30px;*/
/*}*/
</style>
<style lang="scss">
.v-autocomplete {
  z-index: 3000;
  .v-autocomplete-input-group {
    .v-autocomplete-input {
      font-size: 1.5em;
      padding: 10px 15px;
      box-shadow: none;
      border: 1px solid #157977;
      width: calc(100% - 32px);
      outline: none;
      background-color: #eee;
    }

    &.v-autocomplete-selected {
      .v-autocomplete-input {
        color: green;
        background-color: #f2fff2;
      }
    }
  }
  .v-autocomplete-list {
    width: 100%;
    text-align: left;
    border: none;
    border-top: none;
    max-height: 400px;
    overflow-y: auto;
    border-bottom: 1px solid #157977;
    .v-autocomplete-list-item {
      cursor: pointer;
      background-color: #fff;
      padding: 10px;
      border-bottom: 1px solid #157977;
      border-left: 1px solid #157977;
      border-right: 1px solid #157977;

      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: #eee;
      }
      abbr {
        opacity: 0.8;
        font-size: 0.8em;
        display: block;
        font-family: sans-serif;
      }
    }
  }
}
</style>
