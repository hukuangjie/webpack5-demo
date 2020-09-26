/*
 * @Author: your name
 * @Date: 2020-09-24 23:07:22
 * @LastEditTime: 2020-09-26 18:50:02
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
    entry: './src/index.js',
    output: {
        filename: 'built.js',
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
    mode: 'development'
}