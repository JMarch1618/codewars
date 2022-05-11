
/* 
NAME OF PROBLEM: Even or Odd
LINK TO PROBLEM: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
LINK TO PROBLEM: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


/*
EXAMPLE:
XXXXXX

*/



/*
NOTES
XXXXXX

*/



/* 
SAMPLE TEST

const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});

*/


// MY SOLUTION

function even_or_odd(number) {
  if (number % 2 === 0){
    return ("Even")
  } else if (number % 2 !== 0){
    return ("Odd");
  }
   
}


console.log(even_or_odd(3));




// Best Solution
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}



// 2nd Best Solution
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// 3rd Best Solution
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


// 4th Best Solution
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
