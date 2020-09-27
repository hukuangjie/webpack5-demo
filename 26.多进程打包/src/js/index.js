/*
 * @Author: your name
 * @Date: 2020-09-27 21:07:30
 * @LastEditTime: 2020-09-27 23:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\22.tree shaking\src\js\index.js
 */
import {
  mul,
} from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));

/**
 * 1.eslint不认识window navigator 全局变量
 *  解决:需要修改package.json中eslintConfig配置
 *
 *  "env":{
 *    "browser":true //支持浏览器端全局变量
 *  }
 *
 * 2.sw代码必须运行在服务器上
 *
 * --> nodejs
 * -->
 *      npm i serve -g
 *        serve -s build
 */

// 注册serviceworker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了');
      }).catch(() => {
        console.log('sw注册失败了');
      });
  });
}
