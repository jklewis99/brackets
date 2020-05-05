<!-- Navigation Component -->

<template>
  <div id="colorful">
    <b-navbar toggleable="lg" type="light" class="navbarcss">
      <b-navbar-brand router-link to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!--how to add dropdown menu items bootstrap -->
      <!-- use this as the format
      <b-dropdown-item href="actual link">text for location</b-dropdown-item>-->

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/standings">Standings</b-nav-item>
          <b-nav-item router-link to="/my-bracket">My Bracket</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="user" @click="logout">Log Out</b-nav-item>
					<b-nav-item v-else router-link to="/authorize">Sign In</b-nav-item>
        </b-navbar-nav>

        <img class='account-img' :src="user.photoURL" width="30" v-if="user">
        <!-- <b-navbar-brand v-else class='img-container' router-link to="/register">
        Create Account
        </b-navbar-brand>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import autho from '../firebaseAuth'
export default {
  name: "NavBar",
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

<style>
img {
	border-radius: 50px;
}
nav {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #000;
  border-bottom-color: #ffa3d0;
}
nav .menu-item a {
  color: rgba(0, 204, 255, 0.795);
  text-decoration: none;
}
#colorful {
  background-color: rgba(0, 204, 255, 0.795);
}
.account-img {
  padding: 0;
  /* padding-left: 16px; */
  /* height: 80%; */
}

a.img-container {
  padding: 0;
  margin: 0;
}
</style>
