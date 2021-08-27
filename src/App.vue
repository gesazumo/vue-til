<template>
	<v-app>
		<div class="browser">
			<search-bar />
			<router-view></router-view>
		</div>
		<!-- <confirm-modal /> -->
	</v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import { mapActions } from 'vuex'
// import ConfirmModal from './components/modal/ConfirmModal.vue'

export default {
	name: 'App',
	components: { SearchBar },
	data() {
		return {}
	},
	methods: {
		...mapActions(['callInitApi']),
	},
	created() {
		this.callInitApi()
	},
}
</script>

<style>
.browser {
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 20px;
}
.box {
	outline: solid;
	outline-color: dodgerblue;
	padding-top: 0;
	padding-right: 0;
	padding-left: 0;
	background-color: rgb(241, 241, 241);
}
.titles {
	background-color: dodgerblue;
	padding: 3px;
	color: floralwhite;
	font-size: 8px !important;
	margin-bottom: 12px;
}
</style>
