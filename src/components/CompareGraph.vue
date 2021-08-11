<template>
	<div class="compareGraph">
		<span class="graphTitle">{{ title }}</span>
		<span class="graphValue" :style="{ textAlign: 'right' }">{{
			leftValue
		}}</span>
		<div :style="{ width: '250px', display: 'flex' }">
			<div class="leftBox" />
			<div class="rightBox" />
		</div>
		<span class="graphValue">{{ rightValue }}</span>
	</div>
</template>

<script>
export default {
	name: 'CompareGraph',
	props: {
		title: {
			type: String,
		},
		leftValue: {
			type: Number,
		},
		rightValue: {
			type: Number,
		},
	},
}
</script>

<style scoped>
.compareGraph {
	display: flex;
	width: 400px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3px;
	margin-top: 3px;
}

.compareGraph .graphTitle {
	width: 70px;
	font-size: 12px;
}

.compareGraph .graphValue {
	font-size: 12px;
	width: 50px;
}

.compareGraph .leftBox {
	height: 13px;
	width: 30%;
	background-color: #c6443e;
	/* margin-right: 5px; */
}

.compareGraph .rightBox {
	height: 13px;
	width: 70%;
	background-color: steelblue;
	/* margin-left: 5px; */
}
</style>
