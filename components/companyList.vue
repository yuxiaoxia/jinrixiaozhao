<template>
	<ul class="list">
		<nuxt-link :to="{path: `company/${item.id}`, params: { id: item.id }}" class="item flex-box" v-for="(item, index) in list" :key="index">
			<CompanyItem :item="item"></CompanyItem>
		</nuxt-link>
	</ul>
</template>
<script>
import CompanyItem from '~/components/companyItem'
export default {
	props: {
		list: {
			default: []
		}
	},
	components: {
		CompanyItem
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
.list
	color #333
.item
	width 100%
</style>
