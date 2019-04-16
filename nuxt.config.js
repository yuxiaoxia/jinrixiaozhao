const pkg = require('./package')
const path = require("path")

module.exports = {
  mode: 'universal',

  // router: {
  //   base: './'
  // },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    {
      src:'@/common/stylus/index.styl',
      lang:'stylus'
    },
    { src: "swiper/dist/css/swiper.css" }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/lib-flexible', ssr: false },
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
	{ src: "@/plugins/loading.js", ssr: false },
    { src: '~plugins/mint-ui' },
    // '@/plugins/element-ui',
    '@/plugins/route',
    '@/plugins/filters.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/proxy'
  ],

  /*
  ** Axios module configuration
  */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true
  // },

//   proxy: [
//     [
//       '/api',
//       {
//         target: 'http://h5.jinrixiaozhao.com/',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }
//       }
//     ],
//   ],

  /*
  ** configuration
  */
  build: {
    vendor: ['axios', 'mint-ui'],
    // transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      // if(!isDev){
      //   config.output.publicPath = './_nuxt/'
      // }
      if(isClient){
        // 添加 alias 配置
        Object.assign(config.resolve.alias, {
        })
      }
    },
    postcss: [
		require('postcss-px2rem')({
			remUnit: 75,
			exclude: /(\/|\\)(node_modules)(\/|\\)/
		}),
		// require('postcss-px2rem-exclude')({
		// 	remUnit: 32,
		// 	exclude: /(\/|\\)(node_modules)(\/|\\)/
      	// }),
    ]
  }
}
