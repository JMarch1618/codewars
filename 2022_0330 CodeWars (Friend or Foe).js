


// Friend or Foe?
// 7KYU
// https://www.codewars.com/kata/55b42574ff091733d900002f
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// DID NOT SOLVE //


// Description:

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]




/* BEST SOLUTION */

function friend(friends){
    return friends.filter(n => n.length === 4)
  }



/* SIMILAR TO MY PATH SOLUTION */
function friend(friends){
    //your code here
    var newArray = [];
    for (var i = 0; i < friends.length; i++) {
    
      if (friends[i].length === 4) {
      
      newArray.push(friends[i]);
      }
    
    
    }
    return newArray
  }


