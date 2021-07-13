import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: () => import('@/views/Home.vue'),
		},
		{
			path: '/form',
			component: () => import('@/views/FormPage.vue'),
		},
		{
			path: '/vuex',
			component: () => import('@/views/VuexPage.vue'),
		},
		{
			path: '/api',
			component: () => import('@/views/ApiCallPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
})
