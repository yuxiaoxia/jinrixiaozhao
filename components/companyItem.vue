<template>
	<div class="item flex-box">
		<div class="left">
			<img v-if="item.logo" v-lazy="'http://h5.jinrixiaozhao.com/' + item.logo" alt="" class="logo">
			<img v-else :src="require('~/static/images/logo.jpg')" alt="" class="logo">
		</div>
		<div class="right">
			<p class="title text-overflow2">{{item.company_name}}</p>
			<p class="info">
				<span>{{item.financing_level_name}}</span>
				<span v-if="item.scale_name"> | {{item.scale_name}}</span>
				<span v-if="item.company_type_name"> | {{item.company_type_name}}</span>
			</p>
			<p class="location flex-box v-center" v-if="item.city_name">
				<span class="location-icon"></span>
				<span> {{item.city_name}}</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		item: {
			default: {}
		}
	},
	data() {
		return {

		}
	},
	async mounted() {
	},
	methods: {

	}
}
</script>
<style lang="stylus" scoped>

.item
	font-size 28px
	color #333
	padding 20px
	margin-bottom 20px
	background: #fff
	.left
		width 200px
		height 200px
		background #f8f8f8
		margin-right 20px
		text-align center
	.logo
		width 200px
		height 200px
		transition: all
	.logo[lazy=loading]
		width 60px
		height 60px
		margin auto
		margin-top 70px
	.title
		height 80px
		font-weight 500
		margin-bottom 20px
	.info
		height 40px
		color #999
		font-size 26px
		margin-bottom 10px
	.location
		color #999
		font-size 26px
	.location-icon
		width 36px
		height 36px
		background url('../static/images/icon-location.png') center center no-repeat
		background-size 100%
		display inline-block
</style>
