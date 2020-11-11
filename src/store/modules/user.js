import Vue from 'vue'
import autho from '../../firebaseAuth'

// will be used to check whether a pick has been changed that exists in future rounds
const roundNumber = {
  round64: 64,
  round32: 32,
  round16: 16,
  elite8: 8,
  final4: 4,
  championship: 2,
  champion: 1
}
const finalFourMap = {
  north: 'north_east',
  east: 'north_east',
  south: 'south_west',
  west: 'south_west'
}

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
  },
  validateFutureRounds: (state, payload) => {
    // will be used to check whether a pick has been changed that is present in future rounds
    // if the change is made in a previous round, then that value must be removed from future rounds
    var round = payload.round
    var region = payload.region
    var pick = payload.pick
    var idx = payload.idx

    var rounds = Object.keys(state.userPicks)
    // loop through each key and determine if the team is in the corresponding index of that round
    for (var eachRound of rounds) {
      if (roundNumber[eachRound] >= roundNumber[round]) {
        // if the round precedes the current round, we disregard
        continue
      }
      
      if (eachRound === 'championship'){
        // change region to an index 0 or 1
        // we can rewrite region because it will not be used following this iteration
        var tempRegion = region === 'north_east' || region === 'north' || region === 'east' ? 0 : 1
        if (state.userPicks[eachRound][tempRegion] === pick) {
          state.userPicks[eachRound][tempRegion] = ''
        }
      }
      else if (eachRound === 'champion') {
        // remove the champion
        if (state.userPicks[eachRound] === pick) {
          state.userPicks[eachRound] = ''
        }
      }
      else{
        var divisor = roundNumber[round] / roundNumber[eachRound]
        var indexToCheck = Math.floor(idx / divisor)
        
        if (eachRound === 'final4'){
          // change region to north_east or south_west
          // we can rewrite region to the concatenation because that is all that will be considered following this iteration
          tempRegion = region === 'north' || region === 'east' ? 'north_east' : 'south_west'
          indexToCheck = (payload.region == 'south' || payload.region == 'north') ? 0 : 1
          if (state.userPicks[eachRound][tempRegion][indexToCheck] === pick) {
            state.userPicks[eachRound][tempRegion][indexToCheck] = ''
          }
        }
        else{
          if (state.userPicks[eachRound][region][indexToCheck] === pick) {
            state.userPicks[eachRound][region][indexToCheck] = ''
          }
        }
        
      } 
    }
  }
}

const actions = {
	setCurrentUser: ({state, commit }) => {
		commit('setUser', autho.user())
  },
  setCurrentUserPicks: ({commit}) => {
		autho.db.collection('user-picks').doc(state.user.displayName).get().then((doc) => {
			commit('setUserPicks', doc.data())
		})
		.catch(error => {
			console.log(error)
		})
  },
  setCurrentWinner: ({dispatch, commit}, context) => {
    return new Promise((resolve, reject) => {
      dispatch('makeUpdate', context).then((update) => {
        
        autho.db.collection('user-picks').doc(state.user.displayName).update({
          round32: update['round32'],
          round16: update['round16'],
          elite8: update['elite8'],
          final4: update['final4'],
          championship: update['championship'],
          champion: update['champion'],
        })
        .catch(error => {
          console.log(error)
        })
        resolve()
      })
    })
  },
  makeUpdate: ({commit}, context) => {
    return new Promise((resolve, reject) => {
      var previousPick
      if (context.round === 'final4') {
        var updatedRegion = (context.region == 'north' || context.region == 'east') ? 'north_east' : 'south_west'
        var updatedIdx = (context.region == 'south' || context.region == 'north') ? 0 : 1
        previousPick = state.userPicks[context.round][updatedRegion][updatedIdx]
      }
      else if (context.round === 'championship'){
        previousPick = state.userPicks[context.round][context.idx]
      }
      else if (context.round === 'champion'){
        previousPick = state.userPicks[context.round]
      }
      else {
        previousPick = state.userPicks[context.round][context.region][context.idx]
      }
      if (previousPick !== context.team) {
        commit('setWinner', context)
        if (previousPick !== ''){
          commit({
            type: 'validateFutureRounds', 
            round: context.round,
            region: context.region,
            idx: context.idx,
            pick: previousPick
          })
        }
      }
      resolve(state.userPicks)
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