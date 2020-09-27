/*
 * @Author: your name
 * @Date: 2020-09-27 19:34:10
 * @LastEditTime: 2020-09-27 21:30:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\21.缓存\src\js\index.js
 */
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));