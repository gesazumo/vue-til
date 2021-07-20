<template>
	<div>
		<not-found-page v-if="userNotFound"></not-found-page>
		<summoner-info v-if="!userNotFound"></summoner-info>
	</div>
</template>

<script>
import SummonerInfo from '@/components/SummonerInfo.vue'
import { fetchFindUser } from '@/api/find'
import { mapActions } from 'vuex'
import NotFoundPage from '@/views/NotFoundPage.vue'

export default {
	data() {
		return {
			userNotFound: false,
		}
	},
	components: { SummonerInfo, NotFoundPage },
	methods: {
		...mapActions('findStore', ['setSummoner']),
		async findUser(summonerName, next = null) {
			try {
				const { data } = await fetchFindUser(summonerName)
				await this.setSummoner(data)
				this.userNotFound = false
			} catch (error) {
				console.log(error)
				this.userNotFound = true
			}
			if (next) next()
		},
	},
	created() {
		const summonerName = this.$route.params.username
		this.findUser(summonerName)
	},
	beforeRouteUpdate(to, from, next) {
		const summonerName = to.params.username
		this.findUser(summonerName, next)
	},
}
</script>

<style></style>
