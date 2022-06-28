
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: Grasshopper - Summation
LINK TO PROBLEM: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
LINK TO PROBLEM: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/


/*
EXAMPLE:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
var summation = function (num) {
    // Code here
let sumOfNumber = 0;
	
	for (let i = 0; i <= num; i++){
		console.log(`Current value of i: ${i}`)
		sumOfNumber += i;
		console.log(`Current value of SUM: ${sumOfNumber}`)
	}
		return sumOfNumber;
  }


let finalNum = 8;
console.log(`Final Answer: ${summation(finalNum)}`)


// OPTION ASKING USER FOR INPUT
let finalNum2 = prompt(`Enter highest number`,50);
console.log(`Final Answer: ${summation(finalNum2)}`)





/* 
SAMPLE TEST
describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})

*/






// Best Solution
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }

// 2nd Best Solution
const summation = n => n * (n + 1) / 2;

// 3rd Best Solution
function summation(num) {
    return num * (num + 1) / 2
  }

// 4th Best Solution
var summation = function (num) {
    var sum = 0;
    for(var i=0; i<=num;i++){
      sum+=i
    }
    return sum;
  }


// nth Best Solution
var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }

// nth Best Solution
var summation = function (num) {
    return num * (num+1) / 2;
  }

// nth Best Solution
const summation = num => (
    Array(num).fill(true)
      .reduce((sum, item, index) => sum + index + 1, 0)
  );

// nth Best Solution
const summation = num => (1 + num) * num / 2;

// nth Best Solution
Xvar summation = function (num) {
    return (num) ? num + summation(num - 1) : num;
 }XX

// nth Best Solution
XXX
