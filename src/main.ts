import Vue from 'vue'

import SvgIcon from 'vue-svgicon'
import VueHolder from 'holderjs'
import '@/icons/conpoments'

import App from './App.vue'
import router from './router'
import store from '@/store'
import './registerServiceWorker'
import { getToken } from '@/utils/cookies'
import EventBus from 'vue-bus-ts'

import { AdvModule } from '@/store/modules/adv'

import '@/styles/animate.css'
import '@/styles/index.scss'
Vue.config.productionTip = false

import Autocomplete from 'v-autocomplete'
import 'v-autocomplete/dist/v-autocomplete.css'

Vue.use(Autocomplete)

Vue.use(EventBus)
var bus = new EventBus.Bus()

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
})
router.beforeEach((to, from, next) => {
  const isLogin = getToken() || ''
  if (isLogin) {
    next()
  } else {
    if (to.path !== '/login' && to.path !== '/register') next('/login')
    else next()
  }
  const list = AdvModule.advList
  if (
    list.length === 0 &&
    (to.path === '/store' || to.path === '/currentTask')
  ) {
    next('/videoList')
  }
})

new Vue({
  bus,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
