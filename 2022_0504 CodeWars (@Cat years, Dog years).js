/* 
NAME OF PROBLEM: Cat years, Dog years
LINK TO PROBLEM: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
LINK TO PROBLEM: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
KYU LEVEL: 8KYU

SOLVED (YES/NO): ????: CORRECT RESULT - SOLVED!!! ***************
*/


/* 
############################################################
INSTRUCTIONS: 
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

############################################################
*/


/* 
############################################################
SOLUTION

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  return [0,0,0];
}
############################################################
*/


/*
EXAMPLE:
describe("Example Tests", function() {

  it("one", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});
*/


/*
NOTES
NONE.
*/



/* 
############################################################
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(plural(0), true, "Plural for 0");
Test.assertEquals(plural(0.5), true, "Plural for 0.5");
Test.assertEquals(plural(1), false, "Plural for 1");
Test.assertEquals(plural(100), true, "Plural for 100");
Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

  });
});

############################################################
*/

// SOLUTION ############################################################




var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!

let catYears = 0;
let dogYears = 0;
// I got them at the same time as kitten/puppy. That was humanYears years ago.
let humanYearsAgo = 10;
  
if (humanYears === 1){
  catYears += 15;
  dogYears += 15;
  // Return their respective ages now as [humanYears,catYears,dogYears]
  console.log (humanYears,catYears,dogYears);
    return [humanYears,catYears,dogYears];
  
} else if (humanYears === 2){
    catYears += 15 + 9;
    dogYears += 15 + 9;
    // Return their respective ages now as [humanYears,catYears,dogYears]
    console.log (humanYears,catYears,dogYears);
    return [humanYears,catYears,dogYears];
  
}  else if (humanYears > 2){
    catYears += 15 + 9 + ((humanYears - 2) * 4);
    dogYears += 15 + 9 + ((humanYears - 2) * 5);
    // Return their respective ages now as [humanYears,catYears,dogYears]
    console.log (humanYears,catYears,dogYears);
    return [humanYears,catYears,dogYears];
}
}


let humanYearsTest = 1; // humanYears are whole numbers only

/*
let catYears = 
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

let dogYears = 
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/

console.log(`Final Answer: ${humanYearsCatYearsDogYears(humanYearsTest)}`);
