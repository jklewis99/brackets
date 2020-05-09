<!-- Navigation Component -->

<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item left">
        <font-awesome-icon icon="home" />
        <router-link to="/universalBracket" class="nav-link">
          
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="nav-item left">
        <font-awesome-icon icon="medal" />
        <router-link to="/standings" class="nav-link">
          <span class="link-text">Standings</span>
        </router-link>
      </li>
      <li class="nav-item left">
        <font-awesome-icon icon="user-edit" v-if='validationDate'/>
        <font-awesome-icon icon="user-check" v-else/>
        <router-link
          :to="{name: 'userBracket', params: {userPicks: userPicks, name: user.displayName}}"
          class="nav-link"
        >
          <span class="link-text">My Bracket</span>
        </router-link>
      </li>
      <li class="nav-item">
        <div v-if="user" class="nav-link user">
          <span @click="logout" class="link-text">Log Out</span>
          <img class="account-img" :src="user.photoURL" width="30" v-if="user.photoURL" />
          <img class="account-img" src="../assets/rock.jpg" width="30" v-else />
        </div>
        <router-link to="/authorize" class="link-text" v-else>Sign In</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import autho from "../firebaseAuth";
import { mapGetters } from "vuex";
export default {
  name: "newNav",
  data() {
    return {
      validationDate: this.$parent.validationDate
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    ...mapGetters({
      bracketTheme: "bracketTheme/currentBracketState",
      userPicks: "user/userPicks",
      user: "user/user"
    })
  },
  methods: {
    logout() {
      autho.logout();
    }
  }
};
</script>

<style scoped>
span {
  display: inline-block;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar {
  font-size: 18px;
  font-weight: bold;
  height: 4rem;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  background-color: var(--bg-primary);
  z-index: 999;
}

.navbar-nav {
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* height: 100%; */
  max-width: 100%;
}
.nav-item {
  padding-right: 15px;
  text-align: center;
}
.left {
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
