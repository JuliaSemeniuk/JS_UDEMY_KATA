//Given an array of integers.
//Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function getMax(arr) {
  let newArr = [];
  let i = 0;

  while (i < arr.length - 1) {
    newArr.push(arr[i] * arr[i + 1]);
    console.log(newArr);
    i++;
  }
  return Math.max(...newArr);
}
console.log(getMax([5, 8]));
