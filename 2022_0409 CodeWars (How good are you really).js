
//RESULT - NOT CORRECT - NOT COMPLETED
//How good are you really?
// 8KYU




// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. 
// You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Now calculate the average and compare your score!

let sumOfGrades = 0;
let averageScore = 0;

function calcAverage (scores, myscore){
  let listOfGrades = scores.slice();
  console.log (`Test 0 inside loop: ${listOfGrades}\n`);

  for (let i=0; i < listOfGrades.length; i++){
    console.log(`Test 1a inside loop CURRENT GRADE: ${listOfGrades[i]}`)

    sumOfGrades += listOfGrades[i];
        console.log(`Test 1b inside loop SUM OF GRADES: ${sumOfGrades}`)
    
    let totalTestTakers = listOfGrades.length;
        console.log(`Test 2 inside loop NUMBER OF TAKERS: ${totalTestTakers}`)
    
    averageScore = (sumOfGrades + myscore)/ (totalTestTakers + 1);
        console.log(`Test 3 inside loop AVERAGE: ${averageScore}`)
    
    console.log (`Number of times through loop ${i} \n`)

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!
  }
    // Return True if you're better, else False!
  return averageScore;
}

let myGrade = 80;

// You receive an array with your peers' test scores. 
let peerScores = [50,80,75,100,90];
let totalAverage = calcAverage(peerScores,myGrade);
console.log(`This is the final Average ${totalAverage}`);





// CodeWars Solutions

/*
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/




// CodeWars Solutions

/*
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

*/