
let DOMAIN = 'http://h5.jinrixiaozhao.com/'

console.log('环境' + process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    DOMAIN = 'http://h5.jinrixiaozhao.com/'
} else {
    DOMAIN = 'http://h5.jinrixiaozhao.com/'
}

const config = {
    NODE_ENV: process.env.NODE_ENV,
    DOMAIN: DOMAIN,
}

export default config
