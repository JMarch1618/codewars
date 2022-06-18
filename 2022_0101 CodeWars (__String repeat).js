
/* 
NAME OF PROBLEM: String repeat
LINK TO PROBLEM: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
LINK TO PROBLEM: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
KYU LEVEL: 8KYU

SOLVED: YES
*/


/*
INSTRUCTIONS: 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/


/*
EXAMPLE:
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
function repeatStr (n, s) {
	let newWord = '';
	for (let i = 0; i<n; i++){
		newWord += s;
		console.log(newWord);
		}	
    return newWord;
  }

let countNum = 6;
let stringSelected = "I"; 

console.log(`Final Answer: ${repeatStr (countNum,stringSelected)}`)








/* 
SAMPLE TEST
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
*/







// Best Solution
function repeatStr (n, s) {
  return s.repeat(n);
}

// 2nd Best Solution
repeatStr = (n, s) => s.repeat(n)

// 3rd Best Solution
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }

// 4th Best Solution
const repeatStr = (n,s) => s.repeat(n) ;


// nth Best Solution
function repeatStr(n, str)
{
  return str.repeat(n);
}


// nth Best Solution
function repeatStr (n, s) {
    String.prototype.repeat = function(n) {
       return (new Array(n + 1)).join(this);
    };
    return s.repeat(n);
  }


// nth Best Solution
function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
  }


// nth Best Solution
function repeatStr (n, s) {
    var myString = '';
    while(n > 0) {
      myString += s;
      n--;
    }
    return myString;
  }