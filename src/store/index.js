import Vue from 'vue';
import Vuex from 'vuex';

// 需要使用插件一次
Vue.use(Vuex);
// 引入小仓库
import home from './home/index'
import search from './home/index'
// 对外暴漏Store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块是开发存储数据
    modules: {
        home,
        search
    }
})