<template>
	<div>
		<div v-for="game in recentGameList" :key="game.gameId">
			<game :gameObject="game" />
		</div>
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
			recentGameList: [],
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
			this.recentGameList = data
		},
	},
}
</script>

<style></style>
