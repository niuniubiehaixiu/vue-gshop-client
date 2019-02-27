import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from "../mutation-types";

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../../api'
const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
}

const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}

const actions = {
  //异步获取地址
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      commit(RECEIVE_ADDRESS, result.data)
    }
  },
  //异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },

  // 异步获取商家列表的action
  async getShops({commit, state}) {
    // 1. 发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      commit(RECEIVE_SHOPS, result.data)
    }
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
