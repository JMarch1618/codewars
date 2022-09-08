

/* 
NAME OF PROBLEM: Fake Binary
LINK TO PROBLEM: https://www.codewars.com/kata/57eae65a4321032ce000002d
LINK TO PROBLEM: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
KYU LEVEL: 8KYU

SOLVED: NO
*/


INSTRUCTIONS: 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


NOTES
XXXXXX


// MY SOLUTION: IN PREP METHOD

// P (Parameters)
//
// R (Return)
//
// E (Example & EdgeCase)
//
// P (Pseudocode)
//
//
let fakeBin = (x) => {return (x.split('').map(n => n < 5 ? 0 : 1).join(''))}


}




SAMPLE TEST
EXAMPLE:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  })
});









//  SOLUTIONS ###############################
// Best Solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// 2nd Best Solution
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }

// 3rd Best Solution
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }

// 4th Best Solution
function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
  }


// nth Best Solution
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
  }

// nth Best Solution
fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');


// nth Best Solution
function fakeBin(x){
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
  }

// nth Best Solution
const fakeBin=x=>[...x].reduce((a,b)=>a+(~~(+b/5)),"")


// nth Best Solution
function fakeBin(x){
    return x.split('').map(a => a < '5' ? "0" : "1").join("");
  }

// nth Best Solution
function fakeBin(x) {
    return x.replace(/\d/g, n => "0000011111"[n])
  }

// nth Best Solution
fakeBin=x=>[...x].map(a=>+a<5?0:1).join('')


// nth Best Solution
function fakeBin(x){
    result = '';
    for (let i of x){
      (i < 5)? result += '0' : result +='1';
    }
    return result;
  }

// nth Best Solution
function fakeBin(x){
    return x.split('').map( x => x < 5 ? 0 : 1).join('');
  }

// nth Best Solution
function fakeBin(x){
    var s='';
    for (var i=0; i<x.length; ++i)
      if (x[i]<'5')
        s+="0";
      else
        s+="1";
    return s;
  }

// nth Best Solution
function fakeBin(x) {
    return x.split('').map(y => y < 5 ? 0 : 1).join('');
}

// nth Best Solution
function fakeBin(x) {
    return x.replace(/./g, d => +(d >= 5));
  }

// nth Best Solution
const fakeBin = x =>
  [...x].reduce((pre, val) => pre + +(val >= 5), ``);

// nth Best Solution
const fakeBin = str => str.replace(/\d/g, num => num < 5 ? 0 : 1);


// nth Best Solution
function fakeBin(x){
    return x.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1');
    }

// nth Best Solution
function fakeBin(x){
    let res = '';
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5){
        res += 0;
      } else {
        res += 1;
      }
    }
    return res
  }

// nth Best Solution
let fakeBin = x => x.split("").map( a => ( +a < 5 ) ? '0' : '1' ).join("");


// nth Best Solution
function fakeBin(x){
    let res = ''
    let input = String(x).split("")
    input.forEach(e => {
        e < 5 ? res += 0 : res += 1
    })
    return res
}

// nth Best Solution
function fakeBin(x){
    let res = x.split('')
    for (let i = 0; i < res.length; i++) {
      if (+res[i] <= 4) {
        res[i] = 0
      } else res[i] = 1
    }
    return res.join('')
}

// nth Best Solution
function fakeBin(x){
    let numeroString = x.toString();
    let result = [];
    for (let i = 0; i < numeroString.length; i++) {
      if (numeroString[i] < 5) {
        result.push('0');
      } else if (numeroString[i] >= 5) {
        result.push('1');
      }
    }
    return result.join('');
  }


// nth Best Solution
fakeBin = x => x.split('').map(i=> i<5 ? i=0: i=1).join('')

// nth Best Solution
function fakeBin(x) {
    let res = '';
    
    for (let i = 0; i < x.length; i += 1) {
      (x[i] < 5) ? res += 0 : res += 1;
    }
    return res;
  }

// nth Best Solution

// nth Best Solution