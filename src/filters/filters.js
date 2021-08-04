import { multiKillNameList } from '@/assets/constant'

export const killName = value => {
	if (!value || value == 0) return
	return multiKillNameList[value]
}

export const textCut = (value, length) => {
	return value.length > length ? value.slice(0, length) + '...' : value
}
