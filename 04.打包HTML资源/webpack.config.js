const {
    resolve
} = require("path");

/*
 * @Author: your name
 * @Date: 2020-09-24 23:07:22
 * @LastEditTime: 2020-09-24 23:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\04.打包HTML资源\webpack.config.js
 */
const {
    resolve
} = require('path')
// const HtmlWebpackPlugin = 
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
    plugins: [],
    mode: 'development'
}