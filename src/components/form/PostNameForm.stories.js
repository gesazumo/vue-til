import PostNameForm from './PostNameForm.vue'

export default {
	title: 'PostNameForm',
	component: PostNameForm,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { PostNameForm },
	template: '<post-name-form/>',
})

export const Normal = Template.bind({})
Normal.args = {}
