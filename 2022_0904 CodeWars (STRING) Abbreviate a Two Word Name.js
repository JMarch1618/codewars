




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




// ###############################################
// DELETE THIS DELETE THIS DELETE THIS DELETE THIS 


/* 
NAME OF PROBLEM: Abbreviate a Two Word Name
LINK TO PROBLEM: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
LINK TO PROBLEM: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


/*
EXAMPLE:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});

*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION: IN PREP METHOD
        // code away

// Parameters:
        // Two Words
        // One Space

// Return:
        // Two capital letters
        // Dot Separating Initials

// Example & Edgecases:
        // Are beginning words already capitalized?

// Pseudocode:
        // Run through string.
        // Break the two words at the space
        // Remove the FIRST letter
        // Add DOT
        // Remove 2nd letter
        // Save into a new VARIABLE

let abbrevName = (name) => {

	let newArray = name.split(' ').map(element => element.substring(0, 1).toUpperCase()).join(".")

	// Return: Two capital letters & Dot Separating Initials
	return (newArray);
}



console.log(abbrevName("Sam Harris"))    //"S.H");
console.log(abbrevName("Patrick Feenan"))    //"P.F");
console.log(abbrevName("Evan Cole"))    //"E.C");
console.log(abbrevName("P Favuzzi"))    //"P.F");
console.log(abbrevName("David Mendieta"))    //"D.M");
console.log(abbrevName("savid lendieta"))    //"S.L");




/* 
SAMPLE TEST
XXXXXX
*/






//  SOLUTIONS ###############################
// Best Solution
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

// 2nd Best Solution
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

// 3rd Best Solution
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }

// 4th Best Solution
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// nth Best Solution
function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

}

// nth Best Solution
const abbrevName = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  };

// nth Best Solution
function abbrevName(name){
    if (typeof name === 'string') {
      let names = name.split(' ');
      return `${names[0][0]}.${names[1][0]}`.toUpperCase();
    }
    console.log(arguments.callee.name + ': Argument must be string!');
  }

// nth Best Solution
const abbrevName = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');

// nth Best Solution
const abbrevName = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');

// nth Best Solution
function abbrevName(name){
    name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}

// nth Best Solution
function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}

// nth Best Solution
const abbrevName = name =>
  name
    .split` `
    .map(part => part[0].toUpperCase())
    .join('.')

// nth Best Solution
var abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// nth Best Solution
function abbrevName(name){
    return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
  }

// nth Best Solution
function abbrevName(name){
    
    return (name[0]+'.'+name[name.indexOf(' ')+1]).toUpperCase();

}

// nth Best Solution
function abbrevName(name){
    //converts name to uppercase
        name = name.toUpperCase();
    //locates the start of the second initial just after the "space" character
        let secondInitial = name.indexOf(" ") + 1;
    //slice the first and second initials with a dot between
        let initials = `${name.slice(0,1)}.${name.slice(secondInitial,secondInitial + 1)}`
        return initials;
    }

// nth Best Solution
XXX

// nth Best Solution
XXX
