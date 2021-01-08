<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-07 14:22:06
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-08 15:27:18
-->
<template>
  <div>
    <vue-scroll :ops="scrollBarOptions">
      <div class="tree">
        <a-tree
          v-model="checkedKeys"
          checkable
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :selected-keys="selectedKeys"
          :tree-data="treeData"
          @expand="onExpand"
          @select="onSelect"
        />
      </div>
    </vue-scroll>
    <a-divider />
    <div class="panel">
      
    </div>
  </div>
</template>

<script>
//引入滚动条配置
import scrollBarOptions from "@/systemConfig/scrollBarOptions.js";
import { saveAs } from "file-saver";
const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",

            children: [
              { title: "0-0-0-0", key: "0-0-0-0" },
              { title: "0-0-0-1", key: "0-0-0-1" },
              {
                title: "0-0-0-2",
                key: "0-0-0-2",
                children: [
                  { title: "0-0-0-0", key: "0-0-0-0" },
                  { title: "0-0-0-1", key: "0-0-0-1" },
                  { title: "0-0-0-2", key: "0-0-0-2" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];
export default {
  data() {
    return {
      scrollBarOptions,
      expandedKeys: ["0-0-0", "0-0-1"],
      autoExpandParent: true,
      checkedKeys: null,
      selectedKeys: [],
      treeData,
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
    handleDownload() {
      var FileSaver = require("file-saver");
      FileSaver.saveAs(
        "https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi",
        "nodejs.msi"
      );
    },
  },
};
</script>

<style lang="less" scoped>
.tree {
  max-height: 400px;
}
.panel {
  height: 100px;
  max-height: 250px;
}
</style>