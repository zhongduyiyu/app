import Vue from 'vue'
import VueRouter from 'vue-router'
import example  from './routes/example.js'
import home from "./routes/home.js"
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('@/views/login'),
  },
  ...example,
  ...home,
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
  //登录状态判断及跳转
  if(store.state.token.token ||to.path==="/login"){
    next()
  }else{
    router.push("/login")
  }
})

export default router
