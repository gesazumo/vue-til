<template>
	<v-container class="box">
		<div class="titles">{{ title }}</div>
		<template v-if="this.loading">
			<loading />
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
		try {
			this.setLoading(true)
			const { data } = await fetchRotationChampions()
			this.freeChampionIds = data.freeChampionIds
		} catch (error) {
			console.log(error)
		} finally {
			this.setLoading(false)
		}
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

.rotation-champion-box {
	padding: 20;
}
.rotation-champion-box .champion-name {
	font-size: x-small;
	text-align: center;
}
</style>
