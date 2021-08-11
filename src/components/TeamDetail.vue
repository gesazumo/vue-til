<template>
	<div class="teamDetail">
		<div><img class="objectIcon" src="@/assets/icon-baron-r.png" />0</div>
		<div><img class="objectIcon" src="@/assets/icon-baron-r.png" />0</div>
		<div><img class="objectIcon" src="@/assets/icon-baron-r.png" />0</div>
		<div class="graphArea">
			<compare-graph
				:title="'TotalKill'"
				:leftValue="20000"
				:rightValue="50000"
			/>
			<compare-graph :title="'ToTalGold'" :leftValue="20" :rightValue="50" />
		</div>
		<div><img class="objectIcon" src="@/assets/icon-baron-b.png" />0</div>
		<div><img class="objectIcon" src="@/assets/icon-baron-b.png" />0</div>
		<div><img class="objectIcon" src="@/assets/icon-baron-b.png" />0</div>
	</div>
</template>

<script>
import CompareGraph from './CompareGraph.vue'

export default {
	name: 'TeamDetail',
	components: { CompareGraph },
}
</script>

<style scoped>
.teamDetail {
	background-color: seashell;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px 0 30px;
}

.teamDetail .objectIcon {
	height: 25px;
	width: 25px;
}
.teamDetail .graphArea {
	display: flex;
	flex-direction: column;
}
</style>
