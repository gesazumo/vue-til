<template>
	<div>
		<v-card class="mx-auto" outlined v-if="summoner">
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
		<rank-info :rank-info="soloRankInfo" title="솔로랭크" />
		<rank-info :rank-info="flexRankInfo" title="자유랭크" />
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { fetchFindUserRankInfo } from '../api/find'
import RankInfo from './RankInfo.vue'
export default {
	components: { RankInfo },
	data() {
		return {
			soloRankInfo: {},
			flexRankInfo: {},
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerId']),
		...mapState('findStore', ['summoner']),
	},
	watch: {
		getSummonerId() {
			this.soloRankInfo = {}
			this.flexRankInfo = {}
			this.getRankInfo()
		},
	},
	methods: {
		async getRankInfo() {
			const summonerId = this.getSummonerId
			const { data } = await fetchFindUserRankInfo(summonerId)
			this.soloRankInfo = data.solo
			this.flexRankInfo = data.flex
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
