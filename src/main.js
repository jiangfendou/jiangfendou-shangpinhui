import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'

// 三级联动的组件 -- 全局组件
import TypeNav from '@/components/typeNav/typeNav'
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
    router,
    // 注册仓库：组件实例的身上会多一个属性$store属性
    store
}).$mount('#app')