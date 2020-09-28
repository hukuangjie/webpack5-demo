const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    resolve
} = require("path");
/**
 * module
 */
module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称(指定名称+目录)
        filename: '[name].js',
        // 输出文件目录(公共路径前缀将来所有资源输出的公共目录)
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            // loader的配置
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}