// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((number) => Math.pow(number, 2))
    .join("");
}


function squareDigits(num) {
    return +num
      .toString()
      .split("")
      .reduce((squaredNumbers, digit) => {return squaredNumbers + Math.pow(digit, 2) }, '')
  }

console.log(squareDigits(9119), 811181);
console.log(squareDigits(123419), 14916181);

