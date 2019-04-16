<template>
	<div class="container page-home">
		<div class="list-wrap">
			<div v-if="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="page.hasMore" infinite-scroll-distance="10">
				<CompanyList :list="list"></CompanyList>
			</div>
		</div>

	</div>
</template>

<script>

import { Toast, InfiniteScroll } from 'mint-ui';
import { requestCompanyList } from '~/utils/api'
import CompanyList from '~/components/companyList'

export default {
	layout: 'blank',
	head () {
      return {
        title: '今日新秀',
      }
    },
	components: {
		CompanyList
	},
	data() {
		return {
			list: [],
			page: {
				size: 10,
				page: 1,
				hasMore: true,
			},
		}
	},
	async asyncData() {
		const { code, data } = await requestCompanyList({
			size: 10,
			page: 1,
		})
		return { list: data }
	},
	methods: {
		async loadMore() {
			if(this.list.length < this.page.size && this.page.page == 1) {
				this.page.hasMore = false
				return false
			}
			this.page.page += 1
			const { code, data } = await requestCompanyList({
				size: 10,
				page: this.page.page,
			})
			this.list = this.list.concat(data)
			this.page.hasMore = true
		},
	}
}
</script>

<style lang="stylus">
@import '~@/common/stylus/variable'
@import '~@/common/stylus/mixin'
.list-wrap
	height 100vh
	overflow scroll

</style>
