import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import aergo from './main-aergo'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  aergo,
  template: '<App/>'
}).$mount('#app')
