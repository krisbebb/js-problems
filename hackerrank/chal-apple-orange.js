// print number of apples that all on house
// print number of oranges that all on house

// s to t is house location
// a is apple tree
// b is orange tree

// apples - array of apple distances
// oranges - array of orange distances

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  appleCount = apples.reduce((appleCount, apple) => {
    apple + a >= s && apple + a <= t ? appleCount++ : null;
    return appleCount;
  }, 0);
  orangeCount = oranges.reduce((orangeCount, orange) => {
    orange + b >= s && orange + b <= t ? orangeCount++ : null;
    return orangeCount;
  }, 0);
  console.log(appleCount);
  console.log(orangeCount);
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(
    apples.reduce((appleCount, apple) => {
      apple + a >= s && apple + a <= t ? appleCount++ : null;
      return appleCount;
    }, 0)
  );
  console.log(
    oranges.reduce((orangeCount, orange) => {
      orange + b >= s && orange + b <= t ? orangeCount++ : null;
      return orangeCount;
    }, 0)
  );
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]), 1, 1);
