<template>
	<div class="gameDetailBox">
		<table class="gameDetail">
			<thead>
				<tr>
					<th class="head text-left">
						{{ team1Info.win == 'Win' ? '승리' : '패배' }}({{
							this.$getTeamName(team1Info.teamId)
						}})
					</th>
					<th class="head">티어</th>
					<th class="head">KDA</th>
					<th class="head">피해량</th>
					<th class="head">와드</th>
					<th class="head">CS</th>
					<th class="head text-left">아이템</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bodyRow"
					v-for="team1 in team1List"
					:key="team1.player.accountId"
					:style="team1.stats.win ? winTeamStyle : loseTeamStyle"
				>
					<td class="firstCell">
						<div class="portraitCell">
							<img
								class="portrait"
								:src="getChampIcon + championInfo(team1.championId).id + '.png'"
							/>
							<div class="level">{{ team1.stats.champLevel }}</div>
						</div>
						<div class="spellCell">
							<spell-tool-tip :spellId="team1.spell1Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team1.spell1Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
							<spell-tool-tip :spellId="team1.spell2Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team1.spell2Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
						</div>
						<div class="luneCell">
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
						</div>
						<div>{{ team1.player.summonerName }}</div>
					</td>

					<td class="cell">Silver 3</td>
					<td class="cell">
						<div class="kdaText1">
							{{
								(
									(team1.stats.kills + team1.stats.assists) /
									team1.stats.deaths
								).toFixed(2)
							}}:1
						</div>
						<div class="kdaText2">
							<span
								>{{ team1.stats.kills }}/{{ team1.stats.deaths }}/{{
									team1.stats.assists
								}}</span
							>
							({{
								(
									((team1.stats.kills + team1.stats.assists) / team1TotalKill) *
									100
								).toFixed(0)
							}}%)
						</div>
					</td>
					<td class="cell">
						<damage-graph
							:damage="team1.stats.totalDamageDealtToChampions"
							:totalDamage="team1.stats.totalDamageDealt"
							:maxDamageInTeam="maxDamageInTeam1"
						/>
					</td>
					<td class="cell">
						<div>
							<v-tooltip top>
								<template v-slot:activator="{ on, attrs }">
									<div v-bind="attrs" v-on="on">
										<div>
											{{ team1.stats.visionWardsBoughtInGame | nullToZero }}
										</div>
										<div>
											{{ team1.stats.wardsPlaced | nullToZero }} /
											{{ team1.stats.wardsKilled | nullToZero }}
										</div>
									</div>
								</template>
								<div>
									<div>
										제어와드 :
										{{ team1.stats.visionWardsBoughtInGame | nullToZero }}
									</div>
									<div>
										와드설치 : {{ team1.stats.wardsPlaced | nullToZero }}
									</div>
									<div>
										와드제거 : {{ team1.stats.wardsKilled | nullToZero }}
									</div>
								</div>
							</v-tooltip>
						</div>
					</td>
					<td class="cell">
						<div>{{ team1.stats.totalMinionsKilled }}</div>
					</td>
					<td class="cell">
						<div v-for="(n, index) in 7" :key="index" class="items">
							<item-tool-tip
								:itemId="team1.stats['item' + index]"
								v-if="team1.stats['item' + index] != 0"
							>
								<template v-slot:temp>
									<img
										class="item"
										:src="getItemIcon + team1.stats['item' + index] + '.png'"
									/>
								</template>
							</item-tool-tip>
							<div class="item" v-if="team1.stats['item' + index] == 0"></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<team-detail
			:team1Info="team1Info"
			:team2Info="team2Info"
			:totalKills="{ team1TotalKill, team2TotalKill }"
			:totalGold="{ team1TotalGold, team2TotalGold }"
		/>
		<table class="gameDetail">
			<thead>
				<tr>
					<th class="head text-left">패배(레드팀)</th>
					<th class="head">티어</th>
					<th class="head">KDA</th>
					<th class="head">피해량</th>
					<th class="head">시야점수</th>
					<th class="head">CS</th>
					<th class="head text-left">아이템</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bodyRow" v-for="i in 5" :key="i">
					<td class="firstCell">
						<div class="portraitCell">
							<img
								class="portrait"
								src="https://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Teemo.png"
							/>
							<div class="level">12</div>
						</div>
						<div class="spellCell">
							<img
								class="spell"
								src="https://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerFlash.png"
							/>
							<img
								class="spell"
								src="https://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerFlash.png"
							/>
						</div>
						<div class="luneCell">
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
						</div>
						<div>{{ team1TotalKill }}</div>
					</td>

					<td class="cell">Silver 3</td>
					<td class="cell">
						<div class="kdaText1">0.24:1</div>
						<div class="kdaText2">0/21/5(13%)</div>
					</td>
					<td class="cell">
						<damage-graph />
					</td>
					<td class="cell">
						<div>1515151</div>
					</td>
					<td class="cell">
						<div>1515151</div>
					</td>
					<td class="cell">
						<div v-for="k in 7" :key="k" class="items">
							<img
								class="item"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import DamageGraph from '@/components/DamageGraph.vue'
