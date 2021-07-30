import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import vuetify from './plugins/vuetify'
import store from '@/store/index'
import util from '@/assets/util'
import * as filters from '@/filters/filters'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

Object.keys(util).forEach(key => (Vue.prototype[key] = util[key]))

new Vue({
	render: h => h(App),
	vuetify,
	router,
	store,
}).$mount('#app')
