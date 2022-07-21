
DELETE THIS 
DELETE THIS 
DELETE THIS 
ALT + Z WILL WRAP THE TEXT

/* 
NAME OF PROBLEM: Convert a String to a Number!
LINK TO PROBLEM: https://www.codewars.com/kata/544675c6f971f7399a000e79
LINK TO PROBLEM: https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
KYU LEVEL: 8KYU

SOLVED: (YES / NO)
*/


/*
INSTRUCTIONS: 
Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/


/*
EXAMPLE:
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/


/*
NOTES
XXXXXX
*/


// MY SOLUTION
const stringToNumber = function(str){
    // put your code here
    return Number(str);
  }


let str1 = "1234" // --> 1234
let str2 = "605"  //--> 605
let str3 = "1405" //--> 1405
let str4 = "-7" //--> -7

console.log (stringToNumber(str1))
console.log (stringToNumber(str2))
console.log (stringToNumber(str3))
console.log (stringToNumber(str4))



/* 
SAMPLE TEST
describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});
*/







// Best Solution
var stringToNumber = function(str){
    return parseInt(str);
  }

// 2nd Best Solution
var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

// 3rd Best Solution
var stringToNumber = function(str){
    return +str;
  }

// 4th Best Solution
const stringToNumber = str => Number(str)

// nth Best Solution
var stringToNumber = Number;

// nth Best Solution
const ways = [
    s => +s,
    s => s++, // why does it work?
    s => s--,
    s => ++s - 1,
    s => --s + 1,
  
    s => s * 1,
    s => s - 0,
    s => s / 1,
    s => s - '',
    s => s ** 1,
    s => s % Infinity,
  
    s => ~~s,
    s => s & -1,
    s => s | 0,
    s => s ^ 0,
    s => s << 0,
    s => s >> 0,
    s => s | s,
    s => s & s,
  
    s => ~s ^ -1,
    s => ~s ^ ~0, // ~0 = -1
    s => ~(s ^ -1),
    s => s * !!s,
  
    s => -1 * (~s + 1) || 0, // -1 * 0 = -0
    s => -(~(s >>> 0) + 1) || 0,
  
    Number,
    parseInt,
    parseFloat,
    
    s => Number(s),
    s => parseInt(s),
    s => parseFloat(s),
  
    s => Math.floor(s),
    s => Math.round(s),
    s => Math.ceil(s),
    s => Math.min(s),
    s => Math.max(s),
    
    Math.floor,
    Math.round,
    Math.ceil,
    Math.min,
    Math.max,
  
    s => eval(`+ ${s}`), // a space is needed
    s => eval('+ ' + s), // for cases like eval(+ +12345)
  
    s => [...s]
      .slice(+(s[0] == '-' || s[0] == '+')) // remove the sign, if present
      .reduce((acc,x) => +x + acc * 10)
      * (s[0] == '-' ? -1 : 1),
    s => [...s]
      .slice(+(s[0] == '+')) //remove +, if present
      .reverse()
      .reduce((acc,x,i) => x == '-' ? -acc : acc += x * 10 ** i, 0),
    s => ways[~~(Math.random() * ways.length)](s)
  ];
  
  // And now we will use all the methods in a row
  
  const checkThemAll /* © Mylene Farmer */ = (acc, x) => acc === x ? x : NaN;
  const stringToNumber = str => ways.map(fn => fn(str)).reduce(checkThemAll);

// nth Best Solution
var stringToNumber = function(str){
    return parseInt(str, 10);
  }

// nth Best Solution
const stringToNumber = s => parseInt(s);

// nth Best Solution
const stringToNumber = (str) => +str

// nth Best Solution
stringToNumber=s=>+s
