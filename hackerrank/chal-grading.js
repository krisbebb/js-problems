/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * 

grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.

If the difference between the grade and the next multiple of 5 is less than 3, 
    round grade up to the next multiple of 5.
If the value of grade is less than 38, 
    no rounding occurs as the result will still be a failing grade.

For example, grade = 84 will be rounded to 85 
    but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.
 */

function gradingStudents(grades) {
  // Write your code here
  let roundedGrades = [];
  // iterate over grades
  for (let i = 0; i < grades.length; i++) {
    // if grade >= 40, and grade mod 5 >= 3
    let grade = grades[i];
    if (grade >= 38 && grade % 5 >= 3) {
      // grade += 5 - (grade mod 5)  to round up to next 5
      grade += 5 - (grade % 5);
    }
    roundedGrades.push(grade);
  }

  return roundedGrades;
}

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade >= 38 && grade % 5 >= 3) {
      grade += 5 - (grade % 5);
    }
    return grade;
  });
}

console.log(gradingStudents([84, 29]));
