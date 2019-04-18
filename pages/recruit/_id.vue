<template>
	<div class="page-detail">
		<div class="detial-top">
			<div class="title">{{detail.name}}</div>
			<div class="subtitle">苏州亨利通信材料有限公司</div>
			<div class="subtitle">
				<span>未融资</span>
				<span> | 20-99人</span>
				<span> | 民营企业</span>
			</div>
		</div>
		<div class="margin-bottom">
			<p class="tit">薪资待遇: {{detail.treatment}}</p>
		</div>
		<div class="margin-bottom">
			<p class="tit">专业限制: {{detail.specialty_limit}}</p>
		</div>
		<div class="margin-bottom">
			<p class="tit">联系方式:</p>
		</div>
		<div class="margin-bottom">
			<p class="tit">招聘人数: {{detail.number}} 人</p>
		</div>
		<div class="margin-bottom">
			<p class="tit">工作地点: </p>
			<p class="desc">{{detail.workplace}}</p>
		</div>
		<div class="margin-bottom">
			<p class="tit">职位描述: </p>
			<p class="desc">{{detail.desc}}</p>
		</div>

	</div>
</template>

<script>

import { Toast } from 'mint-ui';
import { requestRecruitDetail } from '~/utils/api'
import CompanyItem from '~/components/companyItem'
export default {
	layout: 'blank',
	head () {
      return {
        title: '职位详情',

      }
    },
	components: {
		CompanyItem
	},
	data() {
		return {
			detail: {},
		}
	},
	async asyncData({ params }) {
		const { data: detail } = await requestRecruitDetail({
			id: params.id,
		})
		return { detail }
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style lang="stylus">
@import '~@/common/stylus/variable'
@import '~@/common/stylus/mixin'
.space
	height 20px
	background #f4f4f4
.padding
	padding 20px
.margin-bottom
	margin-bottom 40px
.detial-top
	margin-bottom 40px
	border-bottom 1px solid #ddd
	padding 40px 20px
.title
	font-size 32px
	font-weight 500
	margin-bottom 20px
.subtitle
	color #999
	margin-bottom 10px
.tit
	font-size 28px
	font-weight 500
	padding 0 20px
.desc
	line-height 2.2
	padding 20px
</style>
