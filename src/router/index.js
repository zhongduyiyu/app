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
