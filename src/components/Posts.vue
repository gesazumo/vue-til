<template>
	<section class="section">
		<div class="title">
			<div>- 듀오구하기</div>
			<button class="addPostButton" @click="showModal">작성하기</button>
		</div>
		<div>
			<select-box
				:items="$queueTypeList()"
				class="selectBox"
				v-model="filter.queueType"
			/>
		</div>
		<template v-if="localLoading">
			<circle-loading
				:style="{
					height: '60vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}"
			/>
		</template>
		<template v-else>
			<div class="container" v-if="postList.length > 0">
				<div v-for="postData in postList" :key="postData.id">
					<post :postData="postData" />
				</div>
			</div>
		</template>
		<div class="text-center" v-if="postList.length > 0">
			<v-pagination
				v-model="filter.page"
				:length="totalLength"
				@input="movePage"
			></v-pagination>
		</div>
	</section>
</template>

<script>
import { fetchGetPostList } from '../api/post'
import SelectBox from './form/SelectBox.vue'
import Post from './Post.vue'
export default {
	components: { Post, SelectBox },
	name: 'Posts',
	data() {
		return {
			postList: [],
			postPerPage: 12,
			totalLength: 5,
			filter: {
				page: 1,
				queueType: this.$queueTypeList()[0],
			},
		}
	},
	watch: {
		filter: {
			deep: true,
			handler() {
				this.fetchData(() => this.getPostList(this.filter))
			},
		},
	},
	created() {
		this.fetchData(() => this.getPostList(this.filter))
	},
	methods: {
		initFilter() {
			this.filter = {
				page: 1,
				queueType: this.$queueTypeList()[0],
			}
		},
		async getPostList(filter) {
			const { data } = await fetchGetPostList(filter)
			this.postList = data
		},
		movePage(page) {
			this.filter.page = page
		},
		async showModal() {
			const result = await this.$showPostFormModal()
			if (result) {
				this.initFilter()
			}
		},
	},
}
</script>
