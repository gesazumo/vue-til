import { instance, directInstance } from './index'

const url = {
	rotation: 'init/rotation',
	allChampions: 'ko_KR/champion.json',
}

export const fetchAllChampions = () => {
	return directInstance.get(`${url.allChampions}`)
}

export const fetchRotationChampions = () => {
	return instance.get(`${url.rotation}`)
}
