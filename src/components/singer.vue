<template>
  <div>
    <v-nav></v-nav>
    <div class="main">
      <div class="singer-nav">
        <table id="singer-nav-table">
          <tr>
            <td><span class="cl">地区</span></td>
            <td>
              <ul id ="region" class="singer-nav-tag" >
                <li @click="region_change_bg(0);singerDisplay(1,'!',1)" class="current">内地</li>
                <li @click="region_change_bg(1);singerDisplay(2,1)">港台</li>
                <li @click="region_change_bg(2);singerDisplay(3,0,1)">日韩</li>
                <li @click="region_change_bg(3);singerDisplay(4,0,1)">欧美</li>
                <li @click="region_change_bg(4);singerDisplay(5,0,1)">其他</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><span class="cl long">首字母</span></td>
            <td>
              <ul class="singer-nav-tag" id="initial">
                <li @click="initial_change_bg(0);singerDisplay(0,'@',1)" class="current long">全部</li>
                <li @click="initial_change_bg(1);singerDisplay(0,2,1)">A</li>
                <li @click="initial_change_bg(2);singerDisplay(0,3,1)">B</li>
                <li @click="initial_change_bg(3);singerDisplay(0,4,1)">C</li>
                <li @click="initial_change_bg(4);singerDisplay(0,5,1)">D</li>
                <li @click="initial_change_bg(5);singerDisplay(0,6,1)">E</li>
                <li @click="initial_change_bg(6);singerDisplay(0,7,1)">F</li>
                <li @click="initial_change_bg(7);singerDisplay(0,8,1)">G</li>
                <li @click="initial_change_bg(8);singerDisplay(0,9,1)">H</li>
                <li @click="initial_change_bg(9);singerDisplay(0,9,1)">I</li>
                <li @click="initial_change_bg(10);singerDisplay(0,9,1)">J</li>
                <li @click="initial_change_bg(11);singerDisplay(0,9,1)">K</li>
                <li @click="initial_change_bg(12);singerDisplay(0,9,1)">L</li>
                <li @click="initial_change_bg(13);singerDisplay(0,9,1)">M</li>
                <li @click="initial_change_bg(14);singerDisplay(0,9,1)">N</li>
                <li @click="initial_change_bg(15);singerDisplay(0,9,1)">O</li>
                <li @click="initial_change_bg(16);singerDisplay(0,9,1)">P</li>
                <li @click="initial_change_bg(17);singerDisplay(0,9,1)">Q</li>
                <li @click="initial_change_bg(18);singerDisplay(0,9,1)">R</li>
                <li @click="initial_change_bg(19);singerDisplay(0,9,1)">S</li>
                <li @click="initial_change_bg(20);singerDisplay(0,9,1)">T</li>
                <li @click="initial_change_bg(21);singerDisplay(0,9,1)">U</li>
                <li @click="initial_change_bg(22);singerDisplay(0,9,1)">V</li>
                <li @click="initial_change_bg(23);singerDisplay(0,9,1)">W</li>
                <li @click="initial_change_bg(24);singerDisplay(0,9,1)">X</li>
                <li @click="initial_change_bg(25);singerDisplay(0,9,1)">Y</li>
                <li @click="initial_change_bg(26);singerDisplay(0,9,1)">Z</li>
                <li @click="initial_change_bg(27);singerDisplay(0,9,1)">#</li>

              </ul>
            </td>
          </tr>
        </table>
      </div>


      <ul id="singerlist">
        <li v-for="item in singers" class="singerli">
          <div class="singer">
            <img :src="item.image" alt="">
            <p>{{item.singerName}}</p>
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
        initial: '@',
        page: 1,
        pageCount: 5,
        singers: [{
        }]
      }
    },
    components: {
      "v-nav": nav
    },
    mounted() {
      this.$store.commit('changeTagIndex', 2);
      this.singerDisplay(1,'@',1);

    },
    methods: {
      handleCurrentChange: function(val){
        this.singerDisplay(0,0,val);
      },

      singerDisplay: function(_region, _initial, _page){
        if(_page != this.page){
          _region = this.region;
          _initial = this.initial;
          this.page = _page;
        } else if(_initial != "!"){
          _region = this.region;
          this.initial = _initial;
          _page = this.page;
        } else {
          _initial = this.initial;
          this.region = _region;
          _page = this.page
        }
        this.axios.get('http://localhost:8080/MusicWeb/singer/lookUpSingersByRegion', {
          params: {
            region: _region,
            initial: _initial,
            page: _page
          }
        })
        .then(res => {
          this.singers = res.data
          for(var i = 0; i < res.data.length; i++){
            this.singers[i].image = 'http://localhost:8080/MusicWeb' + this.singers[i].image;
          }
          
          console.log(this.singers)

            this.axios.get('http://localhost:8080/MusicWeb/singer/getSingerPageCount', {
              params: {
                region: _region,
                initial: _initial,
              }
            })
            .then(res => {
              this.pageCount = res.data
              
              console.log(this.singers)
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

      initial_change_bg: function(obj){
        var a=document.getElementById("initial").getElementsByTagName("li");
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
  height: 750px;
  opacity: 0.95;
  position: relative;
  color: #333;
  ul {
    margin: 0 auto;
    height: 100%;
    max-width: 1200px;
  }
  .singer-nav {
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

    .singer-nav-tag {
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
        width: 15px;
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
      .long{
        width: 50px;
      }


    }
    .long{
      width: 50px;
    }
    #region li{
      width: 50px;
    }
  }

  #singerlist{
    height: 620px;

    .singerli {
    text-align: top;
    float: left;
    width: 20%;
    height: 300px;
    .singer {
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
  }

}




</style>
