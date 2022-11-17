//配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入路由组件
import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Search from '../pages/search/index'

// 先把VueRouter原型对像的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push | replace
// 第一个参数：告诉原来的push方法，往哪里跳
// 第二个参数是成功的回调
// 第三个参数是失败的回调
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}

VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}

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

/**
 * 路由面试题
 * 1、路由传递参数（对像写法）path是否可以结合param参数一起使用？
 * 2、如何指定param参数可传可不传？
 * 3、param参数可传可不传，但是如果传递是空串，如何解决？
 * 4、路由组件能不能传递props数据？ 
 */

//配置路由
export default new VueRouter({

    routes: [{
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true },
            name: "search",
            // boolean值的写法
            // props: true
            // 对像写法
            // props: { "a": 1, "b": 2 }
            // 函数写法：可以params参数、通过props传递给路由组件
            // props: ($route) => {
            //     return { keyword: $route.params.keyword, k: $route.query.k }
            // }
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