<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="10">
				<v-text-field
					v-model="summonerName"
					label="소환사명을 입력하세요"
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="2">
				<v-btn
					class="searchButton"
					depressed
					color="primary"
					@click="doSearch"
					:disabled="!summonerName"
				>
					검색
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			summonerName: null,
		}
	},
	computed: {
		...mapState('findStore', ['summoner']),
	},
	watch: {
		$route(to) {
			if (to.params.username) this.summonerName = to.params.username
		},
	},
	methods: {
		async doSearch() {
			if (this.summoner.name == this.summonerName)
				return this.$router.go(this.$router.currentRoute)
			const summonerName = this.summonerName
			this.$router.push({ path: `/find/${summonerName}` })
		},
	},
}
</script>

<style>
.searchButton {
	width: 100%;
}
</style>
