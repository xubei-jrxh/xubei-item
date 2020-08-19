// 引入封装的axios
import ajax from './ajax'
import indie from './indie'
import axios from './axios'
import active from './active'
export default {
  // http://api8.xubei.com/xubei-goods-cloud/anonapi/findHotGame
  // 获取热门端游列表
  getHotGame() {
    return ajax({
      url: '/xubei-goods-cloud/anonapi/findHotGame',
      method: 'GET',
    })
  },

  // http://api8.xubei.com/xubei-goods-search/anon/findRemixGoodsList?pageSize=20&businessNo=xubei&pageIndex=1
  // 获取综合排序列表数据   && 根据指定条件进行查询
  getRankList(pageSize, businessNo, pageIndex, gameId) {
    return ajax({
      url: '/xubei-goods-search/anon/findRemixGoodsList',
      method: 'GET',
      params: {
        pageSize,
        businessNo,
        pageIndex,
        gameId,
      },
    })
  },

  // http://api8.xubei.com/xubei-seller-cloud/anon/getRecomendTypeByGameId?gameId=undefined
  // 获取热门推荐列表
  getRecommendList(gameId) {
    return ajax({
      url: '/xubei-seller-cloud/anon/getRecomendTypeByGameId',
      method: 'GET',
      data: {
        gameId,
      },
    })
  },

  // http://api8.xubei.com/xubei-goods-cloud/anonapi/getGameSearchRelation?gameId=302
  // 获取高级选项数据
  getHighSelectList(gameId) {
    return ajax({
      url: '/xubei-goods-cloud/anonapi/getGameSearchRelation',
      method: 'GET',
      params: {
        gameId,
      },
    })
  },

  // http://api8.xubei.com/xubei-goods-cloud/anonapi/indexGameList
  // 获取全部游戏列表数据
  getAllGameList({ gameLabel, game, isHo, firstWord, isFreePlay }) {
    return ajax({
      url: '/xubei-goods-cloud/anonapi/indexGameList',
      method: 'POST',
      data: {
        gameLabel,
        game,
        isHo,
        firstWord,
        isFreePlay,
      },
    })
  },

  // http://api8.xubei.com/xubei-goods-cloud/anonapi/findGameAreaById?id=302
  // 根据id获取条件游戏数据
  getGameListById(id) {
    return ajax({
      url: '/xubei-goods-cloud/anonapi/findGameAreaById',
      method: 'GET',
      params: {
        id,
      },
    })
  },

  // 根据价格升/降排序
  // http://api8.xubei.com/xubei-goods-search/anon/findRemixGoodsList?pageSize=20&businessNo=xubei&priceOrderBy=0&pageIndex=1
  getGamePriceOrderBy(pageSize, businessNo, priceOrderBy, pageIndex) {
    return ajax({
      url: '/xubei-goods-search/anon/findRemixGoodsList',
      method: 'GET',
      params: {
        pageSize,
        businessNo,
        priceOrderBy,
        pageIndex,
      },
    })
  },

  // http://api8.xubei.com/xubei-goods-search/anon/findRemixGoodsList?pageSize=20&businessNo=xubei&gameId=1109&priceOrderBy=0&pageIndex=1
  // 根据id查询游戏列表并根据价格排序
  getGameListByIdAndPrice(
    pageSize,
    businessNo,
    gameId,
    priceOrderBy,
    pageIndex
  ) {
    return ajax({
      url: '/xubei-goods-search/anon/findRemixGoodsList',
      method: 'GET',
      params: {
        pageSize,
        businessNo,
        gameId,
        priceOrderBy,
        pageIndex,
      },
    })
  },

  // 根据商品id获取商品卖点介绍
  // http://api8.xubei.com/xubei-goods-cloud/anonapi/findGoodsTheme?gameId=1109
  getGoodsTheme(gameId) {
    return ajax({
      url: '/xubei-goods-cloud/anonapi/findGoodsTheme',
      method: 'GET',
      params: {
        gameId,
      },
    })
  },

  // 根据关键字查找列表数据
  // http://api8.xubei.com/xubei-goods-search/anon/findRemixGoodsList?pageSize=20&businessNo=xubei&gameId=1109&searchText=%E6%AD%A6%E5%88%99%E5%A4%A9&pageIndex=1
  getGameListBySearch(pageSize, businessNo, gameId, searchText, pageIndex) {
    return ajax({
      url: '/xubei-goods-search/anon/findRemixGoodsList',
      method: 'GET',
      params: {
        pageSize,
        businessNo,
        gameId,
        searchText,
        pageIndex,
      },
    })
  },

  // 获取独立游戏列表
  getIndieGame() {
    return indie({
      url: '/indieGame',
      method: 'get',
    })
  },
  // 获展开层游戏列表数据   gameLabel:所属类别、isHot: 1:热门
  getIndexGame(gameLabel, isHot) {
    return axios({
      url: 'xubei-goods-cloud/anonapi/indexGameList',
      method: 'post',
      data: {
        gameLabel: { lable: gameLabel },
        isHot,
      },
    })
  },
  // 通过id找到游戏分类
  findGameAreaById(id) {
    return axios({
      url: 'xubei-goods-cloud/anonapi/findGameAreaById?id=' + id,
      method: 'get',
    })
  },
  // 获取首页数据
  getIndexDataList(modId) {
    return axios({
      url: 'xubei-page-cloud/anon/cms/getModDataByModId?modId=' + modId,
      methods: 'get',
    })
  },
  // 获取商品推荐数据
  getRecommendTypeList() {
    return axios({
      url: 'xubei-seller-cloud/anon/getRecomendTypeList ',
      method: 'GET',
    })
  },
  // 获取店铺数据
  getShopList(
    pageIndex = 1,
    pageSize = 20,
    mainGameId,
    succOrderBy,
    levelName,
    isShowAggregate = 1,
    hasCoupon,
    shopName
  ) {
    return axios({
      url: '/xubei-seller-cloud/anon/getShopListExt',
      method: 'get',
      params: {
        pageIndex,
        pageSize,
        mainGameId,
        succOrderBy,
        levelName,
        isShowAggregate,
        hasCoupon,
        shopName,
      },
    })
  },
  // 获取店铺主营标签
  getMainGames() {
    return axios({
      url: '/xubei-seller-cloud/anon/getMainGames',
      method: 'post',
    })
  },
  // 获取店铺主营内容列表
  getGoodsList(
    pageIndex,
    pageSize,
    userId,
    gameId,
    timeOrderBy,
    priceOrderBy,
    businessNo = 'xubei'
  ) {
    return axios({
      url: '/b/goods/findGoodsLists',
      method: 'get',
      params: {
        pageIndex,
        pageSize,
        userId,
        gameId,
        timeOrderBy,
        priceOrderBy,
        businessNo,
      },
    })
  },
  // 获取店铺信息
  getShopInfo(sellerId) {
    return axios({
      url: '/xubei-seller-cloud/anon/getShopInfo',
      method: 'post',
      params: {
        sellerId,
      },
    })
  },
  //获取店铺活动
  getActivity(sellerId, channel = 'xubei') {
    return active({
      url: '/couponConfig/anon/listFromDetail',
      method: 'get',
      params: {
        sellerId,
        channel,
      },
    })
  },
}
