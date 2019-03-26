import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' //引入初始化样式
import {fetch} from '@/utils' // 引入axios 模块
import 'amfe-flexible' // 引入移动端淘宝方案

Vue.config.productionTip = false
Vue.prototype.$axios = fetch
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
