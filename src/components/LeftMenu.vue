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
export default {
  data(){
    return{
      menuList:[
        {
          key:"parentMenu1",
          parentName:"菜单一",
          child:[
            {
              key:"childMenu11",
              childName:"儿子1",
            },
            {
              key:"childMenu21",
              childName:"儿子2",
            },
            {
              key:"childMenu31",
              childName:"儿子3",
            },

          ]
        },
        {
          key:"parentMenu2",
          parentName:"菜单二",
          child:[
           {
              key:"childMenu12",
              childName:"儿子1",
            },
            {
              key:"childMenu22",
              childName:"儿子2",
            },
            {
              key:"childMenu32",
              childName:"儿子3",
            },

          ]
        },
        {
          key:"parentMenu3",
          parentName:"菜单三",
          child:[
            {
              key:"childMenu13",
              childName:"儿子1",
            },
            {
              key:"childMenu23",
              childName:"儿子2",
            },
            {
              key:"childMenu33",
              childName:"儿子3",
            },
          ]
        },
        
      ]
    }
  }
};
</script>

<style lang="less" scoped>


.leftmenu {
  height: 100%;
}

  
</style>