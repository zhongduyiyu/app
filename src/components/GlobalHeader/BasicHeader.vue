<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 09:52:12
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-22 16:54:43
-->
<template>
  <div class="header">
    <div class="info">
      <div class="title">
        {{ this.$store.state.menu.currentViewName }}
      </div>
      <div class="userInfo">
        <a-avatar
          size="large"
          icon="user"
          style="background: #000; margin: 0 20px"
        />
        <div class="userName">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link"
              @click="(e) => e.preventDefault()"
              style="color: rgba(0, 0, 0, 0.65)"
            >
              测试用户
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="">退出登录</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuConfig from "@/systemConfig/menuConfig";
export default {

};
</script>

<style lang="less" scoped>
@import url("./BasicHeader.less");
</style>

