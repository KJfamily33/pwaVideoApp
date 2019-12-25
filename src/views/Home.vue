<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import VideoCard from '@/components/VideoPanelCard/index.vue'
import { FooBarModule } from '@/store/modules/footer-bar'

@Component({
  components: {
    HelloWorld,
    VideoCard,
  },
})
export default class Home extends Vue {
  mounted() {
    FooBarModule.SetActiveState('video')
  }
}
</script>
