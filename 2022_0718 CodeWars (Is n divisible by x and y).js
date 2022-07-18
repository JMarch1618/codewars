
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: XXXXX
LINK TO PROBLEM: XXXXX
LINK TO PROBLEM: https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/


/*
EXAMPLE:
Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
        return true;
    } else return false;
}




/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(isDivisible(3,3,4),false);
    assert.strictEqual(isDivisible(12,3,4),true);
    assert.strictEqual(isDivisible(8,3,4),false);
    assert.strictEqual(isDivisible(48,3,4),true);
  });
});

*/


let number = 5;
let numberX = 2;
let numberY = 10;


console.log (isDivisible(number,numberX,numberY));





// Best Solution
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// 2nd Best Solution
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
  }

// 3rd Best Solution
function isDivisible(n, x, y) {
    return !(n%x||n%y)
  }

// 4th Best Solution
const isDivisible = (n, x, y) => n%x==0 && n%y==0;


// nth Best Solution
function isDivisible(n, ...dividers) {
    return dividers.every(divider => n % divider == 0)
  }

// nth Best Solution
isDivisible = (n, x, y) => n % x == 0 && n % y == 0

// nth Best Solution
function isDivisible(n, x, y) {
    return (n%x)==0 && (n%y) == 0;
}

// nth Best Solution
const isDivisible = (n, x, y) =>
  n % x === 0 && n % y === 0;

// nth Best Solution
function isDivisible(n, x, y) {
    return (n % x) + (n % y) == 0;
  }

// nth Best Solution
function isDivisible(n, x, y) {
    return true ? ((n % x == 0) && (n % y == 0)) : false; 
    }


// nth Best Solution
function isDivisibleBy(n, x) {
    return n % x === 0;
    }
    
    function isDivisible(n, x, y) {
    return isDivisibleBy(n, x) && isDivisibleBy(n, y);
    }

// nth Best Solution
isDivisible = (n, x, y) => n % x || n % y ? false : true;