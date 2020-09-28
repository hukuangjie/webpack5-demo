const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    resolve
} = require('path')

// 设置node环境变量

process.env.NODE_ENV = "development"
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                /**
                 * css 兼容性处理: postcss --> postcss-loader postcss-preset-env
                 * 
                 * 帮postcss找到package.json中browserslist里面的配置,通过配置加载指定的css兼容性样式
                 *   "borwserslist":{
                        "development":[
                        "last 1 chrome version",
                        "last 1 firefox version",
                        "last 1 safari version"
                        ],
                        "production":[
                        ">0.2%",
                        "not dead",
                        "not op_mini all"
                        ]
                    }
                 */
                // 使用loader的默认配置
                'postcss-loader',
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         ident: 'postcss',
                //         plugins: () => [

                //             // postcss插件
                //             require('postcss-preset-env')()
                //         ]
                //     }
                // }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development'
}