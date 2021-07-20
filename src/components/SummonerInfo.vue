<template>
	<div>
		<div>이름 :{{ summoner.name }}</div>
		<div>소환사레벨:{{ summoner.summonerLevel }}</div>
		<div>profileIconId:{{ summoner.profileIconId }}</div>
		<div>티어:{{ summonerInfo.tier }}</div>
		<div>랭크:{{ summonerInfo.rank }}</div>
		<div>리그포인트:{{ summonerInfo.leaguePoints }}</div>
		<div>승:{{ summonerInfo.wins }}</div>
		<div>패:{{ summonerInfo.losses }}</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { fetchFindUserInfo } from '../api/find'
export default {
	data() {
		return {
			summonerInfo: {},
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerId']),
		...mapState('findStore', ['summoner']),
	},
	watch: {
		getSummonerId() {
			this.summonerInfo = {}
			this.getSummonerInfo()
		},
	},
	methods: {
		async getSummonerInfo() {
			const summonerId = this.getSummonerId
			const { data } = await fetchFindUserInfo(summonerId)
			// faker로 검색하면 data.lenght가 0임
			this.summonerInfo = data[0]
		},
	},
}
</script>

<style></style>
