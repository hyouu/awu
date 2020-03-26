import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCropper from 'vue-cropper'
import 'babel-polyfill'

import 'common/js/iconfont'

import 'common/stylus/index.styl'
import '@/permission' // permission control

Vue.config.productionTip = false
Vue.use(VueCropper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
