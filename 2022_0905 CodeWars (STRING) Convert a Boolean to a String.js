




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
NAME OF PROBLEM: Convert a Boolean to a String
LINK TO PROBLEM: https://www.codewars.com/kata/551b4501ac0447318f0009cd
LINK TO PROBLEM: https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/





/*
INSTRUCTIONS: 
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/






/*
EXAMPLE:
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});

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




// Parameters: 
  // Boolean

// Return: 
  // Return the value into its STRING representation

// Example (& Edgecases)
  //

// Pseudocode: 
  // Take in an agrument
  // Turn it into a STRING
  // Return that RESULT
  
  //your code here
  let booleanToString = (b) => b.toString();



  let inputValue = true;
  console.log (booleanToString(inputValue));








/* 
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});

*/











//  SOLUTIONS ###############################
// Best Solution
function booleanToString(b){
    return b.toString();
  }

// 2nd Best Solution
function booleanToString(b){
    return b ? 'true' : 'false';
  }

// 3rd Best Solution
function booleanToString(b){
    return String(b);
  }

// 4th Best Solution
function booleanToString(b){
    let words = [b.toString()[0], b.toString()[1], b.toString[2], b.toString[3], b.toString()[4]];
    if(words[0] == 't')
        for(let i in words)
          while(words[0] = "t")
            while(words[1] = "r")
              while(words[2] = "u")
                while(words[3] = "e")
                  return words.splice(0, 20, "t", "r", "u", "e").join("");
    if(words[0] == 'f')
        for(let i in words)
          while(words[0] = "f")
            while(words[1] = "a")
              while(words[2] = "l")
                while(words[3] = "s")
                  while(words[4] = "e")
                  return words.splice(0, 20, "f", "a", "s", "s", "e").join("");
    if(words[0] == 'd')
        for(let i in words)
          while(words[0] = "d")
            while(words[1] = "u")
              while(words[2] = "d")
                while(words[3] = "e")
                  return words.splice(0, 20, "d", "u", "d", "e").join("");
  }


// nth Best Solution
function booleanToString(b){
    return `${b}`
  }

// nth Best Solution
const booleanToString = b => b ? 'true' : 'false';

// nth Best Solution
function booleanToString(b){
    return b+'';
  }

// nth Best Solution
function booleanToString(b){
    if (typeof b == 'boolean') {
      return String(b);
    }
  }

// nth Best Solution
function booleanToString(b){
    if(b){
        return "true";
    }
        return "false";
}

// nth Best Solution
const booleanToString = input => input + "";

// nth Best Solution

// nth Best Solution

// nth Best Solution

// nth Best Solution

