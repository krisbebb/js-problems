// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  let map = {};
  for (let letter of s1) {
    map[letter] = letter;
  }
  for (let letter of s2) {
    if (map[letter]) {
      return "YES";
    }
  }
  return "NO";
}

console.log(twoStrings("hello", "world"), "YES");
console.log(twoStrings("hi", "world"), "NO");
