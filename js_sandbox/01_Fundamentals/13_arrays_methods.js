// Create

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

//length

val = numbers.length;

//Check if is Array
val = Array.isArray(numbers); // true
val = Array.isArray("pie"); //false

//Get a single value from Array
val = numbers[3]; //23
val = numbers[0]; //43

// Insert into array
numbers[2] = 100; // [43, 56, 100, 23, 44, 46, 5]

//Find index of value
val = numbers.indexOf(36); //5

// //MUTATING ARRAYS

// //Add on to end
// numbers.push(250); //[43, 56, 100, 23, 44, 36, 5, 250]
// //Add on the front
// numbers.unshift(120); //[120, 43, 56, 100, 23, 44, 36, 5, 250]
// //Take off from end
// numbers.pop(); //[120, 43, 56, 100, 23, 44, 36, 5]
// //Take off from front
// numbers.shift(); //[43, 56, 100, 23, 44, 36, 5]
// //Splice values
// numbers.splice(1, 3); //[43, 44, 36, 5]
// //Reverse
// numbers.reverse(); //[5, 36, 44, 43]
// //Concatenate
// val = numbers.concat(numbers2); //[5, 36, 44, 43, 22, 45, 33, 76, 54]

// //Sorting arrayys
// val = fruit.sort(); //['Apple', 'Banana', 'Orange', 'Pear']
// val = numbers.sort(); //[100, 23, 36, 43, 44, 5, 56]

// //Use the 'compare function'
// val = numbers.sort(function (x, y) {
//   return x - y;
// }); //[5, 23, 36, 43, 44, 56, 100]

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// }); //100, 56, 44, 43, 36, 23, 5]

//Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50); //43 - the first num in Array under 50

function over50(num) {
  return num > 50;
}

val = numbers.find(over50); //56 - the first num in Array over 50

console.log(numbers);
console.log(val);
