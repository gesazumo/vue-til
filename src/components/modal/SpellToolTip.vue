<template>
	<div v-if="spellId" :style="{ maxWidth: '450px' }">
		<div class="title">
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

<style>
.title {
	color: coral;
}
</style>
