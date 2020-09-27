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
    entry: ['./src/js/index.js', './src/index.html'],
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
    },
    devtool: 'eval-source-map',
    /**
     * source-map 是一种提供源代码到构建后代码映射技术
     * (如果构建后代码出错了,通过映射可以追踪源代码错误)

     *  [inline-}hidden-|eval-][nosources-][cheap-[module-]]source-map

     * source-map :外部
     *  错误代码准确信息 和源代码的错误位置

     * inline-source-map  :内联
     *  错误代码准确信息 和源代码的错误位置
     *  只生成一个内联source-map

     * hidden-source-map  :外部
     *  错误代码的错误原因,但是没有错误位置, 隐藏源代码
     *  不能追踪到源代码错位,只能提示构建后的代码的错误位置

     * eval-source-map    :内联
     *  错误代码准确信息 和源代码的错误位置

     * nosources-source-map   :外部
     *  错误代码准确信息.但是没有任何源代码信息 隐藏源代码

     * cheap-source-map       :外部
     *  错误代码准确信息 和源代码的错误位置,只精确到行

     * cheap-module-source-map   :外部
     *  错误代码准确信息 和源代码的错误位置

     *   每一个文件都生成对应的source-map,都在eval
     *  内联 和外部的区别: 1.外部生成了文件,内联没有.2 内联的构建速度更快
     *
     *
     * 开发环境,速度快,调试更友好
     *     1.速度: (eval>inline>cheap>...)
     *      eval-inline-source-map
     *      eval-source-map
     *     2.调试更友好:
     *      source-map
     *      cheap-module-source-map
     *      cheap-source-map
     *
     *      折中 调试更友好--->eval-source-map
     *          性能 eval-cheap-module-source-map
     * 生产环境:源代码要不要隐藏?调试要不要更友好
     *
     *      内联会让代码体积变大,所以在生产环境不用内联
     *      nosources-source-map 全部隐藏
     *      hidden-source-map  只隐藏源代码,会提示构建后的代码错误
     *      --> source-map /cheap-module-source-map
     *
     */
}