# webpack 性能优化
* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包构建速度
    * HMR
* 优化代码调试
    * source-map

## 生产环境性能优化
* 优化打包构建速度
    * oneOf 只会加载一个loader
    * babel缓存 打包速度
    * 多进程打包,提升打包速度,但是进程开启都要有销大概600ms
    * externals
    * dll
* 优化代码运行的性能
    * 缓存(hash-chunkhash-contenthash)
    * tree shaking (删除未被使用js)
    * code split  (单入口 多入口,有公共使用的代码,会被提出来)
    * 懒加载/预加载 
    * PWA 离线访问,更加友好高效,有兼容性问题要处理
