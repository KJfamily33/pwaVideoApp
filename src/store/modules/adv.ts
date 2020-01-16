import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'
import { getAllAdvs } from '@/api/adv'

export interface IAdvState {
  advList: any
}

@Module({ dynamic: true, store, name: 'adv' })
class Adv extends VuexModule implements IAdvState {
  public advList: any = []

  @Mutation
  private SET_ADV_LIST(list:[]) {
    this.advList = list
    console.log(this.advList)
  }

  @Action({ rawError: true })
  public async DoGetAdvList() {
    await getAllAdvs()
    .then(res => {
      if (res.status === 200) {
        this.SET_ADV_LIST(res.data.data.advs)
        console.log('innnnn')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const AdvModule = getModule(Adv)