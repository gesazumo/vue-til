import axios from 'axios'

const RIOT_API_URL = 'http://localhost:3000/'
const DDRAGON_API_URL = 'https://ddragon.leagueoflegends.com/cdn/11.14.1/data/'
const STATIC_API_URL = 'https://static.developer.riotgames.com/docs/lol/'

function createDdragonInstance() {
	return axios.create({
		baseURL: DDRAGON_API_URL,
	})
}

function createStaticInstance() {
	return axios.create({
		baseURL: STATIC_API_URL,
	})
}

function createInstance() {
	return axios.create({
		baseURL: RIOT_API_URL,
	})
}

export const ddragonInstance = createDdragonInstance()
export const staticInstance = createStaticInstance()
export const instance = createInstance()
