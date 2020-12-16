<template>
  
  <div class="leftmenu">
    <vue-scroll>
    <a-layout-sider width="200" style="background: #fff;height: 100%;">
      <a-menu
        mode="inline"
        :default-selected-keys="['childMenu11']"
        :default-open-keys="['parentMenu1']"
        style="height: 100%"
      >

        <a-sub-menu 
        v-for="item in menuList"
        :key="item.key">

          <span slot="title"><a-icon type="user" />{{item.parentName}}</span>
          
          <a-menu-item
          v-for="childItem in item.child "
          :key="childItem.key"
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
import {mapState} from "vuex"
export default {

  computed: {
    
    //解构出菜单列表
    ...mapState({menuList:state=>state.menu.menuList})
  },
};
</script>

<style lang="less" scoped>


.leftmenu {
  height: 100%;
}

  
</style>