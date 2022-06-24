
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: Remove String Spaces
LINK TO PROBLEM: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
LINK TO PROBLEM: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Simple, remove the spaces from the string, then return the resultant string.
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
function noSpace(x){
    let wordArray = x.split(' ').join('');
        console.log(wordArray);
        return wordArray;
    }
    
    let testWord = "Basic tests";
    console.log(noSpace(testWord));


// MY SOLUTION - ARROW FUNCTION
let noSpace = (x) => x.split(' ').join('');




/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});
*/







// Best Solution
function noSpace(x){
  return x.replace(/\s/g, '');
}


// 2nd Best Solution
function noSpace(x){return x.split(' ').join('')}

// 3rd Best Solution
const noSpace = x => x.replace(/ /g, "");

// 4th Best Solution
const noSpace = x => x.replace(/ /g, "");


// nth Best Solution
function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }

// nth Best Solution
function noSpace(x){
    if (typeof x === 'string') return x.replace(/ +/g, '');
    console.log(arguments.callee.name + ': Argument must be string!');
  }

// nth Best Solution
const noSpace=x=>x.split(" ").join("");

// nth Best Solution
function noSpace(x){
    return x.replace(/ /g,'')
 }

// nth Best Solution
const noSpace = (str) => str.replace(/\s*/g, '');

// nth Best Solution
function noSpace(x){
    return x.replace(/\s+/g,'')
  }

