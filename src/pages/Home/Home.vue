<template>
  <div>
    <Top></Top>
    <div class="homeContainer">
      <div class="content">
        <Search />
        <Content />
        <HotGame />
        <Recommend />
        <Game />
        <Activity />
        <Tool />
        <Other />
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '@/components/Top/Top'
import Bottom from '@/components/Bottom/Bottom'
import Search from './Search/Search'
import Content from './Content/Content'
import HotGame from './HotGame/HotGame'
import Recommend from './Recommend/Recommend'
import Game from './Game/Game'
import Activity from './Activity/Activity'
import Tool from './Tool/Tool'
import Other from './Other/Other'
export default {
  name: 'Home',
  components: {
    Top,
    Bottom,
    Search,
    Content,
    HotGame,
    Recommend,
    Game,
    Activity,
    Tool,
    Other,
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.homeContainer {
  overflow: hidden;
  position: relative;
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 50px;
  .content {
    width: 1400px;
    margin: 0 auto;
  }
}
</style>
