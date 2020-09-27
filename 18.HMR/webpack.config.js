/*
 * @Author: your name
 * @Date: 2020-09-27 19:34:10
 * @LastEditTime: 2020-09-27 21:35:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\18.HMR\webpack.config.js
 */
/**
 * HMR: hot module replacement 热模块替换 /模块热替换
 *  作用:一个模块发生变化,只会重新打包这一个模块,极大提升构建速度
 *  
 *  样式文件:可以使用HMR功能:因为style-loader内部实现了
 *  js文件:默认没有HMR功能 -->修改js代码,添加支持HMR功能的代码
 *     注意: HMR功能对于js的处理.只能处理非入口js文件的其他文件
 *  html文件:默认不能使用HMR功能,同时会导致问题:html文件不能热更新了
 *      解决:修改entry入口,讲html文件引入
 *  
 * 当webpack配置修改,新配置要生效,必须重启webpack
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')
module.exports = {
    entry: ['./src/js/index.js','./src/index.html'],
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
                outputPath: 'img'
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
                outputPath: 'media'
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
        hot: true, //开启HMR功能
    }
}