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
		{{ localLoading }}
		<div class="text-center" v-if="postList.length > 0">
			<v-pagination
				v-model="page"
				:length="totalLength"
				@input="movePage"
			></v-pagination>
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
			page: 1,
			postList: [],
			postPerPage: 12,
			totalLength: 5,
		}
	},
	created() {
		this.fetchData(() => this.getPostList({ page: 1 }))
	},
	methods: {
		async getPostList({ page }) {
			const filterObject = {
				from: (page - 1) * 12,
				to: page * 12,
			}
			const { data } = await fetchGetPostList(filterObject)
			this.postList = data
		},
		movePage(page) {
			this.fetchData(() => this.getPostList({ page }))
		},
		async showModal() {
			const result = await this.$showPostFormModal()
			if (result) {
				this.page = 1
				this.fetchData(() => this.getPostList({ page: 1 }))
			}
		},
	},
}
</script>
