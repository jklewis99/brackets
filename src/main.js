import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import autho from './firebaseAuth.js'
import newNav from './components/newNav'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    autho.init(this)
  },
	template: '<App/>',
	components: {
		newNav,
		App
	},
  // render: h => h(App)
})
