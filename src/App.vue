<template>
  <div id="app">
    <newNav />
    <div id='another'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import navbar from "./components/navbar";
import newNav from "./views/newNav"
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
:root {
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #a01634;
  --bg-secondary: #141418;
  --width-column: 118px;
  --height-row: 59px;

}
html {
  width: auto;
}
body {
  /* background-color: white; */
  display: inline-block;
  min-width: 100vw;
  margin-top: 5rem;
  color: #b3d6f8;
  padding: 0;
  background-color: rgb(37, 37, 37);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b3d6f8;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
p {
  width: 118px;
  font-size: 12px;
  height: 14px;
  padding: 0;
  margin: 0;
}
/* span {
  height: 100%;
  width: 100%;
  overflow: visible;
} */
.el-1 {
  border-top: 1px solid black;
}


.show {
  display: block;
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
h3 {
  font-size: 12px;
  height: 100%;
  padding: 0px 3px;
  margin: 0;
  bottom: 0;
  width: max-content;
  margin-bottom: 0px;
}

#another {
  display: flex;
  margin: 1rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.grid-columns {
  height: 994px;
  /* background-color: rgb(119, 21, 119); */
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, var(--width-column)) 440px repeat(
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
  justify-content: center;display: flex;
  flex-direction: column;
  height: 100%;
}
.winner-left,
.winner-right {
  width: 140px;
  background-color: white;
  height: 30px;
  padding: 2px;
}
.winner-right,
.winner-left {
  overflow: hidden;
  transform: translateY(0%);
  position: absolute;
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
  transform: translateY(-75%);
  width: 140px;
  height: 140px;
}

.teams-and-matchups {
  width: 100%;
  max-width: 118px;
  height: 100%;
  text-align: center;
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
.team2 {
  display: block;
  font-size: 12px;
  padding: 0 2px;
  height: 15px;
  text-align: left;
  width: 116px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* width: 100%; */
}
.team2:last-child {
  margin-top: auto;
}
.holder {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
}
</style>
