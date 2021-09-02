<template>
	<v-dialog v-model="showPostFormModal" @click:outside="clickOut" width="50vw">
		<v-card>
			<v-card-text :style="{ padding: '10px' }" class="postFormModal">
				<div class="selectSection">
					<select-box :items="$quereTypeList()" class="selectBox" />
					<select-box :items="$positionTypeList()" class="selectBox" />
				</div>
				<div class="selectSection">
					<select-box :items="$addFriendTimeList()" class="selectBox" />
					<select-box :items="items" class="selectBox" />
				</div>
				<post-name-form />
				<post-body-form />
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" text> I accept </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import PostBodyForm from '../form/PostBodyForm.vue'
import PostNameForm from '../form/PostNameForm.vue'
import SelectBox from '../form/SelectBox.vue'
export default {
	components: { SelectBox, PostBodyForm, PostNameForm },
	name: 'PostFormModal',
	data() {
		return {
			items: [1, 2, 3, 4],
		}
	},
	computed: {
		...mapState(['showPostFormModal']),
	},
	methods: {
		clickOut() {
			this.$closePostFormModal()
		},
	},
}
</script>

<style></style>
