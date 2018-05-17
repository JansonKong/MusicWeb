<template>
  <div class="section">
    <v-head></v-head>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
import vHead from './header'
import vFoot from './footer'

export default {
  components: {
    'v-head': vHead,
    'v-foot': vFoot
  },
  mounted () {
    console.log(this.$router)
  }

}
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
    z-index: 0;
    height: 95%;
  }
</style>
