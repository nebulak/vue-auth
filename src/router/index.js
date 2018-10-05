import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Inbox from '@/components/Inbox'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: '/inbox',
            name: 'inbox',
            component: Inbox,
            meta: {
                requiresAuth: true
            }
        }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth_token') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next({ name: 'inbox'})
    }
  } else if(to.matched.some(record => record.meta.guest)) {
	    if(localStorage.getItem('auth_token') == null){
	        next()
	    }
	    else{
	        next({ name: 'inbox'})
	    }
    }else {
    next()
  }
})

export default router
