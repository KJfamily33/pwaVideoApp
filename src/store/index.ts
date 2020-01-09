import Vue from 'vue'
import Vuex from 'vuex'

import { IFooBarState } from '@/store/modules/footer-bar'
import { IUserState } from '@/store/modules/user'
import { ILeaderBoardState } from '@/store/modules/leaderBoard'

Vue.use(Vuex)

export interface IRootState {
  fooBar: IFooBarState
  user: IUserState
  leaderBoard: ILeaderBoardState
}

export default new Vuex.Store<IRootState>({})
