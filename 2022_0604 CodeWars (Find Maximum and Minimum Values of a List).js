
/* 
NAME OF PROBLEM: Find Maximum and Minimum Values of a List 
LINK TO PROBLEM: XXXXX
LINK TO PROBLEM: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
*/


/*
EXAMPLE:
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/


/*
NOTES
You may consider that there will not be any empty arrays/vectors.
*/


// MY SOLUTION
var min = function(list){
    
    return list[0];
}

var max = function(list){
    
    return list[0];
}




/* 
SAMPLE TEST
describe("Test", function(){
  it("Examples", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});
*/



/* ################## SOLUTIONS ################## */


// Leisha's solution
var min = function(list){
    let minSorted = list.sort((a,b)=> a - b )
    return list[0];
}

var max = function(list){
   let maxSorted = list.sort((a,b)=> a - b)
    return list[list.length-1];
  }


/* 
// Best Solution
XXXXX

// 2nd Best Solution
XXXXX

// 3rd Best Solution
XXXX

// 4th Best Solution
XXX
/* 