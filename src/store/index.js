/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules:{
    msite,
    shop,
    user
  }

})
