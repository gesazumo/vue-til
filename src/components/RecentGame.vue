<template>
	<div>
		recent game
		<div :style="{ float: 'left', width: '40%' }">1</div>
		<div :style="{ float: 'left', width: '40%' }">1</div>

		<game />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFindRecentGame } from '../api/find'
import Game from './Game.vue'
export default {
	components: { Game },
	data() {
		return {
			beginIndex: 0,
			endIndex: 5,
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerAccountId']),
	},
	watch: {
		getSummonerAccountId() {
			this.getRecentGames()
		},
	},
	methods: {
		async getRecentGames() {
			const summonerId = this.getSummonerAccountId
			const { data } = await fetchFindRecentGame(
				summonerId,
				this.beginIndex,
				this.endIndex,
			)
			console.log(data)
		},
	},
}
</script>

<style></style>
