import Vue from 'vue'
import Router from 'vue-router'
import musicDis from '@/components/musicDis'
import myMusic from '@/components/myMusic'
import artList from '@/components/artList'
import player from '../pages/player'
import singer from '../components/singer'
import cd from '../components/cd'
import mv from '../components/mv'
import top from '../components/top'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'musicDis',
      component: musicDis
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/artList',
      name: 'artList',
      component: artList
    },
    {
      path: '/player:id',
      name: 'player',
      component: player
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/cd',
      name: 'cd',
      component: cd
    },
    {
      path: '/mv',
      name: 'mv',
      component: mv
    },
    {
      path: '/top',
      name: 'top',
      component: top
    }
  ]
})
