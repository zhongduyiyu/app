<!--
 * @Description: 基础布局组件
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 09:39:46
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-08 15:20:40
-->



<template>
  <a-layout class="layout" theme="dark">

    <a-layout-sider class="left">
      <div class="info">
          <img src="" alt="">
          <p>报告自动化系统</p>
      </div>
      <LeftMenu/>
    </a-layout-sider>

    <a-layout class="main">
      <a-layout-header class="header"><Header /></a-layout-header>
      <a-layout-content class="container">
        <a-breadcrumb class="breadcrumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        
        <div class="content">
          <vue-scroll :ops="scrollBarOptions">
            <slot name="content"></slot>
            <router-view />
          </vue-scroll>
        </div>
        
      </a-layout-content>
      <a-layout-footer class="footer"><Footer /></a-layout-footer>
    </a-layout>
    
  </a-layout>
</template>

<script>
import Header from "@/components/GlobalHeader/BasicHeader.vue";
import LeftMenu from "@/components/GlobalMenu/BasicLeftMenu.vue";
import Footer from "@/components/GlobalFooter/BasicFooter.vue";
//引入滚动条配置
import scrollBarOptions from "@/systemConfig/scrollBarOptions.js"
export default {
  data() {
    return {
      scrollBarOptions
    };
  },
  created () {
  },
  components: {
    Header,
    LeftMenu,
    Footer,
  },
};
</script>

<style lang="less" scoped>
@import url("./BasicLayout.less");
</style>