<template>
	<div class="gameDetailBox">
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
		<team-detail />
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
export default {
	components: { DamageGraph, TeamDetail },
	name: 'GameDetail',
}
</script>

<style>
.gameDetailBox {
	padding: 0 30px 0 30px;
	margin-bottom: 5px;
	margin-top: 1px;
	border: 1px solid;
	border-color: rgb(206, 167, 167);
}
.gameDetail {
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
	height: 20px;
	width: 20px;
	margin: 1px;
}
.gameDetail .luneCell {
	display: flex;
	flex-direction: column;
}

.gameDetail .luneCell .lune {
	height: 20px;
	width: 20px;
	margin: 1px;
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
	height: 25px;
	width: 25px;
	margin: 1px;
}
</style>
