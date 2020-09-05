/**
 * 请求的二次封装
 */

import axios from 'axios'
import { getURL } from './getEnv'


export let request = axios.create({
    baseURL: getURL(),
    timeout: 5000
})


// 请求拦截器
request.interceptors.request.use(res => {

}, error => {

})

// 响应拦截器
request.interceptors.response.use(response => {

}, error => {

})