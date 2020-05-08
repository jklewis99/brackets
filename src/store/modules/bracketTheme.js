import Vue from 'vue'
import autho from '../../firebaseAuth'
const state = {
  currentBracketState: null,
  standings: null,
}

const getters = {
  currentBracketState: state => state.currentBracketState,
  currentStandings: state => state.standings
}

const mutations = {
	setBracketState: (state, payload) => {
		state.currentBracketState = {
			name: payload.name,
      seeds: payload.seeding,
      roundState: payload.roundState
		}
  },
  setStandings: (state, payload) => {
    state.standings = payload.standings
  }
}

const actions = {
	setCurrentBracket: ({ commit }, context) => {
		var seeding = regionalSeeding(context.currentBracketState.seeding)
		commit({
			type: 'setBracketState',
      name: context.name, seeding,
      roundState: context.currentBracketState
		})
		function regionalSeeding(regionSeeds) {
			// for each key, organize it in the correct format so it can be easily referenced
			// when displayed on page
      var keys = Object.keys(regionSeeds)
      console.log(keys)
			var seeds = {

      }
			for (let key of keys) {
				seeds[key] = swapSeedsForValues(regionSeeds[key])
      }
      console.log(seeds)
			return seeds
		}
		function swapSeedsForValues(valuesArray) {
			var seedsArray = sortedSeeding(valuesArray.length)
			for (let i = 0; i < seedsArray.length; i++) {
				var j = 0
				// make sure the lower seed is always listed first
				if (seedsArray[i][j] > seedsArray[i][j+1]){
					var temp = seedsArray[i][j];
					seedsArray[i][j] = seedsArray[i][j+1];
					seedsArray[i][j+1] = temp;
				}
				seedsArray[i][j] = valuesArray[seedsArray[i][j] - 1]
				seedsArray[i][j+1] = valuesArray[seedsArray[i][j+1] - 1]
			}
			return seedsArray
		}
		function sortedSeeding(regionSize) {
			// Solution available (changed briefly)
			// https://stackoverflow.com/questions/5770990/sorting-tournament-seeds/45572051#45572051

			var participants = Array.from({ length: regionSize }, (v, k) => k + 1);
			var bracket = getBracket(participants);

			return bracket;

			function getBracket(participants) {
				var participantsCount = participants.length;
				var rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));
				// var bracketSize = Math.pow(2, rounds);
				// var requiredByes = bracketSize - participantsCount;

				if (participantsCount < 2) {
					return [];
				}

				var matches = [[1, 2]];

				for (var round = 1; round < rounds; round++) {
					var roundMatches = [];
					var sum = Math.pow(2, round + 1) + 1;

					for (var i = 0; i < matches.length; i++) {
						var higherSeed = changeIntoBye(matches[i][0], participantsCount);
						var lowerSeed = changeIntoBye(sum - matches[i][0], participantsCount);
						roundMatches.push([higherSeed, lowerSeed]);
						higherSeed = changeIntoBye(sum - matches[i][1], participantsCount);
						lowerSeed = changeIntoBye(matches[i][1], participantsCount);
						roundMatches.push([higherSeed, lowerSeed]);
					}
					matches = roundMatches;

				}
				return matches
			}
			function changeIntoBye(seed, participantsCount) {
				return seed <= participantsCount ?  seed : null;
			}
		}
  },
  setCurrentStandings: ({state, commit}) => {
    let tempArray = []
    let scoresArray = []

    autho.db.collection('user-picks').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {        
        // push onto an array so it can be synchronously looped
        tempArray.push({
          choices: doc.data(),
          id: doc.id
        })
      })
    })
    .then(() => {
      getScore(tempArray).then(standings => {
        commit({
          type: 'setStandings',
          standings: standings 
        })
      })
    })

    function getScore(users) {
      var weightedScore = {
        champion: 32,
        championship: 16,
        final4: 8,
        elite8: 4,
        round16: 2,
        round32: 1
      }
      return new Promise((resolve, reject) => {
        for (var i = 0; i < users.length; i++){
          let obj = {
            name: users[i].id,
            score: 0,
            round32: 0,
            round16: 0,
            elite8: 0,
            final4: 0,
            championship: 0,
            champion: 0,
          }
          const rounds = Object.keys(users[i].choices)
          for (var round of rounds){
            if (round !== 'championship' && round !== 'champion'){
              var regions = Object.keys(users[i].choices[round])
              for (var region of regions) {
                for (var j = 0; j < users[i].choices[round][region].length; j++){
                  if (users[i].choices[round][region][j] === state.currentBracketState.roundState[round][region][j] && state.currentBracketState.roundState[round][region][j] !== ""){
                    // update the current round score
                    obj[round] = obj[round] + weightedScore[round]
                  }
                } 
              }
              // update overall score
              obj.score = obj.score + obj[round]
            }
          }
          scoresArray.push(obj)
        }
        // return the updated standings
        resolve(scoresArray.sort(compare))
      })
    }
    function compare(userA, userB) {
      if (userA.score > userB.score) {
        return -1
      }
      else if (userA.score < userB.score) {
        return 1
      }
      return 0
    }
  },
  setUserPicks: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      console.log(user)
		  autho.db.collection('user-picks').doc(user).get().then((doc) => {
        if (doc.exists){
          resolve(doc.data())
        }
        else {
          reject()
        }
      })
		  .catch(error => {
			  console.log(error)
		  })
    })
  },
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}