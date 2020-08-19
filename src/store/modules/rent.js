// 引入封装的request
import request from '@/api/request'

//引入别名
import { CHANGEGAMEID } from '../mutations-type'

// 定义状态数据
const state = {
  // 用来保存游戏分类列表数据
  gameId: '',
  // 用来保存条件查询的游戏列表数据
  // gameList: []
  // 用来保存搜索的关键字
  search: '',
  itemGameId: '',
}

// 定义同步修改状态数据的方法
const mutations = {
  [CHANGEGAMEID](state, gameId) {
    state.gameId = gameId
  },
}

//定义异步间接修改state的方法
const actions = {
  // 根据游戏id异步请求对应的列表数据
  // async getGameListById(pageSize, businessNo, pageIndex, gameId) {
  //   let data = await request.getRankList(pageSize, businessNo, pageIndex, gameId)
  //   state.gameList = data.result
  // }
}

// 暴露vuex
export default {
  state,
  mutations,
  actions,
}
