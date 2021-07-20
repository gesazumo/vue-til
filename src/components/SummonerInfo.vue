<template>
	<div>
		summoner Info
		<div>이름</div>
		<div>티어</div>
		<div>랭크</div>
		<div>리그포인트</div>
		<div>승</div>
		<div>패</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			summonerInfo: {},
		}
	},
	computed: {
		...mapState('findStore', ['getSummonerId']),
	},
	watch: {},
}
</script>

<style></style>
