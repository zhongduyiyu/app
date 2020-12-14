import Vue from 'vue'
import VueRouter from 'vue-router'
import example  from './routes/example.js'
import home from "./routes/home.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  
 ...example,
 ...home
]

const router = new VueRouter({
  routes
})

export default router
