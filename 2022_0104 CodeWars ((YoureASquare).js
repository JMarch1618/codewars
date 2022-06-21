

/* 
NAME OF PROBLEM: You're a square!
LINK TO PROBLEM: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
LINK TO PROBLEM: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/


/*
EXAMPLE:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION


return (Math.sqrt(n) % 1 === 0);








/* 
SAMPLE TEST
describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
*/






// Previous Solution
var isSquare = function(n){
	// console.log (`Console N Test ${n}`);
	// console.log(`Console SQRT Test ${Math.sqrt(n)}`);
		
	if ((Math.sqrt(n) % 1 === 0)) {
    return true; // fix me
		}
		else return false;
  }


let numberToSquare = 25;
console.log (`Final Answer ${isSquare(numberToSquare)}`);





// Best Solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

// 2nd Best Solution
const isSquare = n => Number.isInteger(Math.sqrt(n));

// 3rd Best Solution
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

// 4th Best Solution
const isSquare = n => Math.sqrt(n) % 1 === 0


// nth Best Solution
var isSquare = function(n){

    if((Math.sqrt(n) % 1) == 0)
      return true;
    else
      return false;
  }

// nth Best Solution
var isSquare = function(n){
    for (var x = 0; x <= n; x++) {
      if (n === 0) {
        return true;
      } else if (n / x === x) {
        return true;
      }
    }
    
    return false;
  }

// nth Best Solution
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 ? true : false;
  };

// nth Best Solution
var isSquare = function(n){
    n = Math.sqrt(n);
    return ~~n === n;
  }

// nth Best Solution
var isSquare = function(n){
    return Math.sqrt(n) % 1 == 0;
  }

// nth Best Solution
var isSquare = function(n){
    var r = Math.sqrt(n);
    return r === Math.floor(r);
  }

// nth Best Solution
function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
  }

// nth Best Solution


// nth Best Solution



// nth Best Solution
return (Math.sqrt(n) % 1 === 0);

