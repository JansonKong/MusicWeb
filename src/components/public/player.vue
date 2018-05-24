<template>
  <div class="player">
    <el-row class="player_control">
      <el-col :span="4">
        <div class="song_control">
          <el-row>
            <el-col :span="10">
              <div class="player_pre_song" >
                <i class="fa fa-step-backward fa-2x" aria-hidden="true" @click="preSong"></i>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="player_play_song" @click="togglePlay">
                <i :class="playIcon" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="player_next_song" >
                <i class="fa fa-step-forward fa-2x" aria-hidden="true" @click="nextSong"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="song_information">
          <el-row>
            <el-col :span="2">
              <img :src='isNull?"":serverUrl+currentSong.image' height="40" width="40" alt="" class="song_information__pic" @click="fullScreenToggle">
            </el-col>
            <el-col :span="16">
              <el-row class="song_information_top">
                <el-col :span="6">
                  <div class="song_information_songName">{{isNull?'--':currentSong.songName}}</div>
                </el-col>
                <el-col :span="14">
                  <div class="song_information_singer">
                    {{isNull?'--':currentSong.singerName}}
                  </div>
                </el-col>
                <el-col :span="4">
                  <!-- <div class="song_information_singer">
                    {{'00:00/'+songPlayNow.songTime}}
                  </div> -->
                  <div class="play-music-time" v-if="!isNull">{{ filterTime(currentTime) }} / {{ currentSong.duration}}</div>
                  <div class="play-music-time" v-else>00:00 / 00:00</div>
                </el-col>
              </el-row>
              <div>
                <v-progress-bar :percent="percent" @upPlay="onupplay"></v-progress-bar>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="spread-player" v-if="!isNull" :class="{'spread-player-up': fullScreen}" :style="{height: spreadHeight}">
      <div class="background" :class="background" :style="{'background-image': 'url('+ serverUrl+currentSong.image +')'}"></div>
      <div class="back" @click="fullScreenToggle">
        <i class="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
      </div>

      <div class="player-content">
        <el-row>
          <el-col :span="12" class="back_pic">
            <img class="back_pic_image" :src='serverUrl+currentSong.image'>
          </el-col>
          <el-col :span="12" class="back_infor">
            <div class="back_songName">
              {{currentSong.songName}}
            </div>
            <div class="info">
              <router-link to="">歌手：{{currentSong.singerName}}</router-link>
              <router-link to="">专辑：{{currentSong.albumName}}</router-link>
            </div>
            <!-- <div class="back_singer">
              {{currentSong.singerName}}
            </div> -->
            <div class="back_lyrics">
              <div class="content">
                <!-- <pre>
                  {{ serverUrl+currentSong.lyrics }}
                </pre> -->
                <iframe name="show" id="show" width="300" height="500" content="text/html; charset=utf-8" :src='serverUrl+currentSong.lyrics'/>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <audio ref="audio" @ended="end" @timeupdate="timeupdate"></audio>
  </div>
</template>

<script>
  import progressBar from "./progress-bar";
  export default {
    data() {
      return {
        isNull: true,
        isPlaying: false,
        spreadHeight: 0,
        songReady: false,
        currentTime: 0,
        currentLyric: null,
        currentLineNum: 0,
        currentLineOffsetY: 0,
        serverUrl: 'http://localhost:8080/MusicWeb'
      }
    },
    computed: {
      songPlayNow() {
        return this.$store.state.songPlayNow
      },
      playIcon() {
        return !this.isPlaying ? 'fa fa-play fa-2x' : 'fa fa-pause fa-2x'
      },
      percent() {
        if (this.isNull)
          return
        var totalTime = this.getTime(this.currentSong.duration)
        return this.currentTime / totalTime
      },
      currentSong() {
        return this.$store.state.currentSong
      },
      fullScreen() {
        console.log(this.$store.state.fullScreen)
        return this.$store.state.fullScreen
      },
      background() {
        return this.fullScreen ? 'spread-bg' : ''
      },
    },
    methods: {
      preSong: function(){
        if(this.$store.state.currentIndex > 0){
          this.$store.state.currentIndex = this.$store.state.currentIndex - 1
          this.$store.state.currentSong = this.$store.state.playList[this.$store.state.currentIndex]
        }
      },
      ///********** */
      nextSong: function(){
        if(this.$store.state.currentIndex < this.$store.state.playList.length){
          this.$store.state.currentIndex = this.$store.state.currentIndex + 1
          this.$store.state.currentSong = this.$store.state.playList[this.$store.state.currentIndex]
        }
        else
          this.togglePlay()
      },
      playSong: function () {
        let audio = this.$refs.audio
        audio.src = this.serverUrl + this.currentSong.url
        audio.play()
        this.isPlaying = true
      },
      end: function () {
        this.togglePlay()
      },
      timeupdate(e) {
        this.currentTime = e.target.currentTime
      },
      filterTime(time) {
        time = time | 0
        let minute = this._getzero(time / 60 | 0)
        let second = this._getzero(time % 60)
        return `${minute}:${second}`
      },
      getTime(time) {
        var s = ''
        var min = time.split(':')[0]
        var sec = time.split(':')[1]
        s = Number(min * 60) + Number(sec)
        return s
      },
      _getzero(time) {
        if (parseInt(time) < 10) {
          time = `0${time}`
        }
        return time
      },
      onupplay(percent) {
        var totalTime = this.getTime(this.currentSong.duration)
        let currentTime = percent * totalTime
        this.currentTime = this.$refs.audio.currentTime = currentTime
        // if (!this.playing) {
        //   this.togglePlay()
        // }
        // if (this.currentLyric) {
        //   this.currentLyric.seek(currentTime * 1000)
        // }
      },
      togglePlay() {
        // if (!this.songReady) {
        //   return
        // }
        if (!this.isNull) {
          this.isPlaying = !this.isPlaying
        }
        // if (this.currentLyric) {
        //   this.currentLyric.togglePlay()
        // }
      },
      fullScreenToggle() {
        console.log(this.isNull)
        this.spreadHeight = (document.body.clientHeight) + 'px'
        if (!this.isNull) {
          this.$store.state.fullScreen = !this.$store.state.fullScreen
        }
      }


    },
    components: {
      'v-progress-bar': progressBar
    },
    created() {
      // console.log('created')
      this.spreadHeight = (document.body.clientHeight) + 'px'
      console.log(this.spreadHeight)
      window.addEventListener('resize', () => {
        this.spreadHeight = (document.body.clientHeight) + 'px'
        console.log(this.spreadHeight)
      })
    },
    watch: {
      isPlaying(newPlaying) {
        // if (!this.songReady) {
        //   return
        // }
        let audio = this.$refs.audio
        this.$nextTick(() => {
          newPlaying ? audio.play() : audio.pause()
        })
      },
      currentSong(newCurrentSong) {
        this.fullScreenToggle()
        this.fullScreenToggle()
        this.isNull = false
        this.togglePlay()
        // let audio = this.$refs.audio
        // audio.play()
        this.playSong()
      }
    }
  }

