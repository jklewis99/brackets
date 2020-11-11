import autho from './firebaseAuth'

function toShuffle(teams) {
  for (let i = teams.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = teams[i]
    teams[i] = teams[j]
    teams[j] = temp
  }
  return teams
}

export function setBracket(seeds, e, name, shuffle=false) {
  // seeds is an array of size 64, ordered by seeds: 1, 1, 1, 1, 2, 2, 2, 2, ..., 16, 16, 16, 16
  // each element consists of a team name and an image
  // if shuffle is true, then the array will be shuffled
  if (shuffle) {
    seeds = toShuffle(seeds)
  }
  var arr = setMaps(seeds);
  var embeddedMapping = embedLinks(seeds, e);
  autho.db.collection('bracket-themes').doc(name).set({
    champion: "",
    championship:  ["", ""],
    final4: {
      north_east: ["", ""],
      south_west: ["", ""],
    },
    elite8: {
      east: ["", ""],
      north: ["", ""],
      south: ["", ""],
      west: ["", ""],
    },
    round16: {
      east: ["", "", "", ""],
      north: ["", "", "", ""],
      south: ["", "", "", ""],
      west: ["", "", "", ""],
    },
    round32: {
      east: ["", "", "", "", "", "", "", ""],
      north: ["", "", "", "", "", "", "", ""],
      south: ["", "", "", "", "", "", "", ""],
      west: ["", "", "", "", "", "", "", ""],
    },
    seeding: {
      east: [seeds[0], seeds[4], seeds[8], seeds[12], seeds[16], seeds[20], seeds[24], seeds[28], seeds[32], 
            seeds[36], seeds[40], seeds[44], seeds[48], seeds[52], seeds[56], seeds[60]],
      north: [seeds[1], seeds[5], seeds[9], seeds[13], seeds[17], seeds[21], seeds[25], seeds[29], seeds[33], 
              seeds[37], seeds[41], seeds[45], seeds[49], seeds[53], seeds[57], seeds[61]],
      south: [seeds[2], seeds[6], seeds[10], seeds[14], seeds[18], seeds[22], seeds[26], seeds[30], seeds[34], 
              seeds[38], seeds[42], seeds[46], seeds[50], seeds[54], seeds[58], seeds[62]],
      west: [seeds[3], seeds[7], seeds[11], seeds[15], seeds[19], seeds[23], seeds[27], seeds[31], seeds[35], 
      seeds[39], seeds[43], seeds[47], seeds[51], seeds[55], seeds[59], seeds[63]],
    },
    teamsRemaining: arr,
    embeddedLinks: embeddedMapping
  })
  .catch(error => {
    console.log(error)
  })
  function setMaps(s) {
    var a = {}
    for (var i=0; i < s.length; i++) {
      a[s[i]] = true
    }
    return a
  }
  function embedLinks(s, embeddedLinks) {
    var linkMapping = {};
  
    for (var i=0; i < s.length; i++){
      linkMapping[s[i]] = embeddedLinks[i]
    }
    return linkMapping
  }
}
