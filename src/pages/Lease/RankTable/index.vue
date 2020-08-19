<template>
  <div>
    <!-- 排序界面 -->

    <div class="tab_wrapper" v-if="rankList.result">
      <span
        :class="priceOrderBy === null ? 'active' : ''"
        class="comprehensive"
        @click="comperRank"
        >综合排序</span
      >
      <span class="price" @click="PriceOrderBy">
        价格
        <div class="priceOrder">
          <i
            :class="priceOrderBy === 0 ? 'item_active' : ''"
            class="el-icon-caret-top"
          ></i>
          <i
            :class="priceOrderBy === 1 ? 'item_active' : ''"
            class="el-icon-caret-bottom"
          ></i>
        </div>
      </span>
      <div class="key_box">
        <span
          class="key"
          :class="
            item.id === searchId &&
            priceOrderBy !== null &&
            priceOrderBy !== 0 &&
            priceOrderBy !== 1
              ? 'active'
              : ''
          "
          v-for="item in goodsTheme"
          :key="item.id"
          @click="SearchGameList(item.key, item.id)"
          >{{ item.key }}</span
        >
      </div>
      <div v-for="item in rankList.result.list" :key="item.id">
        <div class="table_item_card">
          <div class="table_list" @click="giveGameId(item.id)">
            <img :src="item.imageurl" alt />
            <div class="games_info">
              <el-tooltip
                class="item"
                effect="dark"
                :content="item.goods_title"
                placement="top"
              >
                <span class="title_text">{{ item.goods_title }}</span>
              </el-tooltip>
              <span class="ant_orw">游戏区服：{{ item.game_name }}</span>
              <span class="rogin">{{ item.actity }}</span>
              <div class="coupons">
                <span class="bg">赔</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="该商品的上号方式为：上号器上号，租赁后续使用虚贝上号器进行上号"
                  placement="top"
                >
                  <span class="bg">上号器上号</span>
                </el-tooltip>
                <span class="bg">热门推荐</span>
              </div>
            </div>
            <div class="price_card">
              <div class="ant_col">
                <span class="games_rent">
                  <span class="rent">租金 :</span>
                  <span class="amount">{{ item.lease_price }}</span
                  >元/小时
                </span>
              </div>
              <div class="ant_col">
                <span class="games_rent">
                  <img src="../../../assets/image/svip-list-icon.png" alt />
                  <span class="amount">{{ item.svipDiscount }}</span
                  >元/小时
                </span>
              </div>
              <div class="ant_col">
                <span class="games_rent">
                  押金 :
                  <span class="amount">{{ item.isCompensate }}</span
                  >元&nbsp;| <span class="amount">{{ item.short_lease }}</span
                  >小时起租
                </span>
              </div>
            </div>
            <el-row>
              <el-button type="primary" plain>立即租赁</el-button>
            </el-row>
          </div>
        </div>
      </div>

      <div class="pagination">
        <span>共{{ rankList.result.total }}条记录</span>
        <el-pagination
          :page-count="rankList.result.pageindex"
          @current-change="currentPage"
          :page-size="rankList.result.pagesize"
          background
          layout="prev, pager, next"
          :total="rankList.result.total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/api/request'
