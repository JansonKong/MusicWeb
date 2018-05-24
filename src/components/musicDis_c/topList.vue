<template>
  <div id="toplist_box">
    <div class="mod_index mod_index--top mod_slide_box">
      <div class="section_inner">
        <div class="index__hd">
          <h2 class="index__tit">
            <i class="index__tit_sprite"></i>
            <i class="icon_txt">排行榜</i>
          </h2>
          <i class="index__line index__line--left"></i>
          <i class="index__line index__line--right"></i>
        </div>
        <!-- <a href="#" class="index__more index__more--white">
          全部
          <i class="icon_index_arrow"></i>
        </a> -->
        <div class="mod_toplist">
          <ul class="toplist__list">
            <li class="toplist__item toplist__item--pop mod_cover" @click="playAlbum(MAINLAND)">
              <div class="toplist__bg"></div>
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play js_play_toplist"></i>
              <i class="toplist__line"></i>
              <h3 class="toplist__hd">
                <a href="#" class="toplist__tit js_toplist">
                  <i class="toplist__tit_top">
                    <i class="icon_txt">巅峰榜</i>
                  </i>
                  <div class="toplist__tit_pop">内地</div>
                </a>
              </h3>
              <ul class="toplist__songlist">
                <li class="toplist__song" v-for="(item,index) in MAINLAND">
                  <div class="toplist__number">{{index+1}}</div>
                  <div class="toplist__songname">
                    <a href="#" class="js_song">{{item.songName}}</a>
                  </div>
                  <div class="toplist__artist">
                    <a href="#" class="js_singers">{{item.singerName}}</a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="toplist__item toplist__item--pop mod_cover" @click="playAlbum(HONG_KONG_TAI_WAN)">
              <div class="toplist__bg" style="background-position: -225px 0"></div>
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play js_play_toplist"></i>
              <i class="toplist__line"></i>
              <h3 class="toplist__hd">
                <a href="#" class="toplist__tit js_toplist">
                  <i class="toplist__tit_top">
                    <i class="icon_txt">巅峰榜</i>
                  </i>
                  <div class="toplist__tit_pop">港澳台</div>
                </a>
              </h3>
              <ul class="toplist__songlist">
                <li class="toplist__song" v-for="(item,index) in HONG_KONG_TAI_WAN">
                  <div class="toplist__number">{{index+1}}</div>
                  <div class="toplist__songname">
                    <a href="#" class="js_song">{{item.songName}}</a>
                  </div>
                  <div class="toplist__artist">
                    <a href="#" class="js_singers">{{item.singerName}}</a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="toplist__item toplist__item--pop mod_cover" @click="playAlbum(JAPAN_KOREA)">
              <div class="toplist__bg" style="background-position: -450px 0"></div>
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play js_play_toplist"></i>
              <i class="toplist__line"></i>
              <h3 class="toplist__hd">
                <a href="#" class="toplist__tit js_toplist">
                  <i class="toplist__tit_top">
                    <i class="icon_txt">巅峰榜</i>
                  </i>
                  <div class="toplist__tit_pop">日韩</div>
                </a>
              </h3>
              <ul class="toplist__songlist">
                <li class="toplist__song" v-for="(item,index) in JAPAN_KOREA">
                  <div class="toplist__number">{{index+1}}</div>
                  <div class="toplist__songname">
                    <a href="#" class="js_song">{{item.songName}}</a>
                  </div>
                  <div class="toplist__artist">
                    <a href="#" class="js_singers">{{item.singerName}}</a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="toplist__item toplist__item--pop mod_cover" @click="playAlbum(EUROPE_AMERICA)">
              <div class="toplist__bg" style="background-position: -670px 0"></div>
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play js_play_toplist"></i>
              <i class="toplist__line"></i>
              <h3 class="toplist__hd">
                <a href="#" class="toplist__tit js_toplist">
                  <i class="toplist__tit_top">
                    <i class="icon_txt">巅峰榜</i>
                  </i>
                  <div class="toplist__tit_pop">欧美</div>
                </a>
              </h3>
              <ul class="toplist__songlist">
                <li class="toplist__song" v-for="(item,index) in EUROPE_AMERICA">
                  <div class="toplist__number">{{index+1}}</div>
                  <div class="toplist__songname">
                    <a href="#" class="js_song">{{item.songName}}</a>
                  </div>
                  <div class="toplist__artist">
                    <a href="#" class="js_singers">{{item.singerName}}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        MAINLAND: [],
        HONG_KONG_TAI_WAN: [],
        JAPAN_KOREA: [],
        EUROPE_AMERICA: [],
        serverUrl: "http://localhost:8080/MusicWeb",
      }
    },
    methods:{
      getData: function(){
        var url_1 = this.serverUrl+'/song/lookUpRankByRegion?flag=0&region=1'
        this.axios.get(url_1).then(res => {
        this.MAINLAND = res.data
        });

        var url_2 = this.serverUrl+'/song/lookUpRankByRegion?flag=0&region=2'
        this.axios.get(url_2).then(res => {
        this.HONG_KONG_TAI_WAN = res.data
        });

        var url_3 = this.serverUrl+'/song/lookUpRankByRegion?flag=0&region=3'
        this.axios.get(url_3).then(res => {
        this.JAPAN_KOREA = res.data
        });

        var url_4 = this.serverUrl+'/song/lookUpRankByRegion?flag=0&region=4'
        this.axios.get(url_4).then(res => {
        this.EUROPE_AMERICA = res.data
        });

        console.log(this.EUROPE_AMERICA)
      },
      playSong: function(item){
        this.$store.state.playList = []
        this.$store.state.playList.push(item)
        this.$store.state.currentIndex = 0
        this.$store.state.currentSong = this.$store.state.playList[this.$store.state.currentIndex]
      },
      playAlbum: function(albums){
        // this.$store.state.playList = []
        this.$store.state.playList = albums
        this.$store.state.currentIndex = 0
        this.$store.state.currentSong = this.$store.state.playList[this.$store.state.currentIndex]
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
@import "./style/toplist.scss";
@import "../public/style/public.scss";
</style>
