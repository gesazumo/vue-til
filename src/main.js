import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import vuetify from './plugins/vuetify'
import store from '@/store/index'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	vuetify,
	router,
	store,
}).$mount('#app')
