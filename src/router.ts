import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginAndRegistered from './views/LoginAndRegistered.vue'
import HeaderBar from './components/HeaderBar/index.vue'
import FooterBar from './components/FooterControlBar/index.vue'
import Share from './views/Share.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
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
      path: '/share',
      name: 'share',
      components: {
        default: Share,
        header: HeaderBar
      },
    },
  ],
})
