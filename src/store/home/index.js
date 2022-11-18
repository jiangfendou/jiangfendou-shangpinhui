import { reqCategoryList } from "@/api";

// home 模块的小仓库
const state = {
    categoryList: []
};
const mutations = {
    CATEGORY(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORY", result.data)
        }
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}