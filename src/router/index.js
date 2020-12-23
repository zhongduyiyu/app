/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-10 13:43:19
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-23 10:21:04
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routesConfig  from './routes/routesConfig'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/dashBoard"
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('@/views/login'),
  },
  ...routesConfig,
  //404页面跳转
  {
    path: '*',
    name:"404",
    component:()=>import('@/views/404'),
  }
]


// 改写push方法解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("_token")
  //登录状态判断及跳转
  if(token ||to.path==="/login"){
    next()
  }else{
    router.push("/login")
  }
})

export default router
