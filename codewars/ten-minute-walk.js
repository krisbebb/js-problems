function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let map = {};
  map = walk.reduce(
    (map, direction) => {
      map[direction]++;
      return map;
    },
    { n: 0, e: 0, s: 0, w: 0 }
  );
  if (map["n"] !== map["s"] || map["e"] !== map["w"]) {
    return false;
  }
  return true;
}

//some test cases for you...
// console.log(
//   isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
//   "true"
// );
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
//   "false"
// );
// console.log(isValidWalk(["w"]), "false");
// console.log(
//   isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
//   "false"
// );


var fail = 
  [ 
    ['n'],
    ['n','s'],
    ['n','s','n','s','n','s','n','s','n','s','n','s'],
    ['n','s','e','w','n','s','e','w','n','s','e','w','n','s','e','w'],
    ['n','s','n','s','n','s','n','s','n','n'],
    ['e','e','e','w','n','s','n','s','e','w'], 
    ['n','e','n','e','n','e','n','e','n','e'],
    ['n','w','n','w','n','w','n','w','n','w'],
    ['e','s','e','s','e','s','e','s','e','s'],
    ['w','s','w','s','w','s','w','s','w','s']
  ];
  

var pass = 
  [
    ['n','s','n','s','n','s','n','s','n','s'],
    ['e','w','e','w','n','s','n','s','e','w'],
    ['n','s','e','w','n','s','e','w','n','s']
  ];

// too short
        console.log(isValidWalk(fail[0]));
        console.log(isValidWalk(fail[1]));
// too long

        console.log(isValidWalk(fail[2]));
        console.log(isValidWalk(fail[3]));

// doesnt return you to start
        console.log(isValidWalk(fail[4]));
        console.log(isValidWalk(fail[5]));
        console.log(isValidWalk(fail[6]));
        console.log(isValidWalk(fail[7]));
        console.log(isValidWalk(fail[8]));
        console.log(isValidWalk(fail[9]));        

// valid walk
        console.log(isValidWalk(pass[0]));
        console.log(isValidWalk(pass[1]));
        console.log(isValidWalk(pass[2]));