
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: Counting sheep...
LINK TO PROBLEM: https://www.codewars.com/kata/54edbc7200b811e956000556
LINK TO PROBLEM: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/


/*
EXAMPLE:
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let newSheepArray = arrayOfSheep;
			console.log(newSheepArray);
    let countOfSheet = 0;
    for (let i = 0; i <= newSheepArray.length; i++){
			if (newSheepArray[i] === true){
				countOfSheet+=1;
			}
		}
	 return countOfSheet;
}
			


let arraySheet = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

console.log(countSheeps(arraySheet));


/* 
SAMPLE TEST
XXXXXX
*/




 
// Best Solution
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

// 2nd Best Solution
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

// 3rd Best Solution
function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }

// 4th Best Solution
function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }


// nth Best Solution
let countSheeps = x => x.filter( s => s ).length;

// nth Best Solution
function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }

// nth Best Solution
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;

// nth Best Solution
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function(result, current) {
      if (current) result++;
      return result;
    }, 0);
  }

// nth Best Solution
function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        num += 1;
      }
    }
    return num;
  }

// nth Best Solution
function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }

// nth Best Solution
function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count)
    return count
  }

