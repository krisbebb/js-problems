// Complete the rotLeft function below.
// a is array, d is amount of times to rotate left
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    const element = a.shift();
    a.push(element);
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
