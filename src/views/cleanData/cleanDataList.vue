<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-11 14:13:04
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-18 18:49:28
-->
<template>
  <div class="cleanDataList">
      <PivotTable />
  </div>
</template>

<script>
import PivotTable from "@/components/Table/PivotTable";

export default {
  components: {
    PivotTable,
  },
};
</script>

<style lang="less" scoped>
.cleanDataList{
  height: 100%
}
</style>