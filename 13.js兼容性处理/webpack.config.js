const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /**
             * 兼容性处理 babel-loader @babel/core 
             * 1.基本的js兼容性处理 @babel/preset-env
             * 2.全部的js兼容性处理 @babel/polyfill
             *      问题:我只要解决部分兼容性问题,全部引入,体积太大
             * 3.按需做兼容性处理:按需加载 ->core.js
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设:指示babel做怎么样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs:{
                                    version:3
                                },
                                targets:{
                                    chrome:'60',
                                    firefox:'60',
                                    ie:'9',
                                    safari:'10',
                                    edge:"17"
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: 'development'
}