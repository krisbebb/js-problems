// 1, 10, 9, 12, 3, 4

// Then the whole pattern repeats.

// Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the second right most digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

// Example: What is the remainder when 1234567 is divided by 13?
// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
// We repeat the process with 178:
// 8x1 + 7x10 + 1x9 = 87
// and again with 87:
// 7x1 + 8x10 = 87
// From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9
// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
// thirt(1234567) calculates 178, then 87, then 87 and returns 87.
// thirt(321) calculates 48, 48 and returns 48

function thirt(n) {
  const sequence = [1, 10, 9, 12, 3, 4];
  let numberString = n.toString();
  let sum,
    completedSum = 0;
  while (completedSum !== sum) {
    completedSum = sum;
    sum = 0;
    const numberArray = numberString.split("");
    let seqIndex = 0;
    for (let i = numberArray.length - 1; i >= 0; i--) {
      const number = numberArray[i];
      sum += number * sequence[seqIndex % 6];
      seqIndex++;
    }
    numberString = sum.toString();
  }
  return completedSum;
}

console.log(thirt(1234567), 87);

console.log(thirt(8529), 79);
console.log(thirt(85299258), 31);
console.log(thirt(5634), 57);
console.log(thirt(1111111111), 71);
console.log(thirt(987654321), 30);
