import { instance } from './index'

const url = {
	post: 'posts',
}

export const fetchCreatePost = postObject => {
	return instance.post(url.post, postObject)
}

export const fetchGetPostList = filterObject => {
	return instance.get(url.post, {
		params: { ...filterObject },
	})
}
