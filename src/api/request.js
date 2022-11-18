// 对axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// start: 进度条开始
// done: 进度条结束

// 引入进度条的样式
import 'nprogress/nprogress.css';


// 1、利用axios对像的方法create，去创建一个axios实例
// 2、request就是axios，只不过稍微配置一下
const requests = axios.create({
    // 配置对象
    baseURL: '/api',
    timeout: 5000,
});

// 请求拦截器：在请求发送之前请求拦截器可以检测到，可以在请求发出去之前做一下事情
requests.interceptors.request.use((config) => {
    // config: 配置对像，对象里有一个很重要的属性header，请求头
    // 进度条开动
    nprogress.start();
    return config;
})

// 相应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    // 服务器响应失败的函数
    return Promise.reject(new Error('file'))
});

//对外暴露
export default requests;