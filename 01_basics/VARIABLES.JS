const accID = 1234;
let accEMAIL = "dhruvpatel@google.com"
var accPassword = "166166"
accCity = "Surat"
let accState; // undefined 

// accID = 23  // not allowed to change constant type varibles
console.log("Before Changes");
console.table([accID, accEMAIL, accPassword, accCity, accState]);


accEMAIL = "patel@gmail.com"
accPassword = "166123"
accCity = "Vadodara"

console.log("After Changes");
console.table([accID, accEMAIL, accPassword, accCity, accState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(typeof(accCity));