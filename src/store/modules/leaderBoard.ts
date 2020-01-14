import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import { getLeaderBoard } from '@/api/leaderBoard'
import { Vue } from 'vue-property-decorator'

export interface ILeaderBoardState {
  leaderBoardList: any
}

@Module({ dynamic: true, store, name: 'leaderBoard' })
class LeaderBoard extends VuexModule implements ILeaderBoardState {
  public leaderBoardList: any = []
  @Mutation
  private SET_LEADER_BOARD_LIST(list: []) {
    this.leaderBoardList = list
    const vw = new Vue()
    vw.$bus.$emit('leaderBoard')
  }

  @Action({ rawError: true })
  public async DoGetLeaderBoard() {
    await getLeaderBoard()
      .then(res => {
        if (res.status === 200) {
          this.SET_LEADER_BOARD_LIST(res.data.data.leaderboard)
        }
      })
      .catch(error => {
        console.log(error)
        this.DoGetLeaderBoard()
      })
  }

  @Action({ rawError: true })
  public async DoGetSaveList() {
    const vw = new Vue()
    vw.$bus.$emit('leaderBoard')
  }
}

export const LeaderBoardModule = getModule(LeaderBoard)
