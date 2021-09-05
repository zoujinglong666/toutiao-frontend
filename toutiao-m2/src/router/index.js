import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabbar from '../components/Tabbar'
import Login from '../views/Login'
import My from '../views/My'
import Home from '../views/Home'
import Video from '../views/Video'
import Questions from '../views/Questions'





Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    component:Tabbar,
    children:[
      {
        path:'',//默认子路由
        component:Home
      },
      {
        path:'/my',
        component:My
      },
      {
        path:'/video',
        component:Video
      },
      {
        path:'/questions',
        component:Questions
      }

    ]
  },
  {
    path:'/login',
    component:Login
  }
]
const router = new VueRouter({
  routes
})


// 路由导航守卫（拦截器）的作用就是控制页面的访问状态
// beforeEach 是全局前置守卫，任何页面的访问都要经过这里
// 路由导航守卫：说白了所有页面的导航都会经过这里
// 守卫页面的导航的
// to：要去的路由信息
// from：来自哪里的路由信息
// next：放行方法
router.beforeEach((to, from, next) => {
  // 如果要访问的页面不是 /login，校验登录状态
  // 如果没有登录，则跳转到登录页面
  // 如果登录了，则允许通过
  // 允许通过
  // next()

  const user = JSON.parse(window.localStorage.getItem('toutiao-user'))

  // 校验非登录页面的登录状态
  if (to.path !== '/login') {
    if (user) {
      // 已登录，允许通过
      next()
    } else {
      // 没有登录，跳转到登录页面
      next('/login')
    }
  } else {
    // 登录页面，正常允许通过
    next()
  }
})
export default router
