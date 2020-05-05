import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import navbar from './components/navbar.vue'
import {store} from './store'
import autho from './firebaseAuth.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)


new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    autho.init(this)
  },
	template: '<App/>',
	components: {
		navbar,
		App
	},
  // render: h => h(App)
})
