<template>
	<div class="game win">
		<div class="gameStats">
			<div class="font-weight-bold" :style="grayFont">
				{{ getQueues(gameObject.queue).description }}
			</div>
			<div class="font-weight-light" :style="grayFont">
				{{ playDate }}
			</div>
			<div>{{ isWin }}</div>
			<div class="font-weight-light" :style="grayFont">23분 15초</div>
		</div>
		<div class="champ">
			<div style="{ display: 'flex', align-items: 'center' }">
				<div :style="{ float: 'left' }">
					<img
						class="portrait"
						:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
					/>
				</div>
				<div :style="{ float: 'left' }">
					<div :style="{ width: '35px', height: '35px', padding: '1px' }">
						<img
							class="spell"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
						/>
					</div>
					<div :style="{ width: '35px', height: '35px', padding: '1px' }">
						<img
							class="spell"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
						/>
					</div>
				</div>
				<div :style="{ float: 'left' }">
					<div :style="{ width: '35px', height: '35px', padding: '1px' }">
						<img
							class="lune"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
						/>
					</div>
					<div :style="{ width: '35px', height: '35px', padding: '1px' }">
						<img
							class="lune"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
						/>
					</div>
				</div>
			</div>

			<div
				:style="{ clear: 'both', textAlign: 'center' }"
				class="font-weight-light"
			>
				아리
			</div>
		</div>
		<div class="score">
			<div class="kda">
				<h1 :style="grayFont">8/<span class="death">8</span>/8</h1>
			</div>
			<div><span class="font-weight-bold">1.22:1</span> 평점</div>
		</div>
		<div class="stats">
			<div class="font-weight-light" :style="grayFont">레벨15</div>
			<div class="font-weight-light" :style="grayFont">89 (3.8) CS</div>
			<div>킬관여 44%</div>
			<div class="font-weight-light" :style="grayFont">매치 평균</div>
			<div>Silver 4</div>
		</div>
		<div class="items">
			<div :style="{ width: '140px' }">
				<div class="stackBox" v-for="i in 8" :key="i">
					<img
						class="spell"
						:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
					/>
				</div>
			</div>
		</div>

		<div class="champions">
			<div :style="{ width: '280px' }">
				<div
					:style="{ width: '140px', float: 'left' }"
					v-for="i in 10"
					:key="i"
				>
					<div class="championBox">
						<img
							class="spell"
							:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
						/>
					</div>
					<div>SKT T1 Faker</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			grayFont: { color: 'gray' },
		}
	},
	props: {
		gameObject: {
			type: Object,
			default: null,
		},
	},
	methods: {
		timeForToday(value) {
			const today = new Date()
			const timeValue = new Date(value)

			const betweenTime = Math.floor(
				(today.getTime() - timeValue.getTime()) / 1000 / 60,
			)
			if (betweenTime < 1) return '방금전'
			if (betweenTime < 60) {
				return `${betweenTime}분전`
			}

			const betweenTimeHour = Math.floor(betweenTime / 60)
			if (betweenTimeHour < 24) {
				return `${betweenTimeHour}시간전`
			}

			const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
			if (betweenTimeDay < 365) {
				return `${betweenTimeDay}일전`
			}

			return `${Math.floor(betweenTimeDay / 365)}년전`
		},
	},
	computed: {
		...mapGetters('findStore', [
			'getSummonerAccountId',
			'getSummonerId',
			'getQueues',
		]),
		participantIdentities() {
			return this.gameObject.detail.participantIdentities.find(user => {
				return (
					user.player.accountId == this.getSummonerAccountId &&
					user.player.summonerId == this.getSummonerId
				)
			})
		},
		participant() {
			return this.gameObject.detail.participants[
				this.participantIdentities.participantId - 1
			]
		},
		participantTeam() {
			const searcherTeam = this.gameObject.detail.teams.find(team => {
				return team.teamId == this.participant.teamId
			})
			return searcherTeam
		},
		opposingTeam() {
			const searcherTeam = this.gameObject.detail.teams.find(team => {
				return team.teamId != this.participant.teamId
			})
			return searcherTeam
		},
		isWin() {
			return this.participantTeam.win == 'Win' ? '승리' : '패배'
		},
		playDate() {
			return this.timeForToday(this.gameObject.timestamp)
		},
	},
}
</script>

<style>
.win {
	background-color: #e2b6b3;
}
.game {
	display: flex;
	align-items: center;
}
.game .gameStats {
	min-width: 250px;
	padding: 10px 30px 10px 30px;
}
.game .champ {
	padding: 10px 30px 10px 30px;
}
.game .score {
	padding: 10px 30px 10px 30px;
}
.game .stats {
	padding: 10px 30px 10px 30px;
	text-align: center;
}
.game .items {
	padding: 10px 30px 10px 30px;
	text-align: center;
}
.game .score .kda .death {
	color: red;
}
.game .portrait {
	height: 80px;
	width: 80px;
	border-radius: 100%;
}
.game .spell {
	height: 100%;
	width: 100%;
	border-radius: 15%;
}
.game .lune {
	height: 100%;
	width: 100%;
	border-radius: 100%;
}
.table {
	display: table;
}
.tableRow {
	display: table-row;
}
.tableCell {
	display: table-cell;
	height: 35px;
	width: 35px;
}
.stackBox {
	float: left;
	width: 35px;
	height: 35px;
	padding: 1px;
}
.championBox {
	float: left;
	width: 25px;
	height: 25px;
	padding: 1px;
}
</style>
