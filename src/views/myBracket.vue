<template>
  <!-- <div id="another"> -->
  <!-- <button @click='show'> SJDSK </button> -->
  <div class="grid-columns">
    <div class="grid-64">
      <span v-for="(matchup, idx) in bracket.seeds.north" :key="bracket.seeds.north[idx] + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
            v-on:click="chooseWinner('north', idx*2, 'round64', matchup[0])"
          >{{matchup[0]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              v-on:click="chooseWinner('north', idx*2, 'round64', matchup[1])"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span v-for="(matchup, idx) in bracket.seeds.east" :key="bracket.seeds.east[idx] + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
            v-on:click="chooseWinner('east', idx*2, 'round64', matchup[0])"
          >{{matchup[0]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              v-on:click="chooseWinner('east', idx*2, 'round64', matchup[1])"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in userPicks.round32.north.length/2"
        :key="userPicks.round32.north[idx] + idx + 'north32'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('north', 2*idx, 'round32')"
          >{{userPicks.round32.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('north', 2*idx+1, 'round32')"
            >
              <!-- <div class="team-bottom" > -->
              {{userPicks.round32.north[2*idx+1]}}
              <!-- </div> -->
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.round32.east.length/2"
        :key="userPicks.round32.east[idx] + idx + 'east32'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('east', 2*idx, 'round32')"
          >{{userPicks.round32.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('east', 2*idx+1, 'round32')"
            >{{userPicks.round32.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in userPicks.round16.north.length/2"
        :key="userPicks.round16.north[idx] + idx + 'north16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('north', 2*idx, 'round16')"
          >{{userPicks.round16.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('north', 2*idx+1, 'round16')"
            >{{userPicks.round16.north[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.round16.east.length/2"
        :key="userPicks.round16.east[idx] + idx + 'east16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('east', 2*idx, 'round16')"
          >{{userPicks.round16.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('east', 2*idx+1, 'round16')"
            >{{userPicks.round16.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in userPicks.elite8.north.length/2"
        :key="userPicks.elite8.north[idx] + idx + 'north8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('north', 2*idx, 'elite8')"
          >{{userPicks.elite8.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('north', 2*idx+1, 'elite8')"
            >{{userPicks.elite8.north[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.elite8.east.length/2"
        :key="userPicks.elite8.east[idx] + idx + 'east8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('east', 2*idx, 'elite8')"
          >{{userPicks.elite8.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
              @click="chooseWinner('east', 2*idx+1, 'elite8')"
            >{{userPicks.elite8.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="holder">
      <div class="final-4-championship">
        <div class="teams-and-matchups final-4">
          <div
            class="team1"
            @click="chooseWinner('north_east', 0, 'final4')"
          >{{userPicks.final4.north_east[0]}}</div>
          <div class="single-matchup-left-final-4">
            <div
              class="team2 team-2-final-four"
              v-on:click="chooseWinner('north_east', 1, 'final4')"
            >{{userPicks.final4.north_east[1]}}</div>
          </div>
          <div class="winner-left">{{userPicks.championship[0]}}</div>
        </div>
        <div class="championship">
          <div class="champion"></div>
        </div>
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('south_west', 0, 'final4')"
          >{{userPicks.final4.south_west[0]}}</div>
          <div class="single-matchup-right-final-4">
            <div
              class="team2 team-2-final-four"
              v-on:click="chooseWinner('south_west', 1, 'final4')"
            >{{userPicks.final4.south_west[1]}}</div>
          </div>
          <div class="winner-right">{{userPicks.championship[1]}}</div>
        </div>
      </div>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in userPicks.elite8.south.length/2"
        :key="userPicks.elite8.south[idx] + idx + 'south8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('south', 2*idx, 'elite8')"
          >{{userPicks.elite8.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              @click="chooseWinner('south', 2*idx+1, 'elite8')"
            >{{userPicks.elite8.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.elite8.west.length/2"
        :key="userPicks.elite8.west[idx] + idx + 'west8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('west', 2*idx, 'elite8')"
          >{{userPicks.elite8.west[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              @click="chooseWinner('west', 2*idx+1, 'elite8')"
            >{{userPicks.elite8.west[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in userPicks.round16.south.length/2"
        :key="userPicks.round16.south[idx] + idx + 'south16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('south', 2*idx, 'round16')"
          >{{userPicks.round16.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              @click="chooseWinner('south', 2*idx+1, 'round16')"
            >{{userPicks.round16.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.round16.west.length/2"
        :key="userPicks.round16.west[idx] + idx + 'west16'"
      >
        <div class="holder">
          <div class="holder2">
            <div class="teams-and-matchups">
              <div
                class="team1"
                @click="chooseWinner('west', 2*idx, 'round16')"
              >{{userPicks.round16.west[2*idx]}}</div>
              <div class="single-matchup-right">
                <div
                  class="team2"
                  @click="chooseWinner('west', 2*idx+1, 'round16')"
                >{{userPicks.round16.west[2*idx+1]}}</div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in userPicks.round32.south.length/2"
        :key="userPicks.round32.south[idx] + idx + 'south'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('south', 2*idx, 'round32')"
          >{{userPicks.round32.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              @click="chooseWinner('south', 2*idx+1, 'round32')"
            >{{userPicks.round32.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in userPicks.round32.west.length/2"
        :key="userPicks.round32.west[idx] + idx + 'west'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
            @click="chooseWinner('west', 2*idx, 'round32')"
          >{{userPicks.round32.west[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              @click="chooseWinner('west', 2*idx+1, 'round32')"
            >{{userPicks.round32.west[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-64">
      <span v-for="(matchup, idx) in bracket.seeds.south" :key="bracket.seeds.south + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
            v-on:click="chooseWinner('south', idx*2, 'round64', matchup[0])"
          >{{matchup[0]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              v-on:click="chooseWinner('south', idx*2, 'round64', matchup[1])"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span v-for="(matchup, idx) in bracket.seeds.west" :key="bracket.seeds.west + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
            v-on:click="chooseWinner('west', idx*2, 'round64', matchup[0])"
          >{{matchup[0]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
              v-on:click="chooseWinner('west', idx*2, 'round64', matchup[1])"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "universal-bracket",
  
  props: {
    userPicks: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      nextRound: {
        round64: "round32",
        round32: "round16",
        round16: "elite8",
        elite8: "final4",
        final4: "championship",
        championship: "champion"
      },
      validationDate: new Date() < new Date(2020, 6, 3, 5, 12)
    };
  },
  beforeRouteUpdate(to, from, next){
    this.name = to.params.name
    console.log('AYAYAYA')
    next()
  },
  watch: {
    $route(to, from) {
      console.log("WATCHED")
    }
  },
  methods: {
    chooseWinner(region, matchupIndex, round, team = null) {
      // validate that the current date is not passed the deadline date
      if (this.validationDate) {
        var teamteam;
        if (team !== null) {
          teamteam = team;
        } else {
          teamteam = this.userPicks[round][region][matchupIndex];
        }
        this.$store.dispatch({
          type: "user/setCurrentWinner",
          team: teamteam,
          round: this.nextRound[round],
          region: region,
          idx: (matchupIndex - (matchupIndex % 2)) / 2
        })
        this.$forceUpdate();
      }
    },
    show() {
      console.log(this.userPicks);
    },
  },
  computed: {
    ...mapGetters({
      bracket: "bracketTheme/currentBracketState",
      // userPicks: "user/userPicks"
    })
    
  }
};
</script>

<style scoped>
.team1:hover,
.team2:hover {
  color: white;
  /* background-color: rgb(255, 6, 6); */
  width: max-content;
  cursor: pointer;
  overflow: visible;
  z-index: 100;
  background-color: rgb(37, 37, 37);
}

</style>