function miniMaxSum(arr) {
  const arrMax = arr.reduce((arrMax, number) => {
    return (arrMax += number);
  }, 0);
  const { min, max } = arr.reduce(
    ({ min, max }, removedEl) => {
      const number = arrMax - removedEl;
      if (number < min) {
        min = number;
      }
      if (number > max) {
        max = number;
      }
      return { min, max };
    },
    { min: Infinity, max: 0 }
  );
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
