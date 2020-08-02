function narcissistic(value) {
    // Code me to return true or false
    // a place to store number of digits
    const numArray = value.toString().split('')
    const lengthOfNumber = numArray.length
    // a place to store single digit to the power of number of digits
    // a place to store sum of powers
    let sum = 0
    for (let i = 0; i < lengthOfNumber; i++) {
        const currentNumber = numArray[i] ** lengthOfNumber
        sum += currentNumber
    }
    // return sum of powers is equal to value (boolean)
    return sum === value
  }

  function narcissistic(value) {
    // Code me to return true or false
    // a place to store number of digits
    const numArray = value.toString().split('')
    const lengthOfNumber = numArray.length
    // a place to store single digit to the power of number of digits
    // a place to store sum of powers
    return numArray.reduce((sum, number) => {
       return sum += number ** lengthOfNumber
    }, 0) == value
    // return sum of powers is equal to value (boolean)
  }

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

console.log(narcissistic( 7 ), true, "7 is narcissistic" );
console.log(narcissistic( 371 ), true, "371 is narcissistic" );
