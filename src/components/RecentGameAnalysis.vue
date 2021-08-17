<template>
	<div class="recnetGameAnaly">
		<div>
			<span class="title">20전 13승 7패</span>
			<donut-chart />
		</div>
		<div class="section2">
			<div class="row1">3.3 / <span class="higtlight">7.3</span> / 8.4</div>
			<div class="row2">1.50:1 <span class="higtlight">(41%)</span></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recentGameAnalysis',
}
</script>

<style>
.recnetGameAnaly {
	text-align: center;
	display: flex;
}
.recnetGameAnaly .title {
	color: #666;
}
.recnetGameAnaly .section2 {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.recnetGameAnaly .section2 .row1 {
	font-size: 1em;
}
.recnetGameAnaly .section2 .row2 {
	font-size: 1.3em;
}
.recnetGameAnaly .section2 .higtlight {
	color: red;
}
</style>
