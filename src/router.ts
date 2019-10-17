import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginAndRegistered from './views/LoginAndRegistered.vue'
import HeaderBar from './components/HeaderBar/index.vue'
import FooterBar from './components/FooterControlBar/index.vue'

import Profile from './views/Profile.vue'
import About from './views/About.vue'
import NewAddress from './views/NewAddress.vue'
import Recharge from './views/Recharge.vue'
import Share from './views/Share.vue'
import Description from './views/Description.vue'
import VcoinDescription from './views/VcoinDescription.vue'
import ChangeCode from './views/ChangeCode.vue'

Vue.use(Router)

// @ts-ignore
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: HeaderBar,
        footer: FooterBar,
      },
    },
    {
      path: '/newaddress',
      name: 'newaddress',
      components: {
        default: NewAddress,
        header: HeaderBar,


      },
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: Profile,
        header: HeaderBar,
        footer: FooterBar,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: About,
        header: HeaderBar,

      },
    },
    {
      path: '/videoList',
      name: 'video',
      component: () => import('./views/VideoListPage.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('./components/FooterControlBar/index.vue'),
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('./components/HeaderBar/index.vue'),
    },
    {
      path: '/loginAndRegistered',
      name: 'login',
      components: {
        default: LoginAndRegistered,
        header: HeaderBar
      },
    },
    {

      path: '/Recharge',
      name: 'recharge',
      components: {
        default: Recharge,
        header: HeaderBar
      }
    },
    {
      path: '/vip-description',
      name: 'vip-description',
      components: {
        default: Description,

        header: HeaderBar
      },
    },
    {

      path: '/share',
      name: 'share',
      components: {
        default: Share,
        header: HeaderBar
      },
    },
    {
      path: '/v-coin-description',
      name: 'v-coin-description',
      components: {
        default: VcoinDescription,
        header: HeaderBar
      },
    },
    {


      path: '/ChangeCode',
      name: 'changecode',
      components: {
        default: ChangeCode,
        header: HeaderBar
      },
    },


  ],
})
