import Vue from 'vue'
import Vuex from 'vuex'
import menu from "./menu"
import token from "./token"
Vue.use(Vuex)

 const store  = new Vuex.Store({
  //合并仓库
  modules: {
    menu,
    token
  }
})
export default store
