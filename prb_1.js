function calculateMoney(number) {
  var eat = 8 * 50;
  return number * 120 - (500 + eat);
}
// let num = prompt("Enter a number: ");
let num = 50;
if (num < 0) {
  console.log("Invalid Number");
} else {
  let calc = calculateMoney(num);
  console.log(calc);
}
