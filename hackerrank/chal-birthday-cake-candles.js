function birthdayCakeCandles(ar) {
  const max = Math.max(...ar);
  return ar.filter((number) => number === max).length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]), 2);
