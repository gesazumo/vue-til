<template>
	<v-app>
		<div class="browser">
			<search-bar />
			<rotation :title="' - 금주의 로테이션 챔피언'" />
			<div :style="{ height: '10px' }" />
			<space-row :height="20" />
			<sale-skin :title="' - 현재 진행중인 챔피언 및 스킨 세일'" />
		</div>
	</v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Rotation from './components/Rotation.vue'
import SaleSkin from './views/SaleSkin.vue'
import SpaceRow from './components/common/SpaceRow.vue'
import { mapActions } from 'vuex'

export default {
	name: 'App',
	components: { SearchBar, Rotation, SaleSkin, SpaceRow },
	data() {
		return {}
	},
	methods: {
		...mapActions(['getChampionList']),
	},
	created() {
		this.getChampionList()
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
