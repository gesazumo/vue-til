<template>
	<div>
		<sidebar-menu :menu="menu" />
		<router-view class="page" />
	</div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
	name: 'App',
	components: {
		SidebarMenu,
	},
	data() {
		return {
			menu: [
				{
					header: true,
					title: 'Main Navigation',
					hiddenOnCollapse: true,
				},
				{
					href: '/home',
					title: 'Home',
					icon: 'fa fa-user',
				},
				{
					href: '/form',
					title: 'FormPage',
					icon: 'fa fa-chart-area',
				},
				{
					href: '/vuex',
					title: 'VuexPage',
					icon: 'fa fa-user',
				},
				{
					href: '/api',
					title: 'ApiCallPage',
					icon: 'fa fa-user',
				},
			],
		}
	},
}
</script>

<style>
.page {
	margin-left: 50px;
	padding: 10px;
}
</style>
