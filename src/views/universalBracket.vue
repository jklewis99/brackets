<template>
    <div class="grid-columns" v-if='bracket !== null'>
      <div class="grid-64">
        <span v-for="(matchup, idx) in bracket.seeds.north" :key="bracket.seeds.north[idx] + idx">
          <div class="holder">
            <div class="holder-64">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1">
											<h3>{{matchup[0]}}</h3>
                  </div>
                  <div class="team2">
										<div class='team-bottom'>
                    	<h3>{{matchup[1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.seeds.east" :key="bracket.seeds.east[idx] + idx">
          <div class="holder">
            <div class="holder-64">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1">
											<h3>{{matchup[0]}}</h3>
                  </div>
                  <div class="team2">
										<div class='team-bottom'>
                    	<h3>{{matchup[1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-32">
        <span v-for="(matchup, idx) in bracket.roundState.round32.north.length/2" :key="bracket.roundState.round32.north[idx] + idx + 'north32'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1">
										<h3>{{bracket.roundState.round32.north[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round32.north[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round32.north[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.round32.east.length/2" :key="bracket.roundState.round32.east[idx] + idx + 'east32'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1" v-show="bracket.roundState.round32.east[2*idx] !== ''">
										<h3>{{bracket.roundState.round32.east[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round32.east[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round32.east[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-16">
        <span v-for="(matchup, idx) in bracket.roundState.round16.north.length/2" :key="bracket.roundState.round16.north[idx] + idx + 'north16'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1" v-show="bracket.roundState.round16.north[2*idx] !== ''">
										<h3>{{bracket.roundState.round16.north[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round16.north[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round16.north[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.round16.east.length/2" :key="bracket.roundState.round16.east[idx] + idx + 'east16'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1" v-show="bracket.roundState.round16.east[2*idx] !== ''">
										<h3>{{bracket.roundState.round16.east[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round16.east[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round16.east[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-8">
        <span v-for="(matchup, idx) in bracket.roundState.elite8.north.length/2" :key="bracket.roundState.elite8.north[idx] + idx + 'north8'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1" v-show="bracket.roundState.elite8.north[2*idx] !== ''">
										<h3>{{bracket.roundState.elite8.north[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.elite8.north[2*idx+1] !== ''">
											<h3>{{bracket.roundState.elite8.north[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.elite8.east.length/2" :key="bracket.roundState.elite8.east[idx] + idx + 'east8'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-left">
                  <div class="team1" v-show="bracket.roundState.elite8.east[2*idx] !== ''">
										<h3>{{bracket.roundState.elite8.east[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.elite8.east[2*idx+1] !== ''">
											<h3>{{bracket.roundState.elite8.east[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="holder">
        <div class="final-4-championship">
          <div class="left-2">
            <div class="team1-final4" v-on:click="chooseWinner('north_east', 0, 'final4')">
              <h3>{{bracket.roundState.final4.north_east[0]}}</h3>
            </div>
            <div class="winner-left">
              {{bracket.roundState.championship[0]}}
            </div>
            <div class="team2 team-2-final-four">
              <div class='team-bottom' v-on:click="chooseWinner('north_east', 1, 'final4')">
                <h3>{{bracket.roundState.final4.north_east[1]}}</h3>
              </div>
            </div>
          </div>
          <div class="championship">
            <div class="champion"></div>
          </div>
          <div class="right-2">
            <div class="team1-final4" v-on:click="chooseWinner('south_west', 0, 'final4')">
              <h3>{{bracket.roundState.final4.south_west[0]}}</h3>
            </div>
            <div class="winner-right">
              {{bracket.roundState.championship[1]}}
            </div>
            <div class="team2 team-2-final-four">
              <div class='team-bottom' v-on:click="chooseWinner('south_west', 1, 'final4')">
                <h3>{{bracket.roundState.final4.south_west[1]}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-8">
        <span v-for="(matchup, idx) in bracket.roundState.elite8.south.length/2" :key="bracket.roundState.elite8.south[idx] + idx + 'south8'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.elite8.south[2*idx] !== ''">
										<h3>{{bracket.roundState.elite8.south[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.elite8.south[2*idx+1] !== ''">
											<h3>{{bracket.roundState.elite8.south[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.elite8.west.length/2" :key="bracket.roundState.elite8.west[idx] + idx + 'west8'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.elite8.west[2*idx] !== ''">
										<h3>{{bracket.roundState.elite8.west[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.elite8.west[2*idx+1] !== ''">
											<h3>{{bracket.roundState.elite8.west[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-16">
        <span v-for="(matchup, idx) in bracket.roundState.round16.south.length/2" :key="bracket.roundState.round16.south[idx] + idx + 'south16'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.round16.south[2*idx] !== ''">
										<h3>{{bracket.roundState.round16.south[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round16.south[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round16.south[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.round16.west.length/2" :key="bracket.roundState.round16.west[idx] + idx + 'west16'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.round16.west[2*idx] !== ''">
										<h3>{{bracket.roundState.round16.west[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round16.west[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round16.west[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-32">
        <span v-for="(matchup, idx) in bracket.roundState.round32.south.length/2" :key="bracket.roundState.round32.south[idx] + idx + 'south'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.round32.south[2*idx] !== ''">
										<h3>{{bracket.roundState.round32.south[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round32.south[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round32.south[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.roundState.round32.west.length/2" :key="bracket.roundState.round32.west[idx] + idx + 'west'">
          <div class="holder">
            <div class="holder2">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1" v-show="bracket.roundState.round32.west[2*idx] !== ''">
										<h3>{{bracket.roundState.round32.west[2*idx]}}</h3>
                  </div>
                  <div class="team2">
										<div class="team-bottom" v-show="bracket.roundState.round32.west[2*idx+1] !== ''">
											<h3>{{bracket.roundState.round32.west[2*idx+1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div class="grid-64">
        <span v-for="(matchup, idx) in bracket.seeds.south" :key="bracket.seeds.south + idx">
          <div class="holder">
            <div class="holder-64">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1">
											<h3>{{matchup[0]}}</h3>
                  </div>
                  <div class="team2">
										<div class='team-bottom'>
                    	<h3>{{matchup[1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div />
        <span v-for="(matchup, idx) in bracket.seeds.west" :key="bracket.seeds.west + idx">
          <div class="holder">
            <div class="holder-64">
              <div class="teams-and-matchups">
                <div class="single-matchup-right">
                  <div class="team1">
											<h3>{{matchup[0]}}</h3>
                  </div>
                  <div class="team2">
										<div class='team-bottom'>
                    	<h3>{{matchup[1]}}</h3>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
</template>

<script>
import autho from "../firebaseAuth";
import { mapGetters } from "vuex";

export default {
  name: "universal-bracket",
  mounted() {
    this.show()
  },
	computed: {
		...mapGetters({
			bracket: "bracketTheme/currentBracketState",
		})
  },
  methods: {
    show() {
      console.log('BRACKET', this.bracket)
    }
  }
};
</script>

<style scoped>
</style>
