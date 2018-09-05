import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Dashboard from '@/components/Dashboard'

import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'

import AriticleList from '@/components/article/list'

Vue.use(Router)

let router = new Router({
  mode:'history',
    routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'el-icon-menu', // 图标样式class
      children: [
        {path: '/index', component: Dashboard, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '留言管理',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'el-icon-menu', // 图标样式class
      children: [
        {path: '/chat/chat', component: chat, name: 'chat', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '文章管理',
      menuShow: true,
      iconCls: 'el-icon-location',
      children: [
        {path: '/article/list', component: AriticleList, name: '图书列表', menuShow: true},
      ]
    },
    {
      path: '/',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'el-icon-location',
      children: [
        {path: '/user/list', component: UserPList, name: '用户列表', menuShow: true},
        {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
        {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
      ]
    }
   ]
})


// router.beforeEach((to, from, next) => {
//   // console.log('to:' + to.path)
//   if (to.path.startsWith('/login')) {
//     window.localStorage.removeItem('access-user')
//     next()
//   } else {
//     let user = JSON.parse(window.localStorage.getItem('access-user'))
//     if (!user) {
//       next({path: '/login'})
//     } else {
//       next()
//     }
//   }
// })

export default router
