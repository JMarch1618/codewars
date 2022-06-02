
/* 
NAME OF PROBLEM: Sum of positive
LINK TO PROBLEM: https://www.codewars.com/kata/5715eaedb436cf5606000381
LINK TO PROBLEM: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
You get an array of numbers, return the sum of all of the positives ones.
*/


/*
EXAMPLE:
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION

// MY SOLUTION
function positiveSum(arr) {
    let sumOfEachArray = 0;  
    console.log(arr);
    
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      sumOfEachArray += arr[i];
      console.log(sumOfEachArray);
    }
  }
  return sumOfEachArray;
  }
  
  
  let testNumbers = [1,-4,7,12];
  
  console.log (positiveSum(testNumbers));
  
  



/* 
SAMPLE TEST
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });
*/






 
// Best Practice
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// Most Clever
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

// 3rd Best Solution
function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }

// 4th Best Solution
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
