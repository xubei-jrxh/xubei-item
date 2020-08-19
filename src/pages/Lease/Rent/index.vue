<template>
  <div>
    <!-- 租号大厅 -->
    <div class="goods_list">
      <div class="ant_row">
        <span class="ant_col" v-if="click_gameId === 0">租号大厅</span>
        <span class="ant_col" v-if="click_gameId !== 0">
          已选择项
          <div class="active_games">
            <span class="gameName">游戏：{{ gameName }}</span>
            <span class="cancel" @click="cancel">x</span>
          </div>
        </span>
        <span class="ant_cal" @click="cancel">清空筛选条件</span>
      </div>

      <!-- 可拆分为组件 -->
      <div class="good_item_list">
        <div class="hot_games">
          <div class="games">
            <img
              class="icon"
              src="../../../assets/image/homePage/computerIcon.png"
              alt
            />
            <span>热门端游</span>
          </div>
          <div class="games_item">
            <div
              class="games_name"
              @click="click_changeIndex(item.gameId, item.gameName)"
              @mouseenter.stop="enter_changeIndex(item.gameId)"
              @mouseleave="enter_changeIndex(0)"
              v-for="item in pcGames"
              :key="item.id"
            >
              <div class="masking_out" v-if="item.gameId === enter_gameId">
                {{ item.gameName }}
              </div>
              <div class="masking_out" v-if="item.gameId === click_gameId">
                {{ item.gameName }}
              </div>
              <div class="games_card">
                <img :src="item.logoUrl" />
              </div>
              <div class="games_text">{{ item.gameName }}</div>
            </div>

            <div class="more">
              <div class="i">...</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热门手游 -->
      <div class="good_item_list">
        <div class="hot_games">
          <div class="games">
            <img
              class="icon"
              src="../../../assets/image/homePage/phoneIcon.png"
              alt
            />
            <span>热门手游</span>
          </div>
          <div class="games_item">
            <div
              class="games_name"
              @click="click_changeIndex(item.gameId, item.gameName)"
              @mouseenter.stop="enter_changeIndex(item.gameId)"
              @mouseleave="enter_changeIndex(0)"
              v-for="item in phoneGames"
              :key="item.id"
            >
              <!-- <div class="masking_out">{{item.gameName}}</div> -->
              <div class="masking_out" v-if="item.gameId === enter_gameId">
                {{ item.gameName }}
              </div>
              <div class="masking_out" v-if="item.gameId === click_gameId">
                {{ item.gameName }}
              </div>
              <div class="games_card">
                <img :src="item.logoUrl" />
              </div>
              <div class="games_text">{{ item.gameName }}</div>
            </div>

            <div class="more">
              <!-- http://api8.xubei.com/xubei-goods-cloud/anonapi/findHotGame
                    点击更多时显示的数据
              -->
              <!-- 点击展示更多游戏内容 -->
              <div class="i">...</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全部游戏 -->
      <div class="games_all">
        <div class="games">
          <img
            class="i"
            src="../../../assets/image/rental/game_select.png"
            alt
          />
          <span>全部游戏</span>
        </div>
        <div class="select">
          <!-- <div class="select_one button">请选择游戏</div> -->
          <el-popover
            placement="bottom"
            width="900"
            trigger="click"
            v-model="visible"
          >
            <div class="gameType">
              <span>全部</span>
              <span>端游</span>
              <span>手游</span>
            </div>
            <el-input placeholder="搜索关键字查找想找的游戏">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部" name="all">全部</el-tab-pane>
              <el-tab-pane label="热门" name="hot">热门</el-tab-pane>
              <el-tab-pane label="A" name="A">A</el-tab-pane>
              <el-tab-pane label="B" name="B">B</el-tab-pane>
              <el-tab-pane label="C" name="C">C</el-tab-pane>
              <el-tab-pane label="D" name="D">D</el-tab-pane>
              <el-tab-pane label="E" name="E">E</el-tab-pane>
              <el-tab-pane label="F" name="F">F</el-tab-pane>
              <el-tab-pane label="G" name="G">G</el-tab-pane>
              <el-tab-pane label="H" name="H">H</el-tab-pane>
              <el-tab-pane label="I" name="I">I</el-tab-pane>
              <el-tab-pane label="J" name="J">J</el-tab-pane>
              <el-tab-pane label="K" name="K">K</el-tab-pane>
              <el-tab-pane label="L" name="L">L</el-tab-pane>
              <el-tab-pane label="M" name="M">M</el-tab-pane>
              <el-tab-pane label="N" name="N">N</el-tab-pane>
              <el-tab-pane label="O" name="O">O</el-tab-pane>
              <el-tab-pane label="P" name="P">P</el-tab-pane>
              <el-tab-pane label="Q" name="Q">Q</el-tab-pane>
              <el-tab-pane label="R" name="R">R</el-tab-pane>
              <el-tab-pane label="S" name="S">S</el-tab-pane>
              <el-tab-pane label="T" name="T">T</el-tab-pane>
              <el-tab-pane label="U" name="U">U</el-tab-pane>
              <el-tab-pane label="V" name="V">V</el-tab-pane>
              <el-tab-pane label="W" name="W">W</el-tab-pane>
              <el-tab-pane label="X" name="X">X</el-tab-pane>
              <el-tab-pane label="Y" name="Y">Y</el-tab-pane>
              <el-tab-pane label="Z" name="Z">Z</el-tab-pane>
            </el-tabs>
            <div class="moreGames">
              <!-- 点击每个游戏名称可进行分类查询 -->
              <span
                v-for="item in allGameList"
                :key="item.id"
                @click="click_changeIndex(item.game_id, item.game)"
                >{{ item.game }}</span
              >
            </div>
            <el-button class="button" slot="reference" v-if="click_gameId">{{
              gameName
            }}</el-button>
            <el-button class="button" slot="reference" v-else
              >请选择游戏</el-button
            >
          </el-popover>
          <el-popover placement="bottom" width="900" trigger="click">
            <div class="moreGames">
              <span v-for="item in findGameByidList" :key="item.id">{{
                item.gameName
              }}</span>
            </div>
            <!-- <el-button class="button" slot="reference" v-if="click_gameId">{{gameName}}</el-button> -->
            <el-button class="button" slot="reference">请选择区服</el-button>
          </el-popover>
          <div class="select_three button">请选择游戏服</div>
          <div class="demo-input-suffix search_input">
            <el-input
              placeholder="请输入关键字"
              :value="search === '' ? '' : search"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
      <!-- 高级选项 -->
      <div class="highOption" v-if="click_gameId !== 0">
        <div class="select">
          <img
            class="i"
            src="../../../../public/image/rental/hight_select.png"
            alt
          />
          <span class="title">高级选项</span>
        </div>
        <div class="nav_scroll">
          <span v-for="item in highSelectItem" :key="item.ogss.id">{{
            item.showName
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入vuex
import { mapMutations, mapActions } from 'vuex'
// 引入request
import request from '@/api/request'
import { CHANGEGAMEID } from '@/store/mutations-type'
export default {
  name: 'Rent',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '穿越火线',
        },
        {
          value: '选项2',
          label: '英雄联盟',
        },
        {
          value: '选项3',
          label: '王者荣耀',
        },
        {
          value: '选项4',
          label: '绝地求生',
        },
        {
          value: '选项5',
          label: '求生之路',
        },
      ],
      value: '',
      // 保存所有热门端游列表
      clientGame: [],
      // 保存当前点击的游戏id
      click_gameId: 0,
      // 保存当前点击的游戏名称
      gameName: '',
      // 保存当前移入的游戏id
      enter_gameId: 0,
      // 保存高级选项数据
      highSelectItem: [],
      activeName: 'second',
      // 保存全部游戏列表数据
      allGameList: [],
      // 保存根据id查询到的游戏分类信息
      findGameByidList: [],
      // 控制popover消息框是否显示
      visible: false,
      // 保存vuex中传递过来的关键字
      search: '',
    }
  },

  async mounted() {
    // 获取热门端游游戏列表数据
    const data = await request.getHotGame()
    // console.log(data.result);
    this.clientGame = data.result.logos
    // console.log(this.pcGames);
    // console.log(this.phoneGames);

    // 获取全部游戏列表数据
    const allGames = await request.getAllGameList({}, '', 0, '', 0)
    // console.log(allGames);
    this.allGameList = allGames.result
    // console.log(this.allGameList);
  },

  methods: {
    //映射解构获取vuex中mutations中的方法
    ...mapMutations({
      changeGameId: CHANGEGAMEID,
    }),
    handleClick(tab, event) {
      console.log(tab, event)
    },

    // 点击游戏后获取当前游戏的id和name保存到data中
    async click_changeIndex(gameId, gameName) {
      this.click_gameId = gameId
      this.gameName = gameName
      // 点击切换游戏筛选条件时，清空当前选中的关键字
      this.search = ''
      // 通过调用 mutations中的方法修改state保存的游戏id
      this.changeGameId(gameId)
      // 通过$store将id保存到vuex当中
      // this.$store.state.rent.gameId = gameId;
      // console.log(this.$store);
      // console.log(gameName);
      // console.log(this.click_gameId);

      // 点击游戏分类卡后显示高级选项，发送请求获取高级选项数据
      const data = await request.getHighSelectList(this.click_gameId)
      this.highSelectItem = data.result
      // 根据游戏id获取分类后的游戏信息
      const findGameById = await request.getGameListById(this.click_gameId)
      // console.log(findGameById);
      if (this.click_gameId !== 0) {
        this.findGameByidList = findGameById.result.children
        // console.log(this.findGameByidList);
      } else {
        this.findGameByidList = []
      }
      // 选择游戏后隐藏对话框
      this.visible = false
    },

    // 鼠标移入时改变当前id值
    enter_changeIndex(gameId) {
      this.enter_gameId = gameId
      // console.log(this.enter_gameId);
    },

    // 清除所有选中项
    cancel() {
      this.click_gameId = 0
      // 通过 mutations中的方法修改state保存的游戏id
      this.changeGameId('')
    },
  },
  computed: {
    // 筛选热门端游
    pcGames() {
      let data = this.clientGame.filter((item) => item.gameType === 1)
      return data
    },

    // 筛选热门手游
    phoneGames() {
      let data = this.clientGame.filter((item) => item.gameType === 2)
      return data
    },
  },
  watch: {
    '$store.state.rent.search': function() {
      // 将vuex中的关键字保存到data中
      this.search = this.$store.state.rent.search
    },
  },
}
</script>
<style lang="less">
// 租号大厅
.goods_list {
  width: 1260px;
  // height: 411px;
  margin: 0 auto;
  background: white;
  .ant_row {
    height: 34px;
    margin: 0 20px;
    padding-top: 20px;
    border-bottom: solid 1px rgb(229, 229, 229);
    .ant_col {
      font-size: 16px;
      font-weight: 900;
      color: #666;
      display: inline-block;
      height: 21px;
      line-height: 21px;
      .active_games {
        display: inline-block;
        width: 133px;
        height: 28px;
        font-size: 14px;
        font-weight: normal;
        color: #3eaffd;
        border: solid 1px #3eaffd;
        text-align: center;
        margin-left: 20px;
        .gameName {
          display: inline-block;
          width: 100px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          vertical-align: top;
        }
        .cancel {
          display: inline-block;
          margin-top: 3px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    .ant_cal {
      cursor: pointer;
      float: right;
      color: #666;
      font-size: 12px;
      &:hover {
        color: #3eaffd;
      }
    }
  }
  .good_item_list {
    .hot_games {
      width: 1260px;
      height: 130px;
      display: flex;
      justify-content: space-between;
    }
    .games {
      display: inline-block;
      width: 110px;
      height: 110px;
      margin: 27px 0 0 21px;
      .icon {
        vertical-align: bottom;
      }
      span {
        font-size: 14px;
        margin-left: 6px;
      }
    }
    .games_item {
      width: 1105px;
      // height: 109px;
      // margin-left: 5px;
      margin-top: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px rgb(229, 229, 229);
      .games_name {
        position: relative;
        cursor: pointer;
        width: 106px;
        height: 83px;
        // margin-top: 27px;
        .masking_out {
          position: absolute;
          width: 90px;
          height: 83px;
          border: solid 2px #3eaffd;
          color: #3eaffd;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          text-align: center;
          line-height: 83px;
          font-weight: bold;
          padding: 0 5px;
          background: rgba(255, 255, 255, 0.95);
        }
        .games_card {
          img {
            width: 106px;
            height: 55px;
            border-radius: 10px;
          }
        }
        .games_text {
          width: 106px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          text-align: center;
          margin-top: 3px;
        }
      }
    }
    .more {
      width: 100px;
      height: 110px;
      .i {
        cursor: pointer;
        width: 26px;
        height: 24px;
        border: solid 1px #aaa;
        border-radius: 100%;
        color: #aaa;
        text-align: center;
        line-height: 14px;
        margin: auto;
        margin-top: 18px;
        font-weight: bold;
        &:hover {
          border: solid 1px #3eaffd;
          color: #3eaffd;
        }
      }
    }
  }
  .games_all {
    margin-top: 20px;
    display: flex;
    .games {
      width: 110px;
      height: 56px;
      margin-left: 21px;
      margin-top: 8px;
      span {
        font-size: 14px;
        margin-left: 6px;
      }
    }
    .select {
      display: flex;
      .el-button {
        span {
          width: 70px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .moreGames {
        width: 200px;
        height: 20px;
        display: inline-block;
      }
      .button {
        width: 140px;
        height: 36px;
        border: solid 1px rgba(220, 223, 230);
        border-radius: 5px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        line-height: 36px;
        text-align: center;
        margin-right: 30px;
        background: white;
        span {
          float: left;
          margin-top: -12px;
          margin-left: 20px;
        }
        &:hover {
          border: solid 1px #3eaffd;
          background: white;
        }
      }
      .search_input {
        width: 369px;
        height: 36px;
        margin-left: 25px;
      }
    }
  }
  .highOption {
    // height: 51px;
    .select {
      width: 109.5px;
      height: 21px;
      // margin: 15px 0 0 20px;
      margin-left: 20px;
      display: inline-block;
      float: left;
      margin-top: 23px;

      .title {
        width: 65px;
        height: 19px;
        font-size: 14px;
        margin-left: 6px;
        display: inline-block;
      }
    }
    .nav_scroll {
      display: inline-block;
      width: 1106px;
      height: 70px;
      margin: auto 0;
      line-height: 70px;
      border-top: solid 1px rgb(229, 229, 229);
      span {
        float: left;
        margin: 0 40px 0 20px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
        &:hover {
          color: #3eaffd;
        }
      }
    }
  }
}
.el-popover {
  .gameType {
    width: 926px;
    float: left;
    margin-left: -13px;
    border-bottom: solid 1px rgb(229, 229, 229);
    span {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      margin-left: 20px;
      padding-bottom: 10px;
      &:hover {
        color: #3eaffd;
      }
    }
  }
  .el-input {
    .el-input__inner {
      height: 40px;
      width: 500px;
      margin: 15px;
    }
    .el-input__prefix {
      margin-left: 10px;
    }
  }
  .moreGames {
    height: 200px;
    overflow-x: auto;
    span {
      display: inline-block;
      width: 140px;
      height: 20px;
      border-bottom: rgb(229, 229, 229) solid 1px;
      margin: 15px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.65);
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
