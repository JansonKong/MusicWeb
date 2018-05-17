<template>
  <div id="app">
    <v-section></v-section>
    <v-player></v-player>
  </div>
</template>

<script>
import section from './components/public/section.vue'
import player from './components/public/player.vue'

export default {
  name: 'app',
  components: {
    'v-section': section,
    'v-player': player
  },
  mounted () {
    console.log(this.$router)
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    min-width: 1240px;
    overflow-y: scroll;
  }
  body, button, input, select, textarea, th, a{
    color: #000;
    /*background-color: #fff;*/
    font-size: 14px;
    line-height: 1.5;
    font-family: poppin, 'PingFang SC',Tahoma,Arial,sans-serif;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    border: 0 none;
  }
</style>