<template>
  <div id="app">
    <newNav />
    <div class='another'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import navbar from "./components/navbar";
import newNav from "./components/newNav"
export default {
  name: "app",
  components: {
    newNav
  },
  data() {
    return {
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Electrolize');

:root {
  font-family: 'Electrolize';
  font-size: 16px;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #a01634;
  --bg-secondary: #141418;
  --width-column: 8vw;
  --height-row: 59px;

}
html {
  /* width: 100vw; */
}
body {
  /* background-color: white; */
  display: inline-block;
  min-width: 100%;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  color: #b3d6f8;
  padding: 0;
  background-color: rgb(37, 37, 37);
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b3d6f8;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
body::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.team1-final4 {
  height: 15px;
  position: relative;
  top: -17px;
  display: flex;
  justify-content: left;
  overflow: hidden;
  white-space: nowrap;
  /* margin-top: -100px; */
}
.team-2-final-four {
  top: 0px;
}

.another {
  display: flex;
  margin: 5rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.grid-columns {
  height: 994px;
  /* background-color: rgb(119, 21, 119); */
  min-width: 100%;
  max-width: 100%;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, var(--width-column)) 29vw repeat(
      4,
      var(--width-column)
    );
}

.grid-64,
.grid-32,
.grid-16,
.grid-8 {
  display: grid;
}
.grid-64 {
  grid-template-rows: repeat(8, var(--height-row)) 50px repeat(
      8,
      var(--height-row)
    );
}
.grid-32 {
  grid-template-rows: repeat(4, calc(2 * var(--height-row))) 50px repeat(
      4,
      calc(2 * var(--height-row))
    );
}
.grid-16 {
  grid-template-rows: repeat(2, calc(4 * var(--height-row))) 50px repeat(
      2,
      calc(4 * var(--height-row))
    );
}
.grid-8 {
  grid-template-rows: repeat(1, calc(8 * var(--height-row))) 50px repeat(
      1,
      calc(8 * var(--height-row))
    );
}
.final-4 {
  height: 54%;
}
.final-4-championship {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* height: 522px; */
  /* border: 2px solid green; */
}
  
.championship {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: inherit;
  position: relative;
}
.winner-left,
.winner-right {
  width: calc(var(--width-column) + 15px);
  font-size: 0.9vw;
  background-color: white;
  position: relative;
  height: 100%;
  text-align: center;
  padding: 5px 2px;
  overflow: hidden;
  color: black;
}
/* .winner-left:first-child {
  position: relative;
  margin-left: auto;
}*/
/* .winner-right:last-child {
  position: relative;
  margin-right: auto;
}  */
.champion {
  background-color: white;
  transform: translateY(-105%);
  width: var(--width-column);
  height: var(--width-column);
}

.teams-and-matchups {
  width: 100%;
  max-width: var(--width-column);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.single-matchup-left,
.single-matchup-right, .single-matchup-left-final-4,
.single-matchup-right-final-4 {
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
  text-align: center;
  bottom: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
}
.single-matchup-left,
.single-matchup-right {
  height: 51%;
}
.single-matchup-left-final-4,
.single-matchup-right-final-4 {
  height: 53%;
}

.single-matchup-left, .single-matchup-left-final-4 {
  border-right: solid grey 2px;
}
.single-matchup-right, .single-matchup-right-final-4 {
  border-left: solid grey 2px;
}
.team1,
.team2, .team1-foreign-user, .team2-foreign-user{
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 2px;
  height: 15px;
  text-align: left;
  max-width: var(--width-column);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.team2:last-child, .team2-foreign-user:last-child {
  margin-top: auto;
}
.holder {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
}

.championship-teams {
  display: flex;
  align-self: center;
  height: 4vh;
  max-height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 29vw;
  /* height: max-content; */
  position: absolute;
}
</style>
