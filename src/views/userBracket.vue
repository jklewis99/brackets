<template>
  <!-- <button @click='show'> SJDSK </button> -->
  <div class="super">
    <div class="popup-window" id="popupmatchup">
      <div class="detailed-matchup">
        <span class="btn-close" @click="togglePopup">
          <font-awesome-icon :icon="['far', 'times-circle']" />
        </span>
        <div class='popup-team1'>{{team1}}<div class='img-holder'></div></div>
        <div class='vs'>VS</div>
        <div class='popup-team2'><div class='img-holder'></div>{{team2}}</div>
        <!-- add field that checks if match is over, and if it is over display score-->
      </div>
    </div>
    <div class="grid-columns">
      <div class="grid-64">
        <span v-for="(matchup, idx) in bracket.seeds.north" :key="bracket.seeds.north[idx] + idx">
          <div class="teams-and-matchups" @click="fillPopup(matchup[0], matchup[1])">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              v-on:click="chooseWinner('north', idx*2, 'round64', matchup[0])"
            >
              <span>{{matchup[0]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                v-on:click="chooseWinner('north', idx*2, 'round64', matchup[1])"
              >
                <span>{{matchup[1]}}</span>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.seeds.east" :key="bracket.seeds.east[idx] + idx">
          <div class="teams-and-matchups">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              v-on:click="chooseWinner('east', idx*2, 'round64', matchup[0])"
            >
              <span>{{matchup[0]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                v-on:click="chooseWinner('east', idx*2, 'round64', matchup[1])"
              >
                <span>{{matchup[1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('north', 2*idx, 'round32')"
            >
              <span>{{userPicks.round32.north[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('north', 2*idx+1, 'round32')"
              >
                <!-- <div class="team-bottom" > -->
                <span>{{userPicks.round32.north[2*idx+1]}}</span>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('east', 2*idx, 'round32')"
            >
              <span>{{userPicks.round32.east[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('east', 2*idx+1, 'round32')"
              >
                <span>{{userPicks.round32.east[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('north', 2*idx, 'round16')"
            >
              <span>{{userPicks.round16.north[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('north', 2*idx+1, 'round16')"
              >
                <span>{{userPicks.round16.north[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('east', 2*idx, 'round16')"
            >
              <span>{{userPicks.round16.east[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('east', 2*idx+1, 'round16')"
              >
                <span>{{userPicks.round16.east[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('north', 2*idx, 'elite8')"
            >
              <span>{{userPicks.elite8.north[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('north', 2*idx+1, 'elite8')"
              >
                <span>{{userPicks.elite8.north[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('east', 2*idx, 'elite8')"
            >
              <span>{{userPicks.elite8.east[2*idx]}}</span>
            </div>
            <div class="single-matchup-left">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('east', 2*idx+1, 'elite8')"
              >
                <span>{{userPicks.elite8.east[2*idx+1]}}</span>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="holder">
        <div class="final-4-championship">
          <div class="teams-and-matchups final-4">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('north_east', 0, 'final4')"
            >
              <span>{{userPicks.final4.north_east[0]}}</span>
            </div>
            <div class="single-matchup-left-final-4">
              <div
                :class="[validateUser() ? 'team2 team-2-final-four' : 'team2-foreign-user team-2-final-four']"
                v-on:click="chooseWinner('north_east', 1, 'final4')"
              >
                <span>{{userPicks.final4.north_east[1]}}</span>
              </div>
            </div>
          </div>
          <div class="championship">
            <div class="champion"></div>
            <div class="championship-teams">
              <div class="winner-left">{{userPicks.championship[0]}}</div>
              <div class="winner-right">{{userPicks.championship[1]}}</div>
            </div>
          </div>
          <div class="teams-and-matchups">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('south_west', 0, 'final4')"
            >
              <span>{{userPicks.final4.south_west[0]}}</span>
            </div>
            <div class="single-matchup-right-final-4">
              <div
                :class="[validateUser() ? 'team2 team-2-final-four' : 'team2-foreign-user team-2-final-four']"
                v-on:click="chooseWinner('south_west', 1, 'final4')"
              >
                <span>{{userPicks.final4.south_west[1]}}</span>
              </div>
            </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('south', 2*idx, 'elite8')"
            >
              <span>{{userPicks.elite8.south[2*idx]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('south', 2*idx+1, 'elite8')"
              >
                <span>{{userPicks.elite8.south[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('west', 2*idx, 'elite8')"
            >
              <span>{{userPicks.elite8.west[2*idx]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('west', 2*idx+1, 'elite8')"
              >
                <span>{{userPicks.elite8.west[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('south', 2*idx, 'round16')"
            >
              <span>{{userPicks.round16.south[2*idx]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('south', 2*idx+1, 'round16')"
              >
                <span>{{userPicks.round16.south[2*idx+1]}}</span>
              </div>
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
                  :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
                  @click="chooseWinner('west', 2*idx, 'round16')"
                >
                  <span>{{userPicks.round16.west[2*idx]}}</span>
                </div>
                <div class="single-matchup-right">
                  <div
                    :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                    @click="chooseWinner('west', 2*idx+1, 'round16')"
                  >
                    <span>{{userPicks.round16.west[2*idx+1]}}</span>
                  </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('south', 2*idx, 'round32')"
            >
              <span>{{userPicks.round32.south[2*idx]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('south', 2*idx+1, 'round32')"
              >
                <span>{{userPicks.round32.south[2*idx+1]}}</span>
              </div>
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
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              @click="chooseWinner('west', 2*idx, 'round32')"
            >
              <span>{{userPicks.round32.west[2*idx]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                @click="chooseWinner('west', 2*idx+1, 'round32')"
              >
                <span>{{userPicks.round32.west[2*idx+1]}}</span>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-64">
        <span v-for="(matchup, idx) in bracket.seeds.south" :key="bracket.seeds.south + idx">
          <div class="teams-and-matchups">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              v-on:click="chooseWinner('south', idx*2, 'round64', matchup[0])"
            >
              <span>{{matchup[0]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                v-on:click="chooseWinner('south', idx*2, 'round64', matchup[1])"
              >
                <span>{{matchup[1]}}</span>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.seeds.west" :key="bracket.seeds.west + idx">
          <div class="teams-and-matchups">
            <div
              :class="[validateUser() ? 'team1' : 'team1-foreign-user']"
              v-on:click="chooseWinner('west', idx*2, 'round64', matchup[0])"
            >
              <span>{{matchup[0]}}</span>
            </div>
            <div class="single-matchup-right">
              <div
                :class="[validateUser() ? 'team2' : 'team2-foreign-user']"
                v-on:click="chooseWinner('west', idx*2, 'round64', matchup[1])"
              >
                <span>{{matchup[1]}}</span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "bracket",

  props: {
    userPicks: {
      type: Object,
      required: true
    },
    name: {
      type: String,
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
      validationDate: this.$parent.validationDate,
      team1: null,
      team2: null
    };
  },
  methods: {
    chooseWinner(region, matchupIndex, round, team = null) {
      // validate that the current date is not passed the deadline date
      if (this.validationDate && this.validateUser()) {
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
        });
        this.$forceUpdate();
      }
    },
    validateUser() {
      return this.currentUser.displayName === this.name;
    },
    fillPopup(team1, team2) {
      this.team1 = team1
      this.team2 = team2
      this.togglePopup()
    },
    // When the user clicks on div, open the popup
    togglePopup() {
      document.getElementById("popupmatchup").classList.toggle("show");
    }
  },
  computed: {
    ...mapGetters({
      bracket: "bracketTheme/currentBracketState",
      currentUser: "user/user"
    })
  }
};
</script>

<style scoped>
.team1:hover,
.team2:hover {
  color: white;
  width: max-content;
  cursor: pointer;
  overflow: visible;
  z-index: 100;
}
.team1:hover span,
.team2:hover span {
  background-color: rgb(37, 37, 37);
}
/* .team1 span{
  position: absolute;
  white-space: nowrap;
  transition: 2s;
  transform: translateX(0);
}
.team1:hover span{
  transform: translateX(calc(8vw - 100%));
} */
/* Popup container - can be anything you want */

.popup-window {
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 4rem;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(36, 36, 36, 0.63);
}
.detailed-matchup {
  width: 50%;
  min-width: 500px;
  height: 85%;
  border: 2px solid rgb(0, 0, 0);
  background-color: rgba(230, 230, 230, 0.945);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  position: relative;
}
.super {
  display: flex;
  justify-content: center;
}
.super .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}
.btn-close {
  display: inline-block;
  background-color: transparent;
  color: rgb(105, 105, 105);
  padding: 3px;
  align-self: flex-end;
  position: absolute;
  top: 0;
}

.btn-close:hover {
  cursor: pointer;
}
.vs {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  height: 1.75rem;
  width: 80px;
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-team1, .popup-team2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  text-align: center;
}
.img-holder {
  width: 150px;
  height: 150px;
  border: 2px solid black;
}
/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>