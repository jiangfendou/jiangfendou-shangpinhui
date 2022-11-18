import requests from "./request";

// 三级联动的接口
export const reqCategoryList = () => {
    // 发请求：axios发送请求返回结果是Promise对像
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}