import { instance, staticInstance } from './index'

const url = {
	find: 'users/find/',
	info: 'users/info/',
	recentGame: 'users/recentGames/',
	queues: 'queues.json',
}

export const fetchFindUser = summonerName => {
	return instance.get(url.find + summonerName)
}

export const fetchFindUserRankInfo = id => {
	return instance.get(`${url.info}${id}`)
}

export const fetchFindRecentGame = (id, beginIndex, endIndex) => {
	return instance.get(`${url.recentGame}${id}`, {
		params: { beginIndex, endIndex },
	})
}

export const fetchQueues = () => {
	return staticInstance.get(`${url.queues}`)
}
