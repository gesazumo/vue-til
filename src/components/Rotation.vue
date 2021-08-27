<template>
	<v-container class="box">
		<div class="titles">{{ title }}</div>
		<template v-if="this.loading">
			<circle-loading />
		</template>

		<v-row v-if="freeChampionIds.length > 0 && !this.loading">
			<v-col v-for="i in freeChampionIds" :key="i" :cols="1" class="col">
				<rotation-champ :champ-key="i" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { fetchRotationChampions } from '../api/init'
import RotationChamp from './RotationChamp.vue'
export default {
	components: { RotationChamp },
	props: {
		title: {
			type: String,
			require: true,
		},
	},
	data() {
		return {
			freeChampionIds: [],
			freeChampionIdsForNewPlayers: [],
		}
	},
	async created() {
		this.fetchData(this.fetchFunction)
	},
	methods: {
		async fetchFunction() {
			const { data } = await fetchRotationChampions()
			this.freeChampionIds = data.freeChampionIds
		},
	},
}
</script>

<style>
.col {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
}

.box {
	width: 100%;
}

.rotation-champion-box {
	padding: 20;
}
.rotation-champion-box .champion-name {
	font-size: x-small;
	text-align: center;
}
</style>
