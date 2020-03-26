import router from './router'
import store from './store'
import { getToken } from 'common/js/auth' // 验权

const whiteList = ['/login', '/register'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.state.user.username === '') {
        store.dispatch('getInfo').then(res => { // 拉取用户信息
          next()
        }).catch(() => {
          store.dispatch('logOut').then(() => {
          // Message.error('验证失败,请重新登录')
            alert('验证失败,请重新登录')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
})
