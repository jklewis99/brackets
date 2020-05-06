<template>
    <table class='standings'>
      <tr>
        <th>Username</th>
        <th>Score</th>
        <th>Round of 32</th>
        <th>Sweet 16</th>
        <th>Elite 8</th>
        <th>Final 4</th>
        <th>Championship</th>
        <th>Champion</th>
      </tr>
      <tr v-for='(user, idx) in standings' :key='idx'>
        <td>{{user.name}}</td>
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
  width: 80%;
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
tr:nth-child(even) {
  background-color: #ebebeb;
}
table, th, td {
  border: 1px solid rgb(0, 204, 255);
}
#another {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 40px;
}
</style>