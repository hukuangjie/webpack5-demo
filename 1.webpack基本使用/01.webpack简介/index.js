/*
 * @Author: your name
 * @Date: 2020-09-24 16:35:42
 * @LastEditTime: 2020-09-24 16:41:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5_demo\01.webpack简介\index.js
 */

// 引入js资源
import $ from 'jquery'
// 引入样式资源
import './index.less'

$("#title").on('click', () => {
    $("body").css('backgroundColor', 'deeppink')
})