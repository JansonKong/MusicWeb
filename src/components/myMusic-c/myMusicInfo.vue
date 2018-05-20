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
    
  <!--   <div class="display">
          <ul class="title">
            <li class="">
              <span>歌名</span>
              <span>歌手</span>
              <span>专辑</span>
              <span>时长</span>
            </li>
            <li v-for="music in misicList" class="">
              <span>{{musicList.name}}</span>
              <span>{{musicList.singer}}</span>
              <span>{{musicList.album}}</span>
              <span>{{musicList.time}}</span>
            </li>
        
          </ul>
       
    </div> -->
  </div>
	</div>

</template>
<script>
	export default{
    data(){
      return{
         select:1,
         musicList:[{}],
      }
    },
    mounted(){

    },
    methods:{
      myMusic:function(){
           this.axios.get('http://localhost:8080/MusicWeb/user/getInterestedSongs', {
          params: {
           //userId: this.$store.state.user.userId
           userId:'1@qq.com'
          }
        })
        .then(res => {
          this.musicList = res.data;
         conole.log(musicList)
      });
    },
      myAlbum:function(){

      }
    }
  }
</script>


<style>

.like { 
   margin-left:10px ;
   margin-right: 10px; 
   display: inline;
  font-size: 120%;
 
   margin-top: 120px;
   font-family:"微软雅黑",sans-serif; 
   color: rgba(255,255,255,1);

  
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
  text-align: center;
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
       
      text-align: center;
     height:100px;
    font-size:100%;
     background-color:rgba(230,230,230,1);

  }

  .display {
    height:500px;
    margin-top:10%;
    margin-left:10%;
    margin-right:10%;
    margin-bottom:10%;
  }
</style>