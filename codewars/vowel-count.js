function getCount(str) {
  let vowelsCount = 0;
  for (let letter of str) {
    if (letter.match(/[aeiou]/g)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount("abracadabra"), 5);
