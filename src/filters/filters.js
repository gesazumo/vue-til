import { multiKillNameList } from '@/assets/constant'

export const killName = value => {
	if (!value) return
	return multiKillNameList[value]
}