import { mapActions } from 'vuex'
export default {
  name: 'RankTable',
  data() {
    return {
      // 保存请求列表数据
      rankList: [],
      // 保存当前页码
      pageIndex: 0,
      // 保存游戏id
      gameId: 0,
      // 控制升降序的数据
      priceOrderBy: null,
      // 保存游戏关键字
      goodsTheme: [],
      // 控制关键字高亮的id
      searchId: 0,
    }
  },

  computed: {},

  async mounted() {
    // 调用页面第一次加载时发送请求获取排行榜第一页数据的方法
    this.getRankListSync(20, 'xubei', 1)
    // console.log(data);
    // this.rankList = data;
    // console.log(this.rankList);
  },

  methods: {
    // 页面第一次加载时发送请求获取排行榜第一页数据
    async getRankListSync(pageSize, businessNo, pageIndex, gameId) {
      let data = await request.getRankList(
        pageSize,
        businessNo,
        pageIndex,
        gameId
      )
      this.rankList = data
      // console.log(this.rankList);
    },

    // 切换页面的事件处理回调
    currentPage(pageSize) {
      // 保存当前页的下标
      this.pageIndex = pageSize
      if (this.gameId === 0 && this.searchId === 0) {
        // 如果当前没有选择游戏与关键字，就发送请求获取全部游戏数据
        this.getRankListSync(20, 'xubei', this.pageIndex)
      } else if (this.gameId !== 0 && this.searchId === 0) {
        // 如果当前选择了游戏分类但没有选择关键字分类。就发送请求获取指定分类的游戏列表
        this.getRankListSync(20, 'xubei', this.pageIndex, this.gameId)
      } else if (this.gameId !== 0 && this.searchId !== 0) {
        // 如果当前进行了游戏分类并且搜索了关键字，则发送请求通过关键字获取分类游戏列表
        this.SearchGameList(this.searchKey, this.searchId, this.pageIndex)
      }

      // console.log(this.$store.state.rent.gameId);
    },

    // 点击综合排序时请求所以数据
    comperRank() {
      this.getRankListSync(20, 'xubei', 1)
      this.priceOrderBy = null
    },

    // 点击价格按钮，进行排序
    async PriceOrderBy() {
      // 判断当前排序的列表是否是通过id查询的数据
      if (this.gameId !== 0) {
        // 若存在id则说明是分类查询后再进行排序的
        if (this.priceOrderBy !== 0) {
          // 判断当前升降序的状态
          this.priceOrderBy = 0 // 若当前不是升序状态，点击后变为升序
          // 根据当前游戏id进行升序排列
          let data = await request.getGameListByIdAndPrice(
            20,
            'xubei',
            this.gameId,
            this.priceOrderBy,
            1
          )
          this.rankList = data
        } else if (this.priceOrderBy === 0) {
          // 若当前为升序排列
          this.priceOrderBy = 1 // 在次点击后边为降序排列
          // 根据游戏id进行降序排列
          let data = await request.getGameListByIdAndPrice(
            20,
            'xubei',
            this.gameId,
            this.priceOrderBy,
            1
          )
          this.rankList = data
        }
      } else {
        // 若当前没有游戏id就进行普通的升降序

        // 0表示升序排列 1表示降序排列， 默认为 null
        if (this.priceOrderBy !== 0) {
          // 判断当前是否为升序排列，
          this.priceOrderBy = 0 // 不是升序排列修改priceOrderBy 为0 进行升序排列
          // 再进行升序排列请求数据
          let data = await request.getGamePriceOrderBy(
            20,
            'xubei',
            this.priceOrderBy,
            1
          )
          this.rankList = data
        } else if (this.priceOrderBy === 0) {
          // 若当前为升序
          this.priceOrderBy = 1 // 则改变priceOrderBy的值为降序
          let data = await request.getGamePriceOrderBy(
            20,
            'xubei',
            this.priceOrderBy,
            1
          )
          // console.log(data);
          this.rankList = data
        }
      }
    },

    // 点击商品关键字时，通过关键字查找游戏
    async SearchGameList(key, id, pageIndex) {
      this.searchKey = key
      // 将当前点击的关键字id交给data中定义的searchId
      this.searchId = id
      // 根据当前点击的关键字发送请求
      this.priceOrderBy = -1
      let data = await request.getGameListBySearch(
        20,
        'xubei',
        this.gameId,
        key,
        this.pageIndex
      )
      console.log(this.pageIndex)
      this.rankList = data
      // 将点击的关键字保存到vuex 中
      this.$store.state.rent.search = key
      // console.log(this.$store);
    },

    // 将游戏id保存到vuex中
    giveGameId(gameId) {
      this.$store.state.rent.itemGameId = gameId

      const { href } = this.$router.resolve({
        name: 'detail',
        query: {
          goodsId: gameId,
        },
        path: '/detail',
      })
      window.open(href, '_blank')
    },
  },
  watch: {
    // 监视vuex中保存的游戏id ， 若游戏id发生变化就发送请求更新数据
    '$store.state.rent.gameId': async function(
      pageSize,
      businessNo,
      pageIndex,
      gameId
    ) {
      // 重置关键字id
      this.searchId = 0
      // 若监视到vuex中的id变化时，初始话升降序的数据
      this.priceOrderBy = null
      // vuex中的id发生变化时，将最新的id拿过来保存到data中
      this.gameId = this.$store.state.rent.gameId
      // 请求页面列表数据
      this.getRankListSync(20, 'xubei', this.pageIndex, this.gameId)
      // console.log(getGameByIdList);
      // 请求商品卖点列表数据
      const data = await request.getGoodsTheme(this.gameId)
      this.goodsTheme = data.result
      // console.log(data);
    },
  },
}
</script>

