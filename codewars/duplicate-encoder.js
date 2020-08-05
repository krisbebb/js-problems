function duplicateEncode(word) {
  const letterCount = {};
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    letterCount[letter] = letterCount[letter] || 0;
    letterCount[letter]++;
  }
  console.log(letterCount)
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    letterCount[letter] == 1
      ? (result = result + "(")
      : (result = result + ")");
  }
  return result;
}

// console.log(duplicateEncode("din") === "(((");
// console.log(duplicateEncode("recede") === "()()()");
// console.log(duplicateEncode("Success") === ")())())", "should ignore case");
// console.log(duplicateEncode("(( @") === "))((");


console.log(duplicateEncode("CodeWarrior") === "()(((())())");