import TeamDetail from '@/components/TeamDetail.vue'
import { mapGetters } from 'vuex'
export default {
	components: { DamageGraph, TeamDetail },
	name: 'GameDetail',
	computed: {
		...mapGetters(['championInfo', 'spellInfo']),
		...mapGetters('findStore', ['getSummonerId']),
		team1TotalKill() {
			return this.team1List
				.map(team1 => {
					return team1.stats.kills
				})
				.reduce((acc, currentKill) => {
					return acc + currentKill
				})
		},
		team1TotalGold() {
			return this.team1List
				.map(team1 => {
					return team1.stats.goldEarned
				})
				.reduce((acc, currentGold) => {
					return acc + currentGold
				})
		},
		team2TotalKill() {
			return this.team2List
				.map(team2 => {
					return team2.stats.kills
				})
				.reduce((acc, currentKill) => {
					return acc + currentKill
				})
		},
		team2TotalGold() {
			return this.team2List
				.map(team2 => {
					return team2.stats.goldEarned
				})
				.reduce((acc, currentGold) => {
					return acc + currentGold
				})
		},
		maxDamageInTeam1() {
			return this.team1List
				.map(team1 => {
					return team1.stats.totalDamageDealtToChampions
				})
				.reduce((acc, currentDamage) => {
					return acc > currentDamage ? acc : currentDamage
				})
		},
	},
	props: {
		team1List: {
			type: Array,
			required: true,
		},
		team2List: {
			type: Array,
			required: true,
		},
		team1Info: {
			type: Object,
			required: true,
		},
		team2Info: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>
.gameDetailBox {
	margin-bottom: 5px;
	margin-top: 1px;
	border: 1px solid;
	border-color: rgb(206, 167, 167);
	background-color: whitesmoke;
}
.gameDetail {
	color: '#555e5e';
	width: 100%;
	border-collapse: collapse;
}
.gameDetail .bodyRow {
	background: thistle;
}
.gameDetail .bodyRow .firstCell {
	display: flex;
	align-items: center;
	margin-left: 10px;
	padding: 5px;
}
.gameDetail .head {
	padding: 10px 30px 10px 30px;
}

.gameDetail .portraitCell {
	position: relative;
}
.gameDetail .portraitCell .portrait {
	height: 40px;
	width: 40px;
	border-radius: 100%;
}
.gameDetail .portraitCell .level {
	border-radius: 100%;
	background-color: black;
	opacity: 0.7;
	color: blanchedalmond;
	height: 15px;
	width: 15px;
	text-align: center;
	font-size: 10px;
	position: absolute;
	top: 28px;
}
.gameDetail .spellCell {
	display: flex;
	flex-direction: column;
}
.gameDetail .spellCell .spell {
	height: 100%;
	width: 100%;
	padding: 1px;
}
.gameDetail .luneCell {
	display: flex;
	flex-direction: column;
}

.gameDetail .luneCell .lune {
	height: 20px;
	width: 20px;
	padding: 1px;
}
.gameDetail .cell {
	text-align: center;
}

.gameDetail .cell .kdaText1 {
	font-weight: bold;
}
.gameDetail .cell .kdaText2 {
}

.gameDetail .cell .items {
	display: flex;
	float: left;
}

.gameDetail .cell .items .item {
	border-radius: 15%;
	background-color: dimgray;
	height: 25px;
	width: 25px;
	margin: 1px;
}
</style>
