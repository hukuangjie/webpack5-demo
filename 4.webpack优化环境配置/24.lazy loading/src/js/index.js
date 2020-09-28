/*
 * @Author: your name
 * @Date: 2020-09-27 22:19:56
 * @LastEditTime: 2020-09-27 22:32:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\24.lazy loading\src\js\index.js
 */
console.log('index.js被加载了');
document.getElementById('btn').onclick = function () {
    // 懒加载: 当文件需要使用时才加载
    // 预加载:prefetch 会在使用之前 提前加载js文件
    // 正常家都可以认为是并行加载 (同一时间加载多个文件)
    // 预加载 prefetch :等其他资源加载完毕了,再偷偷加载资源 兼容性问题*(慎用)
    import(/* webpackChunkName:'test', webpackPrefetch:true */'./test').then(({mul}) => {
        console.log(mul(4, 5));
    })
}