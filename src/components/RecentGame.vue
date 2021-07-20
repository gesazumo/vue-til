<template>
	<div>recent game</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFindRecentGame } from '../api/find'
export default {
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
