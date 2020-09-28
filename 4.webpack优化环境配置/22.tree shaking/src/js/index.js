/*
 * @Author: your name
 * @Date: 2020-09-27 21:07:30
 * @LastEditTime: 2020-09-27 21:12:26
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