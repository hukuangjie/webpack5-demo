/*
 * @Author: your name
 * @Date: 2020-09-26 19:09:07
 * @LastEditTime: 2020-09-26 21:06:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\05.打包图片资源\webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname + 'build')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                esModule:false,
                name:'[hash:10].[ext]'
            },
        }, {
            test: /\.html$/,
            // 处理html文件的img图片
            loader: 'html-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development"
}