<template>
	<div :style="{ marginLeft: '10px' }">
		<v-card class="mx-auto" width="350" outlined>
			<v-list-item three-line v-if="rankInfo">
				<v-list-item-content>
					<div>{{ title }}</div>
					<div v-if="Object.keys(rankInfo).length > 0">
						<v-list-item-title class="text-h5 mb-1">
							{{ rankInfo.tier }} {{ rankInfo.rank }}
						</v-list-item-title>
						<div>
							{{ rankInfo.leaguePoints }} LP / {{ rankInfo.wins }}승
							{{ rankInfo.losses }}패
						</div>
						<div>승률 {{ winRate.toFixed() }}%</div>
						<!-- <div>{{ rankInfo.leagueId }}</div> -->
					</div>
					<div v-else>
						<v-list-item-title class="text-h5 mb-1">
							UnRanked
						</v-list-item-title>
					</div>
				</v-list-item-content>

				<img
					v-if="Object.keys(rankInfo).length > 0"
					class="icon"
					:src="tierImageUrl"
				/>
				<img v-else class="icon" src="@/assets/tier/unranked.png" />
			</v-list-item>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		rankInfo: {
			type: Object,
			require: true,
		},
		title: {
			type: String,
			require: true,
			default: '솔로랭크',
		},
	},
	computed: {
		tierImageUrl() {
			return require('@/assets/tier/' +
				this.rankInfo.tier.toLowerCase() +
				'.png')
		},
		winRate() {
			return (
				(this.rankInfo.wins / (this.rankInfo.wins + this.rankInfo.losses)) * 100
			)
		},
	},
}
</script>

<style>
.icon {
	height: 150px;
	width: 150px;
	margin-bottom: 15px;
}
</style>
