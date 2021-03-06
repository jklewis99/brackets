import Vue from 'vue'
import Router from 'vue-router'
import universalBracket from './views/universalBracket.vue'
import bracket from './views/userBracket.vue'
import authorize from './views/authorize.vue'
import autho from './firebaseAuth'
import standings from './views/standings.vue'

Vue.use(Router)

var routes = [
	{
		path: '/universalBracket',
		name: 'universal-bracket',
		component: universalBracket
	},
	{
		path: '/bracket/:user',
		name: 'userBracket',
		component: bracket,
    meta: { requireAuth: true },
    props: true
	},
	{
		path: '/authorize',
		name: 'authorize',
		component: authorize,
		meta: { guestOnly: true }
  },
  {
    path: '/standings',
    name: 'standings',
    component: standings,
    meta: { requireAuth: true}
  },
	{
		path: '*', redirect: '/universalBracket'
	}
]

export const router = new Router({
	mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = autho.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser){
		next('authorize')
	}
  else if (guestOnly && currentUser){
    // console.log("OPE NO...")
		next('universalBracket')
	}
  else{
    // console.log('require', requireAuth)
    // console.log('Not currentUser', !currentUser)
		next()
	}
})
