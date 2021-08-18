<template>
	<div class="recnetGameAnaly" v-if="recentGameSummary">
		<div :style="{ width: '30vw', display: 'flex' }">
			<div>
				<span class="title"
					>5전 {{ recentGameSummary.win }}승
					{{ recentGameSummary.lose }}패</span
				>
				<donut-chart
					:chartData="[
						{ title: '승리', count: recentGameSummary.win, color: '#EE5A52' },
						{ title: '패배', count: recentGameSummary.lose, color: '#1F8ECD' },
					]"
				/>
			</div>
			<div class="section2">
				<div class="row1">
					{{ recentGameSummary.killAvg }} /
					<span class="higtlight">{{ recentGameSummary.deathAvg }}</span> /
					{{ recentGameSummary.assistAvg }}
				</div>
				<div class="row2">1.50:1 <span class="higtlight">(41%)</span></div>
			</div>
		</div>
		<div class="section3">
			<div v-for="i in 3" :key="i">
				<div>
					<div class="row">
						<div
							:style="{ width: '65px', height: '65px', marginRight: '10px' }"
						>
							<img
								class="champImage"
								:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
							/>
						</div>
						<div
							:style="{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}"
						>
							<div :style="{ textAlign: 'left' }">노틸러스</div>
							<div>
								<span :style="{ fontWeight: 'bold' }">0% </span>
								<span> (0승 0패) </span>
								<span> 1.94평점 </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section4">여기엔 뭘넣지</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFindRecentGameSummary } from '../api/find'
export default {
	name: 'recentGameAnalysis',
	computed: {
		...mapGetters('findStore', ['getSummonerAccountId']),
	},
	data() {
		return {
			recentGameSummary: {},
		}
	},
	mounted() {
		this.recentGameSummary = null
		this.getRecentGameSummary()
	},

	methods: {
		async getRecentGameSummary() {
			const summonerId = this.getSummonerAccountId

			const { data } = await fetchFindRecentGameSummary(summonerId)
			this.recentGameSummary = data
		},
	},
}
</script>

<style>
.recnetGameAnaly {
	text-align: center;
	display: flex;
	color: #666;
}
.recnetGameAnaly .title {
	color: #666;
}
.recnetGameAnaly .section2 {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.recnetGameAnaly .section2 .row1 {
	font-size: 1em;
}
.recnetGameAnaly .section2 .row2 {
	font-size: 1.3em;
}
.recnetGameAnaly .section2 .higtlight {
	color: red;
}
.recnetGameAnaly .section3 {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 30vw;
}
.recnetGameAnaly .section4 {
	display: flex;
	text-align: center;
	width: 50vw;
}
.recnetGameAnaly .section3 .row {
	display: flex;
	margin: 0px;
}

.recnetGameAnaly .section3 .row .champImage {
	height: 100%;
	width: 100%;
	border-radius: 100%;
}
</style>
