import Vue from 'vue'
import VueRouter from 'vue-router'
import example  from './routes/example.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/example"
  },
  
 ...example
]

const router = new VueRouter({
  routes
})

export default router
