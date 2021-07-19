import { instance } from './index'

const url = {
	find: 'findUser/',
}

export const fetchFindUser = summonerName => {
	return instance.get(`${url.find}${summonerName}`)
}
