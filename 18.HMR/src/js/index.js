/*
 * @Author: your name
 * @Date: 2020-09-26 20:52:31
 * @LastEditTime: 2020-09-27 15:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\06.打包其他资源\src\index.js
 */
import './print'
import '../css/iconfont.css'
import '../css/index.less'

console.log('index.js 文件被加载了~');
print()
function add(x, y) {
    return x + y

}
console.log(add(1, 2));

if (module.hot) {
    // 一旦module.hot为true.说明开启了HMR功能. --> 让HMR功能代码生效
    module.hot.accept('./print.js', () => {
        // 方法会监听print.js文件的变化,一旦发生变化,其他默认不会重新打包构建,
        //会执行后面的回调函数
        print()
    })
}