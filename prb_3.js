function deleteInvalids(arr) {
  var nums = [];
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && arr[i] != NaN) {
      nums.push(arr[i]);
    }
  }
  return nums;
}
// let take_array = prompt("enter the array : ");
let take_array = ["1", { num: 2 }, NaN];

let res = deleteInvalids(take_array);
console.log("the array is ", res);
