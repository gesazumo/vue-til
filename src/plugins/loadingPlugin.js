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
		Vue.component('Loading', Loading)
	},
}
