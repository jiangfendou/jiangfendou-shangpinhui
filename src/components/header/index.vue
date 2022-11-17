<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p>
                        <span>请</span>
                        <!-- 声明式导航 -->
                        <router-link to="/login">登录</router-link>
                        <!-- <a href="###" class="register">免费注册</a> -->
                        <router-link to="/register" class="register">免费注册</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <a href="###">我的订单</a>
                    <a href="###">我的购物车</a>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link class="logo" to="/home">
                    <img src="./images/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model = 'keyword'/>
                    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch()">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        keyword: ''
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 搜索按钮的回调函数，需要向search路由经行跳转
    goSearch() {
        // 路由传递参数

        // 1、字符串形式 param and query
        // this.$router.push('/search/' + this.keyword + '?k=' + this.keyword.toUpperCase())

        // 2、模板字符串
        // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

        // 3、对像
        // this.$router.push({name:"search", params:{"keyword": this.keyword}, query: {k: this.keyword.toUpperCase()}})

        // -------------------------- 面试题 --------------------------

        // 1、路由传递参数（对像写法）path是否可以结合param参数一起使用？
        // 答：路由跳转传参数的时候，对像的写法可以是name和path的形式，但是需要注意的是path的形式，是不能和params参数一起使用的。
        // this.$router.push({path: '/search', params: {"keyword": this.keyword}, query: {k:this.keyword.toUpperCase()}})

        // 2、如何指定param参数可传可不传？
        // 比如配置路由的时候已经占位了，但是路由传递的时候就不传递参数（params）路径会出现问题.
        // 如果指定路由参数params参数可传递、或者不传递，在配置路由的时候，在占位符的后面加上问好 “?”
        // this.$router.push({name: 'search', query: {k:this.keyword.toUpperCase()}})

        // 3、param参数可传可不传，但是如果传递是空串，如何解决？
        // 使用undefined解决：params参数可以传递、不传递（空的字符串）
        this.$router.push({name: 'search', params: {"keyword": '' || undefined}, query: {k:this.keyword.toUpperCase()}})

        // 4、路由组件能不能传递props数据？
        this.$router.push({name: 'search', params: {"keyword": '' || undefined}, query: {k:this.keyword.toUpperCase()}})

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
    .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;
                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>