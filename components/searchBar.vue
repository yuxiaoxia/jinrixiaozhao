<template>
  <div class="mod-search-bar flex-box">
    <section class="warn flex-box center">
        <img :src="require('~/common/images/icon_warn.png')" alt="icon_warn" />
    </section>
    <section class="logo flex-1 flex-box center">
        <img :src="require('~/common/images/logo.png')" alt="logo" />
    </section>
    <section class="search flex-box center">
        <img :src="require('~/common/images/icon_search.png')" alt="icon_search" />
    </section>
  </div>
</template>

<style lang="stylus">
    .mod-search-bar
        height 88px
        background-color #ffffff
        .warn
            width 88px
            line-height 88px
            img 
                width 50%
        .logo 
            img 
                width 192px
                height 28px
        .search
            width 88px
            line-height 88px
            img 
                width 50%
</style>
