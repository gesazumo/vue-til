import { instance } from './index'

const url = {
	search: 'searchUser/',
}

export const fetchSearchUser = summonerName => {
	return instance.get(`${url.search}${summonerName}`)
}
