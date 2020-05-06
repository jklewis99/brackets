<template>
  <div id="app">
    <newNav />
    <div id='another'>
      <router-view />
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
  /* width: 100vw; */
  margin-top: 5rem;
  color: #b3d6f8;
  padding: 0;
  background-color: rgb(37, 37, 37);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b3d6f8;
}
#app {
  /* width: 100vw; */
}

body::-webkit-scrollbar {
  width: 0.25rem;
}
/* body::-webkit-scrollbar-track {
  background: #2f2fbb;
} */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
h3 {
  font-size: 12px;
  padding: 0;
  margin: 0;
  bottom: 0;
  margin-bottom: 0px;
  position: absolute;
}

#another {
  display: flex;
  margin: 1rem 1rem;
  /* margin: 10px; */
  /* width: 100%; */
  flex-direction: row;
  align-items: center;
  /* overflow: auto; */
  justify-content: center;
}

.grid-columns {
  height: 994px;
  /* background-color: rgb(119, 21, 119); */
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, var(--width-column)) 440px repeat(4, var(--width-column));
}

.grid-64,
.grid-32,
.grid-16,
.grid-8 {
  display: grid;
}
.grid-64 {
  grid-template-rows: repeat(8, var(--height-row)) 50px repeat(8, var(--height-row));
}
.grid-32 {
  grid-template-rows: repeat(4, calc(2*var(--height-row))) 50px repeat(4, calc(2*var(--height-row)));
}
.grid-16 {
  grid-template-rows: repeat(2, calc(4*var(--height-row))) 50px repeat(2, calc(4*var(--height-row)));
}
.grid-8 {
  grid-template-rows: repeat(1, calc(8*var(--height-row))) 50px repeat(1, calc(8*var(--height-row)));
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
