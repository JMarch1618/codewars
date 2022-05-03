/* 
NAME OF PROBLEM: Volume of a Cuboid
LINK TO PROBLEM: https://www.codewars.com/kata/58261acb22be6e2ed800003a
LINK TO PROBLEM: https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
KYU LEVEL: 8KYU

SOLVED (YES/NO): ****CORRECT RESULT - SOLVED!!!****
*/


/* 
############################################################
INSTRUCTIONS: 
Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    let resultantVolume = length*width*height;
    console.log(resultantVolume);
    return (resultantVolume);
  }
}


let inputLength = 5;
let inputWidth = 7;
let inputHeight = 2;
 
let volumeResult = new getVolumeOfCuboid(inputLength, inputWidth, inputHeight);
############################################################
*/


/*
EXAMPLE:
NONE
*/


/*
NOTES
NONE.
*/



/* 
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(Kata.getVolumeOfCuboid(1,2,2), 4);
Test.assertEquals(Kata.getVolumeOfCuboid(6.3,2,5), 63);
  });
});

*/

// SOLUTION


function getVolumeOfCuboid(length, width, height) {    // your code here
  let resultantVolume = length*width*height;
  console.log(resultantVolume);
  return (resultantVolume);
}



let inputLength = 5;
let inputWidth = 7;
let inputHeight = 2;

let volumeResult = getVolumeOfCuboid(inputLength, inputWidth, inputHeight);




