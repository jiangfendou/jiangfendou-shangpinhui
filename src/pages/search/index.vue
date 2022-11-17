<template>
  <div>
    <h1>param参数:{{$route.params.keyword}}================={{a}}---{{b}}</h1>
    <h1>query参数:{{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
  components: {},
  // 路由传递
  props: ["a", "b"],
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>