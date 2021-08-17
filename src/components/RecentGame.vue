<template>
	<div>
		<div>
			<recent-game-analysis />
		</div>

		<div v-for="game in recentGameList" :key="game.gameId">
			<game :gameObject="game" />
		</div>
		<infinite-loading
			@infinite="infiniteHandler"
			v-if="recentGameList.length > 0"
		></infinite-loading>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import { fetchFindRecentGame } from '../api/find'
import Game from './Game.vue'
import RecentGameAnalysis from './RecentGameAnalysis.vue'

export default {
	components: { Game, InfiniteLoading, RecentGameAnalysis },
	data() {
		return {
			beginIndex: 0,
			endIndex: 10,
			recentGameList: [],
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerAccountId']),
	},
	watch: {
		getSummonerAccountId() {
			this.beginIndex = 0
			this.endIndex = 10
			this.recentGameList = []
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
			this.beginIndex = this.endIndex
			this.endIndex = this.endIndex + 10
			this.recentGameList = data
		},
		infiniteHandler($state) {
			const summonerId = this.getSummonerAccountId
			fetchFindRecentGame(summonerId, this.beginIndex, this.endIndex).then(
				({ data }) => {
					console.log(summonerId)
					console.log(data)
					this.recentGameList.push(...data)
					this.beginIndex = this.endIndex
					this.endIndex = this.endIndex + 10
					$state.loaded()
				},
			)
		},
	},
}
</script>

<style></style>
