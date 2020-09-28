/*
 * @Author: your name
 * @Date: 2020-09-26 20:46:14
 * @LastEditTime: 2020-09-26 23:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\06.打包其他资源\webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // 图片资源
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                esModule: false,
                outputPath:'img'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            // 打包其他资源 (除了html,js.css 以为的资源)
            exclude: /\.(css|js|html|less|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:10].[ext]',
                outputPath:'media'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",

    // 开发服务器 devServer,用来自动化
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip永硕
        compress: true,
        port: 3000,
        open: true, //自动打开浏览器
    }
}