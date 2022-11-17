import Vue from 'vue'
import App from './App.vue'

// 三级联动的组件 -- 全局组件
import TypeNav from '@/pages/home/typeNav/typeNav'
// 第一个参数是全局组件的名字； 第二个参数是哪一个组件
Vue.component('TypeNav', TypeNav)

// 引入路由
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 注册路由
    // 当这里书写router的时候，组件身上就会拥有 $router, $route 属性
    // $route 一般用来获取路由信息【路径、query、params等】
    // $router 一般进行编程式导航进行路由跳转【push|replace】
    router
}).$mount('#app')