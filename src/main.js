/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-16 09:20:56
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-23 09:49:36
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入antCss文件 --上线前需按需引入
import 'ant-design-vue/dist/antd.css'
//全局引入antd核心文件
import Antd from "ant-design-vue"

//引入quill富文本编辑器
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
//注入Vue-quill-editor
Vue.use(QuillEditor)

//滚动条
import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
});
//开启dev模式
Vue.config.productionTip = true
//注入antd
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
