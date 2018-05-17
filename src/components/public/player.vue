<template>
  <div class="player">
    <div class="mini-player clearfix" >
      <div class="play-config pull-left clearfix">
        <div class="pull-left prev-song">
          <i class="iconfont icon-prev-song"></i>
        </div>
        <div class="pull-left play-song" >
          <i class="iconfont"></i>
        </div>
        <div class="pull-left next-song" >
          <i class="iconfont icon-next-song"></i>
        </div>
        <div class="pull-right play-mode">
          <i class="iconfont"></i>
        </div>
      </div>
      <div class="play-intro clearfix">
        <div class="pull-left thrum" v-lazy:background-image="thrumUrl"></div>
        <div class="pull-left play-music">
          <div class="play-music-intro" v-if="!isNull">
            <span class="song-name">
              哑巴
              <!-- {{ currentSong.songname }} -->
            </span>
            <router-link 
              class="singer-name" 
              <!-- :to="{path: '/singer/' + currentSong.singer[0].mid}" -->
            >
              薛之谦
                <!-- --{{ currentSong.singer[0].name }} -->
            </router-link>
          </div>
          <div class="play-music-intro" v-else>聆听你的心动</div>
          <div class="play-music-time" v-if="!isNull">
            <!-- {{ filterTime(currentTime) }} / {{ filterTime(currentSong.interval) }} -->

          </div>
          <div class="play-music-time" v-else>00:00 / 00:00</div>
          <v-progress-bar @upPlay="onupplay"></v-progress-bar>
        </div>
      </div>
    </div>
    <div 
      class="spread-player"
      v-if="!isNull"
      :class="{'spread-player-up': fullScreen}"
      :style="{height: spreadHeight}"
    >
      <div class="background" :class="background" :style="{'background-image': 'url('+ thrumUrl +')'}"></div>
      <div class="back" @click="fullScreenToggle">
        <i class="iconfont icon-prev"></i>
      </div>
      <!-- <div class="player-content">
        <div class="player-bd">
          <div class="player-mod">
            <div class="mod-thrum" :style="{'background-image': 'url('+ thrumUrl +')'}"></div>
            <div class="name">{{ currentSong.songname }}</div>
            <div class="info">
              <router-link 
                :to="{path: '/singer/' + currentSong.singer[0].mid}"
              >
                歌手: {{ currentSong.singer[0].name }}
              </router-link>
              <router-link :to="{path: '/album/detail/' + currentSong.albumid}">专辑: {{ currentSong.albumname }}</router-link>
            </div>
            <div class="lyric-wrap" v-if="currentLyric">
              <div class="lyric-box" v-iscroll="getIscroll">
                <div 
                  class="lyric-info" 
                  ref="lyricInfo" 
                  v-if="currentLyric.lines.length > 0">
                  <p 
                    v-for="(item, index) in currentLyric.lines"
                    :key="index"
                    ref="line" 
                    :class="{on: currentLineNum === index}"
                    v-html="item.txt"
                  >
                  </p>
                </div>
                <div class="lyric-info lyric-default" ref="lyricInfo" v-else>
                  此歌曲为没有填词的纯音乐
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>-->
    </div>
    <audio 
      ref="audio" 
      <!-- @canplay="ready" 
      @error="error" 
      @timeupdate="timeupdate"
      @ended="end" -->
    ></audio>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/scss/variable';
  @import '~@/assets/scss/mixin';
  @import './style/player.scss';
</style>

