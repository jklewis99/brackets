<!-- Navigation Component -->

<template>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item left">
          <router-link to='/universalBracket' class='nav-link'>
            <span class="link-text">Home</span>
          </router-link>
        </li>
        <li class="nav-item left">
          <router-link to='/standings' class='nav-link'>
            <span class="link-text">Standings</span>
          </router-link>
        </li>
        <li class="nav-item left">
          <router-link :to="{name: 'myBracket', params: {userPicks: userPicks}}" class='nav-link'>
            <span class="link-text">My Bracket</span>
          </router-link>
        </li>
        <li class="nav-item">
            <span v-if="user" class='nav-link'>
              <span  @click="logout" class="link-text">Log Out</span>
              <img class='account-img' :src="user.photoURL" width="30" v-if="user.photoURL">
              <img class='account-img' src="../assets/rock.jpg" width="30" v-else>
            </span>
					  <router-link to="/authorize" class='link-text' v-else >Sign In</router-link>
          
        </li>

      </ul>
    </nav>
</template>
<script>
import autho from '../firebaseAuth'
import {mapGetters} from 'vuex'
export default {
  name: "newNav",
  components: {},
  data() {
    return {
      
    };
	},
	computed: {
		user() {
			return this.$store.getters['user/user']
    },
    ...mapGetters({
      bracketTheme: "bracketTheme/currentBracketState",
      userPicks: "user/userPicks"
    })
	},
	methods: {
		logout() {
			autho.logout()
		}
	}
};
</script>

<style scoped>


.navbar {
  height: 4rem;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: var(--bg-primary);
  z-index: 999;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* height: 100%; */
  width: 100%;
}
.nav-item {
  /* padding-left: 15px;
  padding-right: 15px; */
  text-align: center;
}
.left{
  padding-left: 15px;
  padding-right: 15px;
  width: auto;
}
.nav-item:last-child {
  margin-left: auto;
}

.nav-link {
  color: white;
}
.nav-link:hover {
  color: rgb(112, 112, 112);
}
.account-img {
  margin-left: 10px;
}
.link-text:hover {
  cursor: pointer;
}
img {
	border-radius: 50px;
}
</style>
