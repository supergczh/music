import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Index from "./components/index/index";
import Rank from "./components/rank/index";
import Info from "./components/rank/info";
import Plist from "./components/plist/index";
import Pl from "./components/plist/list";
import Singer from './components/singer';
import Songing from './components/app/playlist';
import Search from './components/search/index';
import SearchList from './components/search/list.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/rank/info/:id',
      name: 'Info',
      component: Info,
    },
     {
       path: '/plist',
       name: 'plist',
       component: Plist
     },
      {
        path: '/plist/list/:id',
        name: 'Pl',
        component: Pl
      },
      {
        path: '/singer',
        name: 'Singer',
        component: Singer
      },
       {
         path: '/songing',
         name: 'Songing',
         component: Songing
       },
        {
          path: '/search',
          name: 'Search',
          component: Search,
        },
         {
          path: '/search/list/:name',
          name: 'SearchList',
          component: SearchList,
        },
  ]
})
