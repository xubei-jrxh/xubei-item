<template>
  <div>
    <!-- <Top />
    <Home />
    <Bottom /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Search from '@/pages/Search'
// import Lease from '@/pages/Lease'
// import Top from '@/components/Top/Top'
// import Bottom from '@/components/Bottom/Bottom'
import Home from '@/pages/Home/Home'
export default {
  name: 'App',
  components: {
    // 注册组件
    // Lease,
    // Top,
    // Bottom,
    // Home,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
