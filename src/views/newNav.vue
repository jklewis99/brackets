<!-- Navigation Component -->

<template>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to='/universalBracket' class='nav-link'>
            <span class="link-text">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/standings' class='nav-link'>
            <span class="link-text">Standings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/my-bracket' class='nav-link'>
            <span class="link-text">My Bracket</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a class='nav-link'>
            <span v-if="user" @click="logout">
              Log Out
              <img class='account-img' :src="user.photoURL" width="30" v-if="user">
            </span>
					  <router-link to="/authorize" class='nav-link' v-else >Sign In</router-link>
          </a>
        </li>

      </ul>
    </nav>
</template>
<script>
import autho from '../firebaseAuth'
export default {
  name: "newNav",
  components: {},
  data() {
    return {
      services: [
        {
          title: "Web",
          link: "#"
        },
        {
          title: "Design",
          link: "#"
        },
        {
          title: "Videos",
          link: "#"
        }
      ]
    };
	},
	computed: {
		user() {
			return this.$store.getters['user/user']
		}
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
  /* width: 5rem; */
  /* height: 100vh; */
  height: 5rem;
  width: 100vw;
  /* position: fixed; */
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
  padding-left: 5px;
  padding-right: 5px;
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
</style>
