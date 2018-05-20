<template>
  <div class="mod_index mod_index--new mod_slide_box"
   id="albumlist_box" @mouseover="arrow" @mouseout="arrowL">
    <div class="section_inner" >
      <div class="index__hd">
        <h2 class="index__tit">
          <i class="index__tit_sprite"></i>
          <i class="icon_txt">新歌首发</i>
        </h2>
        <i class="index__line index__line--left"></i>
        <i class="index__line index__line--right"></i>
      </div>
      <a href="y.qq.com/portal/album_lib.html#stat=y_new.index.album.more"
        class="index__more index__more--white js_album_more">
        全部
        <i class="icon_index_arrow"></i>
      </a>
      <div class="mod_index_tab">
        <a  class="index_tab__item js_tab" v-for="(item,index) in navList" :key="index" @click="chooseTab(index)">{{item}}</a>
      </div>
      <div class="mod_playlist mod_slide">
        <ul class="playlist__list slide__list" id="albumlist" style="left:-1200px;">
          <li class="playlist__item slide__item" v-for="item in playList" @click="playSong(item)">
            <div class="playlist__item_box">
              <div class="playlist__cover mod_cover">
                <a href="" class="js_album">
                  <img :src='serverUrl+item.image' alt="" class="playlist__pic">
                  <i class="mod_cover__mask"></i>
                  <i class="mod_cover__icon_play js_play"></i>
                </a>
              </div>
              <h4 class="playlist__title">
                <span class="playlist__title_txt">
                  <a href="" class="js_album">{{item.songName}}</a>
                </span>
                <a href="#" class="btn_opera_menu js_albumlist_more">
                  <span class="icon_txt">更多</span>
                </a>
              </h4>
              <div class="playlist__author">
                <a href="#" class="js_singer">{{item.singerName}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod_slide_switch js_switch">
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
        <a href="" class="js_jump slide_switch__item">
          <i class="slide_switch__bg"></i>
          <i class="icon_txt">1</i>
        </a>
      </div>
    </div>
    <div class="mod_slide_action" id="mod_slide_action">
      <div class="slide_action slide_action--left">
        <a href="javascript:;" class="slide_action__btn
          slide_action__btn--left js_jump">
            <i class="icon_txt">上一页</i>
            <i class="slide_action__arrow slide_action__arrow--left"></i>
          </a>
      </div>
      <div class="slide_action slide_action--right">
        <a href="javascript:;" class="slide_action__btn
          slide_action__btn--right js_jump">
            <i class="icon_txt">下一页</i>
            <i class="slide_action__arrow slide_action__arrow--right"></i>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: ['内地', '港澳台', '日韩', '欧美', '其他'],
        playList: [],
        picUrl: "/image/album/%E8%96%9B%E4%B9%8B%E8%B0%A6/%E7%BB%85%E5%A3%AB.jpg",
        serverUrl: "http://localhost:8080/MusicWeb",
        tab: 1
      }
    },
    methods: {
      arrow: function () {
        const sab = document.querySelectorAll('.slide_action__btn')
        for (var i = 0; i < sab.length; i++) {
          sab[i].style.transform = 'translatex(0)'
        }
      },
      arrowL: function () {
        const sab = document.querySelectorAll('.slide_action__btn')
        sab[0].style.transform = 'translatex(-100%)'
        sab[1].style.transform = 'translatex(100%)'
      },
      chooseTab: function(index){
        this.tab = index+1
        console.log(this.tab)
        this.getData()
      },
      getData: function(){
        var url = this.serverUrl+'/song/lookUpNewSongs?region='+this.tab
        this.axios.get(url).then(res => {
        this.playList = res.data
        console.log(this.playList)  
        });
      },
      playSong: function(item){
        this.$store.state.currentSong = item
      }
    },
    mounted() {
      this.getData()
    },
    computed: {
      tabLink () {
        return this.tab
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./style/taogeList.scss";
</style>
