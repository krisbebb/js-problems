// Complete the repeatedString function below.
// count a's
// s is string
// n is number of times s is repeated

function repeatedString(s, n) {
  let aArray = s.match(/a/g) || [];
  const repeatRemainder = s.slice(0, n % s.length).match(/a/g) || [];
  let repeatTimes = parseInt(n / s.length);
  return aArray.length * repeatTimes + repeatRemainder.length;
}
console.log(repeatedString("aba", 10), 7);
console.log(repeatedString("abcac", 10), 4);
console.log(repeatedString("a", 1000000000000), 1000000000000);

