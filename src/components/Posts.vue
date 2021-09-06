<template>
	<section class="section">
		<div class="title">
			<div>- 듀오구하기</div>
			<button class="addPostButton" @click="showModal">작성하기</button>
		</div>
		<div class="container" v-if="postList.length > 0">
			<div v-for="postData in postList" :key="postData.id">
				<post :postData="postData" />
			</div>
		</div>
	</section>
</template>

<script>
import { fetchGetPostList } from '../api/post'
import Post from './Post.vue'
export default {
	components: { Post },
	name: 'Posts',
	data() {
		return {
			postList: [],
			from: 0,
			to: 10,
		}
	},
	created() {
		this.getPostList()
	},
	methods: {
		async getPostList() {
			const filterObject = {
				from: 0,
				to: 10,
			}
			const { data } = await fetchGetPostList(filterObject)
			this.postList.push(...data)
		},
		async showModal() {
			const result = await this.$showPostFormModal()
			if (result) {
				this.getPostList
			}
		},
	},
}
</script>
