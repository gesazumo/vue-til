import { instance } from './index'

const url = {
	find: 'users/find/',
	info: 'users/info/',
	recentGame: 'users/recentGames/',
}

export const fetchFindUser = summonerName => {
	return instance.get(`${url.find}${summonerName}`)
}

export const fetchFindUserInfo = id => {
	return instance.get(`${url.info}${id}`)
}

export const fetchFindRecentGame = (id, beginIndex, endIndex) => {
	return instance.get(`${url.recentGame}${id}`, {
		params: { beginIndex, endIndex },
	})
}
