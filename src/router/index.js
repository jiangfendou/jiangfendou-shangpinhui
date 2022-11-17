//配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'



// 引入路由组件
import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Search from '../pages/search/index'

// 使用插件
Vue.use(VueRouter);

/**
 * 路由跳转
 * 路由跳转的两种形式
 * 1、声明式导航router-link，可以进行路由的跳转
 * 2、编程式导航push|replace，可以进行路由跳转
 * 
 * 编程式导航：声明式导航能做的，编程式导航都能做，但是编程式导航除了能跳转路由一外还可以处理一些其他的业务逻辑。
 */

/**
 * 路由跳转的几种方式
 * 1、声明式导航：router-link（务必要有to属性），可以实现路由的跳转
 * 2、编程式导航：利用的是组件实例的$router.push|replace，可以进行路由跳转.(跳转之前可以书写业务)
 * 
 * 路由传参数的方法：
 * 1、param参数：属于路径当中的一部分，需要注意，在配置路由的时候需要占位
 * 2、query参数：不属于路径中的一部分，类似于ajax中的queryString /home?k=v&kv=kv，不需要占位。
 * 
 */

//配置路由
export default new VueRouter({

    routes: [{
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyword",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        // 重定向，在项目跑起来的时候，访问 / 的时候，立马让他重定向到首页
        {
            path: "*",
            redirect: "/home"
        },
    ]

})