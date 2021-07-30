import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAllChampions, fetchAllSpells } from '../api/init'
import { SET_CHAMPION_LIST, SET_LOADING, SET_SPELL_LIST } from './mutation-type'

Vue.use(Vuex)

import findStore from '@/store/modules/findStore.js'

export default new Vuex.Store({
	modules: {
		findStore: findStore,
	},
	state: {
		summonerName: null,
		championList: {},
		spellList: {},
		loading: false,
	},
	getters: {
		championInfo: state => key => {
			for (const [value] of Object.entries(state.championList)) {
				if (key == state.championList[value].key) {
					return state.championList[value]
				}
			}
		},
		spellInfo: state => key => {
			for (const [value] of Object.entries(state.spellList)) {
				if (key == state.spellList[value].key) {
					return state.spellList[value]
				}
			}
		},
	},
	mutations: {
		[SET_CHAMPION_LIST](state, { championList }) {
			state.championList = championList
		},
		[SET_SPELL_LIST](state, { spellList }) {
			state.spellList = spellList
		},
		[SET_LOADING](state, { flag }) {
			state.loading = flag
		},
	},

	actions: {
		async getChampionList({ commit }) {
			const { data } = await fetchAllChampions()
			commit(SET_CHAMPION_LIST, { championList: data.data })
		},
		async getSpellList({ commit }) {
			const { data } = await fetchAllSpells()
			commit(SET_SPELL_LIST, { spellList: data.data })
		},
		async callInitApi({ dispatch, commit }) {
			commit(SET_LOADING, { flag: true })
			try {
				dispatch('getChampionList')
				dispatch('getSpellList')
			} catch (error) {
				console.log(error)
			} finally {
				commit(SET_LOADING, { flag: false })
			}
		},
	},
})
