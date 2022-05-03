/* 
NAME OF PROBLEM: To square(root) or not to square(root)
LINK TO PROBLEM: https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
LINK TO PROBLEM: https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
KYU LEVEL: 8KYU

SOLVED: CORRECT RESULT - SOLVED!!!
*/


/*
INSTRUCTIONS: 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

*/


/*
EXAMPLE:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

*/



/*
NOTES
The input array will always contain only positive numbers, and will never be empty or null.

*/



/* 
SAMPLE TEST
describe("Solution", function(){
  it("basic tests", function(){
    var input = [ 4, 3, 9, 7, 2, 1 ];
    var expected = [ 2, 9, 3, 49, 4, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 100, 101, 5, 5, 1, 1 ];
    expected = [ 10, 10201, 25, 25, 1, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
  });
});

*/





function squareOrSquareRoot(array) {
  let newArray = array.slice();
  let testForPerfectSquare = 0;
  let updatedArray = [];
  console.log (`Test: ${newArray}`);
  
    for (let i = 0; i < newArray.length; i++){
      // if (Math.sqrt(newArray[i]) % newArray[i] === 0){
      // if NOT a perfect square then square it
        if (Number.isInteger(Math.sqrt(newArray[i]))){
        console.log(`test if in loop`);

        testForPerfectSquare = Math.sqrt(array[i]) % array[i];

          updatedArray.push(Math.sqrt(array[i]));
          console.log(`Count number of times in loop: ${i}`);
          console.log(`Current value of ${updatedArray}`)
      } 
          // if it is a perfect square then square it
        else {updatedArray.push(Math.pow(newArray[i],2));
             
    }
  }
  return updatedArray;  
}



let integerSelected = [4,3,9,7,2,1];

let resultFromFunction = squareOrSquareRoot(integerSelected);
console.log(`FinalResult should be [2,9,3,49,4,1]: ${resultFromFunction}`);



