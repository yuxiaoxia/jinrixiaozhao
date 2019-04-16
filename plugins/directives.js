import Vue from 'vue'

export function imgSrc(url) {
	window.requestAnimationFrame = window.requestAnimationFrame || window.setTimeout
	function getBase64ByColor(color) {
		const canvas = document.createElement("canvas")
		canvas.width = 1
		canvas.height = 1
		const ctx = canvas.getContext("2d")
		ctx.fillStyle = color
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		return canvas.toDataURL()
	}

	const defaultImgs = ["#8c8a8d", "#8aa0ac", "#d1e0d4", "#94b1c9", "#aeb79c", "#d4c2a0", "#d6cdc1", "#a67a93", "#cdb1ba", "#f9d0bd"].map(function (item) {
		return getBase64ByColor(item);
	})
	return {

	}
}
const directives = {
  imgSrc
}

Object.keys(directives).forEach(key => {
	Vue.directive(key, directives[key])
})

export default directives
