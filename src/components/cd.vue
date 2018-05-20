<template>
  <div>
    <v-nav></v-nav>
    <div class="main">
      <div class="album-nav">
        <table id="album-nav-table">
          <tr>
            <td><span class="cl">地区</span></td>
            <td>
              <ul id ="region" class="album-nav-tag" >
                <li @click="region_change_bg(0);albumDisplay(1,0,1)" class="current">内地</li>
                <li @click="region_change_bg(1);albumDisplay(2,0,1)">港台</li>
                <li @click="region_change_bg(2);albumDisplay(3,0,1)">日韩</li>
                <li @click="region_change_bg(3);albumDisplay(4,0,1)">欧美</li>
                <li @click="region_change_bg(4);albumDisplay(5,0,1)">其他</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><span class="cl">流派</span></td>
            <td>
              <ul class="album-nav-tag" id="style">
                <li @click="style_change_bg(0);albumDisplay(0,1,1)" class="current">流行</li>
                <li @click="style_change_bg(1);albumDisplay(0,2,1)">摇滚</li>
                <li @click="style_change_bg(2);albumDisplay(0,3,1)">民谣</li>
                <li @click="style_change_bg(3);albumDisplay(0,4,1)">电子</li>
                <li @click="style_change_bg(4);albumDisplay(0,5,1)">轻音乐</li>
                <li @click="style_change_bg(5);albumDisplay(0,6,1)">RAP</li>
                <li @click="style_change_bg(6);albumDisplay(0,7,1)">乡村</li>
                <li @click="style_change_bg(7);albumDisplay(0,8,1)">舞曲</li>
                <li @click="style_change_bg(8);albumDisplay(0,9,1)">其他</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>


      <ul id="albumlist">
        <li v-for="item in albums" class="albumli">
          <div class="album">
            <img :src="item.image" alt="">
            <p>{{item.albumName}}</p>
            <p>{{item.singerName}}</p>
            <p>{{item.releaseTime}}</p>
          </div>
        </li>
      </ul>

      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-count="pageCount" class="pagination">
      </el-pagination>

    </div>
  </div>
</template>

<script>
  import nav from "./public/navigation.vue";    
  export default {
    data() {
      return{
        region: 1,
        style: 1,
        page: 1,
        pageCount: 5,
        albums: [{
        }]
      }
    },
    components: {
      "v-nav": nav
    },
    mounted() {
      this.$store.commit('changeTagIndex', 3);
      this.albumDisplay(1,1,1);

    },
    methods: {
      handleCurrentChange: function(val){
        this.albumDisplay(0,0,val);
      },

      timestampToTime: function(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate();
        return Y+M+D;
      },

      albumDisplay: function(_region, _style, _page){
        if(_page != this.page){
          _region = this.region;
          _style = this.style;
          this.page = _page;
        } else if(_style != 0){
          _region = this.region;
          this.style = _style;
          _page = this.page;
        } else {
          _style = this.style;
          this.region = _region;
          _page = this.page
        }
        this.axios.get('http://localhost:8080/MusicWeb/album/lookUpAlbumsByCatagory', {
          params: {
            region: _region,
            style: _style,
            page: _page
          }
        })
        .then(res => {
          this.albums = res.data
          for(var i = 0; i < res.data.length; i++){
            this.albums[i].image = 'http://localhost:8080/MusicWeb' + this.albums[i].image;
            this.albums[i].releaseTime = this.timestampToTime(this.albums[i].releaseTime);
          }
          
          console.log(this.albums)

            this.axios.get('http://localhost:8080/MusicWeb/album/getAlbumPageCount', {
              params: {
                region: _region,
                style: _style,
              }
            })
            .then(res => {
              this.pageCount = res.data
              
              console.log(this.albums)
            })
            .catch(function (error) {
              console.log(error);
            });

        })
        .catch(function (error) {
          console.log(error);
        });
      },

      region_change_bg: function(obj){
        var a=document.getElementById("region").getElementsByTagName("li");
        a[1].className="current";
        for(var i=0;i<a.length;i++){
          if(i == obj){
            a[i].className="current";
          }
          else{
            a[i].className="";
          }
        }
      },

      style_change_bg: function(obj){
        var a=document.getElementById("style").getElementsByTagName("li");
        for(var i=0;i<a.length;i++){
          if(i == obj){
            a[i].className="current";
          }
          else{
            a[i].className="";
          }
        }
        
      }
      
    }
  }
</script>

<style lang="scss" scoped>
.main {
  padding-top: 30px;
  height: 800px;
  opacity: 0.95;
  position: relative;
  color: #333;
  ul {
    margin: 0 auto;
    height: 100%;
    max-width: 1200px;
  }
  .album-nav {
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    padding: 0px 0;


    .cl{
      font-weight:bold;
      margin-left: 30px;
      margin-top: 0px;
      font-size: 15px;
      float: left;
      line-height: 35px;
    }

    .album-nav-tag {
      display: inline;
      height: 50px;
      margin: 100px 20px;
      text-align: center;
      .current {
        color: #fff;
        background-color: #31c27c;
        &:hover {
          color: #fff;
        }
      }

      li {
        width: 50px;
        height: 30px;
        margin-left: 20px;
        margin-top: 0px;
        font-size: 15px;
        float: left;
        line-height: 30px;
        &:hover {
          color: #31c27c;
          cursor: pointer;
        }
      }
    }
  }

  #albumlist{
    height: 680px;

    .albumli {
    text-align: top;
    float: left;
    width: 20%;
    height: 300px;
    .album {
      background-color: #f6f6f6;
      height: 210px;
      width: 210px;
      margin-left: 12px;
    }
    img {
      width: 210px;
      height: 210px;
      margin-top: 20px;
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }
    p {
      margin-top: 1px;
      &:hover {
        cursor: pointer;
        color: #31c27c;
      }
    }
  }
  }

  

  .pagination {
    text-align: center;
    font-size: 20px;
  }

}




</style>
