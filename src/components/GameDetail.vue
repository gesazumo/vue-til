<template>
	<div :style="{ padding: '10px' }">
		<table class="gameDetail">
			<thead>
				<tr>
					<th colspan="4" class="head">패배(레드팀)</th>
					<th class="head">티어</th>
					<th class="head">KDA</th>
					<th class="head">피해량</th>
					<th class="head">시야점수</th>
					<th class="head">CS</th>
					<th class="head">아이템</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bodyRow" v-for="i in 5" :key="i">
					<td>
						<div class="portraitCell">
							<img
								class="portrait"
								src="https://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Teemo.png"
							/>
							<div class="level">12</div>
						</div>
					</td>
					<td>
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
					</td>
					<td>
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
					</td>
					<td>
						<div>하이하이</div>
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
						<div>1515151</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import DamageGraph from './DamageGraph.vue'
export default {
	components: { DamageGraph },
	name: 'GameDetail',
}
</script>

<style>
.gameDetail {
	padding: 10px;
	border-collapse: collapse;
}
.gameDetail .bodyRow {
	background: thistle;
}
.gameDetail .head {
	padding: 5px 30px 10px 30px;
}

.gameDetail .portraitCell {
	position: relative;
}
.gameDetail .portraitCell .portrait {
	height: 40px;
	width: 40px;
	border-radius: 100%;
	margin-left: 10px;
}
.gameDetail .portraitCell .level {
	margin-left: 10px;
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
	gap: 2px;
}
.gameDetail .spellCell .spell {
	height: 20px;
	width: 20px;
}
.gameDetail .luneCell {
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.gameDetail .luneCell .lune {
	height: 20px;
	width: 20px;
}
.gameDetail .cell {
	text-align: center;
	padding: 10px;
}

.gameDetail .cell .kdaText1 {
	font-weight: bold;
}
.gameDetail .cell .kdaText2 {
}
</style>
