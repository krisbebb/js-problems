// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.
// The list(lst) contains integers, that means it may contain some negative numbers.
// If the list is empty or contains a single element, return 0.
// The list(lst) is not sorted.

function maxDiff(list) {
  let biggest = list[0];
  let smallest = list[0];
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    if (current > biggest) {
      biggest = current;
    }
    if (current < smallest) {
      smallest = current;
    }
  }
  return biggest - smallest || 0;
}

console.log(maxDiff([1, 2, 3, 4]), 3); //return 3, because 4 - 1 == 3
console.log(maxDiff([1, 2, 3, -4]), 7); //return 7, because 3 - (-4) == 7

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
