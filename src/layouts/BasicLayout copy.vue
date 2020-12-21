<template>
    <a-layout class="layout">
      <a-layout-header class="header">
        <slot name="header"></slot>
      </a-layout-header>

      <a-layout class="main">

        <a-layout-sider class="left">
        <slot name="leftMenu"></slot>
        </a-layout-sider>

        <a-layout-content class="container">

          <a-breadcrumb class="breadcrumb">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item >
              <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>

          <div class="content">
            <vue-scroll :ops="scrollBarOptions">
                <router-view />
            </vue-scroll>
          </div>

        </a-layout-content>

      </a-layout>
      <a-layout-footer class="footer">
        <slot name="footer"></slot>
      </a-layout-footer>
    </a-layout>
</template>

<script>
// import Header from "@/components/GlobalHeader/BasicHeader.vue";
// import LeftMenu from "@/components/GlobalMenu/BasicLeftMenu.vue";
// import Footer from "@/components/GlobalFooter/BasicFooter.vue";
export default {
  data() {
    return {
      scrollBarOptions: {
        rail: {
          background: "#fff",
          opacity: 1,
          size: "12px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false,
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#f1f1f1",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: "8px",
          disable: false,
        },
      },
    };
  },
  // components: {
  //   Header,
  //   LeftMenu,
  //   Footer,
  // },
};
</script>

<style lang="less" scoped>
    .layout{
        width: 100%;
        height:100%;
        overflow: hidden;
        .header{
            padding:0;
        }
        .main{
            .left{
                background-color: #fff;
            }
            .container{
                height: 100%;
                overflow: hidden;
                background-color: #f1f1f1;
                padding:20px;
                padding-bottom:0;
                border:1px solid #f00;
                .breadcrumb{
                    height:auto;
                    background-color: #f1f1f1;
                }
                .content{
                    height: 98%;
                    background-color: #fff;
                    border:1px  solid  #0ff;
                }
            }
        }
        .footer{
            padding: 0;
            height: 60px;
        }
    }
</style>