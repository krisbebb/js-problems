// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let count = -1;
  for (let i = 0; i < c.length; i++, count++) {
    const element = c[i];
    if (i + 2 < c.length && c[i + 2] == 0) i++;
  }
  console.log(count);
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
