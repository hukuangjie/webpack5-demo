const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    resolve
} = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            /**
             * 语法检查 规范代码 eslint --> eslint eslint-loader
             */
            test: /\.js$/,
            exclude: /node_modeles/,
            loader: 'eslint-loader',
            options: {
                fix: true
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: 'development'
}