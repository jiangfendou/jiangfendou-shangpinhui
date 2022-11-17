<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在home search是显示的，在登录、注册是不现实的 -->
    <Footer v-show = "$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/header/'
import Footer from './components/footer/'
export default {
  name: '',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
