function checkMagazine(magazine, note) {
  let containsWords = true;
  const wordObj = {};
  for (let word of magazine) {
    wordObj[word] = wordObj[word] || 0;
    wordObj[word]++;
  }

  for (let currentWord of note) {
    if (wordObj[currentWord] > 0) {
      wordObj[currentWord]--;
    } else {
      containsWords = false;
      break;
    }
  }
  containsWords ? console.log("Yes") : console.log("No");
  return containsWords;
}

console.log(
  checkMagazine(
    ["give", "me", "one", "grand", "today", "night"],
    ["give", "one", "grand", "today"]
  ),
  "Yes"
);

console.log(
  checkMagazine(
    ["two", "times", "three", "is", "not", "four"],
    ["two", "times", "two", "is", "four"]
  ),
  "No"
);

console.log(
  checkMagazine(
    ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
    ["ive", "got", "some", "coconuts"]
  ),
  "No"
);
