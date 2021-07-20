import { SET_SUMMONER } from '../mutation-type'

const findStore = {
	namespaced: true,
	state: () => ({
		summoner: {
			id: '',
			accountId: '',
			puuid: '',
			name: '',
			profileIconId: 0,
			revisionDate: 0,
			summonerLevel: '',
		},
	}),
	mutations: {
		[SET_SUMMONER](state, { summoner }) {
			state.summoner = summoner
		},
	},
	actions: {
		setSummoner({ commit }, summoner) {
			commit(SET_SUMMONER, { summoner })
		},
	},
	getters: {
		getSummonerName: state => {
			return state.summoner.name
		},
		getSummonerId: state => {
			return state.summoner.id
		},
	},
}

export default findStore
