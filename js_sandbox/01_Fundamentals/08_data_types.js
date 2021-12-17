console

console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error("Error");
console.clear();
console.warn("Warning");

console.time("Hello");
console.warn("Warning");
console.timeEnd("Hello");

// NAMING: letters, numbers, _, $ also Can't start with number

//let
let userName;
userName = "John";
console.log(userName);
userName = "Piter";
console.log(userName);

const
error
const userName; //Missing initializer in const declaration
const userName = "John";
console.log(userName);

//error
userName = "Piter";
console.log(userName); //Assignment to constant variable

//const as Object
const person = {
  name: "John",
};
console.log(person); //{name: 'John'}

person.name = "Sara";
console.log(person); //{name: 'Sara'}

//const as Array
const numbers = [1, 2, 3];
console.log(numbers); //(3) [1, 2, 3]

numbers.push(4);
console.log(numbers); //(4) [1, 2, 3, 4]

//error
numbers = [1, 2, 3, 4, 5];
console.log(numbers); //Assignment to constant variable.

// PRIMITIVE TYPES

// String
const name = "John De";
console.log(typeof name); //string

const age = 45;
console.log(typeof age); //number

const hasKids = true;
console.log(typeof hasKids); //boolean

const car = null;
console.log(typeof null); //object

let test;
console.log(typeof test); //undefined

const sym = Symbol();
console.log(typeof sym); //symbol

//REFERENCE TYPYS Objects
//Arrays

const hobbies = ["music", "movies"];
console.log(typeof hobbies); //object

const adrees = {
  city: "Boston",
  state: "MA",
};

console.log(typeof adrees); //object

const today = new Date(); //
console.log(today); //Tue Nov 30 2021 13:04:52 GMT+0200 (Eastern European Standard Time)
console.log(typeof today); //object

//Number to String
let val;

val = String(555);
val = String(4 + 4); //8

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1, 2, 3]);

//toString()
val = (5).toString();

// String to Number
val = Number("5");
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number("hello"); //NaN
val = Number([1, 2, 3]); //NaN

//parseInt

val = parseInt("100.30"); //100
val = parseFloat("100.30"); //100.3

console.log(val);
console.log(typeof val);
//console.log(val.length); // only for string
console.log(val.toFixed()); // only with numbers

const val1 = "5";
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);  //56 string
