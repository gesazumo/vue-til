<template>
	<section class="section">
		<div class="title">
			<div>- 듀오구하기</div>
			<button class="addPostButton" @click="showModal">작성하기</button>
		</div>
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
	methods: {
		async showModal() {
			const result = await this.$showPostFormModal()
			if (result) {
				console.log('리스트재조회 하자')
			}
		},
	},
}
</script>
