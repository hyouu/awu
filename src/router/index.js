import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'components/recommend/recommend'
import my from 'components/recommend/my'
import moment from 'components/moment/moment'
import bbs from 'components/bbs/bbs'
import login from 'pages/login/login'
import register from 'pages/register/register'
import mine from 'pages/mine/mine'
import post from 'pages/post/post'
import detail from 'pages/detail/detail'
import modify from 'pages/mine/modify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/moment',
      name: 'moment',
      component: moment
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: bbs
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    }
  ]
})
