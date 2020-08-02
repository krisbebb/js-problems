function duplicateCount(text) {
  const charCounts = {};
  const seen = {};
  let sumOfDuplicates = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    charCounts[char] = charCounts[char] || 0;
    charCounts[char]++;
    if (charCounts[char] > 1 && !seen[char]) {
      sumOfDuplicates++;
      seen[char] = true;
    }
  }
  return sumOfDuplicates;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
