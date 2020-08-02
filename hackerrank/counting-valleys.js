// Complete the countingValleys function below.
// n steps
// U or D
// mountain U's (above sea level) returning to sea level
// valley D's (below sea level) returning to sea level
// count valleys in array
function countingValleys(n, s) {
  let valleyCount = 0;
  let seaLevel = 0;
  for (let i = 0; i < n; i++) {
    const element = s[i];
    if (element == "U") {
      seaLevel++;
      if (seaLevel == 0) {
        valleyCount++;
      }
    }
    if (element == "D") {
      seaLevel--;
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]), 1);
console.log(
  countingValleys(12, [
    "D",
    "D",
    "U",
    "U",
    "D",
    "D",
    "U",
    "D",
    "U",
    "U",
    "U",
    "D",
  ]),
  2
);

// console.log(countingValleys(8, ["D", "D", "D", "D", "U", "U", "U", "U"]), 1);

// ['D','D','U','U','D','D','U','D','U','U','U','D']
