// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import Vuex from 'vuex'
import store from './store'
import firebase from './services/firebase'
import 'buefy/lib/buefy.css'
import 'begeta/css/begeta.min.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(firebase)
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
