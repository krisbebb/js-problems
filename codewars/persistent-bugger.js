function persistence(num) {
  let result = num.toString().split("");
  let count = 0;
  while (result.length > 1) {
    result = result.reduce((acc, number) => {
      return [acc * number];
    }, 1);
    result = result.toString().split("");
    count++;
  }
  return count;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
