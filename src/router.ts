import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HeaderBar from './components/HeaderBar/index.vue'
import FooterBar from './components/FooterControlBar/index.vue'
import CurrentTask from './views/CurrentTask.vue'
import Store from './views/Store.vue'
import Profile from './views/Profile.vue'
import About from './views/About.vue'
import NewAddress from './views/NewAddress.vue'
import Recharge from './views/Recharge.vue'
import Share from './views/Share.vue'
import Description from './views/Description.vue'
import VcoinDescription from './views/VcoinDescription.vue'
import ChangeCode from './views/ChangeCode.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import VideoInfo from './views/Video-info.vue'
import ChangeVIP from './views/ChangeVIP.vue'
import vHistory from './views/VHistory.vue'
import Search from './views/Search.vue'
import VideoList from './views/VideoListPage.vue'

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
      },
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
      name: 'videoList',
      components: {
        default: VideoList,
        header: HeaderBar,
        footer: FooterBar,
      },
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
      path: '/register',
      name: 'register',
      components: {
        default: Register,
        header: HeaderBar,
      },
    },
    {
      path: '/Recharge',
      name: 'recharge',
      components: {
        default: Recharge,
        header: HeaderBar,
      },
    },
    {
      path: '/vip-description',
      name: 'vip-description',
      components: {
        default: Description,

        header: HeaderBar,
      },
    },
    {
      path: '/share',
      name: 'share',
      components: {
        default: Share,
        header: HeaderBar,
      },
    },
    {
      path: '/v-coin-description',
      name: 'v-coin-description',
      components: {
        default: VcoinDescription,
        header: HeaderBar,
      },
    },
    {
      path: '/ChangeCode',
      name: 'changecode',
      components: {
        default: ChangeCode,

        header: HeaderBar,
      },
    },
    {
      path: '/store',
      name: 'store',
      components: {
        default: Store,
        header: HeaderBar,
        footer: FooterBar,
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
      },
    },
    {
      path: '/video-info/:videoIdEncrypt',
      name: '/video-info',
      components: {
        default: VideoInfo,
      },
    },
    {
      path: '/currentTask',
      name: 'currentTask',
      components: {
        default: CurrentTask,
        header: HeaderBar,
        footer: FooterBar,
      },
    },
    {
      path: '/changeVip',
      name: 'changevip',
      components: {
        default: ChangeVIP,
        header: HeaderBar,
      },
    },
    {
      path: '/vHistory',
      name: 'vhistory',
      components: {
        default: vHistory,
        header: HeaderBar,
      },
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: Search,
        header: HeaderBar,
      },
    },
  ],
})
