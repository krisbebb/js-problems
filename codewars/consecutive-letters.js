// https://www.codewars.com/kata/5ce6728c939bf80029988b57

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example:
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

// function solve(s) {
//   let prevChar = s.charCodeAt(0)
//   for (let i = 1; i < s.length; i++ ) {
//     const currentChar = s.charCodeAt(i)
//     if (currentChar === prevChar + 1) {
//         prevChar = currentChar
//     } else {
//         return false
//     }
//   }
//   return true
// }

// function solve(s) {
//   const charCount = {};
//   for (let i = 1; i < s.length; i++) {
//     const currentChar = s.charCodeAt(i);
//     if (charCount[currentChar]) {
//       return false;
//     } else {
//       charCount[currentChar] = 1;
//     }
//   }

//   let numArray = [];
//   for (number in charCount) {
//     numArray.push(+number);
//   }
//   let prevNumber = numArray[0];

//   for (let i = 1; i < numArray.length; i++) {
//     const currentNumber = numArray[i];
//     if (currentNumber !== prevNumber + 1) {
//       return false;
//     }
//     prevNumber = currentNumber;
//   }

//   return true;
// }

function solve(s) {
    const lowerCase = /[a-z]/
    if (!lowerCase.test(s)) {
        console.log('failed regex')
        return false
    }
  const string = s.split("");
  string.sort((a, b) => a.localeCompare(b));
  let prev = string[0].charCodeAt(0);
  
  for (let i = 1; i < string.length; i++) {

    const currentLetter = string[i].charCodeAt(0);
   
    if (currentLetter === prev) {
      return false;
    } else if (currentLetter !== prev + 1) {
      return false;
    }
    prev = currentLetter
  }
  return true;
}

console.log(solve("abc") == true);
console.log(solve("abd") == false);
console.log(solve("dabc") == true);
console.log(solve("abbc") == false);

console.log(solve("abc") == true);
console.log(solve("abd") == false);
console.log(solve("abbc") == false);
console.log(solve("v") == true);
