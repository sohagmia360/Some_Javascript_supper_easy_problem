// In this challenge, a farmer is asking you to tell him how many 
// legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for 
// each species. You have to implement a function that returns the total number of legs of all the animals.


function legsCount(chicken , cow , hourse){
 
    let chickenLegs = chicken * 2;
    let cowLages = cow * 4;
    let houresLegs = hourse * 4
    return chickenLegs + cowLages + houresLegs
}

let Result = legsCount(5, 2, 8)
console.log(Result)