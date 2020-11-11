<template>
  <div class="grid-columns" v-if="bracket !== null">
    <div class="grid-64">
      <span
        v-for="(matchup, idx) in bracket.seeds.north"
        :key="bracket.seeds.north[idx] + idx"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ matchup[0] }}</div>
          <div class="single-matchup-left">
            <div class="team2">{{ matchup[1] }}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.seeds.east"
        :key="bracket.seeds.east[idx] + idx"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ matchup[0] }}</div>
          <div class="single-matchup-left">
            <div class="team2">{{ matchup[1] }}</div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.north.length / 2"
        :key="bracket.roundState.round32.north[idx] + idx + 'north32'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round32.north[2 * idx] }}
          </div>
          <div class="single-matchup-left">
            <div class="team2">
              <!-- <div class="team-bottom" > -->
              {{ bracket.roundState.round32.north[2 * idx + 1] }}
              <!-- </div> -->
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.east.length / 2"
        :key="bracket.roundState.round32.east[idx] + idx + 'east32'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round32.east[2 * idx] }}
          </div>
          <div class="single-matchup-left">
            <div class="team2">
              {{ bracket.roundState.round32.east[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.north.length / 2"
        :key="bracket.roundState.round16.north[idx] + idx + 'north16'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round16.north[2 * idx] }}
          </div>
          <div class="single-matchup-left">
            <div class="team2">
              {{ bracket.roundState.round16.north[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.east.length / 2"
        :key="bracket.roundState.round16.east[idx] + idx + 'east16'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round16.east[2 * idx] }}
          </div>
          <div class="single-matchup-left">
            <div class="team2">
              {{ bracket.roundState.round16.east[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.north.length / 2"
        :key="bracket.roundState.elite8.north[idx] + idx + 'north8'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.elite8.north[2 * idx] }}
          </div>
          <div class="single-matchup-left">
            <div class="team2">
              {{ bracket.roundState.elite8.north[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.east.length / 2"
        :key="bracket.roundState.elite8.east[idx] + idx + 'east8'"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ bracket.roundState.elite8.east[2 * idx] }}</div>
          <div class="single-matchup-left">
            <div class="team2">
              {{ bracket.roundState.elite8.east[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="holder">
      <div class="final-4-championship">
        <div class="teams-and-matchups final-4">
          <div class="team1">{{ bracket.roundState.final4.north_east[0] }}</div>
          <div class="single-matchup-left-final-4">
            <div class="team2 team-2-final-four">
              {{ bracket.roundState.final4.north_east[1] }}
            </div>
          </div>
        </div>
        <div class="championship">
          <div class="champion"></div>
          <div class="championship-teams">
            <div class="winner-left">
              {{ bracket.roundState.championship[0] }}
            </div>
            <div class="winner-right">
              {{ bracket.roundState.championship[1] }}
            </div>
          </div>
        </div>
        <div class="teams-and-matchups">
          <div class="team1">{{ bracket.roundState.final4.south_west[0] }}</div>
          <div class="single-matchup-right-final-4">
            <div class="team2 team-2-final-four">
              {{ bracket.roundState.final4.south_west[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-8">
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.south.length / 2"
        :key="bracket.roundState.elite8.south[idx] + idx + 'south8'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.elite8.south[2 * idx] }}
          </div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.elite8.south[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.elite8.west.length / 2"
        :key="bracket.roundState.elite8.west[idx] + idx + 'west8'"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ bracket.roundState.elite8.west[2 * idx] }}</div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.elite8.west[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-16">
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.south.length / 2"
        :key="bracket.roundState.round16.south[idx] + idx + 'south16'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round16.south[2 * idx] }}
          </div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.round16.south[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round16.west.length / 2"
        :key="bracket.roundState.round16.west[idx] + idx + 'west16'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round16.west[2 * idx] }}
          </div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.round16.west[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-32">
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.south.length / 2"
        :key="bracket.roundState.round32.south[idx] + idx + 'south'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round32.south[2 * idx] }}
          </div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.round32.south[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.roundState.round32.west.length / 2"
        :key="bracket.roundState.round32.west[idx] + idx + 'west'"
      >
        <div class="teams-and-matchups">
          <div class="team1">
            {{ bracket.roundState.round32.west[2 * idx] }}
          </div>
          <div class="single-matchup-right">
            <div class="team2">
              {{ bracket.roundState.round32.west[2 * idx + 1] }}
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="grid-64">
      <span
        v-for="(matchup, idx) in bracket.seeds.south"
        :key="bracket.seeds.south + idx"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ matchup[0] }}</div>
          <div class="single-matchup-right">
            <div class="team2">{{ matchup[1] }}</div>
          </div>
        </div>
      </span>
      <div />
      <span
        v-for="(matchup, idx) in bracket.seeds.west"
        :key="bracket.seeds.west + idx"
      >
        <div class="teams-and-matchups">
          <div class="team1">{{ matchup[0] }}</div>
          <div class="single-matchup-right">
            <div class="team2">{{ matchup[1] }}</div>
          </div>
        </div>
      </span>
    </div>
    <button @click="go()"></button>
  </div>
  <!-- </div> -->
</template>


<script>
import autho from "../firebaseAuth";
import { mapGetters } from "vuex";
import { setBracket } from "../createBracket";

export default {
  name: "universal-bracket",
  methods: {
    addStuff() {
      this.$store.dispatch("bracketTheme/setTeams");
    },
    go() {
      var something = [
        "1985 - Bowling for Soup",
        "Africa - TOTO",
        "Beat It - Michael Jackson",
        "Beatiful Girls - Sean Kingston",
        "Bohemian Rhapsody - Queen",
        "Bohemian Rhapsody - Queen",
        "Careless Whisper - George Michael",
        "Closing Time - Semisonic",
        "Come On Eileen - Dexys Midnight Runners",
        "Come Sail Away - Styx",
        "DJ Got Us Fallin' In Love - Usher feat. Pitbull",
        "DJ Got Us Fallin' In Love - Usher feat. Pitbull",
        "Don't Stop Believin' - Journey",
        "Don't Stop Believin' - Journey",
        "Don't Stop Believin' - Journey",
        "Drop It Like It's Hot - Snoop Dogg, Pharrell Williams",
        "Forever Young - Alphaville",
        "Formation - Beyonce",
        "Girls Just Wanna Have Fun - Cyndi Lauper",
        "Heartless - Kanye West",
        "Hey There Delilah - Plain White T's",
        "Hey Ya! - OutKast",
        "Hips Don't Lie - Shakira feat. Wyclef Jean",
        "Hollaback Girl - Gwen Stefani",
        "I Love It - Icona Pop feat. Charli XCX",
        "I Wanna Dance with Somebody - Whitney Houston",
        "I Want It That Way - Backstreet Boys",
        "I Write Sins Not Tragedies - Panic! At The Disco",
        "Imma Be - Black Eyed Peas",
        "International Love - Pitbull feat. Chris Brown",
        "Landslide - Fleetwood Mac",
        "Like a G6 - Far East Movement",
        "Lip Gloss - Lil Mama",
        "Mambo No. 5 - Lou Bega",
        "More Than a Feeling - Boston",
        "Mr. Brightside - The Killers",
        "Mr. Roboto - Styx",
        "My Way - Frank Sinatra",
        "No Scrubs - TLC",
        "Party in the U.S.A. - Miley Cyrus",
        "Piano Man - Billy Joel",
        "Pink + White - Frank Ocean",
        "Replay - Iyaz",
        "Rocket Man - Elton John",
        "She Will Be Loved - Maroon 5",
        "Shoop - Salt-N-Pepa",
        "Slide - The Goo Goo Dolls",
        "Someone Like You - Adele",
        "Southern Nights - Glen Campbell",
        "Stand by Me - Ben E. King",
        "Starships - Nicki Minaj",
        "Stayin' Alive - Bee Gees",
        "Super Bass - Nicki Minaj",
        "Take Me Home, Country Roads - John Denver",
        "Take On Me - a-ha",
        "Temperature - Sean Paul",
        "Thirft Shop - Macklemore & Ryan Lewis feat. Wanz",
        "This Magic Moment - Ben E. King",
        "Tiny Dancer - Elton John",
        "WAP - Cardi B., Megan Thee Stallion",
        "We Can't Stop - Miley Cyrus",
        "White Flag - Dido",
        "Your Song - Elton John",
        "Ophelia - The Lumineers"
      ];
      var elinks = [
        "https://open.spotify.com/embed/track/5oQcOu1omDykbIPSdSQQNJ",
        "https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX",
        "https://open.spotify.com/embed/track/1OOtq8tRnDM8kG2gqUPjAj",
        "https://open.spotify.com/embed/track/1hGy2eLcmC8eKx7qr1tOqx",
        "https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J",
        "https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J",
        "https://open.spotify.com/embed/track/4jDmJ51x1o9NZB5Nxxc7gY",
        "https://open.spotify.com/embed/track/087OBLtoeS3Q6j0k6tMNAI",
        "https://open.spotify.com/embed/track/0EMmVUYs9ZZRHtlADB88uz",
        "https://open.spotify.com/embed/track/0PsbWiVtix5FoTZ1s00mEl",
        "https://open.spotify.com/embed/track/4356Typ82hUiFAynbLYbPn",
        "https://open.spotify.com/embed/track/4356Typ82hUiFAynbLYbPn",
        "https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue",
        "https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue",
        "https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue",
        "https://open.spotify.com/embed/track/2NBQmPrOEEjA8VbeWOQGxO",
        "https://open.spotify.com/embed/track/4cMLZnElAzXYXEe4aWTEeK",
        "https://open.spotify.com/embed/track/6g0Orsxv6glTJCt4cHsRsQ",
        "https://open.spotify.com/embed/track/7sMGwiS4vOMcz86ZY3vKYM",
        "https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5",
        "https://open.spotify.com/embed/track/4RCWB3V8V0dignt99LZ8vH",
        "https://open.spotify.com/embed/track/2PpruBYCo4H7WOBJ7Q2EwM",
        "https://open.spotify.com/embed/track/3ZFTkvIE7kyPt6Nu3PEa7V",
        "https://open.spotify.com/embed/track/6RcQOut9fWL6FSqeIr5M1r",
        "https://open.spotify.com/embed/track/6HZ9VeI5IRFCNQLXhpF4bq",
        "https://open.spotify.com/embed/track/2k1np6GRFvKjgjYfo2g39B",
        "https://open.spotify.com/embed/track/47BBI51FKFwOMlIiX6m8ya",
        "ttps://open.spotify.com/embed/track/4bPQs0PHn4xbipzdPfn6du",
        "https://open.spotify.com/embed/track/5OiLJ8tjUPFiPX2gVM8fxJ",
        "https://open.spotify.com/embed/track/62zFEHfAYl5kdHYOivj4BC",
        "https://open.spotify.com/embed/track/5ihS6UUlyQAfmp48eSkxuQ",
        "https://open.spotify.com/embed/track/4DvhkX2ic4zWkQeWMwQ2qf",
        "https://open.spotify.com/embed/track/1Y4ZdPOOgCUhBcKZOrUFiS",
        "https://open.spotify.com/embed/track/5lA6mFOvaiienokVbTZEQx",
        "https://open.spotify.com/embed/track/32kgOw8wejH7zUhtXCM8DH",
        "https://open.spotify.com/embed/track/7oK9VyNzrYvRFo7nQEYkWN",
        "https://open.spotify.com/embed/track/7C0rG4oWO7VeZcffyW1sK9",
        "https://open.spotify.com/embed/track/3spdoTYpuCpmq19tuD0bOe",
        "https://open.spotify.com/embed/track/1KGi9sZVMeszgZOWivFpxs",
        "https://open.spotify.com/embed/track/5Q0Nhxo0l2bP3pNjpGJwV1",
        "https://open.spotify.com/embed/track/70C4NyhjD5OZUMzvWZ3njJ",
        "https://open.spotify.com/embed/track/3xKsf9qdS1CyvXSMEid6g8",
        "https://open.spotify.com/embed/track/5vlEg2fT4cFWAqU5QptIpQ",
        "https://open.spotify.com/embed/track/3gdewACMIVMEWVbyb8O9sY",
        "https://open.spotify.com/embed/track/4llK75pXNWZz6KAho2Gp16",
        "https://open.spotify.com/embed/track/2c7H254xlKoGhmZT194C0T",
        "https://open.spotify.com/embed/track/0nnwn7LWHCAu09jfuH1xTA",
        "https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB",
        "https://open.spotify.com/embed/track/7kv7zBjMtVf0eIJle2VZxn",
        "https://open.spotify.com/embed/track/7jmHyHMEqm9MJWiMAneF05",
        "https://open.spotify.com/embed/track/1oHNvJVbFkexQc0BpQp7Y4",
        "https://open.spotify.com/embed/track/5cP52DlDN9yryuZVQDg3iq",
        "https://open.spotify.com/embed/track/0iYebKFUSfF72fUu2OW6ZT",
        "https://open.spotify.com/embed/track/2xYlyywNgefLCRDG8hlxZq",
        "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
        "https://open.spotify.com/embed/track/0k2GOhqsrxDTAbFFSdNJjT",
        "https://open.spotify.com/embed/track/3AYcyxEACnmE6d96RPubID",
        "https://open.spotify.com/embed/track/3hXjYB9dLOY9IofEUnIieQ",
        "https://open.spotify.com/embed/track/22W8VZFcnj4BCIaixnpW0L",
        "https://open.spotify.com/embed/track/4Oun2ylbjFKMPTiaSbbCih",
        "https://open.spotify.com/embed/track/2y4lAQpi5VTNLu2ldeTdUH",
        "https://open.spotify.com/embed/track/4kbz7rHVbyjKasuuqelccQ",
        "https://open.spotify.com/embed/track/7gCeodIXjhCLDWC5H1LOmT",
        "https://open.spotify.com/embed/track/3d8y0t70g7hw2FOWl9Z4Fm"
      ];
      setBracket(something, elinks, "themes");
    },
  },
  computed: {
    ...mapGetters({
      bracket: "bracketTheme/currentBracketState",
    }),
  },
};
</script>

<style scoped>
</style>