<style lang="less" rel="stylesheet/less">
body .is-dark {
  text-align: center;
  width: 250px;
}
.active {
  color: #3eaffd !important;
}
.tab_wrapper {
  width: 1036px;
  background: white;

  .comprehensive {
    display: inline-block;
    width: 80px;
    height: 60px;
    // color: #3eaffd;
    font-size: 14px;
    line-height: 60px;
    margin-left: 20px;
    padding-left: 10px;
    cursor: pointer;
    &:hover {
      color: #3eaffd;
    }
  }
  .price {
    // display: inline-block;
    position: relative;
    width: 50px;
    font-size: 14px;
    cursor: pointer;
    .priceOrder {
      display: inline-block;
      height: 30px;
      position: absolute;
      top: -1px;
      i {
        display: block;
        height: 8px;
        display: block;
        color: rgb(153, 153, 153);
      }
      .item_active {
        color: #3eaffd;
      }
    }
  }
  .key_box {
    width: 860px;
    height: 60px;
    float: right;
    line-height: 60px;
    .key {
      display: inline-block;
      margin-right: 12px;
      // color: rgba(0, 0, 0, 0.85);
      color: #666;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #3eaffd;
      }
    }
  }
  .table_item_card {
    border-top: solid 1px rgb(229, 229, 229);
    width: 996px;
    height: 104px;
    padding: 20px 0;
    margin-left: 20px;
    &:hover {
      background: rgb(248, 248, 248);
    }
    .table_list {
      display: flex;
      justify-content: space-between;
      img {
        width: 100px;
        height: 100px;
      }
      .games_info {
        width: 540px;
        height: 77px;

        .title_text {
          color: #333;
          font-weight: bold;
          display: block;
          width: 500px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 6px;
          cursor: pointer;
        }
        .ant_orw {
          font-size: 14px;
          color: #666;
        }
        .rogin {
          font-size: 14px;
          margin-left: 20px;
          color: #f90;
        }
        .coupons {
          margin-top: 10px;
          .bg {
            background: #ff5137;
            border-radius: 4px;
            font-size: 14px;
            padding: 1px 2px;
            color: white;
            margin-right: 10px;
          }
        }
      }
      .price_card {
        width: 207px;
        height: 87px;
        font-size: 14px;
        .games_rent {
          color: #666;
          display: inline-block;
          margin-bottom: 10px;
          .rent {
            margin-right: 22px;
          }
          img {
            width: 36px;
            height: 17px;
            margin-right: 20px;
            vertical-align: bottom;
          }
          .amount {
            color: #ee6723;
          }
        }
      }
      .el-row {
        height: 40px;
        margin: auto 0;
        margin-right: 20px;
      }
    }
  }
  .pagination {
    width: 996px;
    height: 60px;
    margin: 0 20px;
    line-height: 60px;
    border-top: solid 1px rgb(229, 229, 229);
    span {
      font-size: 14px;
      color: #666;
    }
    .el-pagination {
      float: right;
      height: 40px;
      margin-top: 15px;
    }
  }
}
</style>
