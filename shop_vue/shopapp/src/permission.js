// 全局路由守卫
import router from './router'

// 只要写了路由守卫，一定要放行
router.beforeEach((to,from,next)=>{
    next()
})

router.afterEach(()=>{
    
})