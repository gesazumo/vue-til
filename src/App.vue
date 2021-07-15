<template>
	<v-app>
		<div class="browser">
			<search-bar />
		</div>
	</v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
	name: 'App',
	components: { SearchBar },
	data() {
		return {}
	},
}
</script>

<style>
.browser {
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 20px;
}
</style>
