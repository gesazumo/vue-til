import CircleLoading from '@/components/common/CircleLoading.vue'
import BlinkLoading from '@/components/common/BlinkLoading.vue'

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
				async fetchData(fetchFunction) {
					try {
						this.setLoading(true)
						console.log(this.loading)
						await fetchFunction()
					} catch (error) {
						console.log(error)
					} finally {
						console.log('flase로 바뀐다')
						this.setLoading(false)
					}
				},
			},
		})
		Vue.component('CircleLoading', CircleLoading)
		Vue.component('BlinkLoading', BlinkLoading)
	},
}
