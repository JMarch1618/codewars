
/* 
NAME OF PROBLEM: XXXXX
LINK TO PROBLEM: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
LINK TO PROBLEM: XXXXX https:XXXXX
KYU LEVEL: 8KYU

SOLVED: CORRECT RESULT - xxxxxxxxx
*/


/*
INSTRUCTIONS: 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


*/


/*
EXAMPLE:
XXXXXX

*/



/*
NOTES
XXXXXX

*/



/* 
SAMPLE TEST
XXXXXX

*/




function squareSum(numbers){
    let square = 0;
    let sum = 0;
    
        for (let i = 0; i < numbers.length; i++){
            square += numbers[i] **2;
            
            console.log(square);
            console.log(`Number of times through loop: ${i}`);
            
        }
      return square;
    }
        
    let valueInput = [1, 2, 2];
    console.log (`final answer: ${squareSum(valueInput)}`);



    

// Option 1 May's Approach
square.reduce((previousValue, currentValue) => previousValue + currentValue,
initialValue
);


// Option 2 Raymon Ipie_A

function squareSum (numbers){
    let sum = 0 numbers.forEach (numbers => { sum = sum + (number * number) }) return sum
}

