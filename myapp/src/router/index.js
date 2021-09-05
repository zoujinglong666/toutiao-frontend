import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Detail from '../views/Detail'
import Purchasetickets from '../views/Purchasetickets'
import City from '../views/City'
import Search from '../views/Search'
import Info from '../views/Info'
// import Login from '../views/Login'//这里注释因为下面对应代码实行了路由懒加载
import Nowplaying from '../views/film/Nowplaying'
import Comingsoon from '../views/film/Comingsoon'
import Discount from '../views/discount'

Vue.use(VueRouter) // 注册模块，这个就是router-view模块，已经全局注册

const routes = [{
  path: '/film',
  component: Film,
  children: [{
    path: 'nowplaying',
    component: Nowplaying
  },
  {
    path: 'comingsoon',
    component: Comingsoon
  },

  {
    path: '',
    redirect: '/film/nowplaying'
    // redirect:'/city'
  }

  ]
},
{
  path: '/center',
  component: Center
},
{
  path:'/discount',
  component:Discount
  
},
{
  path: '/info/:cinemaId',
  component: Info
},

{
  path: '/search',
  component: Search
},
{
  path: '/purchasetickets/:cinemaId',//动态路由
  component: Purchasetickets
},
{
  path: '/login',
  component: () => import('../views/Login')
},
{
  path: '/cinema',
  component: Cinema
},
{
  path: '/city',
  component: City
},
{
  path: '*',
  redirect: '/film'
},

{
  path: '/detail/:myid', // 动态路由
  component: Detail,
  name: 'aaaDetail'

}
]

const router = new VueRouter({
  // mode:'history',//这种模式路径没有#号，看上去好看一点
  mode: 'hash', // 这种模式路径#号,
  routes
})
// 全局守卫
// router.beforeEach((to, from, next) => {
//   let auth = ['/center']

//   if (auth.includes(to.fullPath)) {
//     // console.log('验证token')
//     if (!localStorage.getItem('token')) {
//       next('/login')
//     }else{
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
