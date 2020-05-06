import firebase from 'firebase'
import 'firebase/firestore'
var firebaseui = require('firebaseui')
// private firebase configuration goes here
import config from './config.js'

const autho = {
	context: null,
	uiConfig: null,
	ui: null,
	db: null,
	currentTheme: 'film-score',
	init(context) {
		// called when the application is ready
		this.context = context; // make an access to main vue instance

		firebase.initializeApp(config); // initialize firebase
		this.db = firebase.firestore(); // grab firestore 

		firebase.analytics()
		this.uiConfig = {
			// location for redirect
			signInSuccessUrl: 'myBracket',
			// provide firebase login options with google, facebook, and email
			signInOptions: [
				firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID
			]
		}
		// save this property so we can use it in our login component
		this.ui = new firebaseui.auth.AuthUI(firebase.auth());

		firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')
      this.context.$store.dispatch('bracketTheme/setCurrentStandings')
			let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
			let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)
			// check if user has already made changes to their bracket
      // let primaryKey = user.email
      if (user){
        this.db.collection('user-picks').doc(user.email).get().then(doc => {
          if (!doc.exists){
            this.db.collection('user-picks').doc(user.email).set({
              round32: {
                north: fillEmpty(8, ''),
                east: fillEmpty(8, ''),
                south: fillEmpty(8, ''),
                west: fillEmpty(8, ''),
              },
              round16: {
                north: fillEmpty(4, ''),
                east: fillEmpty(4, ''),
                south: fillEmpty(4, ''),
                west: fillEmpty(4, ''),
              },
              elite8: {
                north: ['', ''],
                east: ['', ''],
                south: ['', ''],
                west: ['', '']
              },
              final4: {
                north_east: ['', ''],
                south_west: ['', '']
              },
              championship: ['', ''],
              champion: ''
            })
          }
        })
        .then(() => {
          this.context.$store.dispatch('user/setCurrentUserPicks')
        })

      }
			// if state changes, check if the user is permitted to be at the current location
			if (requireAuth && !user){
        console.log('requireAuth and not user')
				this.context.$router.push('authorize')
			} 
			else if (guestOnly && user){
        console.log('guest only and user')
				this.context.$router.push('universal-bracket')
			}
		});

		this.db.collection('bracket-themes').doc(this.currentTheme).get().then(doc => {
			  this.context.$store.dispatch({
				type: 'bracketTheme/setCurrentBracket', 
        name: doc.id,
        currentBracketState: doc.data()    
			})
		})
	},
	authForm(container) {
		// execute build of Firease UI in container
		this.ui.start(container, this.uiConfig);
	},
	user() {
		// return the user if the user exists
		return this.context ? firebase.auth().currentUser : null;
  },
	logout() {
		// firebase logout method
		firebase.auth().signOut();
	},
	
}

function fillEmpty(size, defaultValue){
	var arr = [];
	for (var i = 0; i < size; i++){
		arr.push(defaultValue)
	}
	return arr;
}

export default autho

// export {
// 	db,
// 	autho,
// 	// currentUser,
// 	seeds
// }
