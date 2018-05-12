<template>
  <div>
    <v-nav></v-nav>
    <v-cd></v-cd>
    <!-- <v-event></v-event>
    <v-toplist></v-toplist>
    <v-taolist></v-taolist> -->
  </div>
</template>

<script>
  import newCD from './musicDis_c/newCD.vue'
  import event from './musicDis_c/event.vue'
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
      'v-event': event,
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
//   .mod_top_subnav {
//   height: 51px;
//   line-height: 51px;
//   border-top: 1px solid #f2f2f2;
//   padding-left: 256px;
// }
// .top_subnav__item {
//   float: left;
//   font-size: 15px;
//   color: #c1c1c1;
//   margin-right: 56px;
// }
// .top_subnav__link {
//   cursor: auto;
// }
</style>
