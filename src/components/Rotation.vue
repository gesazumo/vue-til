<template>
	<v-container class="box grey">
		<div class="titles">{{ title }}</div>
		<v-row>
			<v-col v-for="i in rotationChamp" :key="i" :cols="1" class="col">
				<img class="portrait" src="@/assets/logo.png" />
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
			rotationChamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		}
	},
}
</script>

<style>
.col {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
}
.portrait {
	height: 70px;
	width: 70px;
}
</style>
