<template>
  <div class="layout-blank">
    <main class="layout-main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  components:{
  }
}
</script>

<style lang="stylus">
html
body
#__nuxt
#__layout
.layout-blank
	width 100%
	height 100%
.layout-main
	width 100%
	height 100%
	overflow-y auto
</style>
