<template>
  <div>
    <!-- <ul class="mod_top_subnav">
      <li class="top_subnav__item" >
       <router-link to="/" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==1}">首页</router-link>
      </li>
      <li class="top_subnav__item" >
        <router-link  to="/singer" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==2}">歌手</router-link>
      </li>
      <li class="top_subnav__item" >
        <router-link  to="/cd" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==3}">专辑</router-link>
      </li>
    <li class="top_subnav__item">
      <router-link  to="" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==4}">排行版</router-link>
    </li>
  </ul>  -->
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
      'v-taolist': taoList
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
