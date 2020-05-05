import Vue from 'vue'
import autho from '../../firebaseAuth'

const state = {
    user: null,
    userPicks: null
}

const getters = {
	user: state => state.user,
    isLogged: state => (state.user !== null),
    userPicks: state => state.userPicks
}

const mutations = {
	setUser: (state, user) => {
		state.user = user
  },
  setUserPicks: (state, userPicks) => {
    state.userPicks = userPicks
	},
	setWinner: (state, payload) => {
    if (payload.round === 'final4') {
      var updatedRegion = (payload.region == 'north' || payload.region == 'east') ? 'north_east' : 'south_west'
      var updatedIdx = (payload.region == 'south' || payload.region == 'north') ? 0 : 1
      state.userPicks[payload.round][updatedRegion][updatedIdx] = payload.team
    }
    else if (payload.round === 'championship') {
      var updatedIdx = payload.region === 'north_east' ? 0 : 1
      state.userPicks[payload.round][updatedIdx] = payload.team
    }
    else if (payload.round === 'champion') {
      state.userPicks[payload.round] = payload.team
    }
    else{
      state.userPicks[payload.round][payload.region][payload.idx] = payload.team
    }
	}
}

const actions = {
	setCurrentUser: ({state, commit }) => {
		commit('setUser', autho.user())
  },
  setCurrentUserPicks: ({commit}) => {
		autho.db.collection('user-picks').doc(state.user.email).get().then((doc) => {
			commit('setUserPicks', doc.data())
		})
		.catch(error => {
			console.log(error)
		})
  },
  setCurrentWinner: ({dispatch, commit}, context) => {
    dispatch('makeUpdate', context).then((updatedRound) => {
      autho.db.collection('user-picks').doc(state.user.email).update({
        [context.round]: updatedRound
      })
      .catch(error => {
        console.log(error)
      })
    })
  },
  makeUpdate: ({commit}, context) => {
    return new Promise((resolve, reject) => {
      commit('setWinner', context)
      resolve(state.userPicks[context.round])
    })
  }
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}