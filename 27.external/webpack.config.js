/*
 * @Author: your name
 * @Date: 2020-09-24 23:07:22
 * @LastEditTime: 2020-09-27 23:59:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\04.打包HTML资源\webpack.config.js
 */


//plugin 1.下载 2.引入 3.使用
const {
    resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 复制一个'./src/index.html' HTML文件,并自动引入打包输出的所有资源
            template: './src/index.html'
        })
    ],
    mode: 'production',
    externals:{
        // 忽略库名 -- npm包名
        // 拒绝jQuery这个包被打包
        jquery:'jQuery'
    }
}