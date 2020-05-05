<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar";
export default {
  name: "app",
  components: {
    navbar
  },
  data() {
    return {
    };
  },
};
</script>

<style>
#app {
  /* width: 1420px; */
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: rgb(37, 37, 37);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b3d6f8;
}
/* span {
    height: 100%;
    position:relative; 
}  */
h3 {
  font-size: 12px;
  padding: 0;
  margin: 0;
  bottom: 0;
  margin-bottom: 0px;
  position: absolute;
}

#another {
  margin: 10px;
}
.grid-columns {
  height: 994px;
  /* background-color: rgb(119, 21, 119); */
  display: grid;
  grid-template-columns: repeat(4, 120px) 440px repeat(4, 120px);
}

.grid-64,
.grid-32,
.grid-16,
.grid-8 {
  display: grid;
}
.grid-64 {
  grid-template-rows: repeat(8, 59px) 50px repeat(8, 59px);
}
.grid-32 {
  grid-template-rows: repeat(4, 118px) 50px repeat(4, 118px);
}
.grid-16 {
  grid-template-rows: repeat(2, 236px) 50px repeat(2, 236px);
}
.grid-8 {
  grid-template-rows: repeat(1, 472px) 50px repeat(1, 472px);
}
.final-4-championship {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 522px;
  /* border: 2px solid green; */
}
.left-2,
.championship,
.right-2 {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.championship {
  justify-content: center;
}
.left-2,
.right-2 {
  width: 120px;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  justify-content: center;
}
.left-2 {
  border-right: 2px solid grey;
}
.right-2 {
  border-left: 2px solid grey;
  float: right;
}
.winner-left,
.winner-right {
  width: 140px;
  background-color: white;
  height: 30px;
}
.winner-right, .winner-left {
  overflow: hidden;
  transform: translateY(480%);
  color: black;
}
.winner-left {
  margin-left: 50px;
}
.winner-right {
  margin-left: -70px;
}
.champion {
  background-color: white;
  width: 140px;
  height: 140px;
}

.teams-and-matchups {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.single-matchup-left,
.single-matchup-right {
  /* display: grid; */
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
  width: 100%;
  height: 51%;
  text-align: center;
  bottom: 0;
  padding: 0px;
  position: relative;
}
.single-matchup-left,
.single-matchup-left1 {
  border-right: solid grey 2px;
}
.single-matchup-right,
.single-matchup-right1 {
  border-left: solid grey 2px;
}
.team1,
.team2 {
  /* height: 15px; */
  /* margin-top: -10px; */
  display: flex;
  justify-content: left;
  white-space: nowrap;

  /* margin-bottom: 5px */
}
.team1 {
  height: 15px;
  position: relative;
  overflow: hidden;
  top: -17px;
}
.holder-64 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  /* overflow: hidden; */
  
}
.team2 {
  height: 100%;
  position: relative;
  top: -15px;
  overflow-x: hidden;
  /* overflow-y: visible; */
  padding-bottom: 0;
  flex-direction: column-reverse;
}
.holder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.holder2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-top: 0;
}
</style>
