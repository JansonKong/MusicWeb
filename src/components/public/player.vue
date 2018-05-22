<template>
  <div class="player">
    <el-row>
      <el-col :span="4">
        <div class="song_control">
          <el-row>
            <el-col :span="10">
              <div class="player_pre_song">
                <i class="fa fa-step-backward fa-2x" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="player_play_song" @click="togglePlay">
                <i :class="playIcon" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="player_next_song">
                <i class="fa fa-step-forward fa-2x" aria-hidden="true"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="song_information">
          <el-row>
            <el-col :span="2">
              <img :src='isNull?"":serverUrl+currentSong.image' height="40" width="40" alt="" class="song_information__pic">
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
        if(this.isNull)
          return
        var totalTime = this.getTime(this.currentSong.duration)
        return this.currentTime / totalTime
      },
      currentSong(){
        return this.$store.state.currentSong
      }
    },
    methods: {
      playSong: function () {
        let audio = this.$refs.audio
        audio.src = this.serverUrl+this.currentSong.url
        audio.play()
        this.isPlaying = true
      },
      end: function () {
        this.playSong()
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
      getTime(time){
        var s = ''
        var min = time.split(':')[0]
        var sec = time.split(':')[1]
        s = Number(min*60) + Number(sec)
        return s
      },
      _getzero (time) {
        if (parseInt(time) < 10) {
          time = `0${time}`
        }
        return time
      },
      onupplay (percent) {
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
      togglePlay () {
        // if (!this.songReady) {
        //   return
        // }
        if (!this.isNull) {
          this.isPlaying = !this.isPlaying
        }
        // if (this.currentLyric) {
        //   this.currentLyric.togglePlay()
        // }
      }
      

    },
    components: {
      'v-progress-bar': progressBar
    },
    watch:{
      isPlaying (newPlaying) {
        // if (!this.songReady) {
        //   return
        // }
        let audio = this.$refs.audio
        this.$nextTick(() => {
          newPlaying ? audio.play() : audio.pause()
        })
      },
      currentSong(newCurrentSong){
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
    height: 60px;
    border-top: 1px solid #ececec;

  }


  .song_control {
    height: 60px;
    background-color: #575757;
  }

  .song_information {
    height: 60px;
    background-color: rgb(255, 255, 255);
    .song_information__pic {
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

</style>
