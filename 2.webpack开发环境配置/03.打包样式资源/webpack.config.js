/*
 * @Author: your name
 * @Date: 2020-09-24 22:40:46
 * @LastEditTime: 2020-09-24 22:59:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\03.打包样式资源\webpack.config.js
 */
const {
    resolve
} = require('path')

module.exports = {
    // 起点
    entry: './src/index.js',
    //输出
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            // 不同的文件必须配置不同的loader处理
            // 详细loader配置
            test: /\.css$/,
            use: [
                //use数组中loader的执行顺序,,从右到左,从下到上
                'style-loader', //创建style标签,将js中的样式资源插入进行,添加到head中生效
                'css-loader', //将css文件变成commonjs模块加入js中
            ]
        }, {
            // 不同的文件必须配置不同的loader处理
            // 详细loader配置
            test: /\.less$/,
            use: [
                //use数组中loader的执行顺序,,从右到左,从下到上
                'style-loader', //创建style标签,将js中的样式资源插入进行,添加到head中生效
                'css-loader', //将css文件变成commonjs模块加入js中
                'less-loader', //将less文件变成css文件
            ]
        }]
    },
    plugins: [
        // 详细plugins的配置
    ],
    // 模式
    mode: 'development',
    // mode: 'production',
}