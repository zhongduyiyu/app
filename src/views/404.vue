<template>
  <a-result status="404" title="404" sub-title="抱歉！此页面不存在">
    <template #extra>
      <a-button type="primary"
      @click="backToHome"
      >
        返回首页
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  methods: {
      backToHome() {
        this.$router.push("/")
      }
  },
};
</script>