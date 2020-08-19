<template>
  <div class="app">
    <!-- 头部 -->
    <div class="title_header">
      <div class="content">
        <router-link class="img" to="/">
          <img src="../../../assets/image/common/logoXubei.png" alt />
        </router-link>
        <div class="title_nav">
          <router-link class="item" to="/">首页</router-link>
          <a class="item active" href="#">租号试玩</a>
          <a class="item" href="#">领券中心</a>
          <router-link class="item" to="/goods">优质店铺</router-link>
          <a class="item" href="#">美女聊天</a>
          <a class="item" href="#">分站加盟</a>
        </div>
      </div>
    </div>
    <!-- 返回首页 -->
    <router-link class="back" to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less">
// 头部样式
.title_header {
  width: 100%;
  background: white;
  box-shadow: 0 1px 5px 1px gainsboro;
  .content {
    width: 1260px;
    height: 89px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: white;
    .img {
      width: 310px;
      height: 55px;
      margin: auto 0;
      img {
        width: 310px;
        height: 55px;
      }
    }
    .title_nav {
      display: flex;
      justify-content: space-between;
      margin: auto 0;
      .item {
        height: 24px;
        margin-left: 36px;
        color: #333;
        font-size: 18px;
        &:hover {
          color: #3eaffd;
        }
      }
      & .active {
        color: #3eaddd;
      }
    }
  }
}
// 返回首页样式
.back {
  display: block;
  width: 1260px;
  height: 35px;
  margin: 0 auto;
  color: #666;
  font-size: 13px;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    color: #3eaffd;
  }
}
</style>
