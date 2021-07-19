import axios from 'axios'

const RIOT_API_URL = 'http://localhost:3000/'
const LEAGUE_OF_LEGENDS_API_URL =
	'https://ddragon.leagueoflegends.com/cdn/11.14.1/data/'

function createDirectInstance() {
	return axios.create({
		baseURL: LEAGUE_OF_LEGENDS_API_URL,
	})
}

function createInstance() {
	return axios.create({
		baseURL: RIOT_API_URL,
	})
}

export const directInstance = createDirectInstance()

export const instance = createInstance()
