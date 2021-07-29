<template>
	<div class="game win">
		<div class="gameStats">
			<div class="font-weight-bold" :style="grayFont">궁극기모드</div>
			<div class="font-weight-light" :style="grayFont">21시간전</div>
			<div>패배</div>
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
export default {
	data() {
		return {
			grayFont: { color: 'gray' },
		}
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
