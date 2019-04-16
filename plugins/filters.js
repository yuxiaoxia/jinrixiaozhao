import Vue from 'vue'

export function imageLimit(url) {
	if (url.indexOf('avatar') > -1 && url.indexOf('mini') > -1) {
		return url.replace('mini', 'large')
	}

	if (url.indexOf('gravatar') > -1 && url.indexOf('s=24') > -1) {
		return url.replace('s=24', 's=60')
	}

	return url
}

const filters = {
	imageLimit
}

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

export default filters
