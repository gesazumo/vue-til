import { multiKillNameList } from '@/assets/constant'

export const killName = value => {
	if (!value || value == 0) return
	return multiKillNameList[value]
}
