<template>
  <div>
    <v-nav></v-nav>
    <v-taolist></v-taolist>
    <v-cd></v-cd>
    <v-toplist></v-toplist>
  </div>
</template>

<script>
  import newCD from './musicDis_c/newCD.vue'
  import topList from './musicDis_c/topList.vue'
  import taoList from './musicDis_c/taogeList.vue'
  import nav from './public/navigation.vue'
  export default {
    data () {
      return {
        index: ''
      }
    },
    components: {
      'v-cd': newCD,
      'v-toplist': topList,
      'v-taolist': taoList,
      'v-nav': nav
    },
    mounted() {
      this.$store.commit('changeLinkIndex', 1)
      this.$store.commit('changeTagIndex', 1)
    }
  }
</script>

<style lang="scss">

</style>
