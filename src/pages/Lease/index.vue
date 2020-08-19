<template>
  <div class="app">
    <Header />
    <Rent />
    <Content />
  </div>
</template>


<script>
// 引入组件
import Header from "./Header/index";
import Rent from "./Rent/index";
import Content from "./Content/index";
export default {
  name: "Lease",

  //注册组件
  components: {
    Header,
    Rent,
    Content,
  },
};
</script>


<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  .app {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
  }
}
</style>