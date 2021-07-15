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
import { fetchSearchUser } from '@/api/search'
export default {
	data() {
		return {
			summonerName: null,
		}
	},
	methods: {
		async doSearch() {
			const summonerName = this.summonerName
			const { data } = await fetchSearchUser(summonerName)
			console.log(data)
		},
	},
}
</script>

<style>
.searchButton {
	width: 100%;
}
</style>
