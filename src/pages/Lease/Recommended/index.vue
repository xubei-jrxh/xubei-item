<template>
  <div>
    <!-- 热门推荐 -->
    <div class="recommended">
      <span class="hot_text">
        <div class="bok"></div>热门推荐
      </span>
      <div v-for="item in recommList" :key="item.id">
        <div class="reco_card" v-if="item.bizTarget.goodsDto">
          <img :src="item.bizTarget.logoUrl" alt />
          <span class="hot_number">热度值:{{item.bizTarget.goodsDto.hotValue}}</span>
          <span class="reco_price">{{item.bizTarget.goodsDto.leasePrice}}元/小时</span>
          <div>{{item.bizTarget.goodsDto.goodsTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "../../../api/request";
export default {
  data() {
    return {
      recommList: [],
    };
  },
  async mounted() {
    let data = await request.getRecommendList();
    // console.log(data);
    this.recommList = data.result.recList;
    // console.log(this.recommList[6].bizTarget.goodsDto.hotValue);
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.recommended {
  width: 214px;
  height: 100%;
  background: white;
  .hot_text {
    display: inline-block;
    width: 174px;
    height: 40px;
    font-size: 16px;
    color: #333;
    border-bottom: solid 1px rgb(229, 229, 229);
    margin: 20px 20px 0 20px;
    .bok {
      display: inline-block;
      vertical-align: bottom;
      margin-right: 5px;
      width: 6px;
      height: 18px;
      background: #128de0;
    }
  }
  .reco_card {
    width: 174px;
    height: 252px;
    margin: 10px auto 0;

    img {
      width: 174px;
      height: 174px;
    }
    .hot_number {
      font-size: 12px;
      color: #666;
      vertical-align: top;
      display: inline-block;
    }
    div {
      width: 174px;
      height: 40px;
      color: #666;
      line-height: 22px;
      margin-top: 5px;
      overflow: hidden;
      font-size: 12px;
    }
    .reco_price {
      color: #f54135;
      font-size: 12px;
      font-weight: bold;
      float: right;
    }
  }
}
</style>