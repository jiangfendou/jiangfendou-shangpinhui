<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
  </div>
</template>

<script>
import ListContainer from '@/pages/home/listContainer/listContainer'
import Recommend from '@/pages/home/recommend/recommend'
import Rank from '@/pages/home/rank/rank'
export default {
  components: {
    ListContainer,
    Recommend,
    Rank
  },
  props: {},
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