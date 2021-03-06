import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from "vue-toasted";
import titleMixin from './mixins/titleMixin'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.mixin(titleMixin)
Vue.use(Toasted);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
