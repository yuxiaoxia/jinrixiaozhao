<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
    <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox" @mouseenter="stopSwiper" @mouseleave="startSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
                <img class="swiper-img" :src="banner">
            </div>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>   
        -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            banners: [ 
                'https://img.allpyra.com/285c512f-c22a-4af9-8183-ee0d0e94ede3.jpg?imageslim', 
                'https://img.allpyra.com/19b45c81-1258-4298-b774-26ead2f07b46.jpg?imageslim', 
                'https://img.allpyra.com/54f57a75-76ad-4ab1-be1c-ddeb0ad72953.jpg?imageslim',
                'https://img.allpyra.com/49ce6794-aa6b-4f9d-af28-32b2a4c4ee57.jpg?imageslim'
            ],
            // 所有配置均为可选（同Swiper配置）  
            swiperOption: {
                loop: true,
                speed:500,
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChange() {
                    // console.log('onSlideChangeEnd', this);
                    },
                    tap() {
                    // console.log('onTap', this);
                    }
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                autoplayDisableOnInteraction:false,
                // effect:'cube',
                mousewheel: true,
                preloadImages: false,
                lazy: true
            }
        }
    },
    swiper() {
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        return this.$refs.swiperBox.swiper
    },
    methods:{
        stopSwiper(){
            this.swiper.autoplay.stop()
        },
        startSwiper(){
            this.swiper.autoplay.start()
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 56%
    .swiper-img
        width 100%
    .swiper-pagination >>> 
        .swiper-pagination-bullet
            width 15px
            border-radius 10px
        .swiper-pagination-bullet-active
            background-color #fff !important
            width 30px
            border-radius 10px
</style>
