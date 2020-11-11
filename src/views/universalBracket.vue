<template>
  <div class="grid-columns" v-if='bracket !== null'>

    <div class="grid-64">
      <span v-for="(matchup, idx) in bracket.seeds.north" :key="bracket.seeds.north[idx] + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{matchup[0]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span v-for="(matchup, idx) in bracket.seeds.east" :key="bracket.seeds.east[idx] + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{matchup[0]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.north.length/2"
        :key="bracket.roundState.round32.north[idx] + idx + 'north32'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round32.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >
              <!-- <div class="team-bottom" > -->
              {{bracket.roundState.round32.north[2*idx+1]}}
              <!-- </div> -->
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.east.length/2"
        :key="bracket.roundState.round32.east[idx] + idx + 'east32'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round32.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{bracket.roundState.round32.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.north.length/2"
        :key="bracket.roundState.round16.north[idx] + idx + 'north16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round16.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{bracket.roundState.round16.north[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.east.length/2"
        :key="bracket.roundState.round16.east[idx] + idx + 'east16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round16.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{bracket.roundState.round16.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.north.length/2"
        :key="bracket.roundState.elite8.north[idx] + idx + 'north8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.elite8.north[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{bracket.roundState.elite8.north[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.east.length/2"
        :key="bracket.roundState.elite8.east[idx] + idx + 'east8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.elite8.east[2*idx]}}</div>
          <div class="single-matchup-left">
            <div
              class="team2"
            >{{bracket.roundState.elite8.east[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="holder">
      <div class="final-4-championship">
        <div class="teams-and-matchups final-4">
          <div
            class="team1"
          >{{bracket.roundState.final4.north_east[0]}}</div>
          <div class="single-matchup-left-final-4">
            <div
              class="team2 team-2-final-four"
            >{{bracket.roundState.final4.north_east[1]}}</div>
          </div>
          
        </div>
        <div class="championship">
          <div class="champion"></div>
          <div class='championship-teams'>
            <div class="winner-left">{{bracket.roundState.championship[0]}}</div>
            <div class="winner-right">{{bracket.roundState.championship[1]}}</div>
          </div>
        </div>
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.final4.south_west[0]}}</div>
          <div class="single-matchup-right-final-4">
            <div
              class="team2 team-2-final-four"
            >{{bracket.roundState.final4.south_west[1]}}</div>
          </div>
          
        </div>
      </div>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.south.length/2"
        :key="bracket.roundState.elite8.south[idx] + idx + 'south8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.elite8.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{bracket.roundState.elite8.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.west.length/2"
        :key="bracket.roundState.elite8.west[idx] + idx + 'west8'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.elite8.west[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{bracket.roundState.elite8.west[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.south.length/2"
        :key="bracket.roundState.round16.south[idx] + idx + 'south16'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round16.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{bracket.roundState.round16.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.west.length/2"
        :key="bracket.roundState.round16.west[idx] + idx + 'west16'"
      >
        
            <div class="teams-and-matchups">
              <div
                class="team1"
              >{{bracket.roundState.round16.west[2*idx]}}</div>
              <div class="single-matchup-right">
                <div
                  class="team2"
                >{{bracket.roundState.round16.west[2*idx+1]}}</div>
              </div>
            </div>
          
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.south.length/2"
        :key="bracket.roundState.round32.south[idx] + idx + 'south'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round32.south[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{bracket.roundState.round32.south[2*idx+1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.west.length/2"
        :key="bracket.roundState.round32.west[idx] + idx + 'west'"
      >
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{bracket.roundState.round32.west[2*idx]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{bracket.roundState.round32.west[2*idx+1]}}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-64">
      <span v-for="(matchup, idx) in bracket.seeds.south" :key="bracket.seeds.south + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{matchup[0]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
      <div />
      <span v-for="(matchup, idx) in bracket.seeds.west" :key="bracket.seeds.west + idx">
        <div class="teams-and-matchups">
          <div
            class="team1"
          >{{matchup[0]}}</div>
          <div class="single-matchup-right">
            <div
              class="team2"
            >{{matchup[1]}}</div>
          </div>
        </div>
      </span>
    </div>
    <!-- <button @click='go()'>
    </button> -->
  </div>
  <!-- </div> -->
</template>


<script>
import autho from "../firebaseAuth";
import { mapGetters } from "vuex";
import {setBracket} from "../createBracket";

export default {
  name: "universal-bracket",
  methods: {
    addStuff() {
      this.$store.dispatch('bracketTheme/setTeams')
    },
    go() {
      var something = ["Across the Stars (Love Theme) - Star Wars: Attack of the Clones",
        "Back to the Future - Back to the Future",
        "Cantina Band - Star Wars: A New Hope",
        "Civil War - Captain America: Civil War",
        "Define Dancing - WALL-E",
        "Django - Django: Unchained",
        "Duel of the Fates - Star Wars: The Phantono Menace",
        "Flight to Neverland - Hook",
        "Flying Theme - E.T.",
        "Forbidden Friendship - How to Train Your Dragon",
        "Gonna Fly Now - Rocky",
        "Hedwig's Theme - Harry Potter and the Sorcerers Stone",
        "Hymn to the Fallen - Saving Private Ryan",
        "Jack Sparrow - Pirates of the Caribbean: Dead Man's Chest",
        "Jai Ho - Slumdog Millionaire",
        "James Bond Theme - Dr. No",
        "Le Festin - Ratatouille",
        "Love Theme - The Godfather",
        "Main Title 'Somewhere in My Memory' - Home Alone",
        "Main Title And First Victim - Jaws",
        "Married Life - Up",
        "Mia and Sebastin's Theme - La La Land",
        "Molossus - Batman Begins",
        "Mountains - Interstellar",
        "My Heart Will Go On (Love Theme) - Titanic",
        "Nemo Egg (Main Title) - Finding Nemo",
        "Night at the Museum - Night at the Museum",
        "Pan's Labyrinth Lullaby - Pan's Labyrinth",
        "Pink Panther Theme - Pink Panther",
        "Raiders March - Indiana Jones",
        "Rey's Theme - Star Wars: The Force Awakens",
        "Shallow - A Star is Born",
        "Shawshank Prison - Stoic Theme - The Shawshank Redmption",
        "Skyfall - Skyfall",
        "Story Of Wick - John Wick",
        "Suite from Mulan - Mulan",
        "Suite from the Polar Express - The Polar Express",
        "The Avengers - The Avengers",
        "The Batman Theme - Batman",
        "The Glory Days - The Incredibles",
        "The Good the Bad and the Ugly - The Good, The Bad and the Ugly",
        "The Imitation Game - The Imitation Game",
        "The Imperial March (Darth Vader's Theme) - Star Wars: The Empire Strikes Back",
        "The Theory of Everything - The Theory of Everything",
        "Theme from Jurassic Park - Jurassic Park",
        "Theme from Schindler's List - Schindler's List",
        "Theme from Superman - Superman",
        "Time - Inception",
        "Trashin' The Camp - Tarzan",
        "Writing's On The Wall (Instrumental) - Spectre",
        "The Avengers - The Avengers",
        "The Batman Theme - Batman",
        "The Glory Days - The Incredibles",
        "The Good the Bad and the Ugly - The Good, The Bad and the Ugly",
        "The Imitation Game - The Imitation Game",
        "The Imperial March (Darth Vader's Theme) - Star Wars: The Empire Strikes Back",
        "The Theory of Everything - The Theory of Everything",
        "Theme from Jurassic Park - Jurassic Park",
        "Theme from Schindler's List - Schindler's List",
        "Theme from Superman - Superman",
        "Time - Inception",
        "Trashin' The Camp - Tarzan",
        "Writing's On The Wall (Instrumental) - Spectre"
        ]
      setBracket(something, "themes", true);
    }
  },
	computed: {
		...mapGetters({
			bracket: "bracketTheme/currentBracketState",
		})
  }
};
</script>

<style scoped>
</style>
