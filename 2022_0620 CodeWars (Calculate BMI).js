

/* 
NAME OF PROBLEM: Calculate BMI
LINK TO PROBLEM: https://www.codewars.com/kata/57a429e253ba3381850000fb
LINK TO PROBLEM: https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

*/


/*
EXAMPLE:
XXXXXX
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION

function bmi(weight, height) {
	
	console.log(`Weight: ${weight}`);
	console.log(`Height: ${height}`);
	
let heightSquared = Math.pow(height,2);
	console.log(`Height Squared: ${heightSquared}`);
	
let resultBMI = (weight / (Math.pow(height,2)));
	console.log(`ResultBMICalc: ${resultBMI}`);

	
switch (true) {
  case (resultBMI <= 18.5):
		return "Underweight";
    //Statements executed when the
    //result of expression matches value1
   break;
		
	case (resultBMI <= 25.0):
		return "Normal";
    //Statements executed when the
    //result of expression matches value2
    break;
		
  case (resultBMI <= 30.0):
		return "Overweight";
    //Statements executed when the
    //result of expression matches valueN
    break;
		
  default:
		// (resultBMI > 30):
			return "Obese";
    //Statements executed when none of
    //the values match the value of the expression
    break;
}
}

let w = 80;
let h = 1.80;

console.log(`Final Result: ${bmi(w,h)}`);







/* 
SAMPLE TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(bmi(80, 1.80), "Normal");
  });
});

*/











// HAC'ker Team Meet Solution
function bmi(weight, height) {
    let bmi = weight / height**2
    switch (true){
        case bmi < 18.5: return "Underweight"
        break;
        case  bmi < 25.0: return "Normal"
        break;
        case   bmi< 30.0: return"Overweight"
        break;
       default: return "Obese"
    }
    
  
// Best Practices
function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  
}

// CLEVER
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";


// 3rd Best Solution
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
    }

// 4th Best Solution
function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
      case formula <=18.5:
      return 'Underweight';
      case formula <=25.0:
      return 'Normal';
      case formula <=30:
      return 'Overweight';
      default:
      return 'Obese';
      
    }
  }


// nth Best Solution
function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
      case bmi <= 18.5:
        return "Underweight";
      case bmi <= 25.0:
        return "Normal";
      case bmi <= 30.0:
        return "Overweight";
      case bmi > 30:
        return "Obese";
     }
   }

// nth Best Solution
function bmi(weight, height) {
    const $ = weight / height**2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
  }

// nth Best Solution
function bmi(weight, height) {
    var val = weight / (height * height);
    if(val <= 18.5) {
      return 'Underweight';
    }
    if(val <= 25.0) {
      return 'Normal';
    }
    if(val <= 30.0) {
      return 'Overweight';
    }
    return 'Obese';
  }

// nth Best Solution
function bmi(w, h) {
    let b = w/Math.pow(h, 2)
    return  b > 30 ? "Obese" :
            b > 25 ? "Overweight" :
            b > 18.5 ? "Normal" : "Underweight";
           
  }

// nth Best Solution
function bmi(weight, height) {
    const n = weight / height / height
    return n <= 18.5 ? "Underweight" : n <= 25 ? "Normal" : n <= 30 ? "Overweight" : "Obese"
  }

// nth Best Solution
XXX

