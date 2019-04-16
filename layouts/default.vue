<template>
  <div class="layout-default">
      <main class="layout-main">
          <nuxt />
        </main>
      </div>
    </div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return {
      isLoading:false
    }
  },
  created(){
    this.$nextTick(()=>{
      this.isLoading = true
    })
  }
}
</script>

<style lang="stylus">
html
body
#__nuxt
#__layout
.layout-default
	width 100%
	height 100%
.layout-main
	width 100%
	height 100%
	overflow-y auto
</style>
