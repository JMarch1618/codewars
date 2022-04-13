
// Ones and Zeros
// 7KYU
//NOT CORRECT RESULT - UNLOCKED SOLUTION
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c


function convertToInteger (arr) {
    console.log(`original array: ${arr}`);
    let reversedArray = arr;
    reversedArray.reverse();
    console.log(`reversed array: ${reversedArray}`);
    let integerConverted = 0;
    
    for (let i = 0; i <= reversedArray.length; i++){
      if (reversedArray[i] !== 0){
      console.log(`CURRENT INTEGER: ${reversedArray[i]}`);
      console.log(`CURRENT POWER: ${i}`);
  
      integerConverted += Math.pow(reversedArray[i],i)
      console.log(`Being added: ${integerConverted}`);
      console.log(`CURRENT POWER: ${i}`);
  
      }
    }
    return integerConverted;
  }
  
  // Given an array of ones and zeroes, convert the equivalent binary value to an integer.
  
  // Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
  
  // Examples:
  
  // Testing: [0, 0, 0, 1] ==> 1
  // Testing: [0, 0, 1, 0] ==> 2
  // Testing: [0, 1, 0, 1] ==> 5
  // Testing: [1, 0, 0, 1] ==> 9
  // Testing: [0, 0, 1, 0] ==> 2
  // Testing: [0, 1, 1, 0] ==> 6
  // Testing: [1, 1, 1, 1] ==> 15
  // Testing: [1, 0, 1, 1] ==> 11
  
  // However, the arrays can have varying lengths, not just limited to 4.
  
  let testingNumbers = [1, 0, 1, 1]; 
  
  console.log(`Final: ${convertToInteger(testingNumbers)}`);