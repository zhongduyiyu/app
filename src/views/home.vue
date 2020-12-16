<template>
  <div class="home">
    <Header />
    <div class="main">
      <LeftMenu />
      <vue-scroll :ops="scrollBarOptions">
        <div class="container">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application Center</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">Application List</a></a-breadcrumb-item
            >
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>

          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>

          <router-view />
        </div>
      </vue-scroll>
    </div>
    <Footer />
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      scrollBarOptions: {
        rail: {
            background: '#f1f1f1',
            opacity: 1,
            size: '12px',
            specifyBorderRadius: false,
            gutterOfEnds: null,
            gutterOfSide: '2px',
            keepShow: false
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#ccc",
          opacity: 1,
          hoverStyle:false,
          specifyBorderRadius: false,
          minSize: false,
          size: "8px",
          disable: false,
        },
      },
    };
  },
  components: {
    LeftMenu,
    Header,
    Footer,
  },
};
</script>

<style lang="less" scope>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    height: 100%;
    display: flex;
    // flex:1;
    overflow-y: auto;
    .container {
      width: 100%;
      height: 100%;
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>