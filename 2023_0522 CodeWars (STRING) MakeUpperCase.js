




// DELETE THIS DELETE THIS DELETE THIS DELETE THIS 
// ###############################################





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





PREP: 
// https://dev.to/phariale/prep-technique-for-algorithms-in-js-5b0g
is a methodology in which to approach an algorithm or coding challenge. The acronym stands for Parameters, Return, Example, Pseudocode.
---------------------------------------------------------------------------------------------------------------------------------------------

Parameters
    What is the type of argument being inputted and are there multiple or default arguments?

Return
    What is being asked to be returned and what is the type?

Example (& EdgeCases)
    Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. 
    Can you think of any edge cases?


Pseudocode (translate to Solution afterwards)
    Write informal steps on how to solve the problem. 
    Think about what the parameters are and what steps need to be taken to get to our expected return. 
    All statements showing "dependency" are to be indented.

Conclusion
    When solving an algorithm, remember to think of your parameters and return immediately. 
    If examples are not provided, write out a few yourself so that you may test as you go. 
    Pseudocode your thoughts on how to solve and keep it in a syntax in which can be converted to code.


// ###############################################
// DELETE THIS DELETE THIS DELETE THIS DELETE THIS   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


/* 
NAME OF PROBLEM: MakeUpperCase
LINK TO PROBLEM: https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
LINK TO PROBLEM: https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/sql
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Write a function which converts the input string to uppercase.
*/


/*
EXAMPLE:
XXXXXX
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION: IN PREP METHOD
// --------------------------------------------------------
// P (Parameters)
//
// R (Return)
//
// E (Example & EdgeCase)
//
// P (Pseudocode)
//
//
function makeUpperCase(str) {
    // Code here
      let newWord = str;
      return newWord.toUpperCase()
  }
  
  let word1 = 'asfda';
  let word2 = 'weace';
  
  console.log(`First answer: ${makeUpperCase(word1)}`);
  console.log(`Second answer: ${makeUpperCase(word2)}`);
  
  
  
  



/* 
SAMPLE TEST
const { assert } = require('chai');

describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    assert.strictEqual(makeUpperCase(""),           "");
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
  });
});
*/






//  SOLUTIONS ###############################
// Best Solution
const makeUpperCase = str => str.toUpperCase();

// 2nd Best Solution
function makeUpperCase(str) {return str.toUpperCase();}


// 3rd Best Solution
function makeUpperCase(str) {
    return str.toLocaleUpperCase();
  }

// 4th Best Solution
function makeUpperCase(str) {
    // Code here
    var res = str.toUpperCase();
    return res;
  }


// nth Best Solution
function makeUpperCase(str) {
    return str.toUpperCase();
    }
    

// nth Best Solution - This uses the String.prototype.charCodeAt() METHOD making use of UTF-16 Code
function makeUpperCase(str) {
    let output = '';
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt(0);
      const chr = (charCode >= 97 && charCode <= 122) ? String.fromCharCode(charCode - 32) : str[i];
  
      output += chr;
    }
    
    return output;
  }

// nth Best Solution
let u = {
  'a':'A','b':'B','c':'C','d':'D','e':'E','f':'F','g':'G','h':'H','e':'E','f':'F','g':'G','h':'H','i':'I','j':'J','k':'K',
  'l':'L','m':'M','n':'N','o':'O','p':'P','q':'Q','r':'R','s':'S','t':'T','u':'U','v':'V','w':'W','x':'X','y':'Y','z':'Z'
};

function makeUpperCase(str) {
  return str.split('').map( (x) => { return u[x] ? u[x] : x } ).join('');
}

// nth Best Solution
function makeUpperCase(str) {
  let lower = 'abcdefghijklmnopqrstuvwxyz', 
      upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
      output = '';
  for (let i = 0; i <= str.length -1; i++) {   
    for (let j = 0; j <= lower.length -1; j++) {
      if (str[i] === lower[j]) {output = output + upper[j]; break;}
      if (j === lower.length -1 && str[i] !== lower[j]) output = output + str[i];
    }
  }
  return output;
}

// nth Best Solution
// GOOD JOBE.....
function makeUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

// nth Best Solution
XXX

