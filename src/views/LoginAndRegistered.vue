<template>
  <div class="login-registered-panel">
		<div class="cover-panel">
			333
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class LoginAndRegistered extends Vue {}
</script>
<style scoped lang="scss">
.login-registered-panel{
	height: 100%;
	background-image: url("../assets/test.webp");
	background-size: cover;
	background-position-x: center;
}

	.cover-panel {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>
