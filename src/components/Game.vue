<template>
	<div class="game" :style="gameResultStyle">
		<div class="gameStats">
			<div class="font-weight-bold" :style="grayFont">
				{{ getQueues(gameObject.queue).description }}
			</div>
			<div class="font-weight-light" :style="grayFont">
				{{ playDate }}
			</div>
			<div :style="isWin ? winFont : loseFont">
				{{ isWin ? '승리' : '패배' }}
			</div>
			<div class="font-weight-light" :style="grayFont">23분 15초</div>
		</div>
		<div class="champ">
			<div style="{ display: 'flex', align-items: 'center' }">
				<div :style="{ float: 'left' }">
					<img
						class="portrait"
						:src="
							getChampIcon + championInfo(participant.championId).id + '.png'
						"
					/>
				</div>

				<div :style="{ float: 'left' }">
					<spell-tool-tip :spellId="participant.spell1Id">
						<template v-slot:temp>
							<div :style="{ width: '35px', height: '35px', padding: '1px' }">
								<img
									class="spell"
									:src="
										getSpellIcon + spellInfo(participant.spell1Id).id + '.png'
									"
								/>
							</div>
						</template>
					</spell-tool-tip>
					<spell-tool-tip :spellId="participant.spell2Id">
						<template v-slot:temp>
							<div :style="{ width: '35px', height: '35px', padding: '1px' }">
								<img
									class="spell"
									:src="
										getSpellIcon + spellInfo(participant.spell2Id).id + '.png'
									"
								/>
							</div>
						</template>
					</spell-tool-tip>
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
				{{ championInfo(participant.championId).name }}
			</div>
		</div>
		<div class="score">
			<div class="kda">
				<h1 :style="grayFont">
					{{ participant.stats.kills }}/<span class="death">{{
						participant.stats.deaths
					}}</span
					>/{{ participant.stats.assists }}
				</h1>
			</div>
			<div>
				<span class="font-weight-bold"
					>{{
						(
							(participant.stats.kills + participant.stats.assists) /
							participant.stats.deaths
						).toFixed(2)
					}}:1</span
				>
				평점
			</div>
			<div
				v-if="multiKill > 0"
				:style="{
					textAlign: 'center',
					background: '#ee5a52',
					display: 'inline-block',
					borderRadius: '15px',
					padding: '2px 5px',
					color: 'white',
				}"
			>
				{{ multiKill | killName }}
			</div>
		</div>
		<div class="stats">
			<div class="font-weight-light" :style="grayFont">
				레벨{{ participant.stats.champLevel }}
			</div>
			<div class="font-weight-light" :style="grayFont">89 (3.8) CS</div>
			<div>킬관여 44%</div>
			<div class="font-weight-light" :style="grayFont">매치 평균</div>
			<div>Silver 4</div>
		</div>
		<div class="items">
			<div :style="{ width: '140px' }">
				<div class="stackBox" v-for="(n, index) in 7" :key="index">
					<item-tool-tip :itemId="participant.stats['item' + index]">
						<template v-slot:temp>
							<img
								class="spell"
								:src="getItemIcon + participant.stats['item' + index] + '.png'"
							/>
						</template>
					</item-tool-tip>
				</div>
			</div>
		</div>
		<div class="champions">
			<div :style="{ width: '140px' }">
				<div
					:style="{ width: '140px', float: 'left' }"
					v-for="i in team1List"
					:key="i.participantId"
				>
					<div class="championBox">
						<img
							class="spell"
							:style="
								i.participantId == participantIdentities.participantId
									? { borderRadius: '100%' }
									: {}
							"
							:src="getChampIcon + championInfo(i.championId).id + '.png'"
						/>
					</div>
					<div>{{ i.player.summonerName | textCut(6) }}</div>
				</div>
			</div>
			<div :style="{ width: '140px' }">
				<div
					:style="{ width: '140px', float: 'left' }"
					v-for="i in team2List"
					:key="i.participantId"
				>
					<div class="championBox">
						<img
							class="spell"
							:style="
								i.participantId == participantIdentities.participantId
									? { borderRadius: '100%' }
									: {}
							"
							:src="getChampIcon + championInfo(i.championId).id + '.png'"
						/>
					</div>
					<div>{{ i.player.summonerName | textCut(6) }}</div>
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
			winFont: { color: '#1a78ae' },
			loseFont: { color: '#c6443e' },
		}
	},
	props: {
		gameObject: {
			type: Object,
			default: null,
			require: true,
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
		...mapGetters(['championInfo', 'spellInfo']),
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
			return this.participantTeam.win == 'Win' ? true : false
		},
		playDate() {
			return this.timeForToday(this.gameObject.timestamp)
		},
		gameResultStyle() {
			return this.participantTeam.win == 'Win'
				? {
						backgroundColor: '#a3cfec',
						borderColor: '#99b9cf',
				  }
				: {
						backgroundColor: '#e2b6b3',
						borderColor: '#cea7a7',
				  }
		},
		multiKill() {
			if (this.participant.stats.pentaKills > 0) return 5
			else if (this.participant.stats.quadraKills > 0) return 4
			else if (this.participant.stats.tripleKills > 0) return 3
			else if (this.participant.stats.doubleKills > 0) return 2
			return 0
		},
		team1List() {
			// 이거 getter에서 걍 state 안보고 param만 받아서 그때마다 team1, 2 구분해서 리스트 뽑을수 잇나?
			const teamList = []
			for (let i = 0; i < 5; i++) {
				teamList.push({
					...this.gameObject.detail.participantIdentities[i],
					...this.gameObject.detail.participants[i],
				})
			}
			return teamList
		},
		team2List() {
			// 이거 getter에서 걍 state 안보고 param만 받아서 그때마다 team1, 2 구분해서 리스트 뽑을수 잇나?
			const teamList = []
			for (let i = 5; i < 10; i++) {
				teamList.push({
					...this.gameObject.detail.participantIdentities[i],
					...this.gameObject.detail.participants[i],
				})
			}
			return teamList
		},
	},
}
</script>

<style>
.game {
	display: flex;
	align-items: center;
	margin: 10px;
}
.game .gameStats {
	min-width: 250px;
	padding: 10px 30px 10px 30px;
}
.game .champ {
	padding: 10px 30px 10px 30px;
}
.game .score {
	min-width: 200px;
	padding: 10px 30px 10px 30px;
	text-align: center;
}
.game .stats {
	padding: 10px 30px 10px 30px;
	text-align: center;
}
.game .items {
	padding: 10px 30px 10px 30px;
	text-align: center;
}
.game .champions {
	padding: 10px 30px 10px 30px;
	display: flex;
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
