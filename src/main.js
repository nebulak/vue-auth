// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import SRP6JavascriptClientSessionSHA256 from 'thinbus-srp'
Object.defineProperty(Vue.prototype, '$srpClient', { value: SRP6JavascriptClientSessionSHA256 });
// use it with: var srp_client = this.$srpClient();
// source: https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/

Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
