function vowelsAndConsonants(s) {
  const consonants = [];
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let char of s) {
    vowels.has(char) ? console.log(char) : consonants.push(char);
  }
  consonants.forEach((char) => console.log(char));
}

vowelsAndConsonants("javascriptloops");
