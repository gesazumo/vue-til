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

	$getItemInfo(id) {
		return this.$store.getters.itemInfo(id)
	},

	$getUpNearNumber(num) {
		if (typeof num != 'number') return 0
		const val = 10 ** (num.toString().length - 2)
		return Math.ceil(num / val) * val
	},
}

export default util
