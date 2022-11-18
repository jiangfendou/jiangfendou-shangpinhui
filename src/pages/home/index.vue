<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/home/listContainer/listContainer'
import Recommend from '@/pages/home/recommend/recommend'
import Rank from '@/pages/home/rank/rank'
import Like from '@/pages/home/like/like'
import Floor from '@/pages/home/floor/floor'
import Brand from '@/pages/home/brand/brand'

export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    
  },
  methods: {
   
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>