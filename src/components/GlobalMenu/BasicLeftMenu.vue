<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 09:52:16
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 16:05:33
-->
<template>
  <div class="leftmenu">
    <vue-scroll>
      <a-layout-sider
        width="200"
        style="background: #fff; height: 100%; border: 0"
      >
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="defaultSelectedKeys"
          :default-open-keys="defaultOpenKeys"
          style="height: 100%; border: 0"
        >
          <a-sub-menu v-for="item in menuConfig" :key="item.key">
            <span slot="title"><a-icon :type="item.icon" />{{ item.parentName }}</span
            >
            <a-menu-item
              v-for="childItem in item.child"
              :key="childItem.key"
              @click="
                handleMenuClick(
                  childItem.path,
                  item.parentName,
                  item.key,
                  childItem.key
                )
              "
            >
              {{ childItem.childName }}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
    </vue-scroll>
  </div>
</template>

<script>
//引入menuConfig
import menuConfig from "@/systemConfig/menuConfig";
export default {
  data() {
    return {
      menuConfig,
      defaultOpenKeys: ["parentMenu1"], //默认打开的菜单
      defaultSelectedKeys: ["childMenu11"], //默认选中的菜单
    };
  },
  created() {
    this.setMenuStatus();
    this.$store.commit("setCurrentViewName", this.setViewName());
  },

  methods: {
    //设置菜单状态
    setMenuStatus() {
      let menuStatus = JSON.parse(sessionStorage.getItem("_menuStatus"));
      if(menuStatus){
        this.defaultOpenKeys = menuStatus.defaultOpenKeys;
        this.defaultSelectedKeys = menuStatus.defaultSelectedKeys;
      }
    },
    handleMenuClick(path, parentName, parentKey, childkey) {
      //跳转
      this.$router.push(path);
      //header页面名称显示
      this.$store.commit("setCurrentViewName", parentName);
      //存储菜单状态
      sessionStorage.setItem(
        "_menuStatus",
        JSON.stringify({
          defaultOpenKeys: [parentKey],
          defaultSelectedKeys: [childkey],
          parentName:parentName
        })
      );
    },
    setViewName() {
      let menuStatus = sessionStorage.getItem("_menuStatus")
      if(menuStatus){
        menuStatus = JSON.parse(menuStatus);
        return menuStatus.parentName
      }
      let fullPath = this.$router.currentRoute.fullPath;
      let viewName = "";
      for (let i = 0; i < menuConfig.length; i++) {
        for (let j = 0; j < menuConfig[i].child.length; j++) {
          if (menuConfig[i].child[j].path == fullPath) {
            viewName = menuConfig[i].parentName;
            break;
          }
        }
        if (viewName) {
          break;
        }
      }
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