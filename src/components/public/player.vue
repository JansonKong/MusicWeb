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
              <div class="player_play_song" @click="playSong">
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
              <img :src='songPlayNow.src' height="40" width="40" alt="" class="song_information__pic">
            </el-col>
            <el-col :span="16">
              <el-row class="song_information_top">
                <el-col :span="1">
                  <div class="song_information_songName">{{songPlayNow.songName}}</div>
                </el-col>
                <el-col :span="19">
                  <div class="song_information_singer">
                    {{songPlayNow.singer}}
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="song_information_singer">
                    {{'00:00/'+songPlayNow.songTime}}
                  </div>
                </el-col>
              </el-row>
              <div>
                <h5>1234</h5>
                <!-- <v-progress-bar>123</v-progress-bar> -->
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <audio 
      ref="audio" 
      @ended="end"
    ></audio>
  </div>
</template>

<script>
import progressBar from "./progress-bar";
export default {
  data() {
    return{
      spreadHeight: 0,
      songReady: false,
      currentTime: 0,
      currentLyric: null,
      currentLineNum: 0,
      currentLineOffsetY: 0,
      currentSong:{
        songID:1,
        songName: 'Welcome To New York',
        albumID: 1,
        singerID: 1,
        playCount: 0,
        lyrics: 'Welcome To New York.txt',
        duration: '03:32',
        image: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeuUneZQTUL489DXnNEkpG9Ltz39j6dBOsfw/300?n=1',
        language: '英语',
        url: 'http://dl.stream.qqmusic.qq.com/C400004buG7e02hMar.m4a?vkey=F56E40D11503A036CE1579788228913477197E27CE80EE8B520062B333A77744CF64FEDBE14DF8C0075E6A865EEAA6297F0897177626E83B&guid=2575115234&uin=995710545&fromtag=66',
        albumName: '1989',
        singerName: 'Taylor Swift'
      }
    }
  },
  computed: {
    songPlayNow() {
      return this.$store.state.songPlayNow
    },
    playIcon () {
      return !this.$store.state.playing ? 'fa fa-play fa-2x' : 'fa fa-pause fa-2x'
    },
  },
  methods:{
    playSong: function(){
      let audio = this.$refs.audio
      audio.src="http://dl.stream.qqmusic.qq.com/C400004buG7e02hMar.m4a?vkey=F56E40D11503A036CE1579788228913477197E27CE80EE8B520062B333A77744CF64FEDBE14DF8C0075E6A865EEAA6297F0897177626E83B&guid=2575115234&uin=995710545&fromtag=66"
      if(!this.$store.state.playing)
        audio.play() 
      else
        audio.pause()
      this.$store.state.playing = !this.$store.state.playing
    },
    end: function(){
      this.playSong
    }
  },
  components:{
    'v-progress-bar': progressBar
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
  

  .song_control{
    height: 60px;
    background-color:#575757;
  }

  .song_information{
    height: 60px;
    background-color: rgb(255, 255, 255);
    .song_information__pic{
      padding-top: 10px;
      padding-left: 40px;
    }
    .song_information_top{
      padding-top:10px; 
    }
  }

  .player_pre_song{
    cursor: pointer;
    padding-top: 15px;
    padding-left: 40px;
    .fa-step-backward{
      color: #cecccc;
    }
  }

  .player_pre_song:hover{
    cursor: pointer;
    padding-top: 15px;
    padding-left: 40px;
    .fa-step-backward{
      color: #ffffff;
    }
  }

  .player_play_song{
    cursor: pointer;
    padding-top: 15px;
    // padding-left: 20px;
    .fa-play{
      color: #cecccc;
    }
    .fa-pause{
      color: #cecccc;
    }
  }

  .player_play_song:hover{
    cursor: pointer;
    padding-top: 15px;
    // padding-left: 20px;
    .fa-play{
      color: #ffffff;
    }
    .fa-pause{
      color: #ffffff;
    }
  }

  .player_next_song{
    cursor: pointer;
    padding-top: 15px;
    padding-left: 20px;
    .fa-step-forward{
      color: #cecccc;
    }
  }

  .player_next_song:hover{
    cursor: pointer;
    padding-top: 15px;
    padding-left: 20px;
    .fa-step-forward{
      color: #ffffff;
    }
  }
</style>

