function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  name = name.toUpperCase();
  if (
    name.endsWith("A") ||
    name.endsWith("Y") ||
    name.endsWith("I") ||
    name.endsWith("E") ||
    name.endsWith("O") ||
    name.endsWith("U") ||
    name.endsWith("W")
  )
    return "Good name";
  else return "Bad name";
}
let take_name = null;
// prompt("enter the name :");
// "Tonoy";
// let testNames = ["Salman", "Jafor", "Tonoy", "Utsho", "Roide", 123, null];
let res = checkName(take_name);
console.log("the name is ", res);

/*
prblm gula hoilo prompt kaj kre na ken?


*/
