// import '@babel/polyfill'

const add = (x, y) => {
  return x + y;

}

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve()
  }, 1000)
})
// 下一行所有eslint规则都失效
// eslint-disable-next-line
console.log(add(2, 5));


console.log(promise);