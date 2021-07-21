<template>
	<div>
		<v-card class="mx-auto" outlined>
			<v-list-item three-line>
				<v-list-item-avatar tile size="150">
					<div>
						<img
							class="icon"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${summoner.profileIconId}.png`"
						/>
						<div class="level">{{ summoner.summonerLevel }}</div>
					</div>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title class="text-h5 mb-1">
						{{ summoner.name }}
					</v-list-item-title>
					<div class="ranking">래더랭킹 상위 1위(1%)</div>
					<v-list-item-subtitle>
						<v-btn small color="primary" dark> 전적갱신 </v-btn>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>

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

<style scoped>
.icon {
	height: 150px;
	width: 150px;
	margin-bottom: 15px;
}
.level {
	position: absolute;
	left: 25px;
	bottom: 0px;
	width: 100px;
	background: papayawhip;
	border: peru solid 2px;
	border-radius: 10px;
	box-shadow: 0px 0px 0px 1px #fff inset;
}
.ranking {
	margin-top: -30px;
	color: #555e5e;
	font-size: 11px;
	text-decoration: none;
	line-height: 1.5;
}
</style>
