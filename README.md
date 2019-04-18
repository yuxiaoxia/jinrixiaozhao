
### 技术栈

nuxt2 + vue + vuex + vue-router + mint-ui

### 项目运行

参考 `https://github.com/nuxt/nuxt.js` 
### 部署

已添加了`now.josn`, 可以部署在`now.sh`上面，但是会比较慢

### 跨域处理

`Nuxt` 中没有 `proxyTable` 配置项来进行跨域的配置，`Nuxt` 官方提供了两个包来处理 `axios` 跨域问题。

- [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)
- [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)

首先，进行安装

```shell
npm i @nuxtjs/axios @nuxtjs/proxy -D
```

然后在 `nuxt.config.js` 文件里进行配置

```
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',{
        // target: 'http://localhost:9000',
        changeOrigin: true,
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],
```

### 样式

引入了stylus预处理器及mint-ui框架

使用postcss-px2rem转换成rem单位，但是mint-ui用的px单位，也会被转换成rem单位，这里我对postcss-px2rem的源码做了修改

postcss-px2rem-exclude也可以把不需要转换的文件排除，但是我这里不可行

```
postcss: [
	require('postcss-px2rem')({
		remUnit: 75,
		exclude: /(\/|\\)(node_modules)(\/|\\)/
	}),
]
```
```
module.exports = postcss.plugin('postcss-px2rem', function (options) {
  return function (css, result) {
	if (options.exclude && css.source.input.file.match(options.exclude) !== null) {
      result.root = css;
      return
    }
    var oldCssText = css.toString();
    var px2remIns = new Px2rem(options);
    var newCssText = px2remIns.generateRem(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});

```

### 截图

项目比较简单，还需要不断完善

![效果]('http://wxiaoxia.oss-cn-shenzhen.aliyuncs.com/blog/1.jpg')

![效果]('http://wxiaoxia.oss-cn-shenzhen.aliyuncs.com/blog/2.jpg')

![效果]('http://wxiaoxia.oss-cn-shenzhen.aliyuncs.com/blog/3.jpg')
