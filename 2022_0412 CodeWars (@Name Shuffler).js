
//CORRECT RESULT - COMPLETED
// Name Shuffler
// 8KYU
//https://www.codewars.com/kata/559ac78160f0be07c200005a
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript



// Write a function that returns a string in which firstname is swapped with last name.
  
function nameShuffler(str){
    //Shuffle It
    let newWord = str.split(' ').reverse();
      console.log (`1 Outside loop: ${newWord}`);
    return (`${newWord[0]} ${newWord[1]}`);
  
  }
  
  console.log(nameShuffler('john McClane')); // => "McClane john"
  
  
/* CODEWARS TEST
********************************************
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(nameShuffler('john McClane'),'McClane john');
    });
  });
  
  */





/* CODEWARS BEST ANSWER
********************************************
  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }
********************************************
*/


/* CODEWARS ANSWER
********************************************
  const nameShuffler = str => str.split(' ').reverse().join(' ');


  function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  }
********************************************
*/