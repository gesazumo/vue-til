<template>
	<div v-if="spellId">
		<div>
			{{ this.$getSpellInfo(spellId).name }}
		</div>
		{{ this.$getSpellInfo(spellId).description }}
	</div>
</template>

<script>
export default {
	name: 'SpellToolTip',
	props: {
		spellId: {
			type: Number,
			require: true,
		},
	},
}
</script>

<style></style>
