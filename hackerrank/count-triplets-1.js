// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let ans = 0;
  const counter = {};
  const potential = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const key = value / r;
    console.log(value);
    console.log(key);

    if (value % r === 0) {
      if (counter[key] !== undefined) {
        console.log(ans);
        ans += counter[key];
        console.log(counter[key]);
        console.log(ans);
      }

      if (potential[key] !== undefined) {
        const inc = potential[key];
        console.log(inc);

        counter[value] = counter[value] + inc || inc;
        console.log(counter[value]);
        console.log(counter);
      }
    }

    potential[value] = potential[value] + 1 || 1;
    console.log(value);
    console.log(potential[value]);
    console.log(potential);
  }
  console.log(potential);
  console.log(counter);

  return ans;
}

// console.log(countTriplets([1, 2, 2, 4], 2), 2);
// 4 2
// 1 2 2 4
// = 2
// 4 elements, geometric progress of 2, = 2 triplets

// console.log(countTriplets([1, 3, 9, 9, 27, 81], 3), 6);
// 6 3
// 1 3 9 9 27 81
// = 6

console.log(countTriplets([1, 5, 5, 25, 125], 5), 4);
// 5 5
// 1 5 5 25 125
// = 4
