import { instance } from './index'

const url = {
	find: 'users/find/',
	info: 'users/info/',
}

export const fetchFindUser = summonerName => {
	return instance.get(`${url.find}${summonerName}`)
}

export const fetchFindUserInfo = id => {
	return instance.get(`${url.info}${id}`)
}
