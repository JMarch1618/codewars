
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT


HTML
<!-- Write your comments here -->
CSS
/* This is a single-line comment */
JS
// This is a single-line comment
/*
This is a multi-line comment
*/

DELETE THIS 
DELETE THIS 
DELETE THIS 

/* 
NAME OF PROBLEM: Keep Hydrated!
LINK TO PROBLEM: https://www.codewars.com/kata/582cb0224e56e068d800003c
LINK TO PROBLEM: https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
*/


/*
EXAMPLE:
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function litres(time) {
	let totalLitres = 0;
	totalLitres = (0.5 * time)
	return Math.floor(totalLitres);
  }

let time1 = 3 // ----> litres = 1
let time2 = 6.7 // ---> // litres = 3
let time3 = 11.8 // --> // litres = 5

console.log (`Total litres to consume: ${litres(time1)}`);
console.log (`Total litres to consume: ${litres(time2)}`);
console.log (`Total litres to consume: ${litres(time3)}`);





/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Tests', () => {
    assert.strictEqual(litres(2), 1, 'should return 1 litre');
    assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    assert.strictEqual(litres(0), 0, 'should return 0 litres');
  });
});
*/







// Best Solution
function litres(time) {
    return Math.floor(time * 0.5);
  }

// 2nd Best Solution
function litres(time) {
    return Math.floor(time/2);
  }

// 3rd Best Solution
const litres = time => Math.floor(time * 0.5);

// 4th Best Solution
litres = t => ~~(t / 2);


// nth Best Solution
function litres(time) {
    return parseInt(time/2);
  }

// nth Best Solution
function litres(time) {
    var lit = time * 0.5;
    return Math.floor(lit);
  }

// nth Best Solution
function litres(time) {
    return (time / 2) | 0;
  }

// nth Best Solution
var litres = (a) => Math.floor(a * 0.5)

// nth Best Solution
function litres(time) {
    return time>>1
  }

// nth Best Solution
litres=time=>~~(time*0.5)

