<template>
	<v-select
		:items="items"
		label="선택하세요"
		solo
		@change="onSelect"
		v-model="selectedItem"
	></v-select>
</template>

<script>
export default {
	name: 'SelectBox',
	data() {
		return {
			selectedItem: null,
		}
	},
	props: {
		items: [],
	},
	methods: {
		onSelect() {
			this.$emit('onSelect', this.selectedItem)
		},
	},
}
</script>

<style></style>
