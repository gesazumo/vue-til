<template>
	<div>
		<rotation :title="' - 금주의 로테이션 챔피언'" />
		<div :style="{ height: '10px' }" />
		<board />
	</div>
</template>

<script>
import Rotation from '@/components/Rotation.vue'
import Board from '../components/Board.vue'

export default {
	components: { Rotation, Board },
}
</script>

<style></style>
