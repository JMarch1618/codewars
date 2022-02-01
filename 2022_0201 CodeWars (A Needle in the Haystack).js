
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
NAME OF PROBLEM: A Needle in the Haystack
LINK TO PROBLEM: XXXXX
LINK TO PROBLEM: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so: 
*/


/*
EXAMPLE:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function findNeedle(haystack) {
    // your code here
  
      let foundNeedle = '';
      for (let i = 0; i < haystack.length; i++){
          if (haystack[i] === 'needle'){
          foundNeedle = [i];
              console.log (`found the needle at position ${foundNeedle}`);
          }
      }
      return (`found the needle at position ${foundNeedle}`);
  }
  
  let arrayEntered = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] // --> "found the needle at position 5" 
  
  console.log(findNeedle(arrayEntered))
  
  
  
  


/*
  function findNeedle(haystack) {
    let string = ''
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        string = found the needle at position ${[i]} 
      }
    }
    return string
  }
*/


/* 
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
  });
});

*/






/* 
// Best Solution
XXXXX

// 2nd Best Solution
XXXXX

// 3rd Best Solution
XXXX

// 4th Best Solution
XXX


// nth Best Solution
XXX

// nth Best Solution
XXX

// nth Best Solution
XXX

// nth Best Solution
XXX

// nth Best Solution
XXX

// nth Best Solution
XXX

/* 