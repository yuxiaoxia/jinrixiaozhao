<template>
	<div class="page-detail">
		<CompanyItem :item="detail"></CompanyItem>
		<div class="space"></div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">公司简介</mt-tab-item>
			<mt-tab-item id="2">在招职位</mt-tab-item>
			<mt-tab-item id="3">宣讲会</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected" class="tab">
			<mt-tab-container-item id="1">
				<div class="description">{{detail.company_desc}}</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<ul class="employment-list">
					<li v-for="(item, index) in employment" :key="index" class="employment">
						<div class="flex-box space-between">
							<p>{{item.name}}</p>
							<span>{{item.treatment}}</span>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
			</mt-tab-container-item>
		</mt-tab-container>
		</div>
	</div>
</template>

<script>

import { Toast, InfiniteScroll, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import { requestCompanyDetail, requestCompanyEmployment } from '~/utils/api'
import CompanyItem from '~/components/companyItem'
export default {
	layout: 'blank',
	head () {
      return {
        title: '今日新秀',

      }
    },
	components: {
		CompanyItem
	},
	data() {
		return {
			detail: {},
			employment: [],
			selected: "1",
		}
	},
	async asyncData({ params }) {
		const { data: detail } = await requestCompanyDetail({
			id: params.id,
		})
		const { data: employment } = await requestCompanyEmployment({
			company_id: params.id,
		})
		return { detail, employment }
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
.page-detail
	height 100%
	background #fff
.description
	margin-bottom 20px
	padding 20px
	background #fff
	font-size 24px
	color #333
	line-height: 2.2
	.title
		font-size 28px
.employment-list
	background #fff
	margin-bottom 20px
	padding 40px
	.employment
		list-style none
		border-bottom 2px solid #f8f8f8
		padding 20px 0
.tab
	border-top: 2px solid #f8f8f8
.mint-tab-container
	margin-top 4px
</style>
