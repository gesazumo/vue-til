<template>
	<v-textarea label="내용을 입력하세요" value="" :rules="rules"></v-textarea>
</template>

<script>
export default {
	name: 'PostBodyForm',
	data() {
		return {
			rules: [v => v.length <= 5 || '너무 길어요'],
		}
	},
}
</script>
