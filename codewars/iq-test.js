function iqTest(numbers) {
  const evens = {};
  const odds = {};
  const numArray = numbers.split(" ");
  for (let i = 0; i < numArray.length; i++) {
    const digit = numArray[i];
    if (digit % 2 == 0) {
      evens[i + 1] ? evens[i + 1]++ : (evens[i + 1] = 1);
    } else {
      odds[i + 1] ? odds[i + 1]++ : (odds[i + 1] = 1);
    }
  }
  return Object.keys(evens).length == 1
    ? +Object.keys(evens)[0]
    : +Object.keys(odds)[0];
}

// console.log(iqTest("2 4 7 8 10"), 3);
// console.log(iqTest("1 2 2"), 1);
console.log(iqTest("5 3 2"), 3);
