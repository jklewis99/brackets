import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import autho from './firebaseAuth.js'
import newNav from './components/newNav'
import { library } from '@fortawesome/fontawesome-svg-core' // svg icons
import { faHome, faMedal, faUserCheck, faUserEdit, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faMedal, faUserCheck, faUserEdit, faTimesCircle, faQuestionCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    autho.init(this).then((re) => {
      console.log("promsied", re)
    })
  },
	template: '<App/>',
	components: {
		newNav,
		App
	},
  // render: h => h(App)
})
