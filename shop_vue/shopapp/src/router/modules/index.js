export default {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index'),
    children: [
        {
            path: 'home',
            name:'home',
            component:()=>import('@/views/home'),
            meat:{
                auth:false,
                title:'主页'
            }
        },
        {
            path:'login',
            name:'login',
            component:()=>import('@/views/login'),
            meat:{
                auth:false,
                title:'登录'
            }
        },
        {
            path:'register',
            name:'register',
            component:()=>import('@/views/register'),
            meat:{
                auth:false,
                title:'注册'
            }
        },
        {
            path:'shoppingCart',
            name:'shoppingCart',
            component:()=>import('@/views/shoppingCart'),
            meat:{
                auth:true,
                title:'购物车'
            }
        },
        {
            path:'typeShop',
            name:'typeShop',
            component:()=>import('@/views/typeShop'),
            meat:{
                auth:false,
                title:'商品列表'
            }
        },
        {
            path:'detail',
            name:'detail',
            component:()=>import('@/views/detail'),
            meat:{
                auth:false,
                title:'商品详情'
            }
        }
    ]
}