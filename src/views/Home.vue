<template>
	<div>
		<rotation :title="' - 금주의 로테이션 챔피언'" />
		<div :style="{ height: '10px' }" />
		<space-row :height="20" />
		<sale-skin :title="' - 현재 진행중인 챔피언 및 스킨 세일'" />
	</div>
</template>

<script>
import Rotation from '@/components/Rotation.vue'
import SaleSkin from '@/components/SaleSkin.vue'

export default {
	components: { Rotation, SaleSkin },
}
</script>

<style></style>
