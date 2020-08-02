function solution(number) {
  let sum = 0;
  if (number >= 3) {
    for (let i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  }
  return sum;
}

console.log(solution(10), 23);
