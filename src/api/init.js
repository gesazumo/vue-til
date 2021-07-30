import { instance, ddragonInstance } from './index'

const url = {
	rotation: 'init/rotation',
	allChampions: '/data/ko_KR/champion.json',
}

export const fetchAllChampions = () => {
	return ddragonInstance.get(`${url.allChampions}`)
}

export const fetchRotationChampions = () => {
	return instance.get(`${url.rotation}`)
}
