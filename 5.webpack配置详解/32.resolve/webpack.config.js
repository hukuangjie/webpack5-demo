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
    mode: 'development'
}