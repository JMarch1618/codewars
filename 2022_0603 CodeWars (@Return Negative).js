
/* 
NAME OF PROBLEM: Return Negative
LINK TO PROBLEM: https://www.codewars.com/kata/55685cd7ad70877c23000102
LINK TO PROBLEM: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/


/*
EXAMPLE:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

*/


/*
NOTES

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/


// MY SOLUTION
function makeNegative(num) {
    // Code?
    console.log (`test: ${num}`)
    return (num > 0) ? -num : num;
    
  }
  
  let makeNegative1 = 1;    // return -1
  let makeNegative2 = -5;   // return -5
  let makeNegative3 = 0;    // return 0
  let makeNegative4 = 0.12; // return -0.12
  
  
  console.log(`The answer: ${makeNegative(makeNegative1)}`)
  console.log(`The answer: ${makeNegative(makeNegative2)}`)
  console.log(`The answer: ${makeNegative(makeNegative3)}`)
  console.log(`The answer: ${makeNegative(makeNegative4)}`)
  
  
  }




/* 
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});

*/







// Best Solution
function makeNegative(num) {
  return -Math.abs(num);
}

// 2nd Best Solution
function makeNegative(num) {
    return num < 0 ? num : -num;
  }

// 3rd Best Solution
function makeNegative(num) {
    return num > 0 ? -num : num;
  }

// 4th Best Solution
makeNegative = n => -Math.abs(n)


// 5th Best Solution
function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }


// 6th Best Solution
makeNegative = n => -Math.abs(n)


// 7th Best Solution
const makeNegative = n => n<=0?n:-n

//Solution

function makeNegative(num) {
    return Math.abs(num) * -1;
  }


  //Solution
  function makeNegative(num) {
    if(num>0){
    return -num;
    } else if(num<0) {
    return num;
    } else if(num===0){
    return 0;
    }
  }


  //Solution
  function makeNegative(num) {
    if(num <= 0){
      return num;
    }
    else
       return num *=-1
  }