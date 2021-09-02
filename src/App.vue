<template>
	<v-app>
		<div class="browser">
			<search-bar />
			<router-view></router-view>
		</div>
		<!-- <confirm-modal /> -->
	</v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import { mapActions } from 'vuex'
// import ConfirmModal from './components/modal/ConfirmModal.vue'

export default {
	name: 'App',
	components: { SearchBar },
	data() {
		return {}
	},
	methods: {
		...mapActions(['callInitApi']),
	},
	created() {
		this.callInitApi()
	},
}
</script>
