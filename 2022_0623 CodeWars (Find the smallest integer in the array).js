
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: Find the smallest integer in the array
LINK TO PROBLEM: https://www.codewars.com/kata/55a2d7ebe362935a210000b2
LINK TO PROBLEM: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/


/*
EXAMPLE:
XXXXXX
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION  *SOLVED, BUT IT NEEDED THE CLASS TO ACTUALLY WORK FOR THE TEST, AND I DIDN'T UNDERSTAND THAT PART*  
// SEE ACTUAL ANSWER DIRECTLY BELOW.
function findSmallestInt(args) {
			
    let smallInt = args[0];
        console.log(smallInt)
for (let i = 0; i < args.length; i++){
    if (smallInt > args[i]){
        console.log(`Console inside IF: ${smallInt}`)
        smallInt = args[i];
    }
}
return smallInt;
}


// ACTUAL CORRECT SOLUTION. I COPIED IT WITH THE CLASS VERSUS FUNCTION*  
class SmallestIntegerFinder {
    findSmallestInt(args) {
                 
              let smallInt = args[0];
                  console.log(smallInt)
      for (let i = 0; i < args.length; i++){
              if (smallInt > args[i]){
                  console.log(`Console inside IF: ${smallInt}`)
                  smallInt = args[i];
              }
          }
          return smallInt;
   }
  }







/* 
SAMPLE TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  let sif = new SmallestIntegerFinder();
  it("Fixed Tests", () => {
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
})
*/







// Best Solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// 2nd Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }

// 3rd Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
  }

// 4th Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }


// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt( $ ) {
      return Math.min(...$);
    }
  }

// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
  }

// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
    }
  }

// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(Math, args)
    }
  }

// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(this,args);
    }
  }

// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var min = Number.POSITIVE_INFINITY;
      args.forEach((value,index)=>{
         if(value < min) min = value;
      });
      return min;
    }
  }

// nth Best Solution
class SmallestIntegerFinder 
{
    findSmallestInt(args) 
    {
        var a = args.sort(function(a, b){return a-b});
        return a[0, 0];
    }
}


// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0];
      for(let i = 0; i< args.length; i++) {
        min = min < args[i] ? min : args[i]
      }
      return min;
    }
  }


// nth Best Solution
class SmallestIntegerFinder {
    constructor() {
      this.findSmallestInt = Function.apply.bind(Math.min, null);
    }
  }


// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt = args => Math.min(...args);
  }


// nth Best Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestInteger;
   
      for (let i = 0; i < args.length; i++){
          if ( args[i] <= args[0] ) {
              args[0]  = args[i];    
              smallestInteger = args[i];
          }
        }
      return smallestInteger;
    }
  }
  


// nth Best Solution
XXX


