<template>
	<v-select
		:items="items"
		label="선택하세요"
		item-text="label"
		item-value="value"
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
			selectedItem: this.items[0],
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
