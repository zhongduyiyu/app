/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-14 09:31:58
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-22 16:04:02
 */
const state = {
   currentViewName:""
}
const getters = {

}

const mutations = {
  setCurrentViewName(state,viewName){
    state.currentViewName = viewName
  }
}
//用来管理mutations
const actions = {

}

export default {
state,
getters,
mutations,
actions
}