/*
 * @Author: your name
 * @Date: 2020-09-27 22:00:33
 * @LastEditTime: 2020-09-27 22:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\23.code split\code2\webpack.config.js
 */
const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 单入口
    // entry: './src/js/index.js',
    entry: {
        index:'./src/js/index.js',
        test:'./src/js/test.js',
    },
    output: {
        // [name]：取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    // 1.可以将node_modules 中代码单独打包成一个chunk最终输出
    // 2.自动分析多入口chunk中,有没有公共的文件如果有,会打包成单独的一个chunk
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production'
};