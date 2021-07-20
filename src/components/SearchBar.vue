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
import { fetchFindUser } from '@/api/find'
import { mapActions, mapGetters } from 'vuex'
export default {
	data() {
		return {
			summonerName: null,
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerName']),
	},
	methods: {
		...mapActions('findStore', ['setSummoner']),
		async doSearch() {
			const summonerName = this.summonerName
			try {
				const { data } = await fetchFindUser(summonerName)
				await this.setSummoner(data)
				this.$router.push({ path: `/find/${this.getSummonerName}` })
			} catch (error) {
				// 404등등 에러처리
				console.log(error)
			}
		},
	},
}
</script>

<style>
.searchButton {
	width: 100%;
}
</style>
