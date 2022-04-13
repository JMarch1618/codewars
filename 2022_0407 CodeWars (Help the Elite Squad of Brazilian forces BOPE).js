

//NOT CORRECT RESULT - UNLOCKED SOLUTION
// Help the Elite Squad of Brazilian forces BOPE
// 8KYU
// https://www.codewars.com/kata/5ab52526379d20736b00000e




// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. // Considering that every street the officer shoots 3 times. 
// Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.



//write function that determine number of magazines in bag.
function magNumber(info){
  // Argument: weapon
  // Argument: Number of streets that they have to cross. 

let gearSelected = info;
let amountOfMagazines = 0;

// PT92 - 17 bullets    
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Every street - officer shoots 3 times. 

// Example:
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

if (gearSelected[0] === 'PT92'){
amountOfMagazines = parseInt(Math.ceil(gearSelected[1]/3));
console.log(`test PT92 ${gearSelected[0]}`)
  console.log(`test PT92 ${(amountOfMagazines)}`)
  //console.log(`test PT92 ${(parseInt(amountOfMagazines))}`)
  return amountOfMagazines;

} else if (gearSelected[0] === 'M4A1'){
amountOfMagazines = parseInt(Math.ceil(gearSelected[1]/3));
  console.log(`test M4A1 ${gearSelected[0]}`)
  return amountOfMagazines;


} else if (gearSelected[0] === 'M16A2'){
amountOfMagazines = parseInt(Math.ceil(gearSelected[1]/3));
  console.log(`test M16A2 ${gearSelected[0]}`)
  return amountOfMagazines;


} else { /* (gearSelected[0] === PSG1)  { */
amountOfMagazines = parseInt(Math.ceil(gearSelected[1]/3));
  console.log(`test PSG1 ${gearSelected[0]}`)
  return amountOfMagazines;
}
// The return Will always be an integer so as the params.
}

  
let optionPT92 = ['PT92', 3];  // PT92 - 17 bullets  = 6 total  
let optionM4A1 = ['M4A1',30];  // M4A1 - 30 bullets  = 10 total
let optionM16A2 = ['M16A2', 30];  // M16A2 - 30 bullets = 10 total
let optionPSG1 = ['PSG1', 5];  // PSG1 - 5 bullets = 2 total


let numOfRounds = magNumber(optionPT92);
console.log(numOfRounds);





// BEST PRACTICES ANSWER
// ******************************************************
function magNumber(info){
  [weapon, streets] = info
  const weapons={
    "PT92": 17,
    "M4A1" : 30,
    "M16A2" : 30,
    "PSG1":5,
  }
  if(3*streets<=weapons[weapon]) return 1
  else{
      let n=1;
      while(weapons[weapon]*n<streets*3) n++
      return n
  }
}


// USING SWITCH ANSWER
// ******************************************************
function magNumber(info){
let bullets = 0;

switch (info[0]) {
case 'PT92':
bullets = 17;
break;
case 'M4A1':
bullets = 30;
break;
case 'M16A2':
bullets = 30;
break;
case 'PSG1':
bullets = 5
break;

}

return Math.ceil((info[1]*3)/bullets)
}
