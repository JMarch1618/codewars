




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

// ###############################################
// DELETE THIS DELETE THIS DELETE THIS DELETE THIS 


/* 
NAME OF PROBLEM: Returning Strings
LINK TO PROBLEM: https://www.codewars.com/kata/55a70521798b14d4750000a4
LINK TO PROBLEM: https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
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
// https://dev.to/phariale/prep-technique-for-algorithms-in-js-5b0g

PREP is a methodology in which to approach an algorithm or coding challenge. The acronym stands for Parameters, Return, Example, Pseudocode.

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



//your code here

// P (Parameters)
    // One preset string.

// R (Return)
    // String exactly as noted, but swap out the argument.

// E (Example & EdgeCase)
    // Letters. 

// P (Pseudocode)
    // list the preset string
    // Insert the argument within that string
    // return the new string
    // Create a variable to accept name.
    // console log & call the function

let greet = (name) => (`Hello, <name> how are you doing today?`).replace('<name>', name);

console.log(greet())



// ALTERNATE SOLUTION
// TRADITIONAL FUNCTION
// REPLACED WITH ${}

function greet(name){
    return (`Hello, ${name} how are you doing today?`)
}
// Create a variable to accept name.
let nameEntered = 'Joe';

// console log & call the function
console.log (greet(nameEntered));






/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})

*/






//  SOLUTIONS ###############################
// Best Solution
function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

// 2nd Best Solution
const greet = name => `Hello, ${name} how are you doing today?`;

// 3rd Best Solution
// Return a greeting string
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
  }

// 4th Best Solution
function greet(name) {
    return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`
  }


// nth Best Solution
function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }

// nth Best Solution
function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
  }

// nth Best Solution
const greet=n=>`Hello, ${n} how are you doing today?`;

// nth Best Solution
greet=_=>`Hello, ${_} how are you doing today?`

// nth Best Solution
function greet(Nemo){return `Hello, ${Nemo} how are you doing today?`}

// nth Best Solution
function greet(eman){
    return `Hello, ${eman} how are you doing today?`
  }

// nth Best Solution
function greet(name){
    let a= name.split("");
        let j=[];
           a[0]="Hello,"
           a[1]=name
           a[2]="how are you doing today?"
           j.push(a[0],a[1],a[2])
           return j.join(" ")
}

// nth Best Solution
XXX

