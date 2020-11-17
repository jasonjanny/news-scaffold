import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios";

// 绑定到原型
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
