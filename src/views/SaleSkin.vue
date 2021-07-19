<template>
	<v-container class="box grey">
		<div class="titles">{{ title }}</div>
		<v-row>
			<v-col v-for="i in saleChamp" :key="i" :cols="3" class="col">
				<img class="portrait" src="@/assets/logo.png" />
				제라스
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true,
		},
	},
	data() {
		return {
			saleChamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		}
	},
}
</script>

<style></style>
