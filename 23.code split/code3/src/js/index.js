/*
 * @Author: your name
 * @Date: 2020-09-27 21:07:30
 * @LastEditTime: 2020-09-27 22:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\22.tree shaking\src\js\index.js
 */

/**
 * 通过js代码,让某个文件被单独打包成一个chunk
 * import动态导入语法,能将某个文件单独打包
 */

import( /* webpackChunkName:'test' */'./test')
  .then(({
    mul,
    count
  }) => {
    console.log(mul);
    console.log(count);
    console.log(mul(2, 5));

  }).catch((err) => {
    console.log(err);

  })

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));