<template>
	<div>
		<v-text-field
			placeholder="소환사명"
			:rules="rules"
			counter="5"
			v-model="value"
		></v-text-field>
	</div>
</template>

<script>
export default {
	name: 'PostNameForm',
	data() {
		return {
			rules: [v => v.length <= 5 || '너무 길어요'],
		}
	},
	props: {
		value: {
			type: String,
			default: '',
		},
	},
	methods: {
		handleInput() {
			this.$emit('input', this.value)
		},
		onClick() {
			this.$emit('onClick', this.value)
		},
	},
}
</script>

<style></style>
