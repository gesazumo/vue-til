import { staticImageAPI, staticURL } from '@/assets/constant'

const util = {
	$getSummonerIcon(key) {
		return staticImageAPI + staticURL.summonerIcon + key + '.png'
	},

	$getChampIcon(key) {
		return staticImageAPI + staticURL.champion + key + '.png'
	},

	$getSpellIcon(key) {
		return staticImageAPI + staticURL.spell + key + '.png'
	},

	$getItemIcon(key) {
		return staticImageAPI + staticURL.item + key + '.png'
	},

	$getSpellInfo(id) {
		return this.$store.getters.spellInfo(id)
	},
}

export default util
