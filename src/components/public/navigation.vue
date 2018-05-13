<template>
  <div>
  <ul class="mod_top_subnav">
      <li class="top_subnav__item" >
       <router-link to="/" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==1}">首页</router-link>
      </li>
      <li class="top_subnav__item" >
        <router-link  to="/singer" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==2}">歌手</router-link>
      </li>
      <li class="top_subnav__item" >
        <router-link  to="/cd" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==3}">专辑</router-link>
      </li>
    <li class="top_subnav__item">
      <router-link  to="/top" class="top_subnav__link" :class="{'top_subnav__link--current': tagLink==4}">排行版</router-link>
    </li>
  </ul> 
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.mod_top_subnav {
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  padding-left: 340px;
}
.top_subnav__item {
  float: left;
  font-size: 15px;
  color: #c1c1c1;
  margin-right: 56px;
  
}
.top_subnav__link {
  cursor: auto;
}
/* .top_subnav__link--current {
  color: #31c27c;
}
.top_subnav__link:hover {
  color: #31c27c;
} */
</style>


