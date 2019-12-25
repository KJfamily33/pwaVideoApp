import Vue from 'vue'
import Vuex from 'vuex'

import { IFooBarState } from '@/store/modules/footer-bar'
import { IUserState } from '@/store/modules/user'

Vue.use(Vuex)

export interface IRootState {
  fooBar: IFooBarState
  user: IUserState
}

export default new Vuex.Store<IRootState>({})
