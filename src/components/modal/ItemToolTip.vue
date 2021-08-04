<template>
	<v-tooltip top>
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<slot name="temp"></slot>
			</div>
		</template>
		<!-- <div v-if="itemId" :style="{ maxWidth: '450px' }">
			<div class="title">
				{{ this.$getSpellInfo(spellId).name }}
			</div>
			{{ this.$getSpellInfo(spellId).description }}
		</div> -->
	</v-tooltip>
</template>

<script>
export default {
	name: 'ItemToolTip',
	props: {
		itemId: {
			type: Number,
			require: true,
		},
	},
}
</script>

<style></style>
