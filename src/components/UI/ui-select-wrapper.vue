<!--
 * @Description: 下拉包裹组件
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-24 11:13:50
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-30 09:58:20
-->
<template>
  <div class="wrapper"  @click="handleClick" >
    <div class="title" :style="wrapperStyle">
      <a-icon :type="icon" /> <span>{{text}}</span>
    </div>
    <div class="content" v-show="showFieldFilterList">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: 120,
    },
    text:{
      type:String,
      default: '筛选字段',
    },
    icon:{
      type:String,
      default: 'funnel-plot',
    }
  },
  data() {
    return {
      showFieldFilterList: false,
      wrapperStyle:{width: this.$props.width + 'px'}
    };
  },
  created() {},
  methods: {
    handleClick(e) {
      e.stopPropagation();
      //这个地方取反会导致点击多选框的框时，隐藏content的内容
      this.showFieldFilterList = true;
      if (this.showFieldFilterList) {
        this.wrapperStyle.border = '1px solid #1890ff'
        this.wrapperStyle.color = '#1890ff'
        document.body.addEventListener("click", this.handleHidden);
      }
    },
    handleHidden(e) {
      e.stopPropagation();
        this.showFieldFilterList = false; 
    }
  },
  watch: {
    showFieldFilterList: function (newValue, oldValue) {
      //移除点击事件
      if (newValue === false) {
        document.body.removeEventListener("click", this.handleHidden);
        this.wrapperStyle.border = ''
        this.wrapperStyle.color = ''
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  user-select: none;
  position: relative;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    position: relative;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      border: 1px solid #1890ff;
      color: #1890ff;
    }
  }
  span {
    margin-left: 10px;
  }
  .content {
    position: absolute;
    top: 35px;
    width: 120px;
    margin: 0;
    padding: 4px 5px;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1050;
    label {
      margin: 0;
    }
  }
}
</style>