const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    resolve
} = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
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
        rules: [
            // loader的配置
        ]
    },
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名: 优点：当目录层级很复杂时，简写路径；缺点：路径不会提示
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名（引入时就可以不写文件后缀名了）
        extensions: ['.js', '.json', '.jsx', '.css'],
        // 告诉 webpack 解析模块应该去找哪个目录
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            /* 以下都是splitChunks默认配置，可以不写
            miniSize: 30 * 1024, // 分割的chunk最小为30kb（大于30kb的才分割）
            maxSize: 0, // 最大没有限制
            minChunks: 1, // 要提取的chunk最少被引用1次
            maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量为5
            maxInitialRequests: 3, // 入口js文件最大并行请求数量
            automaticNameDelimiter: '~', // 名称连接符
            name: true, // 可以使用命名规则
            cacheGroups: { // 分割chunk的组
              vendors: {
                // node_modules中的文件会被打包到vendors组的chunk中，--> vendors~xxx.js
                // 满足上面的公共规则，大小超过30kb、至少被引用一次
                test: /[\\/]node_modules[\\/]/,
                // 优先级
                priority: -10
              },
              default: {
                // 要提取的chunk最少被引用2次
                minChunks: 2,
                prority: -20,
                // 如果当前要打包的模块和之前已经被提取的模块是同一个，就会复用，而不是重新打包
                reuseExistingChunk: true
              }
            } */
        },
        // 将index.js记录的a.js的hash值单独打包到runtime文件中
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            // 配置生产环境的压缩方案：js/css
            new TerserWebpackPlugin({
                // 开启缓存
                cache: true,
                // 开启多进程打包
                parallel: true,
                // 启用sourceMap(否则会被压缩掉)
                sourceMap: true
            })
        ]
    }
}