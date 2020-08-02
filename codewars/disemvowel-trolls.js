function disemvowel(str) {
    return str.match(/[^aeiouAEIOU]+/g).join('');
  }

console.log(disemvowel("This website is for losers LOL!"),
"Ths wbst s fr lsrs LL!")