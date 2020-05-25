module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    devServer: {
        port: 8080,
        proxy: 'http://10.3.14.171:8089'
    }
    ,
    productionSourceMap: false
}