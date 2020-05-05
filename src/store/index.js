import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import bracketTheme from './modules/bracketTheme'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		user,
		bracketTheme
	}
})