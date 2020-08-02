function divisors(integer) {
  let results = [];
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i == 0) {
      if (integer / i == i) {
        results.push(i);
      } else {
        results.push(i, integer / i);
      }
    }
  }
  return results.length == 0
    ? integer + " is prime"
    : results.sort((a, b) => a - b);
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
