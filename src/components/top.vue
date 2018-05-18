<template>
  <div>
    <v-nav></v-nav>
    <div class="main">
      <div class="top">
        <div class="toplist_nav">
          <dl class="toplist_nav__list">
            <dt class="toplist_nav__tit">F5音乐巅峰榜</dt>

            <dd class="toplist_nav__item">
              <a href="javascript:;" class="toplist_nav__link">巅峰榜&#183;热歌</a>
            </dd>

            <dd class="toplist_nav__item">
              <a href="javascript:;" class="toplist_nav__link">巅峰榜&#183;内地</a>
            </dd>

            <dd class="toplist_nav__item">
              <a href="javascript:;" class="toplist_nav__link">巅峰榜&#183;港台</a>
            </dd>

            <dd class="toplist_nav__item">
              <a href="javascript:;" class="toplist_nav__link">巅峰榜&#183;欧美</a>
            </dd>

            <dd class="toplist_nav__item">
              <a href="javascript:;" class="toplist_nav__link">巅峰榜&#183;日韩</a>
            </dd>

          </dl>
        </div>

        <div class="mod_toplist">
          <div class="toplist__hd">
            <h1 class="toplist__tit">巅峰榜&#183;热歌</h1>
          </div>

          <div class="mod_songlist">
            <div class="songlist__header">
              <el-row>
                <el-col :span="18">
                  <div class="songlist__header_name">歌曲</div>
                </el-col>
                <el-col :span="4">
                  <div class="songlist__header_author">歌手</div>
                </el-col>
                <el-col :span="2">
                  <div class="songlist__header_time">时长</div>
                </el-col>
              </el-row>
            </div>

            <ul class="songlist__list">
              <li class="song_item" v-for="(item,index) in songList">
                <div class="song_item_box">
                  <el-row>
                    <el-col :span="2">
                      <div class="song_number">{{index+1}}</div>
                    </el-col>
                    <el-col :span="16">
                      <el-row>
                        <el-col :span="4">
                          <img :src='item.src' height="70" width="70" alt="" class="playlist__pic">
                        </el-col>
                        <el-col :span="10">
                          <h4>{{item.songName}}</h4>
                        </el-col>
                        <el-col :span="10">
                          <div class="song_menu">
                            <div class="play_song">
                              <i class="fa fa-play fa-lg" aria-hidden="true"></i>
                            </div>
                            <div class="add_song">
                              <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
                            </div>
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="4">
                      <h4>{{item.singer}}</h4>
                    </el-col>
                    <el-col :span="2">
                      <h4>{{item.songTime}}</h4>
                    </el-col>
                  </el-row>
                </div>
              </li>
            </ul>
            <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import nav from "./public/navigation.vue";
  export default {
    data() {
      return {
        songList: [{
            src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeuUneZQTUL489DXnNEkpG9Ltz39j6dBOsfw/300?n=1',
            songName: '望',
            singer: '张碧晨',
            songTime: '4:30'
          },
          {
            src: 'https://p.qpic.cn/music_cover/6aGRubo8UtU3O6E5dy98Jv2s6T2H1p2qSQK3icND00WznbssoCDn3bg/300?n=1',
            songName: '揭穿',
            singer: '黄子韬',
            songTime: '4:30'
          },
          {
            src: 'https://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDL7Cq7yHGEsEPqLdwvcoNC8p4CZic8e6icb6w/300?n=1',
            songName: '金曲捞 第七期',
            singer: '金曲捞',
            songTime: '4:30'
          },
          {
            src: 'https://p.qpic.cn/music_cover/Q5MtyhqyicZRIFMHk9v3tflKkLNRVG0opUMd0rm0Oe6U3iam0Es6pd3Q/300?n=1',
            songName: '从心出发',
            singer: '庄心妍',
            songTime: '4:30'
          }
        ]
      }
    },
    components: {
      "v-nav": nav
    }
  }

</script>

