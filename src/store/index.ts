import { createStore } from 'vuex'

import modules from './modules'
import { GlobalState } from './types'

export default createStore<GlobalState>({
  modules,
})
