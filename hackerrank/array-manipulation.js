// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  // time out
  let max = 0;
  let list = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const operation = queries[i];
    const startIndex = operation[0] - 1;
    const endIndex = operation[1] - 1;
    const number = operation[2];
    for (let j = startIndex; j <= endIndex; j++) {
      list[j] += number;
      if (list[j] > max) {
        max = list[j];
      }
    }
  }
  //   return Math.max.apply(Math, list);
  return max;
}

function arrayManipulation(n, queries) {
  // using object.. still times out
  let max = 0;
  const numMap = {};
  for (let i = 0; i < n; i++) {
    numMap[i] = 0;
  }
  for (let i = 0; i < queries.length; i++) {
    const operation = queries[i];
    const startIndex = operation[0] - 1;
    const endIndex = operation[1] - 1;
    const number = operation[2];
    for (let j = startIndex; j <= endIndex; j++) {
      numMap[j] += number;
      if (numMap[j] > max) {
        max = numMap[j];
      }
    }
  }
  return max;
}

const calcPrefixSum = (arr) => {
  let max = -Infinity;
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    max = Math.max(max, sum);
  }
  return max;
};

function arrayManipulation(n, queries) {
  let list = new Array(n + 2).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const operation = queries[i];
    const startIndex = operation[0];
    const endIndex = operation[1];
    const number = operation[2];
    list[startIndex] += number;
    list[endIndex + 1] -= number;
  }
  return calcPrefixSum(list);
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ]),
  200
);

console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ]),
  31
);
