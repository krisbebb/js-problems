function findOutlier(integers) {
  const map = { evens: 0, odds: 0 };
  let parity = null;
  for (let i = 0; i < integers.length; i++) {
    const int = integers[i];
    if (int % 2 === 0) {
      map["evens"]++;
    } else if (int % 2 !== 0) {
      map["odds"]++;
    }
    if (map["evens"] > 1) {
      parity = "even";
      break;
    } else if (map["odds"] > 1) {
      parity = "odd";
      break;
    }
  }
  if (parity == "even") {
    return integers.find((int) => int % 2 !== 0);
  } else {
    return integers.find((int) => int % 2 == 0);
  }
}

// console.log(findOutlier([0, 1, 2]), 1);
// console.log(findOutlier([1, 2, 3]), 2);
// console.log(findOutlier([2, 6, 8, 10, 3]), 3);
// console.log(findOutlier([0, 0, 3, 0, 0]), 3);
// console.log(findOutlier([1, 1, 0, 1, 1]), 0);

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160)