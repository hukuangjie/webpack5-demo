/*
 * @Author: your name
 * @Date: 2020-09-27 20:42:14
 * @LastEditTime: 2020-09-27 20:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\21.缓存\server.js
 */
/**
 * 服务端代码
 * 启动服务器
 * nodemon server.js
 */

const express = require('express')

const app = express()

app.use(express.static('build', {
    maxAge: 1000 * 3600
}))

app.listen(3000)