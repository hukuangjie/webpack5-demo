/*
 * @Author: your name
 * @Date: 2020-09-27 21:07:30
 * @LastEditTime: 2020-09-27 22:03:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\22.tree shaking\src\js\index.js
 */

import $ from "jquery"

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
console.log($);