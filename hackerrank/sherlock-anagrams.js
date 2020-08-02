// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  const map = {};
  let count = 0;
  for (let sub of arr) {
    let sorted = sub
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (map[sorted]) {
      count += map[sorted];
      map[sorted]++;
    } else {
      map[sorted] = 1;
    }
  }
  return count;
}

console.log(sherlockAndAnagrams("abba"), 4);

console.log(sherlockAndAnagrams("abcd"), 0);

console.log(sherlockAndAnagrams("ifailuhkqq"), 3);
console.log(sherlockAndAnagrams("kkkk"), 10);

console.log(sherlockAndAnagrams("cdcd"), 5);
