import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default-page',
      component: require('@/layouts/default').default
    },
    {
      path: '/signIn',
      name: 'sign-in-page',
      component: require('@/layouts/signin').default
    },
    {
      path: '/dashboard',
      name: 'dashboard-page',
      component: require('@/layouts/dashboard').default,
      children: [
        {
          path: 'welcome',
          name: 'welcome-page',
          component: require('@/views/welcome').default
        },
        {
          path: 'vpn',
          name: 'vpn-page',
          component: require('@/views/vpn').default
        },
        {
          path: 'tools',
          name: 'tools-page',
          component: require('@/views/tool').default
        },
        {
          path: 'apps',
          name: 'tools-page',
          component: require('@/views/app').default
        },
        {
          path: 'setting',
          name: 'setting-page',
          component: require('@/views/setting').default
        },
        {
          path: 'about',
          name: 'about-page',
          component: require('@/views/about').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
