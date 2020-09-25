/*
 * @Author: your name
 * @Date: 2020-09-24 23:07:22
 * @LastEditTime: 2020-09-25 10:09:52
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
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}