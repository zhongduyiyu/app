<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 09:52:16
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-22 16:56:45
-->
<template>
  
  <div class="leftmenu">
    <div>1</div>
    <vue-scroll>
    <a-layout-sider width="200" style="background: #fff;height: 100%;border:0;">
      <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="['childMenu11']"
      :default-open-keys="['parentMenu1']"
      style="height: 100%;border:0;"
      >
        <a-sub-menu 
        v-for="item in menuConfig"
        :key="item.key"       
        >
          <span slot="title"><a-icon :type="item.icon" />{{item.parentName}}</span>
          <a-menu-item
          v-for="childItem in item.child "
          :key="childItem.key"
          @click="handleMenuClick(childItem.path)"
          > 
          {{childItem.childName}} 
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    </vue-scroll>
  </div>
</template>

<script>
//引入menuConfig
import menuConfig from "@/systemConfig/menuConfig"
export default {
  data(){
    return {
      menuConfig
    }
  },
  created () {
    this.$store.commit("setCurrentViewName",this.handleSetViewName());
  },
  methods: {
    handleMenuClick(path) {
      this.$router.push(path)
      this.$store.commit("setCurrentViewName",this.handleSetViewName())
    },
    handleSetViewName() {
      let fullPath = this.$router.currentRoute.fullPath;
      let viewName = "";
      menuConfig.forEach((item) => {
        item.child.forEach((childItem) => {
          if (childItem.path == fullPath) {
            viewName = item.parentName;
            return;
          }
        });
      });
      return viewName;
    },
  },

};
</script>

<style lang="less" scoped>


.leftmenu {
  height: 100%;
}

  
</style>