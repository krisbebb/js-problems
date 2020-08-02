// Complete the hourglassSum function below.
// 6 x 6 array
// 16 hourglass sums
// find largest

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// hrglass row 1 is row 1 - 0 1 2, row 2 - 1, row 3 - 0 1 2
// row 2 add 1 ... up to row 4
// increment row and repeat x 4
function hourglassSum(arr) {
  let sum = 0;
  let max = -64;
  for (let row = 0; row < arr.length - 2; row++) {
    for (let col = 0; col < arr.length - 2; col++) {
      sum =
        arr[row][col] +
        arr[row][col + 1] +
        arr[row][col + 2] +
        arr[row + 1][col + 1] +
        arr[row + 2][col] +
        arr[row + 2][col + 1] +
        arr[row + 2][col + 2];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
