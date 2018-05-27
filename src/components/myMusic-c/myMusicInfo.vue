<template>
	<div class="mod_profile_myMusic">
		<div class="section_inner ">
     <div class="bg">

      <img class="icon" src="https://p.qpic.cn/music_cover/Q5MtyhqyicZRIFMHk9v3tflKkLNRVG0opUMd0rm0Oe6U3iam0Es6pd3Q/300?n=1" />


      <ul id="select" class="tag" >
        <li class="like" id="music" @click="myMusic">音乐</li>
        <li class="like" id="album" @click="myAlbum">专辑</li>
      </ul>
    </div>
    
    <div class="display" v-show="musicShow">

     <div class="songlist__header">
      <el-row>
        <el-col :span="12">
          <div class="">歌曲</div>
        </el-col>
        <el-col :span="4">
          <div class="songlist__header_author">歌手</div>
        </el-col>
        <el-col :span="6">
          <div class="songlist__header_author">专辑</div>
        </el-col>
        <el-col :span="2">
          <div class="songlist__header_time">时长</div>
        </el-col>
      </el-row>
    </div>
    <ul class="songlist__list" >
      <li v-for="music in musicList" @click="playSong(music)">
       <div class="song_item_box">
         <el-row>

          <el-col :span="8">
            <span class="songName">{{music.songName}}</span>
          </el-col>
          <el-col :span="4">
            <div class="song_menu">
              <div class="play_song">
                <i class="fa fa-play fa-lg" aria-hidden="true"></i>
              </div>
              <div class="add_song">
                <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
              </div>
            </div>
          </el-col>

          <el-col :span="4">
            <span class="singerName">{{music.singerName}}</span>
          </el-col>

          <el-col :span="6">
            <span class="albumName">{{music.albumName}}</span>
          </el-col>
          <el-col :span="2">
            <span class="time">{{music.duration}}</span>
          </el-col>
        </el-row>
      </div>
    </li>

  </ul>

</div>
 <div class="display" v-show="albumShow">

     <div class="songlist__header">
      <el-row>
        <el-col :span="16">
          <div class="">专辑</div>
        </el-col>
    
        <el-col :span="6">
          <div class="songlist__header_author">歌手</div>
        </el-col>
        <el-col :span="2">
          <div class="songlist__header_time">发行时间</div>
        </el-col>
      </el-row>
    </div>
    <ul class="songlist__list" >
      <li v-for="album in albumList" @click="playSong(music)">
       <div class="song_item_box">
         <el-row>
          <el-col :span="2">
            <img :src='album.image' height="50" width="50" alt="" class="playlist__pic">
          </el-col>

          <el-col :span="8">
            <span class="songName">{{album.albumName}}</span>
          </el-col>
          <el-col :span="6">
            <div class="song_menu">
              <div class="play_song">
                <i class="fa fa-play fa-lg" aria-hidden="true"></i>
              </div>
              <div class="add_song">
                <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
              </div>
            </div>
          </el-col>

         
         

          <el-col :span="6">
            <span class="albumName">{{album.singerName}}</span>
          </el-col>
          <el-col :span="2">
            <span class="releaseTime">{{album.releaseTime}}</span>

          </el-col>
        </el-row>
      </div>
    </li>

  </ul>

</div>


</div>
</div>