<style lang="scss">
  @import '../assets/scss//font-awesome/css/font-awesome.min.css';
  .main {
    padding-top: 60px;
    position: relative;
    width: 100%;
    height: 800px;
    background-color: #f6f6f6;
  }

  .el-row {
    height: 74px;
  }

  .top {
    position: absolute;
    top: 50px;
    left: 100px;
    right: 100px; // height: 850px;
  }

  .mod_page_nav {
    margin-bottom: 40px
  }

  .song_menu{
    float: left;
    height: 74px;
    // margin-left: 12px;
    // margin-top: 7px;
  }
  .play_song {
    // border: 1px #31c27c;
    cursor: pointer;
    float: left;
    margin-top: 15px;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(202, 200, 200, 0.904);
    border-radius: 19px;
      .fa-play{
    // line-height: 36px;/*垂直居中关键*/
    // text-align:center;
    color: rgb(206, 206, 206);
    padding: 11px;
  }
  }

  .play_song:hover {
    // border: 1px #31c27c;
    cursor: pointer;
    float: left;
    margin-top: 15px;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(111, 202, 69, 0.904);
    border-radius: 19px;
          .fa-play{
    // line-height: 36px;/*垂直居中关键*/
    // text-align:center;
    color: rgba(111, 202, 69, 0.904);
    padding: 11px;
  }
  }
  
  .add_song{
    cursor: pointer;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(202, 200, 200, 0.904);
    border-radius: 19px;
    .fa-plus{
    color: rgb(206, 206, 206);
    padding: 11px;
  }
  }
    .add_song:hover{
    cursor: pointer;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(111, 202, 69, 0.904);
    border-radius: 19px;
    .fa-plus{
    color: rgba(111, 202, 69, 0.904);
    padding: 11px;
  }
  }

  // .fa-play{
  //   // line-height: 36px;/*垂直居中关键*/
  //   // text-align:center;
  //   color: rgb(206, 206, 206);
  //   padding: 11px;
  // }

  // .fa-play:hove{
  //   // line-height: 36px;/*垂直居中关键*/
  //   // text-align:center;
  //   color: rgba(141, 199, 114, 0.904);
  //   padding: 11px;
  // }
  .toplist_nav {
    float: left;
    width: 178px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(153, 153, 153, .2)
  } // @media \0screen\, screen\9 {.toplist_nav {border-color: #e7e7e7}}
  .toplist_nav__list {
    margin-bottom: 20px
  }

  .toplist_nav__tit {
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid #ebebeb;
    margin: 0 17px 10px
  }

  .toplist_nav__link {
    font-size: 15px;
    display: block;
    line-height: 22px;
    padding: 8px 17px
  }

  .song_item_box {
    border-top: 5px solid #f2f2f2;
  }

  .toplist_nav__link--current,
  .toplist_nav__link--current:hover {
    background-color: #31c27c;
    color: #fff
  }

  .mod_toplist {
    position: relative;
    margin-left: 210px
  }

  .song_number {
    font-size: 24px;
    line-height: 74px;
    text-align: center;
  }

  .toplist__hd {
    line-height: 64px;
    height: 64px;
    margin-bottom: 10px
  }

  .toplist__tit {
    float: left;
    font-weight: 400;
    font-size: 24px;
    margin-right: 15px
  }

  .toplist_switch {
    margin-right: 15px;
    font-size: 0
  }

  .toplist_switch__data {
    font-size: 14px
  }

  .toplist_switch__btn {
    display: inline-block;
    vertical-align: middle;
    width: 17px;
    height: 23px;
    overflow: hidden
  }

  .toplist_switch__btn,
  _::-webkit-:not(:root:root) {
    margin-top: 7px
  }

  .toplist_switch__btn--disable {
    opacity: .4;
    filter: alpha(opacity=40);
    pointer-events: none;
    cursor: default
  }

  .toplist_switch__arrow_prev {
    margin-left: 3px;
    background-position: -160px -40px
  }

  .toplist_switch__arrow_next {
    margin-left: 7px;
    background-position: -120px -40px
  }

  .toplist_switch__btn:hover .toplist_switch__arrow_prev {
    background-position: -160px -60px
  }

  .toplist_switch__btn:hover .toplist_switch__arrow_next {
    background-position: -120px -60px
  }

  .toplist__tips {
    position: absolute;
    top: 74px;
    right: 0;
    line-height: 40px
  }

  @media (max-width:1240px) {
    .toplist_nav {
      width: 150px
    }
    .toplist_nav__tit {
      font-size: 16px
    }
    .toplist_nav__link {
      font-size: 14px
    }
    .mod_toplist {
      margin-left: 175px
    }
  }

  @media (max-width:1100px) {
    .mod_toplist {
      margin-left: 168px
    }
  }

  .mod_songlist {
    margin-bottom: 60px
  }

  .songlist__header {
    height: 50px;
    line-height: 50px;
    background-color: #f6f6f6;
    color: #999;
  }

  .songlist__header_name {
    padding-left: 86px;
  } // .songlist__header_author {
  //   // float: left;
  //   // padding-left: 20px;
  //   // width: 25.5%;
  //   // box-sizing: border-box;
  // }
  .songlist__item {
    height: 80px
  }

  .songlist__item--first .songlist__number {
    width: 42px
  }

  .songlist__album,
  .songlist__artist,
  .songlist__number,
  .songlist__other,
  .songlist__rank,
  .songlist__songname,
  .songlist__time {
    line-height: 80px;
    height: 80px
  }

  .songlist__songname {
    width: 72%
  }

  .songlist__number {
    width: 40px;
    top: 2px;
    left: 0;
    text-align: right;
    font-size: 24px;
    color: #333
  }

  .songlist__number--top {
    color: #ff4222
  }

  .songlist__rank {
    position: absolute;
    top: 0;
    left: 48px;
    width: 72px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #999
  }

  .songlist__cover {
    float: left;
    margin-right: 20px;
    margin-top: 5px
  }

  .songlist__cover,
  .songlist__pic {
    width: 70px;
    height: 70px
  }

  .songlist__pic {
    display: block
  }

  .popup_data_detail.songlist__tips {
    top: 60px
  }

  .mod_songlist--edit .songlist__header,
  .mod_songlist--edit .songlist__item {
    padding-left: 145px
  }

  .mod_songlist--edit .songlist__rank {
    left: 80px
  }

  @media (max-width:1240px) and (min-width:1100px) {
    .songlist__cover,
    .songlist__pic {
      width: 60px;
      height: 60px
    }
    .songlist__cover {
      margin-right: 10px;
      margin-top: 10px
    }
  }

  @media (max-width:1100px) {
    .songlist__cover,
    .songlist__pic {
      width: 40px;
      height: 40px
    }
    .songlist__cover {
      margin-right: 5px;
      margin-top: 20px
    }
  }

</style>
