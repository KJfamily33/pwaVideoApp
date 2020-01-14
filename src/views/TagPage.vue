<template>
  <div class="">
    <div class="banner"></div>
    <TagCard></TagCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TagCard from '@/components/TagCard/index.vue'

@Component({
  components: {
    TagCard
  },
})
export default class Example extends Vue {}
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>