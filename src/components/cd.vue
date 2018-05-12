<template>
  <div>
    <v-nav></v-nav>
    <!-- <a @click="test"></a> -->
  </div>
</template>

<script>
  import nav from "./public/navigation.vue";    
  export default {
    data() {
      return{

      }
    },
    components: {
    "v-nav": nav
    },
    mounted() {
      this.$store.commit('changeTagIndex', 3)
    },
    methods: {
      test: function() {
        this.axios({method: 'get',
        baseURL: '/api',
        url:'?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
      }).then((res) => {
        console.log(res)
      })
      }
    }
  }
</script>

<style media="screen">

</style>
