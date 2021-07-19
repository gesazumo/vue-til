import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAllChampions } from '../api/init'
import { SET_CHAMPION_LIST, SET_LOADING } from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		summonerName: null,
		championList: [],
		loading: false,
	},
	getters: {
		championInfo: state => key => {
			for (const [value] of Object.entries(state.championList)) {
				if (key == state.championList[value].key) {
					console.log(state.championList[value])
					return state.championList[value]
				}
			}
		},
	},
	mutations: {
		[SET_CHAMPION_LIST](state, { championList }) {
			state.championList = championList
		},
		[SET_LOADING](state, { flag }) {
			state.loading = flag
		},
	},
	actions: {
		async getChampionList({ commit }) {
			commit(SET_LOADING, { flag: true })
			try {
				const { data } = await fetchAllChampions()
				commit(SET_CHAMPION_LIST, { championList: data.data })
			} catch (error) {
				console.log(error)
			} finally {
				commit(SET_LOADING, { flag: false })
			}
		},
	},
})
