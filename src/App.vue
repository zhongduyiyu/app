<template>
  <div id="app">
    <TopBar />
    <div class="container">
      <router-view />
    </div>
    <BotBar />
  </div>
</template>
<script>
import TopBar from "./components/TopBar";
import BotBar from "./components/BotBar";
export default {
  components: {
    TopBar,
    BotBar,
  },
};
</script>
<style lang="less" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  .container {
    height: 100%;
    overflow-y: auto;
  }
}
</style>