</script>

<style lang="scss" scoped>
  // @import '~@/assets/scss/variable';
  // @import '~@/assets/scss/mixin';
  // @import './style/player.scss';
  .player {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60px; // z-index: 25;
    border-top: 1px solid #ececec;

  }

  .player_control {
    z-index: 30;
  }

  .spread-player {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0px;
    z-index: 23;
    width: 100%;
    margin: 0 auto;
    transition: all .3s ease-out;
    transform: translateY(100%);
    background-color: black;
    color: white;
    &.spread-player-up {
      transform: translateY(0);
    }
  }


  .song_control {
    height: 60px;
    background-color: #575757;
  }

  .song_information {
    height: 60px;
    background-color: rgb(255, 255, 255);
    .song_information__pic {
      cursor: pointer;
      padding-top: 10px;
      padding-left: 40px;
    }
    .song_information_top {
      padding-top: 10px;
      height: 30px;
    }
  }

  .player_pre_song {
    cursor: pointer;
    padding-top: 15px;
    padding-left: 40px;
    .fa-step-backward {
      color: #cecccc;
    }
  }

  .player_pre_song:hover {
    cursor: pointer;
    padding-top: 15px;
    padding-left: 40px;
    .fa-step-backward {
      color: #ffffff;
    }
  }

  .player_play_song {
    cursor: pointer;
    padding-top: 15px; // padding-left: 20px;
    .fa-play {
      color: #cecccc;
    }
    .fa-pause {
      color: #cecccc;
    }
  }

  .player_play_song:hover {
    cursor: pointer;
    padding-top: 15px; // padding-left: 20px;
    .fa-play {
      color: #ffffff;
    }
    .fa-pause {
      color: #ffffff;
    }
  }

  .player_next_song {
    cursor: pointer;
    padding-top: 15px;
    padding-left: 20px;
    .fa-step-forward {
      color: #cecccc;
    }
  }

  .player_next_song:hover {
    cursor: pointer;
    padding-top: 15px;
    padding-left: 20px;
    .fa-step-forward {
      color: #ffffff;
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    filter: blur(65px);
    opacity: .6;
    &.spread-bg {
      background-size: cover;
    }
  }

  .back {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 50;
    padding: 50px; // transform: rotate(-90deg);
    cursor: pointer;
    color: white;
    &:hover {
      color: aquamarine;
    }
  }

  .back_pic_image {
    // position: absolute;
    height: 250px;
    width: 250px;
    padding-top: 200px;
    padding-left: 250px;
  }

  .back_infor {
    padding-top: 100px;
  }

  .back_songName {
    height: 24px;
    font-size: 24px;
    color: white;
  }

  .info {
    margin-top: 30px;
    a {
      display: inline-block;
      margin-left: 20px;
      max-width: 40%;
      height: 20px; // @include text-overflow;
      text-decoration: none;
      transition: all .18s ease-out;
      font-size: 20px;
      color: rgba(255, 255, 255, .4);
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: white;
      }
    }
  }

  .back_lyrics {
    // background-color: #575757;
    height: 500px;
    width: 400px;
  }

</style>
