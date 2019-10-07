import Vue from 'vue'
import Vuex from 'vuex'

import {IFooBarState} from "@/store/modules/footer-bar"

Vue.use(Vuex)

export interface IRootState {
  fooBar: IFooBarState
}

export default new Vuex.Store<IRootState>({})
