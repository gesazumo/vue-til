export const winStyleObject = {
	backgroundColor: '#a3cfec',
	borderColor: '#99b9cf',
}

export const loseStyleObject = {
	backgroundColor: '#e2b6b3',
	borderColor: '#cea7a7',
}

export const loseTeamColor = '#e9e0e0'
export const loseSummonerColor = '#e2b6b3'

export const winTeamColor = '#d8e4ec'
export const winSummonerColor = '#a3cfec'

export const multiKillNameList = {
	2: '더블킬',
	3: '트리플킬',
	4: '쿼드라킬',
	5: '펜타킬',
}

export const staticImageAPI =
	process.env.VUE_APP_DDRAGON_API_URI +
	process.env.VUE_APP_DDRAGON_VERSION +
	'/img/'

export const staticURL = {
	summonerIcon: 'profileicon/',
	champion: 'champion/',
	spell: 'spell/',
	item: 'item/',
}