</template>
<script>
export default{
  data(){
    return{
     select:1,
     musicShow:true,
     albumShow:false,
     musicList:[{}],
     albumList:[{}]
   }
 },
 mounted(){
   this.myMusic();
 },
 methods:{
  timestampToTime: function(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate();
        return Y+M+D;
      },

      myMusic:function(){
        this.musicShow=true;
         this.albumShow=false;
       var a=document.getElementById("music");
   
       a.className="click-current";
       var b=document.getElementById("album");
       b.className="like";
       this.axios.get('http://localhost:8080/MusicWeb/user/getInterestedSongs', {
        params: {
           //userId: 
           userID:this.$store.state.user.userId
         }
       })
       .then(res => {
        this.musicList = res.data;
        for(var i=0;i<res.data.length;i++) {
         this.musicList[i].time=this.timestampToTime(this.musicList[i].time);
       }
       // console.log(res.data);
     });
     },
     myAlbum:function(){

        this.musicShow=false;
        this.albumShow=true;
       var a=document.getElementById("album");
       a.className="click-current";
       var b=document.getElementById("music");
       b.className="like";
       this.axios.get('http://localhost:8080/MusicWeb/user/getInterestedAlbums', {
        params: {
           //userId: 
           userID:this.$store.state.user.userId

         }
       })
       .then(res => {
        this.albumList = res.data;
        for(var i=0;i<res.data.length;i++) {
         this.albumList[i].releaseTime=this.timestampToTime(this.albumList[i].releaseTime);
       this.albumList[i].image = 'http://localhost:8080/MusicWeb' + this.albumList[i].image;
       } 
        // console.log(this.albumList);
     });
     },
     playSong: function(item){
      this.$store.state.currentSong = item
    }

  }
}
</script>


<style>
.songName{
 display:block; float:left;
}
.singerName{
  float:left; display:block; 
}
.albumName{
   display:block; float:left;
}
.time{
  display:block; float:left;
}
.like { 
 margin-left:10px ;
 margin-right: 10px; 
 display: inline;
 font-size: 120%;
 
 margin-top: 120px;
 font-family:"微软雅黑",sans-serif; 
 color: rgba(255,255,255,1);


}
.click-current{
 margin-left:10px ;
 margin-right: 10px; 
 display: inline;
 font-size: 120%;
 
 margin-top: 120px;
 font-family:"微软雅黑",sans-serif; 

 color: #31c27c;
}
@media screen and (max-height: 1000px) {
  .mod_profile_myMusic {
    height: 1500px;
    background-color: rgba(250, 250, 250, 1.0);
    overflow: hidden;
  }
  .bg{
  	background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg) 50% no-repeat;
  	height: 400px; 
    background-size: cover;
  }
}
.tag{
  margin-top: 120px;
  width: 200px;
  
}
.like:hover {
  color: #31c27c;
  cursor: pointer;

}
.icon{
  margin-top: 80px;
  height:150px;
  width:150px;
  border-radius:150px
}

.title{
  float:left;
  height:50px;
  font-size:100%;
  background-color:rgba(240,240,240,1);

}

.display {
  width:90%;float:left;

  margin-top:2%;
  margin-left:5%;

}
.songlist__header {
  height: 50px;
  line-height: 50px;
  background-color: #f6f6f6;
  color: #999;
  text-align:left;
  padding-left:10px;

}
.song_item_box {
 padding-left:10px;
 text-align:left;

}
.songlist__list {
  position: relative;
  li {
    height: 50px;
    line-height: 50px;
    &:nth-child(even) {
      background-color: #cdcdcd;
      box-shadow: 0 1.5px 2px rgba(0, 0, 0, .4);
    }
  }
  .mod_list_menu {
    position: absolute;
    top: 0;
    right: 10%;
    .song_play,.song_download {
      width: 36px;
      height: 36px;
      display: block;
      float: left;
      margin-top: 7px;
      margin-left: 5px;
      background: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_list_menu.png?max_age=2592000&v=4566a1a62ecad72fe9b9205d1ad62d2b) no-repeat;
    }
    .song_play:hover {
      background-position: -40px 0;
      transform: scale(1.2);
    }
    .song_download {
      background-position: 0 -120px;
    }
    .song_download:hover {
      background-position: -40px -120px;
    }
  }
  .songNum {
    top: 0;
    float: left;
    text-align: center;
    left: 10px;
    color: #999;
    width: 45px;
  }
  .songName {
    width: 44.5%;
    float: left;
    height: 50px;
    position: relative;
    p{
      float: left;
      &:hover {
        color: #2eb674;
        cursor: pointer;
      }
    }
  }
  .songAlbum {
    float: left;
  }
  .songTime {
    font-size: 14px;
    float: right;
    margin-right: 114px;
    color: #999;
  }
}

</style>