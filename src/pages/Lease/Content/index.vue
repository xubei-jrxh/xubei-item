<template>
  <div>
    <div class="content">
      <RankTable />
      <Recommended />
    </div>
  </div>
</template>
<script>
import RankTable from "../RankTable/index";
import Recommended from "../Recommended/index";
export default {
  name: "Content",
  components: {
    RankTable,
    Recommended,
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.content {
  width: 1260px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
</style>