
/* 
NAME OF PROBLEM: Opposite number
LINK TO PROBLEM: https://www.codewars.com/kata/56dec885c54a926dcd001095
LINK TO PROBLEM: https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES/NO)
*/


/*
INSTRUCTIONS: 
Very simple, given an integer or a floating-point number, find its opposite.
*/


/*
EXAMPLE:
1: -1
14: -14
-34: 34

*/



/*
NOTES
XXXXXX

*/



/* 
SAMPLE TEST

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(opposite(1), -1,)
  });
});


*/


// MY SOLUTION

function opposite(number) {
  //your code here
  console.log(number*-1);
  return number*(-1);
}



// let numberEntered = Number(prompt(`Enter a number`, -10));
let number1Entered = 1; // -1
let number2Entered = 14; // -14
let number3Entered = -34; // 34
  
console.log (opposite(number1Entered));
console.log (opposite(number2Entered));
console.log (opposite(number3Entered));




// Best Solution
function opposite(number) {
  /* Now this is the story all about how
      My life got flipped, turned upside down
      And I'd like to take a minute just sit right there
      I'll tell you how I became the prince of a town called Bel-air
      
      In west Philadelphia born and raised
      On the playground where I spent most of my days
      Chilling out, maxing, relaxing all cool
      And all shooting some b-ball outside of the school
      When a couple of guys, they were up to no good
      Started making trouble in my neighbourhood
      I got in one little fight and my mom got scared
      And said "You're moving with your auntie and uncle in Bel-air"
      
      I whistled for a cab and when it came near the
      License plate said "fresh" and had a dice in the mirror
      If anything I could say that this cab was rare
      But I thought nah, forget it, yo homes to Bel-air!
      
      I pulled up to a house about seven or eight
      And I yelled to the cabby "Yo, homes smell you later!"
      Looked at my kingdom I was finally there
      To sit on my throne as the prince of Bel-air */
  return -number;
}

// 2nd Best Solution
const opposite = number => -number;

// 3rd Best Solution
function opposite(number) {
  return number * (-1);
}

// 4th Best Solution
const opposite = n => -n;


// 5th Best Solution
function opposite(number) {
  if (number === 0) {
    return 0;
  } else if (number.toString().includes('.') && number > 0) {
    return parseFloat("-" + number, 10);
  } else if (number > 0) {
    return parseInt("-" + number, 10);
  } else if (number < 0 && number.toString().includes('.')) {
    var didget = number.toString().split('-').pop();
    return parseFloat(didget);
  } else {
    var didgets = number.toString().split('-').pop();
    return parseInt(didgets);
  }
}