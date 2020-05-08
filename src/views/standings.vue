<template>
  <table class='standings'>
    <tr>
      <th class='name'>Name</th>
      <th>Score</th>
      <th>Round of 32</th>
      <th>Sweet 16</th>
      <th>Elite 8</th>
      <th>Final 4</th>
      <th>Championship</th>
      <th>Champion</th>
    </tr>
    <tr v-for='(user, idx) in standings' :key='idx'>
      <td class='name selecter' @click='displayUserPicks(user.name)'>{{user.name}}</td>
      <td>{{user.score}}</td>
      <td>{{user.round32}}</td>
      <td>{{user.round16}}</td>
      <td>{{user.elite8}}</td>
      <td>{{user.final4}}</td>
      <td>{{user.championship}}</td>
      <td>{{user.champion}}</td>
    </tr>
  </table>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'standings',
  methods: {
    getStandings() {
      this.$store.dispatch('bracketTheme/setCurrentStandings')
    },
    displayUserPicks(name) {
      console.log(name)
      var userPicks
      this.$store.dispatch('bracketTheme/setUserPicks', name).then(userPicks => {
        this.$router.push({
				name: 'userBracket',
				params: {
          userPicks: userPicks,
          name: name  
        }
			})
      })
    }
  },
  computed: {
    ...mapGetters({
			standings: "bracketTheme/currentStandings",
		})
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  color: black;
  background-color: white;
}
th {
  height: 50px;
  width: 11%;
  background-color: rgb(255, 130, 203);
}
td {
  height: 30px;
}
tr:nth-child(even) {
  background-color: #ebebeb;
}
table, th, td {
  border: 1px solid rgb(0, 204, 255);
}
.standings {
  min-width: 60%;
  max-width: 1000px;
}
.name {
  width: 200px;
}
.selecter {
  transition: 0.3s;
}
.selecter:hover {
  color:rgb(255, 130, 203);
  cursor: pointer;
}
</style>