import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 获取路由配置对象
let req = require.context('./modules',true,/\.js$/);
const requireAll = requireContext => requireContext.keys().map((requireContext)=>{
  let router = req(requireContext).default
  return router
})

const routes = requireAll(req)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
