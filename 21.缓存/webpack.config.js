const {
    resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// 定义nodejs环境变量,决定使用browserslist的那个环境
process.env.NODE_ENV = 'production'
// const commonCssLoader = [
//     MiniCssExtractPlugin.loader, //提取到单独文件
//     'css-loader',
//     'postcss-loader',
// ]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        /**
         * 正常来讲一个文件只能被一个loader处理
         * 
         * 当一个文件要被多个loader处理,那么一定要指定loader执行的先后顺序
         * 先执行eslint,再执行babel
         */
        rules: [{
            // 在package.json 中eslintConfig --> airbnb
            test: /\.js$/,
            exclude: /node_modelus/,
            enforce: 'pre', //优先执行
            loader: 'eslint-loader',
            options: {
                fix: true
            }
        }, {
            // 以下loader只会匹配一个
            // 注意:不能有两个配置处理同一个类型的文件
            oneOf: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //提取到单独文件
                    'css-loader',
                    'postcss-loader',
                ]
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, //提取到单独文件
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modelus/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: '60',
                                    firefox: '50'
                                }
                            }
                        ]
                    ],
                    // 开启babel缓存
                    cacheDirectory: true
                }
            }, {
                test: /\.(jpg|png|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'img',
                    esModule: false //写了下面html-loader 就加上这一行.
                }
            }, {
                test: /\.html/,
                loader: 'html-loader'
            }, {
                exclude: /.(js|css|less|html|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new OptimizeCssAssetsPlugin() //压缩css
    ],
    mode: 'production' //js自动压缩
}