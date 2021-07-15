import axios from 'axios'

const RIOT_API_URL = 'http://localhost:3000/'
function createInstance() {
	return axios.create({
		baseURL: RIOT_API_URL,
	})
}

export const instance = createInstance()
