<template>
	<div :style="{ position: 'relative' }">
		<div ref="chartdiv" class="donutChart"></div>
		<div class="centerText">25%</div>
	</div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)
let localChart = null
export default {
	name: 'DonutChart',
	mounted() {
		let chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart)

		chart.padding = 80

		chart.data = [
			{
				country: '승리',
				litres: 15,
				color: '#EE5A52',
			},
			{
				country: '패배',
				litres: 8,
				color: '#1F8ECD',
			},
		]

		chart.innerRadius = am4core.percent(65)

		var pieSeries = chart.series.push(new am4charts.PieSeries())
		pieSeries.dataFields.value = 'litres'
		pieSeries.dataFields.category = 'country'

		// pieSeries.slices.template.tooltipText = '{country}'
		pieSeries.slices.template.propertyFields.fill = 'color'
		pieSeries.slices.template.stroke = am4core.color('#fff')
		pieSeries.slices.template.strokeWidth = 2
		pieSeries.slices.template.strokeOpacity = 1
		pieSeries.ticks.template.disabled = true
		pieSeries.labels.template.disabled = true

		// pieSeries.hiddenState.properties.opacity = 1
		// pieSeries.hiddenState.properties.endAngle = -90
		// pieSeries.hiddenState.properties.startAngle = -90

		localChart = chart
	},

	beforeDestroy() {
		if (localChart) {
			localChart.dispose()
		}
	},
}
</script>

<style>
.donutChart {
	width: 10vw;
	height: 10vw;
}
.centerText {
	position: absolute;
	top: 4.5vw;
	left: 4.5vw;
}
</style>
