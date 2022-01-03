

/* 
NAME OF PROBLEM: Remove First and Last Character
LINK TO PROBLEM: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
LINK TO PROBLEM: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


/*
EXAMPLE:
XXXXXX
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function removeChar(str){
    //You got this!
let newStringArray = str.split('')
	console.log(`In FUNCTION after SPLIT: ${newStringArray}`);
	console.log(Array.isArray(newStringArray));


let editedArray = newStringArray.slice(1,newStringArray.length-1);
	// editedString.slice(1,4);
	console.log(`In FUNCTION after SLICE: ${editedArray}`);
	console.log(Array.isArray(editedArray));

	// editedString.pop();
	// console.log(`In FUNCTION after POP: ${editedString}`);

	// editedString.shift();
	// console.log(`In FUNCTION after SHIFT: ${editedString}`);

let finalString = editedArray.join('');
 console.log(`In FUNCTION after JOINED: ${finalString}`);
	console.log(Array.isArray(finalString));

// editedString.slice(0,editedString.length-1)
// console.log(`Inside Function: ${editedString}`);
return finalString;
	
   };


// let wordChosen = prompt(`Enter Word that will be used`, `Midnight`);

let wordChosen = 'baseball';

console.log (`Word after front & back removed:  ${removeChar(wordChosen)}`);


/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
 
*/



// Best Solution
function removeChar(str) {
    return str.slice(1, -1);
  }

// 2nd Best Solution
const removeChar = str => str.slice(1,-1)

// 3rd Best Solution
function removeChar(str){
    return str.substring(1, str.length-1);
   };
   

// 4th Best Solution
function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };
   


// nth Best Solution
removeChar = str => str.slice(1,-1)


// nth Best Solution
function removeChar(str){
    return str.slice(1, str.length - 1);
  };
  

// nth Best Solution
function removeChar(str){
    return str.slice(1,-1)  // argument -1 is the same as 'str.length -1'
   };

// nth Best Solution
XXX

// nth Best Solution
XXX

// nth Best Solution
XXX

