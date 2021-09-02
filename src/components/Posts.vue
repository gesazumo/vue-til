<template>
	<section class="section">
		<div class="title">- 듀오구하기</div>
		<div class="container">
			<post v-for="i in 10" :key="i" />
		</div>
	</section>
</template>

<script>
import Post from './Post.vue'
export default {
	components: { Post },
	name: 'Posts',
}
</script>
