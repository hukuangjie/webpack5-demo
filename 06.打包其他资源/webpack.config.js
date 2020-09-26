/*
 * @Author: your name
 * @Date: 2020-09-26 20:46:14
 * @LastEditTime: 2020-09-26 20:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\06.打包其他资源\webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, '/build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            // 打包其他资源 (除了html,js.css 以为的资源)
            exclude: /\.(css|js|html)$/,
            loader: 'file-loader',
            options:{
                name:'[hash:10].[ext]'
            }
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}