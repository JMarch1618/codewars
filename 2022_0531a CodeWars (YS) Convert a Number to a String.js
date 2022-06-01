
/* 
NAME OF PROBLEM: Convert a Number to a String!
LINK TO PROBLEM: XXXXX
LINK TO PROBLEM: XXXXX https:https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO) CORRECT RESULT - xxxxxxxxx
*/


/*
INSTRUCTIONS: 
We need a function that can transform a number into a string.

What ways of achieving this do you know?

*/


/*
EXAMPLE:
123 --> "123"
999 --> "999"

*/



/*
NOTES
XXXXXX

*/



/* 
SAMPLE TEST
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});


*/

// MY SOLUTION
function numberToString(num) {
    // Return a string of the number here!
  return num.toString();
  }





let numberChosen = 5;
console.log(numberToString(numberChosen));




// Best Practice
SAME AS MINE!!!

// 2nd Best Solution
function numberToString(num) {
    // Return a string of the number here!
    return String(num);
  }

// Clever
function numberToString(num) {
    return ''+num;
  }

// 4th Best Solution
const numberToString = num => `${num}`;


// 5th Best Solution
const numberToString = num => num.toString();