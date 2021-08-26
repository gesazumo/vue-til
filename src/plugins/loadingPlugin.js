import Loading from '@/components/common/Loading.vue'

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					loading: false,
				}
			},
			methods: {
				setLoading(flag) {
					this.loading = flag
				},
			},
		})
		Vue.component('Loading', Loading)
	},
}
